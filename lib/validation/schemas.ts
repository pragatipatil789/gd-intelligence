import { z } from 'zod'

const sourceSchema = z.object({
  name: z.string(),
  url: z.string().optional(),
  type: z.enum(['Primary', 'Research', 'Media']),
  date: z.string().optional(),
})

const statisticRowSchema = z.object({
  metric: z.string(),
  value: z.string(),
  year: z.string(),
  source: z.string(),
})

const gdPointerSchema = z.object({
  argument: z.string(),
  explanation: z.string(),
  fact: z.string().optional(),
  example: z.string().optional(),
  source: z.string().optional(),
})

const perspectiveSchema = z.object({
  dimension: z.string(),
  content: z.string(),
  keyPoints: z.array(z.string()),
})

const balancedViewSchema = z.object({
  myView: z.string(),
  supportingArguments: z.array(z.string()),
  counterargument: z.string(),
  balancedConclusion: z.string(),
})

const impactFactorsSchema = z.object({
  strongestFact: z.string(),
  strongestExample: z.string(),
  strongestArgument: z.string(),
  strongestCounterargument: z.string(),
  smartestConnection: z.string(),
  unconventionalPerspective: z.string(),
  commonMistakeToAvoid: z.string(),
})

const revisionCardSchema = z.object({
  coreIdea: z.string(),
  keyFact: z.string(),
  keyNumber: z.string(),
  bestExample: z.string(),
  balancedConclusion: z.string(),
})

// News item schema
export const newsItemSchema = z.object({
  rank: z.number(),
  title: z.string(),
  category: z.string(),
  gdRelevance: z.enum(['Very High', 'High', 'Medium', 'Low']),
  summary: z.string(),
  whyItMatters: z.string(),
  gdPointers: z.array(z.string()),
  statistics: z.array(statisticRowSchema),
  impactFacts: z.array(z.string()),
  gdQuestions: z.array(z.string()),
  balancedView: z.string(),
  counterargument: z.string(),
  thirtySecondAnswer: z.string(),
  sources: z.array(sourceSchema),
})

export const dailySummarySchema = z.object({
  topThemes: z.array(z.string()),
  topFacts: z.array(z.string()),
  topGDTopics: z.array(z.string()),
  openingLines: z.array(z.string()),
  counterargumentFrameworks: z.array(z.string()),
})

export const dailyNewsReportSchema = z.object({
  newsItems: z.array(newsItemSchema),
  summary: dailySummarySchema,
})

// Topic analysis schema
const abstractInterpretationSchema = z.object({
  lens: z.string(),
  interpretation: z.string(),
  arguments: z.array(z.string()),
  examples: z.array(z.string()),
})

const topicFactSchema = z.object({
  fact: z.string(),
  number: z.string().optional(),
  context: z.string(),
  yearDate: z.string().optional(),
  source: z.string(),
  howToUseInGD: z.string(),
})

const topicExampleSchema = z.object({
  title: z.string(),
  description: z.string(),
  relevance: z.string(),
  howToMention: z.string(),
})

const openingStatementSchema = z.object({
  type: z.enum(['Data-led', 'Context-led', 'Nuanced/Contrarian']),
  statement: z.string(),
})

export const topicAnalysisSchema = z.object({
  topic: z.string(),
  classification: z.enum(['Concrete', 'Abstract', 'Hybrid']),
  classificationReason: z.string(),
  oneLineExplanation: z.string(),
  realWorldPointers: z.array(gdPointerSchema),
  genericPointers: z.array(gdPointerSchema),
  abstractInterpretations: z.array(abstractInterpretationSchema).optional(),
  perspectives: z.array(perspectiveSchema),
  facts: z.array(topicFactSchema),
  examples: z.array(topicExampleSchema),
  balancedView: balancedViewSchema,
  impactFactors: impactFactorsSchema,
  openingStatements: z.array(openingStatementSchema),
  midGDInterventions: z.array(z.string()),
  disagreementFrameworks: z.array(z.string()),
  thirtySecondAnswer: z.string(),
  sixtySecondAnswer: z.string(),
  revisionCard: revisionCardSchema,
  sources: z.array(sourceSchema),
})
