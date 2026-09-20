import { NextRequest, NextResponse } from 'next/server'
import { getGeminiProvider } from '@/lib/ai/gemini'
import { getResearchService } from '@/lib/research/service'
import { extractJSON, isValidTopic } from '@/lib/utils'
import { domainAnalysisSchema } from '@/lib/validation/schemas'
import { DomainAnalysis } from '@/types'
import { generateMockDomainAnalysis } from '@/lib/ai/mock-domain'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { domain, mode } = body

    if (!domain || typeof domain !== 'string' || domain.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid domain (e.g. Finance, Technology, Consulting, Energy, Healthcare).', code: 'INVALID_DOMAIN' },
        { status: 400 }
      )
    }

    const trimmedDomain = domain.trim()

    // If demo requested or Gemini API key not present, return comprehensive curated demo domain analysis
    if (mode === 'demo' || !process.env.GEMINI_API_KEY) {
      const mockAnalysis = generateMockDomainAnalysis(trimmedDomain)
      return NextResponse.json(mockAnalysis)
    }

    const ai = getGeminiProvider()
    const researchService = getResearchService()

    // Live search context
    const domainSearch = await researchService.searchDomain(trimmedDomain)
    const researchContext = `Domain: ${trimmedDomain}\n\nSearch Context:\n${researchService.formatForAI(domainSearch)}`

    // Generate domain intelligence with Gemini
    const rawResponse = await ai.analyseDomain(trimmedDomain, researchContext)
    const jsonStr = extractJSON(rawResponse)

    let parsed
    try {
      parsed = JSON.parse(jsonStr)
    } catch {
      // Fallback to mock data if AI response cannot be parsed
      console.warn('AI domain JSON parse failed, falling back to mock generator')
      const fallback = generateMockDomainAnalysis(trimmedDomain)
      return NextResponse.json(fallback)
    }

    const validation = domainAnalysisSchema.safeParse(parsed)
    if (!validation.success) {
      console.warn('Domain schema validation warnings:', validation.error.issues.slice(0, 3))
    }

    const analysis: DomainAnalysis = {
      domain: parsed.domain || trimmedDomain,
      description: parsed.description || `Comprehensive MBA Group Discussion intelligence for the ${trimmedDomain} domain.`,
      executiveSummary: parsed.executiveSummary || '',
      top25Developments: parsed.top25Developments || [],
      top15GDThemes: parsed.top15GDThemes || [],
      top20Facts: parsed.top20Facts || [],
      openingStrategies: parsed.openingStrategies || [],
      impactStrategies: parsed.impactStrategies || [],
      crossIndustryConnections: parsed.crossIndustryConnections || [],
      companiesToKnow: parsed.companiesToKnow || [],
      reportsToKnow: parsed.reportsToKnow || [],
      thirtySecondSummary: parsed.thirtySecondSummary || '',
      sixtySecondSummary: parsed.sixtySecondSummary || '',
      rapidRevision: parsed.rapidRevision || {
        tenThingsMustKnow: [],
        tenNumbersMustRemember: [],
        fiveCompaniesMustKnow: [],
        fiveReportsMustKnow: [],
        fiveCurrentTrends: [],
        fivePotentialGDQuestions: [],
      },
      sources: parsed.sources || [],
      generatedAt: new Date().toISOString(),
      isDemo: false,
      researchMode: domainSearch.mode,
    }

    return NextResponse.json(analysis)
  } catch (err) {
    console.error('Domain analysis API error:', err)
    const message = err instanceof Error ? err.message : 'Unexpected error'
    // Graceful fallback to mock data on any unexpected error
    try {
      const fallback = generateMockDomainAnalysis('Finance')
      return NextResponse.json(fallback)
    } catch {
      return NextResponse.json(
        { error: 'Failed to generate domain analysis. Please try again.', code: 'SERVER_ERROR', details: message },
        { status: 500 }
      )
    }
  }
}
