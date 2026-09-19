// TypeScript type definitions for GD Intelligence

export type TopicClassification = 'Concrete' | 'Abstract' | 'Hybrid'

export type GDRelevance = 'Very High' | 'High' | 'Medium' | 'Low'

export type NewsCategory =
  | 'Economy'
  | 'Business'
  | 'Finance'
  | 'Technology'
  | 'AI'
  | 'Energy'
  | 'Infrastructure'
  | 'Government & Policy'
  | 'Geopolitics'
  | 'International Relations'
  | 'Climate'
  | 'Healthcare'
  | 'Education'
  | 'Employment'
  | 'Startups'
  | 'Markets'
  | 'Defence'
  | 'Society'
  | 'Regulation'
  | 'Global Affairs'

export type SourceType = 'Primary' | 'Research' | 'Media'

export interface Source {
  name: string
  url?: string
  type: SourceType
  date?: string
}

export interface StatisticRow {
  metric: string
  value: string
  year: string
  source: string
}

export interface GDPointer {
  argument: string
  explanation: string
  fact?: string
  example?: string
  source?: string
}

export interface Perspective {
  dimension: string
  content: string
  keyPoints: string[]
}

export interface BalancedView {
  myView: string
  supportingArguments: string[]
  counterargument: string
  balancedConclusion: string
}

export interface ImpactFactors {
  strongestFact: string
  strongestExample: string
  strongestArgument: string
  strongestCounterargument: string
  smartestConnection: string
  unconventionalPerspective: string
  commonMistakeToAvoid: string
}

export interface RevisionCard {
  coreIdea: string
  keyFact: string
  keyNumber: string
  bestExample: string
  balancedConclusion: string
}

// ========================
// NEWS / DATE MODE
// ========================

export interface NewsItem {
  id: string
  rank: number
  title: string
  category: NewsCategory
  gdRelevance: GDRelevance
  summary: string
  whyItMatters: string
  gdPointers: string[]
  statistics: StatisticRow[]
  impactFacts: string[]
  gdQuestions: string[]
  balancedView: string
  counterargument: string
  thirtySecondAnswer: string
  sources: Source[]
}

export interface DailySummary {
  topThemes: string[]
  topFacts: string[]
  topGDTopics: string[]
  openingLines: string[]
  counterargumentFrameworks: string[]
}

export interface DailyNewsReport {
  date: string
  newsItems: NewsItem[]
  summary: DailySummary
  generatedAt: string
  isDemo: boolean
  researchMode: 'live' | 'general' | 'demo'
}

// ========================
// TOPIC MODE
// ========================

export interface AbstractInterpretation {
  lens: string
  interpretation: string
  arguments: string[]
  examples: string[]
}

export interface TopicFact {
  fact: string
  number?: string
  context: string
  yearDate?: string
  source: string
  howToUseInGD: string
}

export interface TopicExample {
  title: string
  description: string
  relevance: string
  howToMention: string
}

export interface OpeningStatement {
  type: 'Data-led' | 'Context-led' | 'Nuanced/Contrarian'
  statement: string
}

export interface TopicAnalysis {
  topic: string
  classification: TopicClassification
  classificationReason: string
  oneLineExplanation: string
  realWorldPointers: GDPointer[]
  genericPointers: GDPointer[]
  abstractInterpretations?: AbstractInterpretation[]
  perspectives: Perspective[]
  facts: TopicFact[]
  examples: TopicExample[]
  balancedView: BalancedView
  impactFactors: ImpactFactors
  openingStatements: OpeningStatement[]
  midGDInterventions: string[]
  disagreementFrameworks: string[]
  thirtySecondAnswer: string
  sixtySecondAnswer: string
  revisionCard: RevisionCard
  sources: Source[]
  generatedAt: string
  isDemo: boolean
  researchMode: 'live' | 'general' | 'demo'
}

// ========================
// STORAGE
// ========================

export type SearchType = 'daily' | 'topic'

export interface SearchHistoryItem {
  id: string
  type: SearchType
  input: string
  label: string
  createdAt: string
}

export interface SavedItem {
  id: string
  type: 'news' | 'topic' | 'fact' | 'gdpoint'
  title: string
  content: string
  metadata?: Record<string, string>
  savedAt: string
}

// ========================
// API
// ========================

export interface APIError {
  error: string
  code?: string
  details?: string
}

export interface DailyNewsRequest {
  date: string // ISO string
}

export interface TopicAnalysisRequest {
  topic: string
}
