import { NextRequest, NextResponse } from 'next/server'
import { getGeminiProvider } from '@/lib/ai/gemini'
import { getResearchService } from '@/lib/research/service'
import { extractJSON, isValidTopic } from '@/lib/utils'
import { topicAnalysisSchema } from '@/lib/validation/schemas'
import { TopicAnalysis } from '@/types'
import { generateMockTopicAnalysis } from '@/lib/ai/mock'

export async function POST(request: NextRequest) {
  let topic = ''
  try {
    const body = await request.json()
    topic = body?.topic || ''

    if (!topic || !isValidTopic(topic)) {
      return NextResponse.json(
        { error: 'Please enter a valid topic (2–200 characters).', code: 'INVALID_TOPIC' },
        { status: 400 }
      )
    }

    if (!process.env.GEMINI_API_KEY) {
      const mockAnalysis = generateMockTopicAnalysis(topic)
      return NextResponse.json(mockAnalysis)
    }

    const ai = getGeminiProvider()
    const researchService = getResearchService()

    // Step 1: Classify the topic
    const classifyRaw = await ai.classifyTopic(topic)
    let classification: 'Concrete' | 'Abstract' | 'Hybrid' = 'Hybrid'
    try {
      const classifyJSON = extractJSON(classifyRaw)
      const classifyData = JSON.parse(classifyJSON)
      if (['Concrete', 'Abstract', 'Hybrid'].includes(classifyData.classification)) {
        classification = classifyData.classification
      }
    } catch {
      console.warn('Topic classification parse failed, defaulting to Hybrid')
    }

    // Step 2: Research (for concrete/hybrid topics)
    let researchContext = 'No live search available. Use general knowledge.'
    if (classification !== 'Abstract') {
      const [mainSearch, statsSearch] = await Promise.all([
        researchService.searchNews(`${topic} India 2024 2025 latest developments`, 6),
        researchService.searchReports(topic),
      ])
      researchContext = `
Topic Classification: ${classification}

Main Research:
${researchService.formatForAI(mainSearch)}

Statistics & Reports:
${researchService.formatForAI(statsSearch)}
`
    } else {
      researchContext = `Topic Classification: Abstract. Use conceptual/philosophical analysis with multiple interpretations. Research multiple lenses through which this abstract topic can be discussed in an MBA GD setting.`
    }

    // Step 3: Generate full GD content
    const rawResponse = await ai.generateGDContent(topic, researchContext)
    const jsonStr = extractJSON(rawResponse)

    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch {
      return NextResponse.json(
        { error: 'Failed to process AI response. Please try again.', code: 'PARSE_ERROR' },
        { status: 500 }
      )
    }

    // Validate
    const validation = topicAnalysisSchema.safeParse(parsed)
    if (!validation.success) {
      console.warn('Topic schema validation warnings:', validation.error.issues.slice(0, 3))
    }

    const analysis: TopicAnalysis = {
      topic: parsed.topic || topic,
      classification: parsed.classification || classification,
      classificationReason: parsed.classificationReason || '',
      oneLineExplanation: parsed.oneLineExplanation || '',
      realWorldPointers: parsed.realWorldPointers || [],
      genericPointers: parsed.genericPointers || [],
      abstractInterpretations: parsed.abstractInterpretations,
      perspectives: parsed.perspectives || [],
      facts: parsed.facts || [],
      examples: parsed.examples || [],
      balancedView: parsed.balancedView || {
        myView: '',
        supportingArguments: [],
        counterargument: '',
        balancedConclusion: '',
      },
      impactFactors: parsed.impactFactors || {
        strongestFact: '',
        strongestExample: '',
        strongestArgument: '',
        strongestCounterargument: '',
        smartestConnection: '',
        unconventionalPerspective: '',
        commonMistakeToAvoid: '',
      },
      openingStatements: parsed.openingStatements || [],
      midGDInterventions: parsed.midGDInterventions || [],
      disagreementFrameworks: parsed.disagreementFrameworks || [],
      thirtySecondAnswer: parsed.thirtySecondAnswer || '',
      sixtySecondAnswer: parsed.sixtySecondAnswer || '',
      revisionCard: parsed.revisionCard || {
        coreIdea: '',
        keyFact: '',
        keyNumber: '',
        bestExample: '',
        balancedConclusion: '',
      },
      sources: parsed.sources || [],
      generatedAt: new Date().toISOString(),
      isDemo: false,
      researchMode: 'general',
    }

    return NextResponse.json(analysis)
  } catch (err) {
    console.error('Topic analysis API error:', err)
    const message = err instanceof Error ? err.message : 'Unexpected error'
    try {
      const fallback = generateMockTopicAnalysis(topic || 'India Economic Outlook 2026')
      return NextResponse.json(fallback)
    } catch {
      if (message.includes('API_KEY') || message.includes('GEMINI_API_KEY')) {
        return NextResponse.json(
          { error: 'AI service not configured. Please set GEMINI_API_KEY.', code: 'AI_NOT_CONFIGURED' },
          { status: 503 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to generate topic analysis. Please try again.', code: 'SERVER_ERROR', details: message },
        { status: 500 }
      )
    }
  }
}
