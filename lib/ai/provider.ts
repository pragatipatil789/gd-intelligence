// AI Provider abstraction layer
// This makes it easy to swap between Gemini, OpenAI, Anthropic, etc.

export interface AIGenerateOptions {
  prompt: string
  systemPrompt?: string
  temperature?: number
  maxTokens?: number
}

export interface AIProvider {
  generate(options: AIGenerateOptions): Promise<string>
  classifyTopic(topic: string): Promise<string>
  analyseNews(date: string, searchResults: string): Promise<string>
  generateGDContent(topic: string, researchContext: string): Promise<string>
  analyseDomain(domain: string, researchContext: string): Promise<string>
}
