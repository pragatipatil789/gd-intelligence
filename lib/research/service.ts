// Research Service — Tavily Search API integration
// Falls back gracefully when API key is not configured

export interface SearchResult {
  title: string
  url: string
  content: string
  score?: number
  publishedDate?: string
}

export interface ResearchContext {
  query: string
  results: SearchResult[]
  mode: 'live' | 'general' | 'demo'
  sources: string[]
}

export class ResearchService {
  private tavilyKey?: string
  private serpKey?: string

  constructor() {
    this.tavilyKey = process.env.TAVILY_API_KEY
    this.serpKey = process.env.SERPAPI_KEY
  }

  async searchNews(query: string, maxResults = 10): Promise<ResearchContext> {
    if (this.tavilyKey) {
      return this.searchWithTavily(query, maxResults)
    }
    // No search API — return empty context so AI uses general knowledge
    return {
      query,
      results: [],
      mode: 'general',
      sources: [],
    }
  }

  async searchReports(topic: string): Promise<ResearchContext> {
    return this.searchNews(`${topic} report statistics data`, 5)
  }

  async searchOfficialSources(query: string): Promise<ResearchContext> {
    const officialQuery = `${query} site:rbi.org.in OR site:mospi.gov.in OR site:imf.org OR site:worldbank.org OR site:oecd.org`
    return this.searchNews(officialQuery, 5)
  }

  private async searchWithTavily(query: string, maxResults: number): Promise<ResearchContext> {
    try {
      const response = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: this.tavilyKey,
          query,
          search_depth: 'advanced',
          include_answer: true,
          include_raw_content: false,
          max_results: maxResults,
        }),
      })

      if (!response.ok) {
        console.warn('Tavily search failed:', response.statusText)
        return { query, results: [], mode: 'general', sources: [] }
      }

      const data = await response.json()
      const results: SearchResult[] = (data.results || []).map(
        (r: { title?: string; url?: string; content?: string; score?: number; published_date?: string }) => ({
          title: r.title || '',
          url: r.url || '',
          content: r.content || '',
          score: r.score,
          publishedDate: r.published_date,
        })
      )

      return {
        query,
        results,
        mode: 'live',
        sources: results.map((r) => r.url),
      }
    } catch (err) {
      console.error('Research service error:', err)
      return { query, results: [], mode: 'general', sources: [] }
    }
  }

  formatForAI(context: ResearchContext): string {
    if (context.results.length === 0) {
      return `No live search results available. Mode: ${context.mode}. Use your general knowledge to provide accurate, well-sourced GD content. Clearly note when using general knowledge vs. verified current information.`
    }

    const formatted = context.results
      .map(
        (r, i) =>
          `[Source ${i + 1}] ${r.title}\nURL: ${r.url}\n${r.publishedDate ? `Published: ${r.publishedDate}\n` : ''}Content: ${r.content}\n`
      )
      .join('\n---\n')

    return `Live search results (${context.results.length} sources found):\n\n${formatted}`
  }
}

// Singleton
let researchInstance: ResearchService | null = null
export function getResearchService(): ResearchService {
  if (!researchInstance) researchInstance = new ResearchService()
  return researchInstance
}
