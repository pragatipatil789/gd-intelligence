import { GoogleGenerativeAI } from '@google/generative-ai'
import { AIProvider, AIGenerateOptions } from './provider'

export class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI
  private modelName: string

  constructor(apiKey: string, modelName = 'gemini-2.5-flash') { // v2.5-flash: updated 2026-09-26
    this.client = new GoogleGenerativeAI(apiKey)
    this.modelName = modelName
  }

  async generate(options: AIGenerateOptions): Promise<string> {
    const model = this.client.getGenerativeModel({
      model: this.modelName,
      generationConfig: {
        temperature: options.temperature ?? 0.3,
        maxOutputTokens: options.maxTokens ?? 8192,
      },
      systemInstruction: options.systemPrompt,
    })

    const result = await model.generateContent(options.prompt)
    const response = result.response
    return response.text()
  }

  async classifyTopic(topic: string): Promise<string> {
    const systemPrompt = `You are an expert MBA GD preparation coach. Your task is to classify topics accurately.
Return ONLY valid JSON, no markdown, no explanation.`

    const prompt = `Classify the GD topic: "${topic}"

Return JSON in this exact format:
{
  "classification": "Concrete" | "Abstract" | "Hybrid",
  "reason": "Brief explanation of why"
}

Rules:
- Concrete: directly connected to real-world subject (e.g., "India's GDP", "Digital Payments", "Electric Vehicles")
- Abstract: requires conceptual interpretation (e.g., "Black and White", "Red", "Zero", "Circle", "The Other Side")
- Hybrid: can be discussed through both real-world and conceptual perspectives (e.g., "Energy", "Water", "Light", "Time")`

    return this.generate({ prompt, systemPrompt, temperature: 0.1 })
  }

  async analyseNews(date: string, searchResults: string): Promise<string> {
    const systemPrompt = `You are an expert MBA GD intelligence analyst. 
Generate structured, fact-based GD preparation content.
NEVER fabricate statistics or sources.
Return ONLY valid JSON, no markdown fences.`

    const prompt = `Analyse the following news/developments for date: ${date}

Research context:
${searchResults}

Generate a comprehensive GD Intelligence Report in this EXACT JSON format:
{
  "newsItems": [
    {
      "rank": 1,
      "title": "News headline",
      "category": "Economy|Business|Finance|Technology|AI|Energy|Infrastructure|Government & Policy|Geopolitics|International Relations|Climate|Healthcare|Education|Employment|Startups|Markets|Defence|Society|Regulation|Global Affairs",
      "gdRelevance": "Very High|High|Medium|Low",
      "summary": "3-5 concise sentences about what happened",
      "whyItMatters": "Explanation of the larger issue and implications",
      "gdPointers": ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      "statistics": [
        {"metric": "Metric name", "value": "Value", "year": "Year", "source": "Source name"}
      ],
      "impactFacts": ["Impact fact 1", "Impact fact 2"],
      "gdQuestions": ["Question 1?", "Question 2?", "Question 3?"],
      "balancedView": "Nuanced balanced perspective on this issue",
      "counterargument": "Strongest opposing perspective",
      "thirtySecondAnswer": "Natural, conversational 30-second GD intervention on this topic",
      "sources": [
        {"name": "Source Name", "url": "https://...", "type": "Primary|Research|Media", "date": "Date"}
      ]
    }
  ],
  "summary": {
    "topThemes": ["Theme 1", "Theme 2", "Theme 3", "Theme 4", "Theme 5"],
    "topFacts": ["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5", "Fact 6", "Fact 7", "Fact 8", "Fact 9", "Fact 10"],
    "topGDTopics": ["GD Topic 1", "GD Topic 2", "GD Topic 3", "GD Topic 4", "GD Topic 5", "GD Topic 6", "GD Topic 7", "GD Topic 8", "GD Topic 9", "GD Topic 10"],
    "openingLines": ["Opening 1", "Opening 2", "Opening 3", "Opening 4", "Opening 5"],
    "counterargumentFrameworks": ["Framework 1", "Framework 2", "Framework 3", "Framework 4", "Framework 5"]
  }
}

Generate 10-15 high-quality news items. Prioritise GD relevance + business relevance + discussion potential.
Only include facts that can be verified from credible sources.`

    return this.generate({ prompt, systemPrompt, temperature: 0.3, maxTokens: 12000 })
  }

  async generateGDContent(topic: string, researchContext: string): Promise<string> {
    const systemPrompt = `You are an expert MBA GD preparation coach and business analyst.
Generate comprehensive, structured GD preparation content.
NEVER fabricate statistics. If data is unavailable, say so clearly.
Return ONLY valid JSON, no markdown fences.`

    const prompt = `Generate a complete GD Intelligence Analysis for the topic: "${topic}"

Research context available:
${researchContext}

Return this EXACT JSON structure:
{
  "topic": "${topic}",
  "classification": "Concrete|Abstract|Hybrid",
  "classificationReason": "Why this classification",
  "oneLineExplanation": "Simple one-line explanation of the topic",
  "realWorldPointers": [
    {
      "argument": "Main argument point",
      "explanation": "Detailed explanation",
      "fact": "Relevant fact or statistic",
      "example": "Real-world example",
      "source": "Source name"
    }
  ],
  "genericPointers": [
    {
      "argument": "Generic argument",
      "explanation": "Why this is relevant",
      "fact": "Supporting fact if available",
      "example": "Example",
      "source": "Source if applicable"
    }
  ],
  "abstractInterpretations": [
    {
      "lens": "Lens name (e.g., Management, Psychology, Technology, Ethics)",
      "interpretation": "How to interpret the topic through this lens",
      "arguments": ["Argument 1", "Argument 2"],
      "examples": ["Example 1", "Example 2"]
    }
  ],
  "perspectives": [
    {
      "dimension": "Economic|Business|Government|Social|Technological|Environmental|Ethical|Consumer|Individual|Global",
      "content": "Perspective from this dimension",
      "keyPoints": ["Key point 1", "Key point 2", "Key point 3"]
    }
  ],
  "facts": [
    {
      "fact": "Fact statement",
      "number": "The specific number/statistic",
      "context": "Why this number matters",
      "yearDate": "Year or date",
      "source": "Source name",
      "howToUseInGD": "Practical tip for using this in GD"
    }
  ],
  "examples": [
    {
      "title": "Example title",
      "description": "Description of the example",
      "relevance": "Why relevant to the topic",
      "howToMention": "How to verbally mention this in GD"
    }
  ],
  "balancedView": {
    "myView": "2-4 sentence balanced position",
    "supportingArguments": ["Argument 1", "Argument 2", "Argument 3"],
    "counterargument": "Strongest opposing perspective",
    "balancedConclusion": "Nuanced conclusion"
  },
  "impactFactors": {
    "strongestFact": "The most impressive fact",
    "strongestExample": "The most powerful example",
    "strongestArgument": "The most compelling argument",
    "strongestCounterargument": "The most important counterargument",
    "smartestConnection": "An unexpected but intelligent connection",
    "unconventionalPerspective": "A surprising angle most candidates won't take",
    "commonMistakeToAvoid": "What most candidates get wrong"
  },
  "openingStatements": [
    {"type": "Data-led", "statement": "Opening that starts with a statistic"},
    {"type": "Context-led", "statement": "Opening that sets context"},
    {"type": "Nuanced/Contrarian", "statement": "Opening that challenges conventional wisdom"}
  ],
  "midGDInterventions": [
    "I'd like to add another dimension to this...",
    "Building on that point...",
    "If we look at this from an economic perspective...",
    "The data actually suggests...",
    "There's an important nuance here..."
  ],
  "disagreementFrameworks": [
    "I appreciate that perspective, however...",
    "While that's partially true, the evidence suggests...",
    "That's one way to look at it, but if we consider...",
    "I'd respectfully challenge that assumption...",
    "The counterpoint here is..."
  ],
  "thirtySecondAnswer": "Natural 30-second GD answer: Context → Argument → Fact → Example → Conclusion",
  "sixtySecondAnswer": "Natural 60-second GD answer: Context → Argument → Data → Example → Counterargument → Conclusion",
  "revisionCard": {
    "coreIdea": "The single most important idea",
    "keyFact": "Most memorable fact",
    "keyNumber": "Most impactful number",
    "bestExample": "Best example to cite",
    "balancedConclusion": "Balanced conclusion to remember"
  },
  "sources": [
    {"name": "Source Name", "url": "https://...", "type": "Primary|Research|Media"}
  ]
}

For abstract topics: always fill abstractInterpretations with 5+ different lenses.
For concrete/hybrid topics: focus on realWorldPointers with current data.
Provide exactly 5 realWorldPointers and 5 genericPointers.
Include 5-8 facts, 5 examples, 3-5 perspectives.`

    return this.generate({ prompt, systemPrompt, temperature: 0.4, maxTokens: 12000 })
  }

  async analyseDomain(domain: string, researchContext: string): Promise<string> {

    const systemPrompt = `You are an expert MBA GD intelligence analyst and industry researcher.
Generate comprehensive domain intelligence for MBA students preparing for Group Discussions.
NEVER fabricate statistics or invent sources. Use the research context provided.
Return ONLY valid JSON, no markdown fences, no extra text.`

    const prompt = `Generate a comprehensive DOMAIN INTELLIGENCE report for: "${domain}"

Research context:
${researchContext}

Return this EXACT JSON structure (all fields required):
{
  "domain": "${domain}",
  "description": "2-3 sentence description of this domain",
  "executiveSummary": "A 100-150 word executive summary of the domain's current state and importance for MBA GDs",
  "top25Developments": [
    {
      "rank": 1,
      "title": "Development headline (concise, informative)",
      "category": "Main category (e.g. Regulation, Technology, Business, Investment, Economy, Risk, Innovation, Government, Companies)",
      "subCategory": "Specific sub-category (e.g. Banking → Digital Lending)",
      "whatHappened": "2-3 sentences explaining what happened",
      "whyItMatters": "Why this matters to industry, businesses, consumers, economy, investors",
      "gdPointers": ["Argument 1 you can speak in GD", "Argument 2", "Argument 3", "Argument 4", "Argument 5"],
      "importantFacts": [
        {"value": "Statistic value", "context": "What it means", "yearDate": "Year", "source": "Source name"}
      ],
      "impactFact": "The single most memorable fact about this development",
      "gdQuestions": ["Question 1?", "Question 2?", "Question 3?"],
      "businessImplication": "How this affects businesses",
      "societalImplication": "Wider economic/social impact",
      "balancedView": "Balanced interpretation",
      "counterargument": "Strongest opposing perspective",
      "gdIntervention": "A 25-30 second speaking point you can deliver in GD",
      "sources": [{"name": "Source name", "url": "https://...", "type": "Primary|Research|Media"}]
    }
  ],
  "top15GDThemes": [
    {"theme": "Theme name", "description": "Why this is an important GD theme from this domain"}
  ],
  "top20Facts": [
    {"rank": 1, "fact": "Fact statement", "number": "The key number", "year": "Year", "whyItMatters": "Why useful in GD", "source": "Source"}
  ],
  "openingStrategies": [
    {"style": "data-led", "styleLabel": "Data-Led Opening", "script": "30-second opening using a key statistic"},
    {"style": "current-affairs", "styleLabel": "Current Affairs Opening", "script": "30-second opening connecting latest development"},
    {"style": "business-led", "styleLabel": "Business-Led Opening", "script": "30-second opening from business/economic angle"},
    {"style": "balanced", "styleLabel": "Balanced Opening", "script": "30-second opening presenting both sides"},
    {"style": "strategic", "styleLabel": "Strategic Opening", "script": "30-second opening connecting to India's competitiveness"}
  ],
  "impactStrategies": [
    {"category": "Facts That Will Differentiate Me", "items": ["Fact 1", "Fact 2", "Fact 3"]},
    {"category": "Numbers I Should Remember", "items": ["Number with context 1", "Number 2", "Number 3"]},
    {"category": "Examples I Should Quote", "items": ["Example 1", "Example 2", "Example 3"]},
    {"category": "Companies I Should Know", "items": ["Company 1", "Company 2", "Company 3"]},
    {"category": "Government Policies I Should Know", "items": ["Policy 1", "Policy 2", "Policy 3"]},
    {"category": "Industry Reports I Should Know", "items": ["Report 1", "Report 2", "Report 3"]},
    {"category": "Trends I Should Mention", "items": ["Trend 1", "Trend 2", "Trend 3"]},
    {"category": "Counterarguments I Should Be Prepared For", "items": ["Counter 1", "Counter 2", "Counter 3"]},
    {"category": "Smart Connections to Other Sectors", "items": ["Connection 1", "Connection 2", "Connection 3"]},
    {"category": "Common Mistakes to Avoid", "items": ["Mistake 1", "Mistake 2", "Mistake 3"]}
  ],
  "crossIndustryConnections": [
    {"sector": "Economy", "connection": "How domain connects to economy", "example": "Specific example"},
    {"sector": "Government & Policy", "connection": "Regulatory connection", "example": "Specific example"},
    {"sector": "Technology", "connection": "Tech connection", "example": "Specific example"},
    {"sector": "Consumers", "connection": "Consumer impact", "example": "Specific example"},
    {"sector": "Employment", "connection": "Jobs impact", "example": "Specific example"},
    {"sector": "Sustainability", "connection": "ESG connection", "example": "Specific example"},
    {"sector": "Globalisation", "connection": "Global trade connection", "example": "Specific example"},
    {"sector": "Geopolitics", "connection": "Geopolitical angle", "example": "Specific example"},
    {"sector": "Regulation", "connection": "Regulatory framework", "example": "Specific example"},
    {"sector": "Innovation", "connection": "Innovation pipeline", "example": "Specific example"}
  ],
  "companiesToKnow": [
    {"name": "Company name", "type": "Indian|Global", "whatTheyDo": "What they do", "whyRelevant": "Why relevant to domain", "recentDevelopment": "Recent notable development", "gdUse": "How to use in GD"}
  ],
  "reportsToKnow": [
    {"title": "Report title", "publisher": "Publisher name", "year": "Year", "keyFinding": "Key finding", "gdUse": "How to use in GD", "url": "https://..."}
  ],
  "thirtySecondSummary": "A 30-second domain summary: Context → Current Trend → Data → Implication → Balanced conclusion",
  "sixtySecondSummary": "A 60-second domain summary: Context → 2 major trends → data → example → risk → opportunity → conclusion",
  "rapidRevision": {
    "tenThingsMustKnow": ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6", "Thing 7", "Thing 8", "Thing 9", "Thing 10"],
    "tenNumbersMustRemember": ["Number + context 1", "Number 2", "Number 3", "Number 4", "Number 5", "Number 6", "Number 7", "Number 8", "Number 9", "Number 10"],
    "fiveCompaniesMustKnow": ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"],
    "fiveReportsMustKnow": ["Report 1", "Report 2", "Report 3", "Report 4", "Report 5"],
    "fiveCurrentTrends": ["Trend 1", "Trend 2", "Trend 3", "Trend 4", "Trend 5"],
    "fivePotentialGDQuestions": ["Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?"]
  },
  "sources": [
    {"name": "Source name", "url": "https://...", "type": "Primary|Research|Media"}
  ]
}

Requirements:
- top25Developments: exactly 10 high-quality developments (label rank 1-10 for demo, the UI will show more from live research)
- top15GDThemes: exactly 10 themes
- top20Facts: exactly 10 facts
- companiesToKnow: at least 8 companies (mix Indian and Global)
- reportsToKnow: at least 5 reports
- crossIndustryConnections: all 10 sectors filled
- impactStrategies: all 10 categories filled
- Only include verifiable facts from credible sources`

    return this.generate({ prompt, systemPrompt, temperature: 0.35, maxTokens: 16000 })
  }
}

// Singleton factory
let geminiInstance: GeminiProvider | null = null

export function getGeminiProvider(): GeminiProvider {
  if (!geminiInstance) {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set')
    }
    geminiInstance = new GeminiProvider(apiKey)
  }
  return geminiInstance
}
