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

// Domain intelligence schemas
const domainFactSchema = z.object({
  value: z.string(),
  context: z.string(),
  yearDate: z.string(),
  source: z.string(),
})

const domainDevelopmentSchema = z.object({
  rank: z.number(),
  title: z.string(),
  category: z.string(),
  subCategory: z.string(),
  whatHappened: z.string(),
  whyItMatters: z.string(),
  gdPointers: z.array(z.string()),
  importantFacts: z.array(domainFactSchema),
  impactFact: z.string(),
  gdQuestions: z.array(z.string()),
  businessImplication: z.string(),
  societalImplication: z.string(),
  balancedView: z.string(),
  counterargument: z.string(),
  gdIntervention: z.string(),
  sources: z.array(sourceSchema),
})

const domainFactRowSchema = z.object({
  rank: z.number(),
  fact: z.string(),
  number: z.string(),
  year: z.string(),
  whyItMatters: z.string(),
  source: z.string(),
})

const openingStrategySchema = z.object({
  style: z.string(),
  styleLabel: z.string(),
  script: z.string(),
})

const impactStrategySchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
})

const companyToKnowSchema = z.object({
  name: z.string(),
  type: z.enum(['Indian', 'Global']),
  whatTheyDo: z.string(),
  whyRelevant: z.string(),
  recentDevelopment: z.string(),
  gdUse: z.string(),
})

const reportToKnowSchema = z.object({
  title: z.string(),
  publisher: z.string(),
  year: z.string(),
  keyFinding: z.string(),
  gdUse: z.string(),
  url: z.string().optional(),
})

const crossIndustryConnectionSchema = z.object({
  sector: z.string(),
  connection: z.string(),
  example: z.string(),
})

const domainRapidRevisionSchema = z.object({
  tenThingsMustKnow: z.array(z.string()),
  tenNumbersMustRemember: z.array(z.string()),
  fiveCompaniesMustKnow: z.array(z.string()),
  fiveReportsMustKnow: z.array(z.string()),
  fiveCurrentTrends: z.array(z.string()),
  fivePotentialGDQuestions: z.array(z.string()),
})

export const domainAnalysisSchema = z.object({
  domain: z.string(),
  description: z.string(),
  executiveSummary: z.string(),
  top25Developments: z.array(domainDevelopmentSchema),
  top15GDThemes: z.array(z.object({ theme: z.string(), description: z.string() })),
  top20Facts: z.array(domainFactRowSchema),
  openingStrategies: z.array(openingStrategySchema),
  impactStrategies: z.array(impactStrategySchema),
  crossIndustryConnections: z.array(crossIndustryConnectionSchema),
  companiesToKnow: z.array(companyToKnowSchema),
  reportsToKnow: z.array(reportToKnowSchema),
  thirtySecondSummary: z.string(),
  sixtySecondSummary: z.string(),
  rapidRevision: domainRapidRevisionSchema,
  sources: z.array(sourceSchema),
})

