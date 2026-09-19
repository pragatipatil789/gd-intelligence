import { GoogleGenerativeAI } from '@google/generative-ai'
import { AIProvider, AIGenerateOptions } from './provider'

export class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI
  private modelName: string

  constructor(apiKey: string, modelName = 'gemini-2.0-flash') {
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
