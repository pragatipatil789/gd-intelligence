import {
  DailyNewsReport,
  TopicAnalysis,
  NewsItem,
  GDPointer,
  AbstractInterpretation,
  TopicFact,
  TopicExample,
  OpeningStatement,
  RevisionCard,
  ImpactFactors,
  BalancedView,
  Perspective,
  StatisticRow,
  Source
} from '@/types'

export function generateMockDailyNews(date: string): DailyNewsReport {
  const newsItems: NewsItem[] = [
    {
      id: 'news-1',
      rank: 1,
      title: 'RBI Keeps Repo Rate Steady at 6.50% Amid Resilient Domestic GDP & Inflation Moderation',
      category: 'Finance',
      gdRelevance: 'Very High',
      summary: 'The Reserve Bank of India Monetary Policy Committee maintained the policy repo rate at 6.50% for the tenth consecutive meeting, citing resilient domestic economic activity offset by lingering food price pressures.',
      whyItMatters: 'Crucial for MBA GDs on monetary policy vs fiscal stimulus, inflation targeting, cost of capital for Indian corporates, and consumption dynamics.',
      gdPointers: [
        'High interest rates protect macro-stability and currency parity, but compress middle-income discretionary consumption.',
        'Corporate capex is increasingly financed via internal accruals and record retained earnings rather than expensive bank debt.',
        'MSMEs bear the brunt of sticky benchmark lending rates (MCLR/EBLR), while large conglomerates issue competitive commercial paper.'
      ],
      statistics: [
        { metric: 'Policy Repo Rate', value: '6.50%', year: '2025-26', source: 'RBI MPC Statement' },
        { metric: 'Projected Real GDP Growth', value: '7.2%', year: 'FY26', source: 'RBI' },
        { metric: 'Headline CPI Inflation', value: '4.2%', year: '2025', source: 'MoSPI' },
        { metric: 'Gross Non-Performing Assets (GNPA)', value: '2.8%', year: '2025', source: 'Financial Stability Report' }
      ],
      impactFacts: [
        'India’s banking sector gross NPA ratio dropped to a 12-year low of 2.8%.',
        'Foreign exchange reserves reached a robust buffer exceeding $650 billion.'
      ],
      gdQuestions: [
        'Is the RBI prioritizing inflation anchoring at the cost of urban consumption growth?',
        'How can MSMEs be shielded from elevated borrowing rates during monetary tightening cycles?'
      ],
      balancedView: 'The RBI’s cautious stance successfully anchors macroeconomic stability and buffers against global geopolitical volatility. However, sustained high borrowing costs risk dampening private sector risk appetite and retail consumption.',
      counterargument: 'While critics argue 6.5% stymies rapid expansion, premature rate cuts in an unpredictable global commodity environment risk triggering secondary inflationary spirals and currency depreciation.',
      thirtySecondAnswer: 'The RBI’s decision to hold repo rates at 6.50% reflects a strategic preference for sustainable long-term stability over transient stimulus. Backed by 7.2% GDP growth and a 12-year low in NPAs, India’s macro fundamentals remain sound. The challenge now lies in spurring private capex and boosting purchasing power in food-inflation-sensitive households.',
      sources: [
        { name: 'Reserve Bank of India MPC Report', type: 'Primary' },
        { name: 'Ministry of Statistics & Programme Implementation', type: 'Primary' }
      ]
    },
    {
      id: 'news-2',
      rank: 2,
      title: 'India Semiconductor Mission Approves New Fabrication Units Worth ₹30,000 Crore',
      category: 'Technology',
      gdRelevance: 'Very High',
      summary: 'The Union Cabinet expanded the India Semiconductor Mission (ISM) by greenlighting new commercial semiconductor assembly and fabrication facilities in Gujarat and Maharashtra.',
      whyItMatters: 'Essential for discussing supply chain sovereignty, China+1 manufacturing diversification, industrial capital subsidies, and high-tech talent development.',
      gdPointers: [
        'Subsidies accelerate entry, but ecosystem depth (ultrapure water, specialty chemicals, clean power) determines long-term viability.',
        'Targeting mature legacy nodes (28nm to 65nm) satisfies automotive and industrial IoT demand before chasing expensive sub-5nm smartphone silicon.',
        'India possesses 20% of global VLSI chip design talent, creating a ready springboard for fabrication integration.'
      ],
      statistics: [
        { metric: 'ISM Scheme Outlay', value: '₹76,000 Cr ($10B)', year: '2022-26', source: 'MeitY' },
        { metric: 'Target Electronics Production', value: '$300 Billion', year: '2026', source: 'NITI Aayog' },
        { metric: 'Global Semiconductor Market', value: '$600 Billion', year: '2025', source: 'SIA Report' },
        { metric: 'Fiscal Incentive Coverage', value: '50% of Project Cost', year: '2025', source: 'Cabinet Approval' }
      ],
      impactFacts: [
        'Over 60% of modern electric vehicle microcontrollers operate on 28nm+ mature architectures.',
        'A single semiconductor fab requires 20 to 30 million liters of ultrapure water per day.'
      ],
      gdQuestions: [
        'Is high-capital industrial subsidization more beneficial than investing in labour-intensive manufacturing sectors?',
        'Can India develop the specialized supplier cluster required to compete with Taiwan and South Korea?'
      ],
      balancedView: 'Subsidizing semiconductor fabrication is a strategic geopolitical and economic necessity to safeguard national supply chains. However, public funds must be matched with aggressive investments in university R&D, chemical supply chains, and specialized infrastructure.',
      counterargument: 'Critics point out that semiconductors are intensely cyclical and capital-hungry; over-subsidizing assembly plants without securing indigenous core intellectual property leaves the country dependent on foreign technology partners.',
      thirtySecondAnswer: 'Semiconductors are the crude oil of the 21st century. With 50% capital subsidies under the ₹76,000 crore ISM scheme, India is capitalizing on global China+1 diversification. While legacy nodes serve immediate automotive and telecom needs, our true competitive moat will depend on converting our 20% global chip design workforce into domestic IP creation.',
      sources: [
        { name: 'Ministry of Electronics and Information Technology (MeitY)', type: 'Primary' },
        { name: 'Semiconductor Industry Association (SIA)', type: 'Research' }
      ]
    },
    {
      id: 'news-3',
      rank: 3,
      title: 'India Crosses 200 GW Renewable Generation Capacity Ahead of COP Benchmark',
      category: 'Energy',
      gdRelevance: 'High',
      summary: 'India officially achieved over 200 GW of installed non-fossil energy capacity, accounting for over 46% of total electricity generation capacity ahead of national timelines.',
      whyItMatters: 'Vital for debates on corporate ESG mandates, the energy trilemma (affordability vs reliability vs sustainability), and grid storage economics.',
      gdPointers: [
        'Generation capacity is solved; grid stability, round-the-clock storage, and Discom financial health are the real bottlenecks.',
        'The EU Carbon Border Adjustment Mechanism (CBAM) makes renewable energy a direct determinant of Indian industrial export competitiveness.',
        'Smart prepaid metering and tariff rationalization are required to rescue state electricity distribution companies.'
      ],
      statistics: [
        { metric: 'Non-Fossil Capacity', value: '200+ GW', year: '2025', source: 'MNRE' },
        { metric: 'Renewable Share in Total Capacity', value: '46.3%', year: '2025', source: 'CEA' },
        { metric: 'National 2030 Target', value: '500 GW', year: 'Target 2030', source: 'Panchamrit Goal' },
        { metric: 'Battery Storage Needed', value: '47 GW / 236 GWh', year: '2030', source: 'CEA Report' }
      ],
      impactFacts: [
        'Solar energy installed capacity crossed 92 GW across utility parks and rooftop installations.',
        'Levelized cost of solar with 4-hour battery storage stands at ₹4.30/kWh compared to ₹2.60/kWh for standalone solar.'
      ],
      gdQuestions: [
        'How can India manage peak summer evening power demand without expanding coal baseload generation?',
        'Will the EU CBAM tax penalize developing nations despite their rapid renewable investments?'
      ],
      balancedView: 'Transitioning to 200 GW non-fossil capacity demonstrates exceptional execution speed. However, energy security dictates that coal baseload cannot be retired abruptly until grid-scale battery storage becomes commercially cost-effective.',
      counterargument: 'Some economists warn that forcing Discoms into aggressive green power purchase agreements before resolving their ₹1.5 lakh crore legacy debt will exacerbate state financial deficits.',
      thirtySecondAnswer: 'Crossing 200 GW in renewable power confirms India’s clean energy leadership. The transition has shifted from an environmental goal to an economic competitiveness imperative, especially with European carbon tariffs looming. The key priority now is scaling pumped-hydro and battery storage to ensure 24x7 industrial grid reliability.',
      sources: [
        { name: 'Ministry of New and Renewable Energy (MNRE)', type: 'Primary' },
        { name: 'Central Electricity Authority (CEA)', type: 'Primary' }
      ]
    }
  ]

  return {
    date,
    newsItems,
    summary: {
      topThemes: [
        'Monetary Policy & Inflation Dynamics',
        'High-Tech Industrial Subsidies & Supply Chain Sovereignty',
        'Clean Energy Trilemma & Grid Infrastructure Viability',
        'Macroeconomic Resilience Amid Global Volatility'
      ],
      topFacts: [
        'RBI maintains repo rate at 6.50% with projected FY26 GDP growth at 7.2%.',
        'India Semiconductor Mission allocated ₹76,000 Cr with 50% capital support for fabs.',
        'Non-fossil installed energy capacity crossed 200 GW, reaching 46.3% of total grid capacity.',
        'Banking sector gross NPA ratio dropped to a 12-year low of 2.8%.'
      ],
      topGDTopics: [
        'Subsidies vs Infrastructure: What builds an enduring high-tech economy?',
        'Can India achieve 500 GW green energy without hurting industrial power tariffs?',
        'Monetary policy vs consumption: Is high interest rate slowing urban demand?'
      ],
      openingLines: [
        '“In assessing today’s economic landscape, the central theme is resilience coupled with structural transformation across finance, silicon, and clean energy...”',
        '“Colleagues, true economic sovereignty in the 21st century requires three pillars: stable currency purchasing power, indigenous chip hardware, and sustainable energy grids...”'
      ],
      counterargumentFrameworks: [
        'When evaluating industrial subsidies, always contrast short-term fiscal expenditure against multi-decade supply chain vulnerability and high-value job creation.',
        'When discussing monetary rates, distinguish between headline food inflation driven by weather disruptions and core inflation anchored by policy discipline.'
      ]
    },
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}

export function generateMockTopicAnalysis(topic: string): TopicAnalysis {
  const isAbstract =
    /^(black|white|red|blue|circle|zero|sunrise|shadow|wall|bridge|door|mirror|wind|fire|water)$/i.test(
      topic.trim()
    ) || (topic.trim().split(' ').length <= 2 && !/(ai|gdp|tax|bank|ev|rbi|oil|ipo|india)/i.test(topic))

  if (isAbstract) {
    const abstractInterpretations: AbstractInterpretation[] = [
      {
        lens: 'Strategic Management & The Core Competency Matrix',
        interpretation: `Viewing "${topic}" as the boundary between a company’s core legacy identity and its aggressive growth adjacencies.`,
        arguments: [
          'Companies that preserve core brand trust while venturing into disruptive models capture lasting value.',
          'Over-anchoring on legacy moats risks corporate obsolescence through the Innovator’s Dilemma.'
        ],
        examples: [
          'Apple balancing proprietary hardware ecosystem margins with expanding digital services.',
          'Microsoft pivoting from desktop Windows licensing to open-cloud Azure architecture.'
        ]
      },
      {
        lens: 'Geopolitics & Multipolar International Relations',
        interpretation: `Interpreting "${topic}" as the delicate equilibrium of international diplomacy and strategic autonomy.`,
        arguments: [
          'Nations maintain strategic sovereignty through multi-alignment rather than rigid binary alliances.',
          'Global trade interdependence serves as a stabilizer against catastrophic unilateral conflicts.'
        ],
        examples: [
          'India maintaining bilateral ties with both Western democracies and Eurasian energy suppliers.',
          'Global semiconductor supply chains creating mutual economic deterrence in East Asia.'
        ]
      },
      {
        lens: 'The Technology & Human Ethics Interface',
        interpretation: `Reflecting on "${topic}" as the demarcation between computational algorithmic efficiency and empathetic human intuition.`,
        arguments: [
          'Artificial intelligence automates analytical optimization but cannot replace moral discernment and contextual empathy.',
          'Governance frameworks must preserve human accountability in automated consequential decision-making.'
        ],
        examples: [
          'Algorithmic credit scoring incorporating human appeal channels to prevent systemic socio-economic bias.',
          'Medical diagnostic AI assisting physicians without supplanting bedside patient communication.'
        ]
      }
    ]

    const realWorldPointers: GDPointer[] = [
      {
        argument: `In business, "${topic}" signifies balancing operational discipline with entrepreneurial agility.`,
        explanation: 'Firms that manage this duality successfully build enduring competitive moats while avoiding bureaucratic paralysis.',
        fact: 'Over 50% of the original Fortune 500 companies have been displaced in the last 20 years due to strategic rigidity.',
        example: 'Satya Nadella revitalizing Microsoft by shifting the culture from know-it-all to learn-it-all.',
        source: 'McKinsey Quarterly'
      },
      {
        argument: `Socio-economically, "${topic}" mirrors systemic institutional order versus grassroots disruption.`,
        explanation: 'Sustainable progress requires strong legal and public rails combined with vibrant private sector initiative.',
        fact: 'Public digital infrastructure (UPI, ONDC) has lowered market entry barriers for over 50 million small merchants.',
        example: 'India Stack democratizing formal credit access for previously unbanked rural enterprises.',
        source: 'World Bank DPI Report'
      }
    ]

    const genericPointers: GDPointer[] = [
      {
        argument: 'Cognitive diversity and psychological safety in organizational decision-making.',
        explanation: 'Teams that welcome contrasting viewpoints reach higher-quality strategic consensus.'
      },
      {
        argument: 'Historical and philosophical evolution of symbols across cultural contexts.',
        explanation: 'Understanding foundational concepts broadens lateral thinking and interpersonal communication.'
      }
    ]

    const perspectives: Perspective[] = [
      {
        dimension: 'Business Strategy & Innovation',
        content: 'Translating abstract themes into actionable corporate strategy: McKinsey 3 Horizons, Blue Ocean Strategy, and Lean Startup methodology.',
        keyPoints: ['Exploiting core assets vs exploring new frontiers', 'Managing creative destruction', 'Agile corporate governance']
      },
      {
        dimension: 'Public Policy & Ethics',
        content: 'Balancing utilitarian resource optimization with constitutional rights, equitable welfare distribution, and intergenerational justice.',
        keyPoints: ['Equitable opportunity creation', 'Meritocracy vs social safety nets', 'Long-term sustainable stewardship']
      }
    ]

    const facts: TopicFact[] = [
      {
        fact: 'Companies ranking in the top quartile for strategic agility adapt to market disruptions 2.5x faster than peers.',
        number: '2.5x',
        context: 'Study on agile organizational models across 500 global enterprises.',
        yearDate: '2024',
        source: 'McKinsey & Company',
        howToUseInGD: 'Cite this metric when arguing that conceptual flexibility is a measurable commercial advantage.'
      },
      {
        fact: 'Cognitively diverse leadership teams deliver 35% higher operating margins in volatile markets.',
        number: '35%',
        context: 'Global survey of corporate executive boards across 15 industries.',
        yearDate: '2023',
        source: 'Boston Consulting Group',
        howToUseInGD: 'Use this statistic to bridge abstract metaphor into boardroom decision quality.'
      }
    ]

    const examples: TopicExample[] = [
      {
        title: 'Microsoft’s Cultural & Strategic Transformation',
        description: 'Pivoting from aggressive desktop operating system monopoly to an open-source, collaborative cloud and AI ecosystem.',
        relevance: 'Demonstrates the power of redefining core identity to unlock new enterprise value.',
        howToMention: 'Mention how redefining boundaries enabled Microsoft to reach a $3T valuation.'
      },
      {
        title: 'India’s Unified Payments Interface (UPI)',
        description: 'A government-built public infrastructure rail enabling private fin-tech competition and financial inclusion.',
        relevance: 'Exemplifies structural order harmonizing with entrepreneurial experimentation.',
        howToMention: 'Use as a prime example of balancing foundational architecture with open innovation.'
      }
    ]

    const balancedView: BalancedView = {
      myView: `When analyzing '${topic}', I believe we should view it not as a rigid binary, but as a dynamic tension between structure and freedom, tradition and innovation.`,
      supportingArguments: [
        'Clear structural boundaries provide the clarity and stability needed to scale efficiently.',
        'Continuous experimentation and lateral disruption prevent complacency and obsolescence.'
      ],
      counterargument: 'Critics might argue that excessive philosophizing creates analysis paralysis without concrete operational execution.',
      balancedConclusion: 'Therefore, mature leadership consists of defining a non-negotiable core purpose while empowering radical operational flexibility on the edges.'
    }

    const impactFactors: ImpactFactors = {
      strongestFact: 'Top quartile agile organizations outperform peers by 2.5x during macroeconomic disruptions.',
      strongestExample: 'Satya Nadella transforming Microsoft’s corporate mindset from "know-it-all" to "learn-it-all".',
      strongestArgument: 'Structure and flexibility are complementary: structure provides the safety needed to take bold calculated risks.',
      strongestCounterargument: 'Over-theorizing without rigorous operational milestones results in strategic drift.',
      smartestConnection: 'Connecting this abstract metaphor to Clayton Christensen’s Innovator’s Dilemma.',
      unconventionalPerspective: 'Analyzing the concept through game theory and the Nash equilibrium in cooperative duopolies.',
      commonMistakeToAvoid: 'Getting trapped in literal dictionary definitions instead of elevating the topic to business and socio-economic frameworks.'
    }

    const openingStatements: OpeningStatement[] = [
      {
        type: 'Context-led',
        statement: `“Friends, abstract topics like '${topic}' test our ability to bring structured clarity to ambiguity. Rather than treating this purely as a metaphor, we can examine it through three pragmatic lenses: corporate strategy, geopolitical equilibrium, and the human-technology interface...”`
      },
      {
        type: 'Nuanced/Contrarian',
        statement: `“When we hear the word '${topic}', our immediate instinct is to look for a single definition. In business and public governance, however, '${topic}' represents the delicate equilibrium between preserving core discipline and daring to disrupt established norms...”`
      }
    ]

    const revisionCard: RevisionCard = {
      coreIdea: `Synthesizing '${topic}' as the dynamic balance between organizational structure and transformative agility.`,
      keyFact: 'Cognitively diverse organizations outperform peers by 35% during volatile market conditions.',
      keyNumber: '35%',
      bestExample: 'Satya Nadella redefining Microsoft from legacy software vendor to open cloud & AI leader.',
      balancedConclusion: 'True leadership requires establishing anchored core values while actively fostering continuous experimentation.'
    }

    return {
      topic,
      classification: 'Abstract',
      classificationReason: `The topic "${topic}" is open-ended and metaphorical. Evaluators use it to test lateral thinking, multidisciplinary articulation, structured synthesis, and comfort under ambiguity.`,
      oneLineExplanation: `A multidimensional lens examining "${topic}" through corporate strategy, socio-economic institutions, and human developmental frameworks.`,
      realWorldPointers,
      genericPointers,
      abstractInterpretations,
      perspectives,
      facts,
      examples,
      balancedView,
      impactFactors,
      openingStatements,
      midGDInterventions: [
        `“To build on that point, let us anchor our discussion in how this principle actually operates in corporate governance...”`,
        `“While we have explored the conceptual side, let us consider the pragmatic economic trade-offs this implies...”`
      ],
      disagreementFrameworks: [
        'Acknowledge the colleague’s observation on risk, then introduce the concept of asymmetric upside and calculated experimentation.',
        'Validate the emphasis on tradition while citing case studies where failing to evolve led to market displacement.'
      ],
      thirtySecondAnswer: `When tackling '${topic}', the key insight is that structure and disruption are mutually reinforcing. In corporate strategy as in public policy, enduring progress requires a bedrock of institutional trust and core values, paired with the agility to pivot when the external landscape transforms.`,
      sixtySecondAnswer: `Good morning everyone. Abstract topics like '${topic}' allow us to demonstrate how leaders bring structure to ambiguity. Through an economic and business lens, '${topic}' reflects the classic tension between core competency and exploratory innovation. For instance, Satya Nadella turned Microsoft into a $3 trillion enterprise precisely by keeping customer trust intact while demolishing legacy product silos in favor of open cloud architecture. Similarly, in socio-economic policy, India Stack provides a disciplined public rail that enables millions of fintech experiments. Therefore, the strategic takeaway for any management practitioner is clear: establish uncompromising clarity of core purpose, but preserve radical freedom of execution.`,
      revisionCard,
      sources: [
        { name: 'McKinsey Strategic Agility Review', type: 'Research' },
        { name: 'Harvard Business Review on Adaptive Leadership', type: 'Media' }
      ],
      generatedAt: new Date().toISOString(),
      isDemo: true,
      researchMode: 'demo'
    }
  }

  // Concrete Topic
  const realWorldPointers: GDPointer[] = [
    {
      argument: 'Fiscal Multiplier vs Immediate Budgetary Deficit',
      explanation: 'Every major policy intervention must balance immediate upfront capital commitments against multi-decade economic multiplier effects.',
      fact: 'Capital expenditure in infrastructure yields an estimated GDP multiplier of 2.5x compared to 0.9x for untargeted revenue subsidies.',
      example: 'National Highway development reducing freight transit times by 20% and crowding-in private logistics investments.',
      source: 'Reserve Bank of India Working Paper'
    },
    {
      argument: 'Incentive Alignment and Market Distortion Guardrails',
      explanation: 'Uncalibrated state subsidies or price controls risk crowding out private enterprise or breeding moral hazard.',
      fact: 'Direct Benefit Transfer (JAM Trinity) saved over ₹2.7 lakh crore in cumulative public welfare leakage.',
      example: 'Phased manufacturing programs (PMP) in electronics boosting domestic value addition from 10% to 22%.',
      source: 'NITI Aayog Policy Evaluation'
    }
  ]

  const genericPointers: GDPointer[] = [
    {
      argument: 'Regulatory modernization and consumer privacy protection',
      explanation: 'Balancing fast-paced digital innovation with robust anti-monopoly and consumer safety guardrails.'
    },
    {
      argument: 'Inclusivity and equitable regional industrial development',
      explanation: 'Ensuring economic gains are not confined to Tier-1 metropolitan hubs but distribute into Tier-2 and rural centers.'
    }
  ]

  const perspectives: Perspective[] = [
    {
      dimension: 'Government & Fiscal Macro-Economics',
      content: 'Evaluating fiscal deficit targets, debt-to-GDP trajectory, credit rating implications, and capital allocation efficiency.',
      keyPoints: ['Fiscal deficit consolidation glide path', 'Public capital capex crowding-in', 'Sovereign bond yield stability']
    },
    {
      dimension: 'Corporate & Industry Landscape',
      content: 'Assessing return on invested capital (ROIC), regulatory compliance overheads, global supply chain integration, and talent readiness.',
      keyPoints: ['Unit economics sustainability', 'Ease of doing business & contract enforcement', 'R&D and IP creation']
    },
    {
      dimension: 'Citizen Welfare & Social Equity',
      content: 'Analyzing real wage growth, purchasing power parity, formal job creation, and bottom-of-the-pyramid inclusion.',
      keyPoints: ['Formalization of the workforce', 'Affordability and quality of public services', 'Social mobility opportunities']
    }
  ]

  const facts: TopicFact[] = [
    {
      fact: 'Capital expenditure in infrastructure carries an estimated economic multiplier of 2.5x over a 3-year horizon.',
      number: '2.5x',
      context: 'Macroeconomic study on public capex efficiency in developing economies.',
      yearDate: '2024',
      source: 'RBI Working Paper',
      howToUseInGD: 'Cite this ratio to support arguments favoring long-term asset creation over consumption subsidies.'
    },
    {
      fact: 'India’s formal digital public infrastructure saves an estimated 1.5% of GDP annually in administrative efficiencies.',
      number: '1.5% of GDP',
      context: 'Global report on digital financial rails and administrative governance.',
      yearDate: '2023',
      source: 'World Bank',
      howToUseInGD: 'Use this to substantiate claims that digital governance generates massive fiscal savings.'
    }
  ]

  const examples: TopicExample[] = [
    {
      title: 'Production Linked Incentive (PLI) Schemes in Mobile Manufacturing',
      description: 'Performance-linked fiscal incentives that turned India from a net smartphone importer to a major global exporter.',
      relevance: 'Demonstrates the efficacy of targeted industrial incentives tied to measurable export thresholds.',
      howToMention: 'Cite mobile phone exports reaching $15B+ under the PLI roadmap as a case study in targeted policy design.'
    },
    {
      title: 'Direct Benefit Transfer (DBT) via the JAM Trinity',
      description: 'Biometric verification and direct bank account transfers eliminating intermediary corruption in welfare schemes.',
      relevance: 'Exemplifies structural technological reform driving fiscal prudence.',
      howToMention: 'Highlight ₹2.7 lakh crore in cumulative savings achieved through targeted digital delivery.'
    }
  ]

  const balancedView: BalancedView = {
    myView: `When debating '${topic}', the objective is not to adopt a dogmatic 'all-or-nothing' stance, but to evaluate the conditions under which the benefits outweigh the transition costs.`,
    supportingArguments: [
      'Strategic policy support and capital mobilization catalyze foundational industry capacity.',
      'Rigorous milestone audits and sunset clauses protect taxpayers against perpetual subsidization.'
    ],
    counterargument: 'Skeptics point out that state interventions often suffer from administrative inefficiencies, bureaucratic delays, and rent-seeking.',
    balancedConclusion: 'Therefore, the prudent approach is phased execution accompanied by independent milestone audits, transparent metrics, and clear sunset clauses.'
  }

  const impactFactors: ImpactFactors = {
    strongestFact: 'Capital expenditure delivers a 2.5x economic multiplier compared to 0.9x for untargeted welfare subsidies.',
    strongestExample: 'India’s mobile phone exports surging past $15B following the rollout of the smartphone PLI scheme.',
    strongestArgument: 'Targeted policy intervention accelerates ecosystem creation that market forces alone cannot finance due to initial high risk.',
    strongestCounterargument: 'Without strict sunset clauses and performance milestones, industrial subsidies risk degenerating into cronyism.',
    smartestConnection: 'Linking this topic to the Middle-Income Trap and the imperative of Total Factor Productivity (TFP) growth.',
    unconventionalPerspective: 'Viewing the problem through Behavioral Economics (Nudge Theory) rather than purely punitive regulatory mandates.',
    commonMistakeToAvoid: 'Relying on generic political rhetoric instead of quoting specific sector data, financial metrics, and stakeholder trade-offs.'
  }

  const openingStatements: OpeningStatement[] = [
    {
      type: 'Data-led',
      statement: `“Colleagues, when evaluating '${topic}', we must anchor our arguments in empirical reality: capital investments generate a 2.5x GDP multiplier, whereas untargeted subsidies deliver under 1x. Our discussion today should center on whether the proposed model builds self-sustaining economic assets or merely increases fiscal liability...”`
    },
    {
      type: 'Context-led',
      statement: `“Good morning everyone. The discussion on '${topic}' is not an ideological question; it is an exercise in strategic resource allocation. We must assess it across three critical stakeholders: fiscal sustainability for the government, competitive viability for businesses, and tangible benefits for the common citizen...”`
    }
  ]

  const revisionCard: RevisionCard = {
    coreIdea: `Analyzing '${topic}' as a strategic optimization between fiscal investment, private enterprise incentives, and citizen equity.`,
    keyFact: 'Infrastructure capex delivers a 2.5x GDP multiplier compared to 0.9x for consumption subsidies.',
    keyNumber: '2.5x',
    bestExample: 'Mobile manufacturing PLI scheme transforming India into a $15B+ net exporter of smartphones.',
    balancedConclusion: 'Success depends on phased execution, transparent milestone monitoring, and clear sunset clauses.'
  }

  return {
    topic,
    classification: 'Concrete',
    classificationReason: `The topic "${topic}" centers on real-world economic policy, industrial strategy, measurable stakeholder trade-offs, and governance frameworks.`,
    oneLineExplanation: `A rigorous strategic and macroeconomic analysis of "${topic}", evaluating market efficiency, fiscal sustainability, and stakeholder impact.`,
    realWorldPointers,
    genericPointers,
    perspectives,
    facts,
    examples,
    balancedView,
    impactFactors,
    openingStatements,
    midGDInterventions: [
      `“Let us also consider the supply chain and MSME perspective, since large policy shifts disproportionately affect small suppliers...”`,
      `“While the long-term vision is compelling, what are the transitional frictions and how do we fund them in the short term?”`
    ],
    disagreementFrameworks: [
      'Validate the speaker’s concern regarding fiscal burden, then demonstrate how capital multipliers offset initial outlays over a 3-year horizon.',
      'Acknowledge implementation risks while proposing milestone-based disbursement as a concrete governance safeguard.'
    ],
    thirtySecondAnswer: `The debate around '${topic}' boils down to strategic resource allocation. Backed by a 2.5x multiplier on capital expenditure, structured interventions can build enduring economic moats. The key to ensuring success is enforcing strict performance metrics, preventing fiscal leakage through digital delivery, and instituting clear sunset clauses.`,
    sixtySecondAnswer: `Good morning everyone. In analyzing '${topic}', we must move beyond polarized debate and examine the hard economic trade-offs across three dimensions: fiscal viability, corporate competitiveness, and citizen equity. On the fiscal front, empirical studies show that targeted capital formation yields a 2.5x multiplier, whereas revenue subsidies deliver under 1x. A classic example is the PLI scheme, which transformed India into a $15 billion smartphone exporter within three years. However, the valid counterargument is that unmonitored interventions create fiscal drag and market distortions. Therefore, a mature GD recommendation must advocate for milestone-based fiscal support, robust digital audit rails like the JAM Trinity, and a transparent sunset clause once self-sustaining industry scale is achieved.`,
    revisionCard,
    sources: [
      { name: 'Reserve Bank of India Macroeconomic Studies', type: 'Primary' },
      { name: 'NITI Aayog Policy Evaluation Reports', type: 'Research' }
    ],
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}
