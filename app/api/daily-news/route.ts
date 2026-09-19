import { NextRequest, NextResponse } from 'next/server'
import { getGeminiProvider } from '@/lib/ai/gemini'
import { getResearchService } from '@/lib/research/service'
import { extractJSON, isValidDate, formatDate } from '@/lib/utils'
import { dailyNewsReportSchema } from '@/lib/validation/schemas'
import { DailyNewsReport } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date } = body

    if (!date || !isValidDate(date)) {
      return NextResponse.json(
        { error: 'Please provide a valid date (not in the future).', code: 'INVALID_DATE' },
        { status: 400 }
      )
    }

    // Check if Gemini API key is configured
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        {
          error: 'AI service not configured.',
          code: 'AI_NOT_CONFIGURED',
          details: 'Please set GEMINI_API_KEY in your .env.local file. See .env.example for instructions.',
        },
        { status: 503 }
      )
    }

    const formattedDate = formatDate(date)
    const researchService = getResearchService()
    const ai = getGeminiProvider()

    // Research phase
    const [mainSearch, businessSearch] = await Promise.all([
      researchService.searchNews(`important news ${formattedDate} India economy business`, 8),
      researchService.searchNews(`global developments policy ${formattedDate}`, 5),
    ])

    const researchContext = `
DATE: ${formattedDate}

${researchService.formatForAI(mainSearch)}

ADDITIONAL CONTEXT:
${researchService.formatForAI(businessSearch)}
`

    // AI analysis
    const rawResponse = await ai.analyseNews(formattedDate, researchContext)
    const jsonStr = extractJSON(rawResponse)

    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch {
      console.error('Failed to parse AI JSON response')
      return NextResponse.json(
        { error: 'Failed to process AI response. Please try again.', code: 'PARSE_ERROR' },
        { status: 500 }
      )
    }

    // Validate with Zod (partial validation — don't reject over minor schema issues)
    const validation = dailyNewsReportSchema.safeParse(parsed)
    if (!validation.success) {
      console.warn('Schema validation warnings:', validation.error.issues.slice(0, 3))
      // Use parsed data even with minor schema issues
    }

    const report: DailyNewsReport = {
      date: date,
      newsItems: (parsed.newsItems || []).map(
        (item: Record<string, unknown>, idx: number) => ({
          ...item,
          id: crypto.randomUUID(),
          rank: idx + 1,
        })
      ),
      summary: parsed.summary || {
        topThemes: [],
        topFacts: [],
        topGDTopics: [],
        openingLines: [],
        counterargumentFrameworks: [],
      },
      generatedAt: new Date().toISOString(),
      isDemo: false,
      researchMode: mainSearch.mode,
    }

    return NextResponse.json(report)
  } catch (err) {
    console.error('Daily news API error:', err)
    const message = err instanceof Error ? err.message : 'Unexpected error'
    if (message.includes('API_KEY') || message.includes('GEMINI_API_KEY')) {
      return NextResponse.json(
        { error: 'AI service not configured. Please set GEMINI_API_KEY.', code: 'AI_NOT_CONFIGURED' },
        { status: 503 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to generate daily news brief. Please try again.', code: 'SERVER_ERROR', details: message },
      { status: 500 }
    )
  }
}
