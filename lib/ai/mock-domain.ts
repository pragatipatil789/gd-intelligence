import { DomainAnalysis } from '@/types'

export function generateMockDomainAnalysis(domain: string): DomainAnalysis {
  const domainLower = domain.toLowerCase().trim()

  if (domainLower.includes('finance') || domainLower.includes('banking') || domainLower.includes('fintech')) {
    return getFinanceDomain(domain)
  }
  if (domainLower.includes('tech') || domainLower.includes('ai') || domainLower.includes('digital')) {
    return getTechnologyDomain(domain)
  }
  if (domainLower.includes('analytic') || domainLower.includes('data')) {
    return getAnalyticsDomain(domain)
  }
  if (domainLower.includes('energy') || domainLower.includes('climate') || domainLower.includes('sustain')) {
    return getEnergyDomain(domain)
  }
  // Default: use Finance as template
  return getFinanceDomain(domain)
}

function getFinanceDomain(domain: string): DomainAnalysis {
  return {
    domain,
    description: 'The Finance domain encompasses banking, capital markets, insurance, investment management, financial technology, monetary policy and regulatory frameworks that govern the flow of capital across the economy.',
    executiveSummary: 'Indian finance is undergoing its most significant transformation in decades. The sector is simultaneously absorbing the impact of sustained high interest rates, a fintech revolution, record capital market participation and tightening global regulation. With India\'s banking sector posting a 12-year low in gross NPAs at 2.8%, digital payments crossing ₹20 lakh crore monthly, and the RBI navigating inflation without sacrificing growth, finance is the fulcrum of India\'s economic story. For MBA GDs, finance offers the richest intersection of macro-economics, corporate strategy, consumer behaviour and public policy.',
    top25Developments: [
      {
        rank: 1,
        title: 'RBI Holds Repo Rate at 6.50% for Record Tenth Consecutive MPC Meeting',
        category: 'Regulation',
        subCategory: 'Monetary Policy',
        whatHappened: 'The Reserve Bank of India\'s Monetary Policy Committee unanimously voted to hold the policy repo rate at 6.50% for the tenth consecutive meeting. The MPC cited persistent food price pressures while acknowledging resilient GDP growth projections of 7.2% for FY2025-26.',
        whyItMatters: 'Interest rate decisions determine corporate borrowing costs, retail EMIs, household consumption and currency stability. A sustained 6.50% rate directly impacts every business seeking capital and every household with a home loan.',
        gdPointers: [
          'High rates protect macro-stability: India\'s inflation management has kept the rupee relatively stable compared to emerging market peers during the 2023-24 Fed tightening cycle.',
          'MSMEs suffer disproportionately: while large corporates issue commercial paper at competitive rates, MSMEs pay 11-14% on working capital loans, compressing margins.',
          'The RBI\'s credibility is now a national asset — markets trust the MPC\'s inflation targeting framework, and this institutional credibility must be preserved.',
          'Rate decisions have a 12-18 month lag effect — the full impact of current rates on investment and consumption may still be unfolding.',
          'A premature rate cut with global commodity uncertainty could trigger imported inflation and currency depreciation, as seen in several ASEAN economies in 2022.'
        ],
        importantFacts: [
          { value: '6.50%', context: 'Policy repo rate — unchanged for 10 consecutive MPC meetings', yearDate: 'FY2025-26', source: 'Reserve Bank of India' },
          { value: '7.2%', context: 'Projected real GDP growth rate for FY2025-26', yearDate: 'FY26', source: 'RBI Annual Report' },
          { value: '2.8%', context: 'Gross NPA ratio of Indian banking sector — 12-year low', yearDate: '2025', source: 'RBI Financial Stability Report' },
          { value: '$650 Bn+', context: 'India\'s foreign exchange reserves — adequate import cover of 11 months', yearDate: '2025', source: 'RBI Weekly Statistical Supplement' }
        ],
        impactFact: 'India\'s banking gross NPA ratio has fallen to a 12-year low of 2.8%, reflecting structural improvement in credit underwriting discipline.',
        gdQuestions: [
          'Should the RBI prioritise growth through rate cuts or continue anchoring inflation expectations?',
          'How can MSMEs be protected from high borrowing costs during a monetary tightening cycle?',
          'Is the RBI\'s inflation targeting framework appropriate for an agricultural-demand-driven economy like India?'
        ],
        businessImplication: 'Corporate capex is increasingly financed through internal accruals. Companies with strong balance sheets benefit; capital-intensive sectors like real estate, infrastructure and renewable energy face margin compression.',
        societalImplication: 'Urban middle-class households with home loans and auto loans bear the direct cost. However, currency stability protects imported goods prices for the bottom-of-pyramid consumer.',
        balancedView: 'The RBI\'s cautious stance successfully anchors macro-stability. However, sustained high rates risk dampening private capex that India needs to sustain 7%+ growth beyond FY27.',
        counterargument: 'Critics argue that with food inflation being supply-side driven rather than demand-driven, using high interest rates is an inefficient tool that punishes the entire economy for agricultural supply shocks.',
        gdIntervention: 'The RBI\'s decision to hold rates for the tenth consecutive time reflects disciplined macro-management. With NPAs at a 12-year low and forex reserves above $650 billion, India\'s financial fundamentals are the strongest in two decades. The question we must ask is whether the short-term cost — higher EMIs and compressed MSME margins — is worth the long-term gain of institutional credibility and currency stability.',
        sources: [
          { name: 'Reserve Bank of India MPC Statement', url: 'https://www.rbi.org.in', type: 'Primary' },
          { name: 'RBI Financial Stability Report', url: 'https://www.rbi.org.in/Scripts/PublicationsView.aspx?id=22180', type: 'Primary' }
        ]
      },
      {
        rank: 2,
        title: 'UPI Transactions Cross ₹20 Lakh Crore Monthly — India\'s Digital Payment Revolution',
        category: 'Technology',
        subCategory: 'Digital Payments',
        whatHappened: 'India\'s Unified Payments Interface processed over 15 billion transactions worth ₹20.64 lakh crore in a single month, cementing India\'s position as the world\'s largest real-time payment ecosystem by volume.',
        whyItMatters: 'UPI is no longer just a payment tool — it is the foundational infrastructure enabling digital lending, insurance, investment and financial inclusion for 800 million Indians.',
        gdPointers: [
          'UPI represents India\'s greatest export product — over 10 countries including Singapore, UAE, France and Bhutan have adopted UPI-linked payment rails.',
          'The zero-MDR policy (merchants pay no transaction fees) democratised digital payments but created a revenue sustainability challenge for payment companies.',
          'UPI credit lines (BNPL on UPI) are extending formal credit to 200 million previously credit-invisible Indians.',
          'The concentration risk is significant: PhonePe and Google Pay together command 85% of UPI volume.',
          'NPCI\'s 30% market share cap for single players creates a regulatory tension between innovation and competition.'
        ],
        importantFacts: [
          { value: '15 Bn+', context: 'Monthly UPI transactions by volume — world\'s largest real-time payment system', yearDate: '2025', source: 'NPCI Monthly Data' },
          { value: '₹20.64 Lakh Cr', context: 'Monthly UPI transaction value — represents 65% of India\'s monthly nominal GDP equivalent', yearDate: '2025', source: 'NPCI' },
          { value: '10+ countries', context: 'International markets that have adopted UPI or are in integration discussions', yearDate: '2024-25', source: 'NPCI International' },
          { value: '85%', context: 'Combined market share of PhonePe + Google Pay in UPI volume', yearDate: '2025', source: 'NPCI Analytics' }
        ],
        impactFact: 'India processes more real-time digital payments than all other countries in the world combined — India\'s share of global real-time payment volume exceeds 46%.',
        gdQuestions: [
          'Is the zero-MDR policy sustainable, and who should subsidise the cost of financial inclusion?',
          'Should NPCI\'s 30% market share cap be enforced, even if it disadvantages the most innovative players?',
          'Can UPI\'s global expansion become India\'s most valuable geopolitical soft power tool?'
        ],
        businessImplication: 'Every business in India is now expected to offer UPI as default payment. New revenue streams like UPI credit, insurance-on-payment and investment-on-payment are creating a financial super-app landscape.',
        societalImplication: 'UPI has reduced cash dependency in India\'s informal economy, improving tax compliance, reducing corruption leakage and enabling the credit-invisible to build financial history.',
        balancedView: 'UPI has been transformational for financial inclusion and represents genuine public innovation. However, market concentration and revenue sustainability are systemic risks that regulators must address proactively.',
        counterargument: 'The zero-MDR model is commercially unsustainable — payment companies are effectively providing a public utility at private cost, which cannot continue without either government subsidies or eventual fee introduction.',
        gdIntervention: 'UPI is India\'s most compelling argument against the narrative that only Western markets drive financial innovation. With 15 billion monthly transactions and presence in 10+ countries, UPI is India\'s greatest soft power export. However, the concentration of 85% volume with two players — both foreign-parent-owned — raises a critical question: is India building public infrastructure that primarily benefits American tech companies?',
        sources: [
          { name: 'NPCI Monthly Transaction Dashboard', url: 'https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics', type: 'Primary' },
          { name: 'Reserve Bank of India Payment System Report', url: 'https://www.rbi.org.in', type: 'Primary' }
        ]
      },
      {
        rank: 3,
        title: 'India\'s Capital Markets See Record Retail Participation — 15 Crore Demat Accounts',
        category: 'Business',
        subCategory: 'Capital Markets',
        whatHappened: 'India\'s total demat accounts crossed 15 crore (150 million), with SEBI reporting that retail investors contributed over 35% of NSE equity cash market turnover. Systematic Investment Plans (SIPs) in mutual funds crossed ₹26,000 crore monthly for the first time.',
        whyItMatters: 'Mass retail participation in capital markets signals the financialisation of Indian savings, reducing gold and real estate dependence while channelling long-term capital into productive enterprise.',
        gdPointers: [
          'India\'s household savings traditionally in gold and fixed deposits are shifting to equities and mutual funds — this structural shift has multi-decade growth implications.',
          'Retail investors\' growing share creates market volatility risk during downturns when sentiment-driven selling can amplify corrections.',
          'SEBI\'s investor protection framework — especially the F&O restrictions announced in October 2024 — reflects the regulator\'s concern about retail speculation in derivatives.',
          'SIP culture is creating India\'s first generation of long-term equity investors who invest through cycles, providing market stability.',
          'Zerodha, Groww, Angel One have democratised brokerage but also gamified investing — the line between investing and speculation is dangerously thin for new investors.'
        ],
        importantFacts: [
          { value: '15 Crore', context: 'Total demat accounts — up from just 3.6 crore in 2020, a 4x increase in 5 years', yearDate: '2025', source: 'SEBI Annual Report' },
          { value: '₹26,000 Cr', context: 'Monthly SIP inflows into mutual funds — record high', yearDate: '2025', source: 'AMFI Monthly Data' },
          { value: '35%', context: 'Retail investor share of NSE equity cash turnover', yearDate: '2024-25', source: 'NSE Market Report' },
          { value: '9 crore', context: 'Unique individual investors registered in F&O — SEBI found 93% lost money in FY24', yearDate: '2024', source: 'SEBI Study on F&O Trading' }
        ],
        impactFact: 'SEBI\'s study found that 93% of individual F&O traders lost money in FY2023-24, with average losses of ₹1.1 lakh per person.',
        gdQuestions: [
          'Is India\'s retail trading boom creating productive capital formation or dangerous speculation?',
          'Should SEBI impose stricter eligibility criteria for retail participation in derivatives markets?',
          'How can we ensure financial literacy keeps pace with the democratisation of investment access?'
        ],
        businessImplication: 'Companies can now access deep domestic capital through IPOs, QIPs and mutual fund investments. The cost of equity capital has dropped as domestic liquidity is abundant.',
        societalImplication: 'India is creating the world\'s youngest stock market investor base. Equity culture building creates long-term national wealth but also concentration risk if markets correct sharply.',
        balancedView: 'Democratised capital markets are essential for economic growth. However, regulators must ensure financial literacy accompanies access — enthusiasm without understanding creates systemic fragility.',
        counterargument: 'Rapid financialisation without proportionate financial literacy is dangerous. The same households losing money in F&O would have been better off in safer long-term instruments.',
        gdIntervention: 'The 15 crore demat account milestone tells two stories simultaneously. The optimistic narrative: India\'s households are finally building equity wealth and funding productive enterprises. The cautious narrative: SEBI found 93% of F&O traders lost money, and without financial literacy, we risk a generation accumulating stock market losses instead of wealth.',
        sources: [
          { name: 'SEBI Annual Report 2024-25', url: 'https://www.sebi.gov.in', type: 'Primary' },
          { name: 'Association of Mutual Funds in India (AMFI)', url: 'https://www.amfiindia.com', type: 'Primary' }
        ]
      },
      {
        rank: 4,
        title: 'RBI\'s Digital Rupee (e₹) Pilot Expands to Wholesale and Retail Segments',
        category: 'Technology',
        subCategory: 'Central Bank Digital Currency',
        whatHappened: 'The Reserve Bank of India expanded its Central Bank Digital Currency (CBDC) pilot — the Digital Rupee (e₹) — to cover both wholesale interbank settlement and retail consumer transactions across 13 banks and over 50 lakh users.',
        whyItMatters: 'A central bank digital currency can potentially transform cross-border remittances, government benefit disbursements and monetary policy transmission — while raising fundamental questions about commercial bank disintermediation.',
        gdPointers: [
          'The e₹ is programmable money — the government can attach conditions (spend only on food, education) to welfare disbursements, reducing misuse.',
          'CBDC could eliminate ₹2-4 per transaction cost in remittances, saving India\'s 18 million overseas workers billions annually.',
          'Unlike cryptocurrencies, the e₹ is a liability of the RBI — it offers digital convenience without speculation risk.',
          'Commercial banks face existential disruption if citizens hold savings directly in e₹ wallets, reducing bank deposits and therefore lending capacity.',
          'The CBDC\'s offline functionality is critical for India\'s connectivity gaps — but technical implementation remains a challenge.'
        ],
        importantFacts: [
          { value: '50 Lakh+', context: 'Users in the e₹ retail pilot as of 2025', yearDate: '2025', source: 'RBI Annual Report' },
          { value: '$112 Bn', context: 'India\'s annual inward remittance — world\'s largest — potential CBDC use case', yearDate: '2024', source: 'World Bank Migration Report' },
          { value: '134 countries', context: 'Nations exploring CBDC as of 2024, representing 98% of global GDP', yearDate: '2024', source: 'Atlantic Council CBDC Tracker' },
          { value: '13 banks', context: 'Commercial banks participating in the e₹ pilot', yearDate: '2025', source: 'RBI Press Release' }
        ],
        impactFact: 'India receives $112 billion in remittances annually — the world\'s largest — and CBDC could reduce transfer costs by up to 60%, saving diaspora workers billions.',
        gdQuestions: [
          'Does a CBDC threaten commercial bank deposits, and if so, how should this be managed?',
          'Should the government use programmable CBDC for welfare delivery to prevent misuse?',
          'How does India balance innovation in digital currency with protecting existing fintech ecosystems?'
        ],
        businessImplication: 'Banks must rethink liability management. Insurance, lending and payments companies face regulatory uncertainty. But CBDC creates new API-driven financial services infrastructure.',
        societalImplication: 'Programmable money could be transformational for welfare delivery — eliminating ghost beneficiaries, ensuring DBT reaches the right purpose, and enabling financial inclusion at zero transaction cost.',
        balancedView: 'CBDC is inevitable and beneficial for financial sovereignty. But implementation must protect commercial banking stability, preserve privacy and not create a surveillance-grade financial tracking infrastructure.',
        counterargument: 'Privacy advocates warn that a government-issued, traceable digital currency creates an unprecedented financial surveillance capability that could be misused by future governments.',
        gdIntervention: 'The Digital Rupee isn\'t just a monetary experiment — it\'s India\'s answer to the geopolitical question of dollar dominance. In a world where $112 billion in annual remittances currently flows through dollar-denominated systems, an internationalised e₹ could transform India\'s financial sovereignty. The real challenge is doing this without displacing commercial banks, which remain the backbone of India\'s credit delivery system.',
        sources: [
          { name: 'Reserve Bank of India CBDC Report', url: 'https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?UrlPage=&ID=1218', type: 'Primary' },
          { name: 'Atlantic Council CBDC Tracker', url: 'https://www.atlanticcouncil.org/cbdctracker', type: 'Research' }
        ]
      },
      {
        rank: 5,
        title: 'SEBI Tightens F&O Regulations After ₹1.8 Lakh Crore Retail Losses Study',
        category: 'Regulation',
        subCategory: 'Securities Regulation',
        whatHappened: 'SEBI released a landmark study showing 93% of individual equity F&O traders lost money in FY2023-24, with aggregate retail losses exceeding ₹1.8 lakh crore over three years. SEBI subsequently introduced higher minimum contract sizes, reduced weekly expiries and tightened eligibility norms for F&O trading.',
        whyItMatters: 'The F&O market had become India\'s most dangerous retail speculation trap. SEBI\'s intervention represents a major regulatory shift from access maximisation to investor protection.',
        gdPointers: [
          'The ₹1.8 lakh crore figure represents a massive wealth transfer from retail households to institutional players — this is not investing, it is a structural disadvantage.',
          'SEBI\'s regulatory philosophy is shifting from caveat emptor (buyer beware) to active investor protection — a progressive evolution.',
          'Restricting F&O access may push retail traders to unregulated offshore platforms or grey-market derivatives, creating a new regulatory blind spot.',
          'The wealth destruction from F&O losses is disproportionately borne by young, first-time investors who mistake leverage for opportunity.',
          'Reducing weekly expiries eliminates the manufactured urgency that drives compulsive speculative behaviour.'
        ],
        importantFacts: [
          { value: '93%', context: 'Percentage of individual F&O traders who lost money in FY2023-24', yearDate: 'FY24', source: 'SEBI Study on F&O Participation' },
          { value: '₹1.8 Lakh Cr', context: 'Aggregate retail losses in F&O over FY2021-22 to FY2023-24', yearDate: '2021-24', source: 'SEBI Research Study' },
          { value: '₹1.1 Lakh', context: 'Average individual loss per F&O trader per year', yearDate: 'FY24', source: 'SEBI Study' },
          { value: '9 Crore', context: 'Individual investors registered in NSE F&O segment', yearDate: '2024', source: 'NSE Market Data' }
        ],
        impactFact: '93% of retail F&O traders lost money — and the average loss was ₹1.1 lakh per person per year — making F&O India\'s most widespread financial wealth-destruction instrument.',
        gdQuestions: [
          'Should regulators restrict financial products that are statistically harmful to retail investors?',
          'Is SEBI\'s intervention paternalistic, or is it responsible protection of financially vulnerable citizens?',
          'How do we balance market liquidity and efficiency with retail investor protection?'
        ],
        businessImplication: 'Exchanges and brokers face revenue pressure as F&O volumes moderate. However, structural health of the market improves as speculative excess is reduced.',
        societalImplication: 'Retail investors losing savings in F&O compounds household financial stress and erodes trust in capital markets, potentially reversing the democratisation progress of the past decade.',
        balancedView: 'SEBI\'s intervention is necessary and overdue. A market where 93% of participants lose cannot be characterised as functional. However, overly restrictive regulation must not drive legitimate hedging activity to unregulated channels.',
        counterargument: 'Free markets require informed participants to bear their own risks. SEBI\'s restrictions could reduce market depth, widen bid-ask spreads and increase hedging costs for legitimate institutional risk managers.',
        gdIntervention: 'The finding that 93% of individual F&O traders lost money is not a market statistic — it is a policy emergency. When ₹1.8 lakh crore flows from household savings to institutional accounts through a mechanism disguised as investing, regulators have an obligation to intervene. The question isn\'t whether SEBI was right to act — it is whether the measures are sufficient or merely cosmetic.',
        sources: [
          { name: 'SEBI Study on Derivatives Market', url: 'https://www.sebi.gov.in/reports-and-statistics/reports/sep-2023/analysis-of-profit-and-loss-of-individual-traders-dealing-in-equity-fando-segment_76525.html', type: 'Primary' },
          { name: 'NSE Market Data', url: 'https://www.nseindia.com', type: 'Primary' }
        ]
      }
    ],
    top15GDThemes: [
      { theme: 'Digital Banking vs Traditional Banking', description: 'The existential tension between legacy branch-based banks and mobile-first challengers like neobanks and payment banks.' },
      { theme: 'AI in Financial Services', description: 'How machine learning is transforming credit scoring, fraud detection, wealth management and regulatory compliance.' },
      { theme: 'Financial Inclusion: Progress and Gaps', description: 'Despite Jan Dhan and UPI, 190 million adults remain unbanked — what will bridge the last mile?' },
      { theme: 'FinTech Regulation: Enabling vs Stifling Innovation', description: 'The balance between protecting consumers and enabling fintech startups to disrupt incumbents.' },
      { theme: 'Digital Lending and the BNPL Trap', description: 'Buy-now-pay-later and digital lending apps are extending credit but also creating over-leveraged consumer debt.' },
      { theme: 'Cybersecurity in Finance', description: 'Financial institutions are the #1 target for cyberattacks — and the costs of breaches are systemic.' },
      { theme: 'Central Bank Digital Currency (CBDC)', description: 'Should governments issue digital money? What happens to commercial banks if citizens hold e₹ directly?' },
      { theme: 'ESG Finance and Green Bonds', description: 'Is ESG investing genuine capital allocation to sustainability or greenwashing at scale?' },
      { theme: 'Interest Rate Cycles and Economic Management', description: 'How central banks navigate the inflation-growth trade-off in an interconnected global economy.' },
      { theme: 'Financial Literacy as a National Priority', description: 'When 93% of F&O traders lose money, is access to financial markets premature without foundational literacy?' }
    ],
    top20Facts: [
      { rank: 1, fact: 'India\'s UPI processes more real-time payments than all other countries combined', number: '46% of global volume', year: '2024', whyItMatters: 'Positions India as the global leader in digital payment infrastructure', source: 'ACI Worldwide Global Payments Report 2024' },
      { rank: 2, fact: 'Banking sector Gross NPA ratio fell to a 12-year low', number: '2.8%', year: '2025', whyItMatters: 'Demonstrates structural improvement in India\'s credit underwriting discipline', source: 'RBI Financial Stability Report' },
      { rank: 3, fact: 'India\'s monthly SIP inflows into mutual funds', number: '₹26,000 crore', year: '2025', whyItMatters: 'Indicates structural shift from physical savings (gold, real estate) to financial savings', source: 'AMFI Monthly Data' },
      { rank: 4, fact: 'Percentage of individual F&O traders who lost money in FY24', number: '93%', year: 'FY24', whyItMatters: 'Illustrates the systemic wealth destruction in retail speculation markets', source: 'SEBI Study on F&O Trading' },
      { rank: 5, fact: 'India\'s annual inward remittances — world\'s largest', number: '$112 billion', year: '2024', whyItMatters: 'Largest potential use case for CBDC and cross-border payment innovation', source: 'World Bank Migration Report 2024' },
      { rank: 6, fact: 'Policy Repo Rate — unchanged for 10 consecutive MPC meetings', number: '6.50%', year: 'FY26', whyItMatters: 'Central to any GD on monetary policy, corporate borrowing and consumption', source: 'Reserve Bank of India' },
      { rank: 7, fact: 'UPI monthly transaction volume', number: '15 billion+', year: '2025', whyItMatters: 'Most impressive single number in Indian digital finance', source: 'NPCI Monthly Statistics' },
      { rank: 8, fact: 'Demat accounts in India — 4x growth in 5 years', number: '15 crore (150 million)', year: '2025', whyItMatters: 'Demonstrates mass retail entry into capital markets', source: 'SEBI Annual Report' },
      { rank: 9, fact: 'India\'s foreign exchange reserves — provides import cover', number: '$650 billion+', year: '2025', whyItMatters: 'Represents India\'s macro financial resilience and currency management', source: 'RBI Weekly Data' },
      { rank: 10, fact: 'Average individual annual loss from F&O trading', number: '₹1.1 lakh per person', year: 'FY24', whyItMatters: 'Makes a powerful case for investor protection regulation', source: 'SEBI Study 2023' }
    ],
    openingStrategies: [
      {
        style: 'data-led',
        styleLabel: 'Data-Led Opening',
        script: '"When we examine Finance today, the most striking data point is that India\'s banking sector NPA ratio has fallen to a 12-year low of 2.8%, while UPI processes 15 billion transactions monthly — volumes no country in the world has matched. This tells us that India\'s financial infrastructure is structurally sound. The question for this GD is: is this sound foundation being used to build inclusive, sustainable financial growth, or is it concentrating gains in the hands of a few?"'
      },
      {
        style: 'current-affairs',
        styleLabel: 'Current Affairs Opening',
        script: '"India\'s Monetary Policy Committee just completed its tenth consecutive meeting holding rates at 6.50%. This consistency itself is a remarkable institutional achievement — it signals that the RBI is willing to prioritise long-term macro-stability over short-term growth pressure. The debate in Finance today is not about whether the RBI is right or wrong — it is about whether the financial system is building an inclusive foundation for all 1.4 billion Indians, or an efficient system for the top 15%."'
      },
      {
        style: 'business-led',
        styleLabel: 'Business-Led Opening',
        script: '"From a corporate finance perspective, the most transformational development in Indian Finance is the structural decline in banking sector NPAs from 11.2% in 2018 to 2.8% today. This 8 percentage point improvement has fundamentally changed the risk-return calculus for bank lending. Banks can now lend more aggressively to productive sectors — and the question is whether this lending firepower will reach MSMEs and agriculture, or only the already-creditworthy large corporate segment."'
      },
      {
        style: 'balanced',
        styleLabel: 'Balanced Opening',
        script: '"Indian Finance presents two simultaneous narratives. The optimistic story: 15 crore demat accounts, ₹20 lakh crore in monthly digital payments, banking NPAs at a 12-year low — India is building world-class financial infrastructure. The cautious story: 93% of F&O traders lose money, 190 million adults remain unbanked, and the average household debt-to-income ratio is rising. A mature GD on Finance must hold both realities without letting either dominate."'
      },
      {
        style: 'strategic',
        styleLabel: 'Strategic Opening',
        script: '"India\'s financial system is at an inflection point that will determine whether we become an upper-middle-income economy or get trapped in the middle-income cycle. With UPI being adopted in 10+ countries and India positioning the e₹ as an alternative to dollar-denominated settlement, Finance is no longer just an economic sector — it has become India\'s most powerful geopolitical instrument. The strategic priority must be leveraging this financial infrastructure for both domestic inclusion and global influence."'
      }
    ],
    impactStrategies: [
      {
        category: 'Facts That Will Differentiate Me',
        items: [
          'India processes 46% of the world\'s real-time payments — more than all other countries combined (ACI Worldwide 2024)',
          '93% of individual F&O traders lost money in FY24 — SEBI study (not just popular knowledge, a primary regulatory source)',
          'The RBI held rates steady for 10 consecutive MPC meetings — institutional credibility as an argument, not just monetary policy'
        ]
      },
      {
        category: 'Numbers I Should Remember',
        items: [
          '6.50% — RBI Repo Rate (10 consecutive meetings unchanged)',
          '2.8% — Banking Gross NPA (12-year low)',
          '15 billion — Monthly UPI transactions',
          '₹26,000 crore — Monthly SIP inflows',
          '15 crore — Total demat accounts in India',
          '$112 billion — India\'s annual remittances (world\'s largest)'
        ]
      },
      {
        category: 'Examples I Should Quote',
        items: [
          'UPI international expansion to France, UAE, Singapore — India\'s financial soft power',
          'SEBI\'s F&O restriction as regulatory protection in action',
          'Jan Dhan + Aadhaar + Mobile (JAM Trinity) saving ₹2.7 lakh crore in leakage',
          'e₹ (Digital Rupee) pilot expanding to 50 lakh retail users'
        ]
      },
      {
        category: 'Companies I Should Know',
        items: [
          'HDFC Bank — India\'s largest private bank, merger with HDFC Ltd creates a new-era banking giant',
          'PhonePe — Market leader in UPI with 48% volume share, IPO-bound',
          'Zerodha — Disrupted retail broking, now India\'s largest broker by active clients',
          'Paytm — Case study in FinTech regulatory non-compliance and its consequences',
          'Groww — India\'s fastest-growing investment platform with 85 million users'
        ]
      },
      {
        category: 'Government Policies I Should Know',
        items: [
          'Jan Dhan Yojana — 53 crore accounts, foundation of financial inclusion',
          'Digital India and India Stack — UPI, Aadhaar, DigiLocker as infrastructure',
          'SEBI\'s F&O Regulation Circular (2024) — raising contract sizes, reducing weekly expiries',
          'RBI\'s CBDC (e₹) pilot — both wholesale and retail segments now live'
        ]
      },
      {
        category: 'Industry Reports I Should Know',
        items: [
          'RBI Financial Stability Report — bi-annual, NPA trends, banking health',
          'SEBI Annual Report — market statistics, enforcement, investor protection',
          'AMFI Monthly SIP Data — mutual fund industry health indicator',
          'World Bank Migration and Remittances Report — India\'s $112B remittance context'
        ]
      },
      {
        category: 'Trends I Should Mention',
        items: [
          'Embedded Finance: insurance, credit, investment embedded into non-financial apps',
          'Account Aggregator framework enabling consent-based data sharing for credit',
          'ONDC (Open Network for Digital Commerce) extending financial rails to commerce',
          'AI-powered credit underwriting using alternative data for unbanked borrowers'
        ]
      },
      {
        category: 'Counterarguments I Should Be Prepared For',
        items: [
          'Counter: "UPI is owned by foreign companies" — Response: NPCI is Indian, though apps are foreign',
          'Counter: "High rates hurt growth" — Response: premature cuts risk imported inflation, currency pressure',
          'Counter: "SEBI restrictions reduce market freedom" — Response: freedom without protection is exploitation'
        ]
      },
      {
        category: 'Smart Connections to Other Sectors',
        items: [
          'Finance → Technology: AI in credit scoring, fraud detection, robo-advisory',
          'Finance → Agriculture: KCC digitisation, crop insurance reform, mandi digitalisation',
          'Finance → Climate: Green bonds, sovereign green bonds, BRSR reporting for listed companies',
          'Finance → Geopolitics: CBDC, de-dollarisation, SWIFT alternatives'
        ]
      },
      {
        category: 'Common Mistakes to Avoid',
        items: [
          'Don\'t confuse UPI (payment rail) with a bank — UPI is infrastructure, not an institution',
          'Don\'t say "high interest rates are always bad" — they protect currency and fight inflation',
          'Don\'t confuse NPAs with bad loans generically — NPA has a specific 90-day overdue definition',
          'Don\'t cite only the bull case — the 93% F&O loss data is essential for credibility'
        ]
      }
    ],
    crossIndustryConnections: [
      { sector: 'Economy', connection: 'Finance is the transmission mechanism for all monetary policy — rate decisions ripple through every sector via borrowing costs, currency and inflation', example: 'RBI\'s 6.50% rate directly determines EMIs for 50 million home loan borrowers' },
      { sector: 'Government & Policy', connection: 'Government uses financial infrastructure (DBT, JAM, CBDC) to deliver welfare, collect taxes and reduce fiscal leakage', example: 'DBT saved ₹2.7 lakh crore through Aadhaar-linked welfare delivery' },
      { sector: 'Technology', connection: 'AI, ML and cloud are transforming every dimension of finance from credit underwriting to fraud detection to customer acquisition', example: 'HDFC Bank\'s AI-powered credit decisioning processes 90% of personal loans without human intervention' },
      { sector: 'Consumers', connection: 'Financial inclusion directly determines whether 1.4 billion people can build savings, access credit and insure against risk', example: '53 crore Jan Dhan accounts opened — but 40% remain dormant, showing access ≠ use' },
      { sector: 'Employment', connection: 'Finance is a major employer and a key enabler of MSME credit, which determines small business hiring capacity', example: '6 crore MSMEs employ 120 million people — their credit access determines India\'s employment generation' },
      { sector: 'Sustainability', connection: 'ESG-linked bonds and green finance are creating a new capital allocation framework where sustainability performance affects cost of capital', example: 'India issued its first sovereign green bond in 2023 — ₹16,000 crore to fund clean energy infrastructure' },
      { sector: 'Globalisation', connection: 'Cross-border payments, SWIFT alternatives, rupee trade settlement and CBDC internationalisation are reshaping global finance flows', example: 'India settling oil trade with UAE in rupees reduces dollar dependency and currency risk' },
      { sector: 'Geopolitics', connection: 'Financial sanctions, dollar dominance and the race to build alternative settlement systems are reshaping geopolitical power', example: 'Russia\'s SWIFT exclusion in 2022 accelerated India\'s interest in CBDC and rupee trade mechanisms' },
      { sector: 'Regulation', connection: 'Finance is the most regulated sector — RBI, SEBI, IRDAI, PFRDA create an overlapping regulatory architecture that determines innovation pace', example: 'SEBI\'s F&O regulations demonstrate how financial regulation can shift from enabling access to protecting participants' },
      { sector: 'Innovation', connection: 'India Stack, Account Aggregator and ONDC represent public digital infrastructure that enables private financial innovation at massive scale', example: 'Account Aggregator enables 430 million bank account holders to share financial data for credit — a global first' }
    ],
    companiesToKnow: [
      { name: 'HDFC Bank', type: 'Indian', whatTheyDo: 'India\'s largest private sector bank by assets and market capitalisation', whyRelevant: 'Post-merger with HDFC Ltd, represents India\'s largest private financial institution and the template for universal banking', recentDevelopment: 'Completed landmark merger with HDFC Ltd in July 2023, creating a $170 billion balance sheet entity', gdUse: 'Use as example of India\'s private banking maturity and the complexity of mega-mergers in regulated financial sectors' },
      { name: 'PhonePe', type: 'Indian', whatTheyDo: 'India\'s largest UPI-based digital payments platform with 48% market share', whyRelevant: 'Subsidiary of Walmart, PhonePe is at the centre of UPI concentration and market cap debates', recentDevelopment: 'Valued at $12 billion, expanding into insurance, mutual funds and international payments', gdUse: 'Use to discuss UPI market concentration, foreign ownership of domestic financial infrastructure and fintech monetisation' },
      { name: 'Paytm (One 97 Communications)', type: 'Indian', whatTheyDo: 'First Indian fintech giant — payments, banking, lending, insurance', whyRelevant: 'Paytm\'s RBI action in 2024 (Paytm Payments Bank restrictions) is the most important fintech regulatory case study in Indian history', recentDevelopment: 'RBI restricted Paytm Payments Bank operations in Feb 2024 for compliance failures — stock fell 40% in a day', gdUse: 'Essential case study for fintech regulation, compliance culture and the risks of growth-first, governance-later strategies' },
      { name: 'Zerodha', type: 'Indian', whatTheyDo: 'India\'s largest retail stock broker by active client base, profitmaker without external funding', whyRelevant: 'Disrupted traditional full-service broking, created India\'s retail investor culture but also enabled mass F&O speculation', recentDevelopment: 'Reports ₹4,700 crore profit on ₹8,320 crore revenue with zero external funding — India\'s most profitable bootstrapped startup', gdUse: 'Use as example of disruptive innovation, profitability without VC funding and the unintended consequences of democratised market access' },
      { name: 'State Bank of India', type: 'Indian', whatTheyDo: 'India\'s largest bank — government-owned — with 500 million customers and ₹56 lakh crore in assets', whyRelevant: 'SBI represents the continued importance of public sector banking in India despite private sector growth', recentDevelopment: 'SBI\'s profit crossed ₹61,000 crore in FY24 — the highest ever for any Indian bank', gdUse: 'Use to discuss public sector banking efficiency improvement, PSU reform and the role of state-owned banks in financial inclusion' },
      { name: 'BlackRock', type: 'Global', whatTheyDo: 'World\'s largest asset manager with $10 trillion+ AUM', whyRelevant: 'BlackRock\'s India expansion through Jio BlackRock mutual fund JV represents global capital\'s confidence in Indian markets', recentDevelopment: 'Joint venture with Jio Financial Services launched India\'s first AI-powered ETF platform', gdUse: 'Use as example of global capital entering India and the competitive implications for domestic asset managers like SBI MF and HDFC AMC' },
      { name: 'Groww', type: 'Indian', whatTheyDo: 'India\'s fastest-growing investment platform — mutual funds, stocks, F&O, IPOs', whyRelevant: 'Overtook Zerodha in registered users (85 million) — represents the mass democratisation of investing', recentDevelopment: 'Acquired Indiabulls Housing Finance for ₹175 crore to enter NBFC lending', gdUse: 'Use to discuss retail investor growth, competition in the broker segment and the pivot from fintech to full financial services' },
      { name: 'Bajaj Finance', type: 'Indian', whatTheyDo: 'India\'s largest NBFC — consumer lending, SME financing, insurance, payments', whyRelevant: 'Bajaj Finance pioneered consumer lending at scale in India — from 0-EMI on appliances to digital credit', recentDevelopment: 'AUM crossed ₹3.5 lakh crore; pivoting to app-first banking model competing directly with digital banks', gdUse: 'Use as example of NBFC disruption of traditional banking, consumer credit growth and the NBFC-bank regulatory divide' }
    ],
    reportsToKnow: [
      { title: 'RBI Financial Stability Report', publisher: 'Reserve Bank of India', year: '2024-25', keyFinding: 'Banking NPA at 12-year low of 2.8%; stress tests show Indian banks resilient to severe macro shocks', gdUse: 'Quote NPA figures and stress test results to support arguments on banking sector health', url: 'https://www.rbi.org.in/Scripts/AnnualReportMainPage.aspx' },
      { title: 'SEBI Annual Report 2024-25', publisher: 'Securities and Exchange Board of India', year: '2024-25', keyFinding: 'Demat accounts cross 15 crore; SIP inflows at record ₹26,000 crore/month; F&O retail losses quantified', gdUse: 'Use for capital market statistics, investor protection arguments and fintech regulation discussion', url: 'https://www.sebi.gov.in/reports-and-statistics/reports.html' },
      { title: 'ACI Worldwide Global Payments Report', publisher: 'ACI Worldwide', year: '2024', keyFinding: 'India processes 46% of global real-time payment volume — more than all other countries combined', gdUse: 'Quote India\'s global payment leadership position in any UPI or digital finance GD', url: 'https://www.aciworldwide.com/prime-time-for-real-time' },
      { title: 'World Bank Migration and Remittances Report', publisher: 'World Bank', year: '2024', keyFinding: 'India received $112 billion in remittances — world\'s largest recipient for the second consecutive year', gdUse: 'Use for CBDC internationalisation, diaspora finance and cross-border payment discussions', url: 'https://www.worldbank.org/en/topic/migrationremittancesdiasporaissues/brief/migration-remittances-data' },
      { title: 'McKinsey Global Banking Annual Review', publisher: 'McKinsey & Company', year: '2024', keyFinding: 'Global banking ROE at 12% — highest since 2007; AI expected to add $200-340 billion value to banking by 2030', gdUse: 'Use for AI in banking arguments and global banking profitability comparison with Indian banks', url: 'https://www.mckinsey.com/industries/financial-services' }
    ],
    thirtySecondSummary: 'Indian Finance today is defined by three macro forces: structural banking health at multi-decade highs (NPA at 2.8%), a digital payments revolution processing 15 billion UPI transactions monthly, and a regulatory correction protecting retail investors from speculative losses. The central question is whether this strong foundation is being used to build inclusive financial prosperity for all 1.4 billion Indians, or efficient financial services for the top income quartile.',
    sixtySecondSummary: 'India\'s Finance sector is simultaneously experiencing its greatest structural improvements and facing its most complex new challenges. On the positive side: banking NPAs at a 12-year low of 2.8%, UPI processing 46% of the world\'s real-time payment volume, and SIP inflows at record ₹26,000 crore monthly reflect genuine financial maturity. However, 93% of F&O traders losing money, 190 million adults remaining unbanked, and the CBDC\'s potential to disintermediate commercial banks represent equally real risks. The defining Finance GD question is not about one trend — it is about whether India\'s financial innovation and stability can co-exist with inclusion and protection for its most vulnerable citizens.',
    rapidRevision: {
      tenThingsMustKnow: [
        'RBI held repo rate at 6.50% for 10 consecutive MPC meetings — macro stability priority',
        'Banking NPA ratio at 2.8% — 12-year low, structural improvement',
        'UPI processes 15 billion transactions monthly — world\'s largest real-time payment system',
        '93% of F&O traders lose money — SEBI study 2023',
        'India receives $112 billion in remittances — world\'s largest (World Bank 2024)',
        'SIP inflows at ₹26,000 crore/month — record high, financialisation of savings',
        '15 crore demat accounts — 4x growth in 5 years',
        'e₹ (Digital Rupee) pilot has 50 lakh retail users — CBDC in progress',
        'SEBI\'s F&O restriction raised contract sizes and reduced weekly expiries',
        'India processes 46% of global real-time payment volume (ACI Worldwide 2024)'
      ],
      tenNumbersMustRemember: [
        '6.50% — RBI Repo Rate',
        '2.8% — Banking Gross NPA (12-year low)',
        '15 billion — Monthly UPI transactions',
        '₹20.64 lakh crore — Monthly UPI value',
        '46% — India\'s share of global real-time payment volume',
        '93% — F&O traders who lost money in FY24',
        '₹1.8 lakh crore — Total F&O retail losses 2021-24',
        '$112 billion — India\'s annual remittances',
        '15 crore — Total demat accounts',
        '₹26,000 crore — Monthly SIP inflows'
      ],
      fiveCompaniesMustKnow: [
        'HDFC Bank — India\'s largest private bank, post-merger scale',
        'PhonePe — UPI market leader (48% share), Walmart-backed',
        'Paytm — Most important fintech regulatory case study',
        'Zerodha — Bootstrapped broker disrupting the market',
        'Bajaj Finance — NBFC that redefined consumer lending in India'
      ],
      fiveReportsMustKnow: [
        'RBI Financial Stability Report — NPA, banking health, stress tests',
        'SEBI Annual Report — Capital market stats, investor protection',
        'ACI Worldwide Global Payments Report — India\'s 46% global volume',
        'SEBI F&O Study 2023 — 93% loss data',
        'World Bank Migration Report — $112B remittance figure'
      ],
      fiveCurrentTrends: [
        'Embedded Finance: credit, insurance, investment built into non-financial apps',
        'Account Aggregator: consent-based financial data sharing for credit',
        'CBDC (e₹): programmable, traceable central bank digital money',
        'AI-powered credit: alternative data for unbanked borrowers',
        'UPI internationalisation: soft power through payment rails'
      ],
      fivePotentialGDQuestions: [
        'Should India prioritise financial inclusion or financial stability in its banking policy?',
        'Is UPI\'s market concentration (85% with 2 foreign-owned apps) a national security risk?',
        'Should SEBI restrict retail access to high-risk financial products like F&O?',
        'Will the Digital Rupee (e₹) disintermediate commercial banks?',
        'Is India\'s FinTech regulation enabling innovation or creating regulatory arbitrage?'
      ]
    },
    sources: [
      { name: 'Reserve Bank of India', url: 'https://www.rbi.org.in', type: 'Primary' },
      { name: 'Securities and Exchange Board of India', url: 'https://www.sebi.gov.in', type: 'Primary' },
      { name: 'NPCI (National Payments Corporation of India)', url: 'https://www.npci.org.in', type: 'Primary' },
      { name: 'AMFI (Association of Mutual Funds in India)', url: 'https://www.amfiindia.com', type: 'Primary' }
    ],
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}

function getTechnologyDomain(domain: string): DomainAnalysis {
  return {
    domain,
    description: 'Technology encompasses artificial intelligence, cloud computing, semiconductors, cybersecurity, digital infrastructure and the platforms redefining how businesses and governments operate in the 21st century.',
    executiveSummary: 'Technology is the single most transformative force in the global economy in 2025. Generative AI is moving from experiment to enterprise at unprecedented speed. India\'s semiconductor mission, ₹76,000 crore PLI schemes and 5G rollout are creating a new digital industrial base. Meanwhile, cybersecurity threats, data sovereignty debates and AI regulation are forcing governments to choose between openness and control. For MBA GDs, Technology offers the richest intersection of innovation, geopolitics, ethics, employment and economic competitiveness.',
    top25Developments: [
      {
        rank: 1,
        title: 'Generative AI Adoption Accelerates Across Indian Enterprises — 60% of Large Companies Report Active Deployments',
        category: 'Technology',
        subCategory: 'Artificial Intelligence',
        whatHappened: 'A NASSCOM survey found 60% of large Indian enterprises have active GenAI deployments, with IT services firms leading. Companies report GenAI reducing code writing time by 35-50% and customer support costs by 25-40%. India now has over 1,500 GenAI startups.',
        whyItMatters: 'GenAI is the fastest adoption of any enterprise technology in history. It is simultaneously creating productivity gains and raising questions about white-collar job displacement, IP ownership and regulatory oversight.',
        gdPointers: [
          'GenAI is not replacing jobs wholesale — it is eliminating specific tasks within jobs, requiring workforce reskilling rather than replacement.',
          'India\'s $250 billion IT services industry is both the greatest beneficiary (productivity) and the greatest vulnerability (commoditisation of routine code).',
          'The data sovereignty question is acute: training GenAI models on Indian data using American infrastructure raises fundamental questions about IP and digital colonialism.',
          'The productivity gains are real but unevenly distributed — large enterprises benefit first while SMEs struggle with implementation costs and expertise gaps.',
          'Hallucination risk (AI generating confident but wrong answers) creates professional liability exposure that most organisations have not yet addressed.'
        ],
        importantFacts: [
          { value: '60%', context: 'Large Indian enterprises with active GenAI deployments (NASSCOM Survey 2024)', yearDate: '2024', source: 'NASSCOM Strategic Review 2024' },
          { value: '$4 trillion', context: 'Potential annual GDP boost from AI globally by 2030 (McKinsey estimate)', yearDate: '2030 projection', source: 'McKinsey Global Institute' },
          { value: '1,500+', context: 'GenAI startups in India — second largest globally after the US', yearDate: '2024', source: 'NASSCOM' },
          { value: '35-50%', context: 'Reduction in code writing time reported by developers using GitHub Copilot', yearDate: '2024', source: 'GitHub Research' }
        ],
        impactFact: 'India has 1,500+ GenAI startups — second only to the US — but 80% of GenAI compute infrastructure is owned by three American companies (AWS, Azure, Google Cloud).',
        gdQuestions: [
          'Will GenAI create more jobs than it displaces in India\'s IT sector over the next decade?',
          'Should India regulate GenAI output quality and liability before adoption scales further?',
          'Is India\'s GenAI boom creating real value or dependency on American AI infrastructure?'
        ],
        businessImplication: 'IT services companies face margin pressure as AI automates routine coding. But GenAI also creates new consulting and implementation revenues. Every industry must now factor AI into its competitive strategy.',
        societalImplication: 'India produces 1.5 million engineering graduates annually. GenAI\'s impact on software job creation will determine the employability of this cohort over the next decade.',
        balancedView: 'GenAI is genuinely transformational and India is well-positioned to benefit. However, the productivity gains must be matched with reskilling investment and regulatory frameworks that protect workers and ensure IP sovereignty.',
        counterargument: 'Critics argue that India\'s IT services model — built on labour arbitrage — is fundamentally disrupted by AI, and the sector will need a decade-long painful restructuring.',
        gdIntervention: 'Generative AI is the most consequential technology transition since the internet. For India\'s 5 million IT professionals, it is both an opportunity and an existential question. If we use AI to move up the value chain from code writing to innovation design and domain expertise, we win. If we merely use AI tools built by American companies to do the same work more cheaply, we accelerate our own commoditisation.',
        sources: [
          { name: 'NASSCOM Strategic Review 2024', url: 'https://www.nasscom.in', type: 'Research' },
          { name: 'McKinsey Global Institute AI Report', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai', type: 'Research' }
        ]
      },
      {
        rank: 2,
        title: 'India Semiconductor Mission Gets ₹76,000 Crore Allocation — First Fab Units Approved',
        category: 'Government',
        subCategory: 'Semiconductor Policy',
        whatHappened: 'The Government of India approved the first commercial semiconductor fabrication units under the ₹76,000 crore India Semiconductor Mission (ISM). Micron Technology\'s $2.75 billion assembly and test facility in Gujarat achieved first silicon milestones. Tata Electronics and CG Power also received fab approvals.',
        whyItMatters: 'Semiconductors are the critical infrastructure of the modern economy. India\'s dependence on imported chips is a strategic vulnerability — from smartphones to electric vehicles to defence systems.',
        gdPointers: [
          'Semiconductors are the "crude oil of the 21st century" — controlling chip supply is controlling economic and military power.',
          'India\'s entry focuses on mature nodes (28nm+) which serve automotive, industrial IoT and telecom — not the bleeding-edge chips that make headlines but aren\'t commercially accessible.',
          '20% of the world\'s semiconductor design engineers are Indian — converting this design talent into manufacturing presence is the strategic logic of ISM.',
          'A single fab requires specialised supply chains (ultrapure water, specialty chemicals, clean rooms) that India must build from scratch — this is a multi-decade ecosystem play.',
          'The 50% capital subsidy creates risk of WTO challenges and retaliatory subsidies — trade policy must be aligned with industrial policy.'
        ],
        importantFacts: [
          { value: '₹76,000 Cr', context: 'Government allocation for India Semiconductor Mission — 50% capital subsidy for approved fabs', yearDate: '2022-26', source: 'Ministry of Electronics & IT (MeitY)' },
          { value: '$2.75 Bn', context: 'Micron Technology\'s semiconductor assembly and test facility in Gujarat — India\'s first major chip fab', yearDate: '2023', source: 'MeitY Press Release' },
          { value: '20%', context: 'Share of global VLSI chip design engineers who are Indian — India\'s key competitive asset', yearDate: '2024', source: 'SIA India Report' },
          { value: '$600 Bn', context: 'Global semiconductor market size — India targets capturing 10% by 2030', yearDate: '2025', source: 'Semiconductor Industry Association' }
        ],
        impactFact: '20% of the world\'s chip design engineers are Indian — but India currently contributes less than 1% of global semiconductor manufacturing revenue.',
        gdQuestions: [
          'Can India realistically compete with Taiwan, South Korea and China in semiconductor manufacturing?',
          'Is subsidising chip manufacturing a better use of public funds than investing in chip design and software?',
          'How does India balance technology sovereignty with commercial viability in the semiconductor sector?'
        ],
        businessImplication: 'Electronics manufacturers gain domestic chip supply, reducing import dependency and currency risk. Auto, telecom and defence sectors benefit most. Software companies gain access to cheaper, domestically sourced silicon.',
        societalImplication: 'A domestic semiconductor industry creates high-value engineering employment and positions India in the global tech supply chain — a multi-decade strategic and economic benefit.',
        balancedView: 'India\'s semiconductor ambition is strategically sound. However, realistic timelines must be set — Taiwan\'s ecosystem took 40 years to build, and India\'s subsidies alone won\'t compress that timeline.',
        counterargument: 'Comparative advantage economics suggest India should focus on software and design (where it leads globally) rather than expensive hardware manufacturing where it has no established ecosystem.',
        gdIntervention: 'Semiconductors are not just a technology story — they are India\'s answer to a strategic vulnerability. When 90% of your chips come from Taiwan and China, and a military conflict or natural disaster can halt production, that is a national security crisis. The ₹76,000 crore ISM isn\'t subsidy — it is strategic insurance. The question is whether we\'re building genuine manufacturing capability or importing technology and calling it self-reliance.',
        sources: [
          { name: 'Ministry of Electronics and Information Technology', url: 'https://www.meity.gov.in/india-semiconductor-mission', type: 'Primary' },
          { name: 'Semiconductor Industry Association', url: 'https://www.semiconductors.org', type: 'Research' }
        ]
      },
      {
        rank: 3,
        title: 'India\'s 5G Rollout Crosses 700 Cities — Enterprise and Rural Use Cases Now Central',
        category: 'Technology',
        subCategory: 'Telecom Infrastructure',
        whatHappened: 'India\'s 5G network now covers 700+ cities with over 100 million connections. Reliance Jio and Airtel have deployed the world\'s largest and second-largest 5G networks respectively by new site rollout speed. Enterprise 5G use cases in manufacturing, logistics and healthcare are gaining traction.',
        whyItMatters: '5G is not just faster mobile internet — it is the enabling infrastructure for Industry 4.0, IoT, autonomous vehicles, smart cities and remote healthcare.',
        gdPointers: [
          'India achieved the fastest 5G rollout in the world — from launch to 700 cities in under 24 months, faster than China, US or EU.',
          'The consumer 5G case is weak (most services don\'t need 5G speeds) — the real value is in enterprise private networks for manufacturing automation.',
          'India\'s 5G advantage may be short-lived if the revenue model doesn\'t generate ARPU growth — Jio and Airtel both need 5G to justify ₹5 lakh crore+ in spectrum investment.',
          'The geopolitical dimension: India chose not to deploy Huawei 5G equipment — a politically loaded but strategically sound decision that aligns with the Quad security framework.',
          'Rural 5G deployment remains the real challenge — 65% of India\'s population in rural areas will need satellite + terrestrial hybrid solutions.'
        ],
        importantFacts: [
          { value: '700+ cities', context: 'Cities with 5G coverage in India as of 2025 — world\'s fastest rollout', yearDate: '2025', source: 'TRAI Telecom Subscription Data' },
          { value: '100 million+', context: '5G connections in India — added in under 2 years post-launch', yearDate: '2025', source: 'Reliance Jio + Airtel Combined Data' },
          { value: '$1 trillion', context: 'Global economic impact of 5G by 2030 — expected contribution to GDP', yearDate: '2030 projection', source: 'GSMA Intelligence Report' },
          { value: '₹5 lakh crore', context: 'Combined 5G spectrum + infrastructure investment by Indian telecom operators', yearDate: '2022-25', source: 'TRAI Annual Report' }
        ],
        impactFact: 'India achieved the world\'s fastest 5G rollout — from 0 to 700 cities in 24 months — surpassing the US, South Korea and China in deployment speed.',
        gdQuestions: [
          'Is 5G consumer ARPU growth sufficient to justify ₹5 lakh crore in operator investments?',
          'Should India have allowed Huawei 5G equipment to achieve faster, cheaper rollout?',
          'How can 5G be deployed in rural areas without commercially viable business models?'
        ],
        businessImplication: 'Manufacturing, logistics and healthcare sectors can now deploy private 5G networks for automation, real-time tracking and remote diagnostics. The opportunity is massive but implementation requires significant enterprise-level investment and expertise.',
        societalImplication: '5G-enabled telemedicine could reach 600 million rural Indians who currently lack adequate healthcare access. Smart city applications can improve traffic, waste management and energy efficiency in urban centres.',
        balancedView: '5G rollout is a genuine achievement. But without enterprise monetisation and rural deployment strategies, it risks becoming expensive infrastructure seeking a sustainable business model.',
        counterargument: 'The 5G hype exceeds current reality — most consumers cannot distinguish 4G from 5G in daily use, and enterprise use cases are still nascent. The investment may be premature.',
        gdIntervention: 'India\'s 5G achievement is real — world\'s fastest rollout, 700 cities, 100 million connections. But speed of deployment is just Chapter 1. Chapter 2 is monetisation — and that requires shifting from consumer gigabit speeds to enterprise private networks that automate factories, enable remote surgery and create smart cities. If we can execute Chapter 2, 5G becomes India\'s manufacturing revolution enabler. If we can\'t, we\'ve built a very expensive consumer broadband upgrade.',
        sources: [
          { name: 'TRAI Telecom Subscription Data', url: 'https://www.trai.gov.in', type: 'Primary' },
          { name: 'GSMA Intelligence India Report', url: 'https://www.gsma.com/solutions-and-impact/technologies/networks/gsma_resources/india-5g-report', type: 'Research' }
        ]
      }
    ],
    top15GDThemes: [
      { theme: 'AI and Job Displacement: Disruption or Evolution?', description: 'Whether AI eliminates employment or creates new categories of work — the central labour debate of the 21st century.' },
      { theme: 'Data as the New Oil: Ownership, Privacy and Monetisation', description: 'Who owns personal data, who monetises it and what regulatory frameworks protect citizen rights.' },
      { theme: 'Technology Sovereignty vs Open Internet', description: 'Nations building walled digital gardens vs the principle of a free, open global internet.' },
      { theme: 'India\'s Semiconductor Ambition: Strategy or Subsidy Trap?', description: 'Whether India can realistically build a semiconductor manufacturing ecosystem.' },
      { theme: 'Deepfakes, Misinformation and AI-Generated Content', description: 'The societal risks of AI-generated audio, video and text at scale in elections and public discourse.' },
      { theme: 'Regulation of Big Tech: Competition or Innovation?', description: 'Whether antitrust action against Google, Meta, Amazon stifles innovation or enables competition.' },
      { theme: 'EdTech: Promise vs Reality in India', description: 'The post-COVID collapse of several EdTech unicorns and lessons for technology in education.' },
      { theme: 'Cybersecurity as National Security', description: 'Critical infrastructure attacks and the case for treating cybersecurity as a defence priority.' },
      { theme: '5G and the Fourth Industrial Revolution', description: 'Whether 5G will deliver on its Industry 4.0 promise or remain primarily a consumer entertainment upgrade.' },
      { theme: 'Open Source AI vs Closed Proprietary Models', description: 'Meta\'s LLaMA open release vs OpenAI\'s proprietary approach — which model serves society better?' }
    ],
    top20Facts: [
      { rank: 1, fact: 'India has 1,500+ GenAI startups — second only to the US', number: '1,500+', year: '2024', whyItMatters: 'Positions India as a genuine global AI innovation hub', source: 'NASSCOM Strategic Review 2024' },
      { rank: 2, fact: 'India\'s share of global VLSI chip design engineers', number: '20%', year: '2024', whyItMatters: 'India\'s key competitive asset in the global semiconductor value chain', source: 'SIA India' },
      { rank: 3, fact: '5G cities covered in India in under 24 months', number: '700+', year: '2025', whyItMatters: 'World\'s fastest 5G rollout — an infrastructure achievement', source: 'TRAI' },
      { rank: 4, fact: 'ISM government allocation for semiconductor manufacturing', number: '₹76,000 crore', year: '2022-26', whyItMatters: 'India\'s commitment to technology sovereignty in chips', source: 'MeitY' },
      { rank: 5, fact: 'Global economic impact of AI by 2030', number: '$4 trillion', year: '2030 projection', whyItMatters: 'Contextualises why AI is the most important technology investment priority', source: 'McKinsey Global Institute' },
      { rank: 6, fact: 'India\'s IT services market size', number: '$250 billion', year: 'FY25', whyItMatters: 'Scale of the sector most affected by AI adoption', source: 'NASSCOM' },
      { rank: 7, fact: 'Code writing time reduction for developers using AI tools', number: '35-50%', year: '2024', whyItMatters: 'Shows AI\'s direct impact on the IT services labour model', source: 'GitHub Research' },
      { rank: 8, fact: 'Global cybercrime cost per year', number: '$8 trillion', year: '2023', whyItMatters: 'Makes cybersecurity the third largest economy if it were a country', source: 'Cybersecurity Ventures' },
      { rank: 9, fact: 'Digital Public Infrastructure (India Stack) users', number: '1.4 billion', year: '2025', whyItMatters: 'India\'s unique model of government-built open digital infrastructure', source: 'MeitY' },
      { rank: 10, fact: 'Global semiconductor market size', number: '$600 billion', year: '2025', whyItMatters: 'India targets 10% share — a $60 billion opportunity', source: 'SIA Annual Report' }
    ],
    openingStrategies: [
      {
        style: 'data-led',
        styleLabel: 'Data-Led Opening',
        script: '"When we talk about Technology today, the most significant data point is that 60% of large Indian enterprises already have active Generative AI deployments — and this adoption happened in under 18 months. No enterprise technology in history has been adopted this quickly. The question for this GD isn\'t whether AI will transform business — it already has. The question is whether India\'s workforce, regulatory framework and digital infrastructure are positioned to capture this transformation\'s benefits or absorb its disruption."'
      },
      {
        style: 'current-affairs',
        styleLabel: 'Current Affairs Opening',
        script: '"India\'s semiconductor mission just received its first major milestone — Micron\'s $2.75 billion fab in Gujarat achieved first silicon. This moment is as significant as when India launched its first satellite. Semiconductors are the infrastructure of the 21st century economy, and India\'s 20% share of global chip design talent makes this not just strategically necessary but commercially viable. The debate in Technology today must focus on how we convert design talent into manufacturing capability."'
      },
      {
        style: 'business-led',
        styleLabel: 'Business-Led Opening',
        script: '"India\'s IT services industry — worth $250 billion and employing 5 million professionals — is facing its most significant structural disruption since Y2K. Generative AI can now automate 35-50% of routine coding tasks. This is not a future threat — it is happening today. The businesses that will win are those that use AI to move up the value chain from execution to innovation. The businesses that lose will be those that mistake AI tools for AI strategy."'
      },
      {
        style: 'balanced',
        styleLabel: 'Balanced Opening',
        script: '"Technology in India today presents a paradox. On one hand: world\'s fastest 5G rollout, 1,500 GenAI startups and a $250 billion IT industry. On the other hand: 80% of our AI compute infrastructure is owned by three American companies, our semiconductor manufacturing share is under 1% of global output, and our data sovereignty frameworks remain incomplete. A genuine Technology GD must grapple with both the achievement and the dependency."'
      },
      {
        style: 'strategic',
        styleLabel: 'Strategic Opening',
        script: '"India\'s Technology strategy faces a defining choice that will determine our economic trajectory for the next 30 years. Do we remain the world\'s IT services provider — excellent execution, but at the bottom of the value chain? Or do we become a technology sovereign — with our own chips, our own AI models, our own digital infrastructure? The ₹76,000 crore semiconductor mission and IndiaAI Mission are India\'s first serious attempts to answer that question."'
      }
    ],
    impactStrategies: [
      { category: 'Facts That Will Differentiate Me', items: ['India has 20% of global chip design engineers but less than 1% of manufacturing revenue — the gap to close', '60% of large Indian enterprises already have active GenAI deployments (NASSCOM 2024)', 'India\'s 5G rollout was the world\'s fastest — 700 cities in 24 months'] },
      { category: 'Numbers I Should Remember', items: ['$250 billion — India IT services market size', '$600 billion — Global semiconductor market', '1,500+ — GenAI startups in India', '₹76,000 crore — ISM budget', '$4 trillion — AI\'s global GDP impact by 2030'] },
      { category: 'Examples I Should Quote', items: ['Micron\'s $2.75 billion Gujarat fab — India\'s semiconductor journey beginning', 'IndiaAI Mission — government AI training compute allocation', 'GitHub Copilot cutting code time by 35-50% in Indian IT companies'] },
      { category: 'Companies I Should Know', items: ['Infosys, TCS, Wipro — legacy IT responding to AI disruption', 'Tata Electronics — entering semiconductor manufacturing', 'Jio Platforms — 5G and AI convergence', 'Zepto, Blinkit — quick commerce built on AI logistics', 'NVIDIA — GPU monopoly in AI training compute'] },
      { category: 'Government Policies I Should Know', items: ['India Semiconductor Mission — ₹76,000 crore, 50% capital subsidy', 'IndiaAI Mission — ₹10,372 crore for AI compute, research and startups', 'DPDP Act 2023 — India\'s data protection framework'] },
      { category: 'Industry Reports I Should Know', items: ['NASSCOM Strategic Review — IT sector and AI adoption data', 'McKinsey Global Institute AI Report — $4 trillion economic impact', 'WEF Future of Jobs Report — 85 million jobs displaced, 97 million new ones created'] },
      { category: 'Trends I Should Mention', items: ['Agentic AI: AI that takes autonomous multi-step actions, not just answers questions', 'Edge AI: inference on-device rather than in the cloud for privacy and latency', 'AI governance: responsible AI frameworks becoming board-level priority'] },
      { category: 'Counterarguments I Should Be Prepared For', items: ['Counter: "India lacks chip manufacturing expertise" — Response: Taiwan didn\'t either 40 years ago; we start with design strengths', 'Counter: "AI will destroy IT jobs" — Response: every tech transition created more jobs than it eliminated — but reskilling is essential', 'Counter: "India\'s data protection is weak" — Response: DPDP Act 2023 is comprehensive, implementation is the challenge'] },
      { category: 'Smart Connections to Other Sectors', items: ['Technology → Finance: AI credit scoring, digital payments infrastructure', 'Technology → Healthcare: AI diagnostics, telemedicine, drug discovery', 'Technology → Agriculture: precision farming, crop monitoring, supply chain digitalisation', 'Technology → Geopolitics: semiconductor supply chains, Huawei 5G, data sovereignty'] },
      { category: 'Common Mistakes to Avoid', items: ['Don\'t conflate AI with just ChatGPT — AI spans computer vision, speech, robotics, recommendation systems', 'Don\'t present IT job displacement as simple — it\'s task-level, not job-level displacement', 'Don\'t ignore the global context — US-China tech war is the backdrop for every Indian tech policy decision'] }
    ],
    crossIndustryConnections: [
      { sector: 'Economy', connection: 'Technology is the largest driver of TFP (Total Factor Productivity) growth — the key to India escaping the middle-income trap', example: 'India\'s UPI infrastructure increased payment system efficiency by an estimated 1.5% of GDP (World Bank)' },
      { sector: 'Government & Policy', connection: 'India Stack, DigiLocker and ONDC represent government-built digital rails that enable private sector innovation', example: 'Government\'s Digital Public Infrastructure model is being adopted by 50+ countries through the India-led DPI initiative' },
      { sector: 'Technology', connection: 'Technology is self-referential — AI is used to design chips, which run AI models, which optimise 5G networks', example: 'NVIDIA\'s AI-designed chips are 25% more efficient than human-designed equivalents' },
      { sector: 'Consumers', connection: 'Technology is redefining consumer expectations across every category — from instant delivery to personalised finance', example: 'Quick commerce apps like Blinkit and Zepto have reset consumer expectations for delivery from days to 10 minutes' },
      { sector: 'Employment', connection: 'Technology creates and destroys jobs simultaneously — net employment impact depends on reskilling investment and policy response', example: 'WEF predicts AI will displace 85 million jobs but create 97 million new roles by 2025' },
      { sector: 'Sustainability', connection: 'AI data centres consume 2% of global electricity — and this will grow significantly as AI scales; green AI is an imperative', example: 'Microsoft committed to being carbon negative by 2030 as data centre energy consumption surges from AI workloads' },
      { sector: 'Globalisation', connection: 'Technology supply chains are globalised but being forcibly de-globalised by US-China tech war — India must navigate carefully', example: 'US CHIPS Act banning TSMC from supplying advanced chips to China directly creates India\'s semiconductor opportunity' },
      { sector: 'Geopolitics', connection: 'Semiconductors and AI have become geopolitical weapons — controlling these technologies is controlling 21st century power', example: 'US export controls on NVIDIA A100/H100 chips to China is the most consequential technology export restriction in history' },
      { sector: 'Regulation', connection: 'Technology regulation is the defining challenge of our era — from GDPR to EU AI Act to India\'s DPDP Act', example: 'EU AI Act (2024) creates the world\'s first comprehensive AI regulation with risk-based classification of AI systems' },
      { sector: 'Innovation', connection: 'Technology is the primary driver of innovation across all sectors — from fintech to agritech to healthtech to edtech', example: 'India has 80+ AI/ML unicorns and the world\'s third-largest startup ecosystem' }
    ],
    companiesToKnow: [
      { name: 'Tata Consultancy Services (TCS)', type: 'Indian', whatTheyDo: 'India\'s largest IT services company — $29 billion revenue, 600,000 employees', whyRelevant: 'TCS\'s response to GenAI disruption is the most watched strategic pivot in Indian technology', recentDevelopment: 'Deployed WisdomNext AI platform internally to over 200,000 engineers; announced AI-first delivery model for all client engagements', gdUse: 'Use as example of legacy IT services navigating AI disruption — moving from body-shopping to AI-augmented delivery' },
      { name: 'Jio Platforms', type: 'Indian', whatTheyDo: 'India\'s largest telecom + digital services conglomerate — 5G, OTT, enterprise cloud, AI', whyRelevant: 'Jio\'s 5G network is the world\'s largest by new site deployment speed; its AI+5G convergence strategy is unique globally', recentDevelopment: 'JioAI Cloud launched — India\'s first hyperscale AI cloud designed for Indian language processing', gdUse: 'Use as example of Indian technology sovereignty and the integrated telecom-cloud-AI strategy' },
      { name: 'NVIDIA', type: 'Global', whatTheyDo: 'Designs the GPUs that power virtually all AI training globally — $3 trillion market cap', whyRelevant: 'NVIDIA controls 80-90% of the AI training hardware market — it is the critical infrastructure of the AI economy', recentDevelopment: 'H100/H200 GPU demand massively exceeds supply; India\'s IndiaAI Mission procuring 10,000+ H100s for national AI compute', gdUse: 'Use as example of technology monopoly, supply chain concentration risk and the geopolitics of AI hardware' },
      { name: 'Tata Electronics', type: 'Indian', whatTheyDo: 'Manufacturing arm of Tata Group — entering semiconductor assembly and iPhone manufacturing', whyRelevant: 'Tata Electronics is manufacturing iPhones for Apple at its Tamil Nadu plant — the most significant hardware manufacturing breakthrough in Indian tech', recentDevelopment: 'Won semiconductor packaging contract under ISM; assembling 5-6% of global iPhone production', gdUse: 'Use as India\'s clearest example of climbing the electronics manufacturing value chain' },
      { name: 'Google', type: 'Global', whatTheyDo: 'Global tech giant — Search, Android, Cloud, AI, YouTube', whyRelevant: 'Google has committed $10 billion to India by 2026 — its most significant single-country investment commitment', recentDevelopment: 'Gemini AI model launched, competing with GPT-4; Google India data centre investments announced', gdUse: 'Use to discuss Big Tech\'s India strategy, AI competition and data sovereignty questions' },
      { name: 'Zoho Corporation', type: 'Indian', whatTheyDo: 'India\'s only bootstrapped SaaS unicorn — CRM, HR, finance software for global enterprises', whyRelevant: 'Zoho demonstrates India can build globally competitive software without venture capital or US headquarters', recentDevelopment: '$1 billion revenue milestone; expanding AI-native product line; manufacturing IT hardware in Tamil Nadu', gdUse: 'Use as counterpoint to VC-backed startup model — sustainable, profitable, globally competitive' },
      { name: 'Infosys', type: 'Indian', whatTheyDo: '$18 billion IT services — consulting, software, BPO, AI', whyRelevant: 'Infosys\'s Topaz AI platform and large-scale reskilling of 300,000 employees is a case study in incumbent adaptation', recentDevelopment: 'Launched Infosys Topaz AI-first services; reskilled 300,000 employees in GenAI in 18 months', gdUse: 'Use as example of scale reskilling and AI-native transformation of a legacy IT services company' },
      { name: 'Microsoft', type: 'Global', whatTheyDo: 'Enterprise software, cloud (Azure), AI (OpenAI partnership) — $3 trillion market cap', whyRelevant: 'Microsoft\'s $3 billion India investment and Azure + Copilot expansion makes it India\'s most consequential enterprise AI provider', recentDevelopment: '$3 billion India investment for AI and cloud infrastructure; GitHub Copilot deployed by 80%+ of India\'s top IT companies', gdUse: 'Use as example of American Big Tech\'s India strategy and the question of AI infrastructure dependency' }
    ],
    reportsToKnow: [
      { title: 'NASSCOM Strategic Review', publisher: 'NASSCOM', year: '2024', keyFinding: '60% of large Indian enterprises have active GenAI deployments; IT exports at $250 billion; 1,500+ GenAI startups', gdUse: 'Essential for any AI or IT sector GD — India-specific data', url: 'https://www.nasscom.in/knowledge-center/publications/nasscom-strategic-review-2024' },
      { title: 'McKinsey Global Institute: Economic Potential of Generative AI', publisher: 'McKinsey & Company', year: '2023', keyFinding: 'GenAI could add $2.6-4.4 trillion annually to the global economy; 60-70% of work activities could be automated', gdUse: 'Most cited AI economic impact report — use for both opportunity and disruption arguments', url: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai' },
      { title: 'WEF Future of Jobs Report', publisher: 'World Economic Forum', year: '2025', keyFinding: '85 million jobs displaced by 2025; 97 million new roles created; net job gain but massive transition required', gdUse: 'Essential for AI and employment GDs — use to show balanced job creation vs displacement narrative', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
      { title: 'GSMA Intelligence India Report', publisher: 'GSMA', year: '2024', keyFinding: 'India is the world\'s fastest 5G rollout market; 100 million 5G connections; enterprise use cases emerging', gdUse: 'Use for 5G discussions — global context for India\'s achievement', url: 'https://www.gsma.com' },
      { title: 'EU AI Act', publisher: 'European Parliament', year: '2024', keyFinding: 'World\'s first comprehensive AI law — risk-based classification, banning high-risk AI applications, requiring transparency', gdUse: 'Use for AI regulation discussions — Europe setting the global standard', url: 'https://artificialintelligenceact.eu' }
    ],
    thirtySecondSummary: 'Technology today is India\'s greatest opportunity and its most significant strategic challenge simultaneously. With $250 billion in IT exports, 1,500+ GenAI startups and the world\'s fastest 5G rollout, India has genuine technology leadership credentials. The strategic question is whether we will build technology sovereignty — our own chips, our own AI models, our own data infrastructure — or remain an excellent executor of technology built by others.',
    sixtySecondSummary: 'India\'s Technology sector is at an inflection point defined by two simultaneous forces: unprecedented opportunity and deep structural dependency. The opportunity: India has 20% of global chip designers, 1,500+ GenAI startups, world\'s fastest 5G rollout and $250 billion IT exports. The dependency: 80% of our AI compute runs on American infrastructure, under 1% of semiconductor manufacturing is domestic, and our data sovereignty frameworks are nascent. Generative AI is the most consequential technology transition since the internet — and India\'s IT sector of 5 million professionals is simultaneously the greatest beneficiary (productivity) and greatest vulnerability (commoditisation). The decisive question for India\'s technology decade is not how fast we can adopt AI tools, but how quickly we can build the infrastructure, talent and regulatory frameworks to become a technology-creating nation rather than a technology-consuming one.',
    rapidRevision: {
      tenThingsMustKnow: [
        'India has 1,500+ GenAI startups — second only to the US (NASSCOM 2024)',
        '60% of large Indian enterprises have active GenAI deployments',
        'India has 20% of global VLSI chip design engineers — but under 1% of manufacturing',
        'ISM: ₹76,000 crore for semiconductor manufacturing with 50% capital subsidy',
        'IndiaAI Mission: ₹10,372 crore for AI compute, research and startups',
        'India\'s 5G rollout — 700+ cities in 24 months — world\'s fastest',
        'AI can add $4 trillion to global GDP by 2030 (McKinsey)',
        '80-90% of AI training compute is NVIDIA GPUs — a monopoly that creates supply chain risk',
        'EU AI Act (2024) — world\'s first comprehensive AI law',
        'India Stack (UPI + Aadhaar + DigiLocker) is now a global DPI model adopted by 50+ countries'
      ],
      tenNumbersMustRemember: [
        '$250 billion — India IT services market',
        '1,500+ — GenAI startups in India',
        '20% — India\'s share of global chip design engineers',
        '₹76,000 crore — ISM semiconductor budget',
        '$4 trillion — AI\'s global economic impact by 2030',
        '700+ cities — India\'s 5G coverage',
        '35-50% — Code writing time reduction with AI tools',
        '$8 trillion — Annual global cybercrime cost',
        '$600 billion — Global semiconductor market',
        '85 million vs 97 million — Jobs displaced vs created by AI (WEF)'
      ],
      fiveCompaniesMustKnow: [
        'TCS — India\'s largest IT company navigating AI disruption',
        'Jio Platforms — 5G + AI convergence play',
        'NVIDIA — Controls 80-90% of AI training hardware',
        'Tata Electronics — iPhone manufacturing + semiconductor entry',
        'Infosys — 300,000 employees reskilled in GenAI in 18 months'
      ],
      fiveReportsMustKnow: [
        'NASSCOM Strategic Review 2024 — India IT and AI data',
        'McKinsey GenAI Economic Potential Report — $4 trillion opportunity',
        'WEF Future of Jobs 2025 — AI and employment',
        'EU AI Act 2024 — Global AI regulation framework',
        'Gartner Hype Cycle for AI — Technology maturity assessment'
      ],
      fiveCurrentTrends: [
        'Agentic AI: AI that autonomously executes multi-step tasks without human intervention',
        'Edge AI: Running AI inference on-device for privacy, speed and connectivity independence',
        'AI sovereignty: Nations building domestic AI models, compute and governance',
        'Responsible AI: Bias, explainability, and hallucination management becoming enterprise priorities',
        'Multimodal AI: AI processing text, image, audio and video simultaneously'
      ],
      fivePotentialGDQuestions: [
        'Will GenAI displace more jobs than it creates in India\'s IT sector?',
        'Should India have its own foundational AI model, or is that an expensive vanity project?',
        'Is India\'s semiconductor manufacturing ambition realistic, or should we focus on design?',
        'How should AI-generated content be regulated — content, model, or application layer?',
        'Does India\'s data privacy law (DPDP Act) provide adequate protection for AI-era data risks?'
      ]
    },
    sources: [
      { name: 'NASSCOM', url: 'https://www.nasscom.in', type: 'Research' },
      { name: 'Ministry of Electronics and IT (MeitY)', url: 'https://www.meity.gov.in', type: 'Primary' },
      { name: 'McKinsey Global Institute', url: 'https://www.mckinsey.com/mgi', type: 'Research' }
    ],
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}

function getAnalyticsDomain(domain: string): DomainAnalysis {
  return {
    domain,
    description: 'Analytics encompasses business intelligence, machine learning, data engineering, predictive modelling, AI-driven decision support and the governance frameworks that enable organisations to convert data into competitive advantage.',
    executiveSummary: 'Data analytics has become the primary competitive differentiator for businesses across every sector. Organisations leveraging advanced analytics consistently outperform peers in profitability, customer retention and operational efficiency. India produces the world\'s largest pool of analytics talent and is home to the global analytics delivery hub for over 60% of Fortune 500 companies. The analytics domain is now evolving from descriptive (what happened) to prescriptive (what should we do) and agentic (execute the decision automatically) — making it the most dynamic and strategically important capability in modern business.',
    top25Developments: [
      {
        rank: 1,
        title: 'Generative AI Transforms Business Analytics — From Dashboards to Conversational Insights',
        category: 'Technology',
        subCategory: 'Generative AI in Analytics',
        whatHappened: 'Leading analytics platforms including Tableau, Power BI, Snowflake and Databricks have embedded GenAI capabilities enabling business users to query data in natural language and receive AI-generated insights. This shift is reducing the dependency on data analysts for routine reporting by 40-60%.',
        whyItMatters: 'When non-technical business leaders can directly query data and receive contextualised insights, the data analyst role shifts from report generation to model building, insight interpretation and business partnership.',
        gdPointers: [
          'Democratised analytics reduces the "data translation" bottleneck — business leaders can ask questions directly instead of waiting for analyst reports.',
          'The risk of GenAI analytics: confident but incorrect conclusions drawn from poorly structured queries by non-technical users.',
          'India\'s analytics workforce must evolve from report-building and dashboard maintenance to model development, AI governance and strategic insight generation.',
          'The real competitive advantage shifts from having analytics tools to having the data quality and governance that makes those tools trustworthy.',
          'Embedded analytics (AI inside business applications) is displacing standalone BI tools — the analytics infrastructure debate is moving from "which tool" to "which data platform".'
        ],
        importantFacts: [
          { value: '40-60%', context: 'Reduction in routine reporting analyst time achieved through GenAI-powered natural language querying', yearDate: '2024', source: 'Gartner Analytics Trends Report 2024' },
          { value: '$279 Bn', context: 'Global business intelligence and analytics market size projected by 2030', yearDate: '2030', source: 'Grand View Research' },
          { value: '85%', context: 'Percentage of large enterprises with active BI deployments — analytics is now table stakes', yearDate: '2024', source: 'IDC Analytics Survey' },
          { value: '$10 Bn+', context: 'Estimated annual investment by Indian enterprises in analytics platforms and services', yearDate: '2024', source: 'NASSCOM Analytics Report' }
        ],
        impactFact: 'By 2025, Gartner predicts that 80% of analytics queries will be handled by automated AI systems rather than human analysts — fundamentally redefining the analytics profession.',
        gdQuestions: [
          'Should analytics professionals specialise in AI governance and model oversight rather than data querying?',
          'Will GenAI analytics democratise insights or introduce dangerous overconfidence in non-technical decision-makers?',
          'Is data quality or AI capability the primary bottleneck for organisations trying to scale analytics?'
        ],
        businessImplication: 'Analytics teams must pivot from volume-driven report production to quality-driven insight advisory. Business value comes from data strategy and model governance, not dashboard count.',
        societalImplication: 'Democratised analytics reduces the power asymmetry between data-rich large companies and data-poor SMEs — but also enables more sophisticated targeting and manipulation of consumers.',
        balancedView: 'GenAI analytics is genuinely transformational — but requires foundational data quality, governance maturity and analytical literacy to generate trustworthy insights rather than confident misinformation.',
        counterargument: 'Most organisations don\'t have the data quality required for reliable GenAI analytics. Democratising access to a broken data infrastructure simply democratises incorrect conclusions.',
        gdIntervention: 'The promise of GenAI analytics is that every business leader becomes their own analyst. The risk is that every business leader becomes confidently wrong. The organisations that will win are those that invest as much in data quality governance and analytical literacy as they do in GenAI tools. Access without quality is not democratisation — it\'s a sophisticated way of generating wrong answers faster.',
        sources: [
          { name: 'Gartner Analytics and BI Magic Quadrant 2024', url: 'https://www.gartner.com/en/documents/analytics-bi-magic-quadrant', type: 'Research' },
          { name: 'IDC Worldwide Business Intelligence Report', url: 'https://www.idc.com', type: 'Research' }
        ]
      },
      {
        rank: 2,
        title: 'India Becomes the Global Hub for Analytics Talent and Delivery — 30 Lakh Analytics Professionals',
        category: 'Business',
        subCategory: 'Analytics Industry',
        whatHappened: 'India now hosts approximately 30 lakh (3 million) analytics and data science professionals — the world\'s largest analytics talent pool. Over 60% of Fortune 500 companies run their global analytics CoEs (Centre of Excellence) out of India. The Analytics India Magazine estimates the domestic analytics market at ₹35,000 crore.',
        whyItMatters: 'India\'s analytics talent depth creates a sustainable competitive advantage that is difficult to replicate. The question is whether India moves beyond talent export to analytics product creation.',
        gdPointers: [
          'India is the analytics talent factory of the world — but we primarily serve as the execution engine, not the strategy or product layer.',
          'The transition from analytics delivery (GCC model) to analytics product development (SaaS model) requires different talent: product thinking, domain depth and enterprise sales.',
          'India\'s analytics talent is concentrated in TCS, Infosys, Wipro delivery centres — not in Indian-owned analytics product companies, which is the strategic gap.',
          'Freshers entering analytics today are competing with junior AI tasks — the entry-level analytics skill bar has risen significantly.',
          'India needs domain-specific analytics depth: agriculture analytics, financial analytics, healthcare analytics — sectors where Indian data scale creates unique global advantage.'
        ],
        importantFacts: [
          { value: '30 lakh', context: 'Analytics professionals in India — world\'s largest talent base', yearDate: '2024', source: 'Analytics India Magazine' },
          { value: '60%+', context: 'Fortune 500 companies running global analytics CoEs from India', yearDate: '2024', source: 'NASSCOM GCC Report' },
          { value: '₹35,000 Cr', context: 'India\'s domestic analytics market size', yearDate: '2024', source: 'Analytics India Magazine' },
          { value: '$50 Bn', context: 'Analytics and AI services export revenue from India annually', yearDate: 'FY25', source: 'NASSCOM' }
        ],
        impactFact: 'India exports $50 billion annually in analytics and AI services — but owns zero of the top 10 global analytics software platforms.',
        gdQuestions: [
          'Should India\'s analytics ambition focus on talent scale (delivery hub) or product creation (platform companies)?',
          'How do we transition India\'s analytics talent from report-generation roles to AI model governance roles?',
          'Can India build globally competitive analytics product companies to compete with Tableau, Snowflake and Databricks?'
        ],
        businessImplication: 'Indian IT companies have a narrow window to shift analytics practices from staff augmentation to solutions/products. Companies that don\'t make this pivot risk being disintermediated by AI tools that clients deploy directly.',
        societalImplication: 'Analytics creates high-paying white-collar jobs that are increasingly accessible to non-engineering graduates (e.g., statistics, economics, MBA graduates) — broadening the talent pipeline.',
        balancedView: 'India\'s analytics talent advantage is real and formidable. The strategic gap is converting this talent depth into analytics product innovation that generates IP and premium margins rather than FTE billing.',
        counterargument: 'The GCC/delivery hub model, while lower-margin than product, employs millions of Indians and generates reliable FX earnings. Abandoning it prematurely for a product transition that may not succeed is a high-risk strategy.',
        gdIntervention: 'India has 30 lakh analytics professionals and exports $50 billion in analytics services — yet owns zero of the top 10 analytics software platforms. This is the defining paradox of India\'s technology leadership. We are the world\'s analytics execution engine. The question is whether we have the venture capital ecosystem, product talent and risk appetite to become the analytics innovation engine. That transition is both our biggest opportunity and our most significant strategic challenge.',
        sources: [
          { name: 'Analytics India Magazine Annual Report', url: 'https://analyticsindiamag.com', type: 'Research' },
          { name: 'NASSCOM Strategic Review', url: 'https://www.nasscom.in', type: 'Research' }
        ]
      }
    ],
    top15GDThemes: [
      { theme: 'AI replacing Data Analysts: Disruption or Evolution?', description: 'GenAI can now do routine analytical tasks — does this eliminate the analytics profession or elevate it?' },
      { theme: 'Data Privacy vs Analytics Value', description: 'The more data collected, the better the analytics — but at what cost to individual privacy?' },
      { theme: 'India as an Analytics Product Destination', description: 'Can India transition from analytics delivery to analytics product creation?' },
      { theme: 'Predictive Analytics in Credit and Insurance', description: 'Should algorithmic models determine creditworthiness and insurance premiums without human override?' },
      { theme: 'Real-Time Analytics and Decision Automation', description: 'When algorithms make decisions in milliseconds, who is accountable for wrong outcomes?' },
      { theme: 'Data Governance and Analytics Quality', description: 'Without data quality, all analytics output is unreliable — why is data governance still underinvested?' },
      { theme: 'Analytics in Agriculture: India\'s Biggest Opportunity', description: 'Precision farming, crop monitoring and supply chain analytics for India\'s 140 million farm families.' },
      { theme: 'Ethical AI and Algorithmic Bias', description: 'Biased training data creates biased models — and biased models at scale can entrench systemic discrimination.' },
      { theme: 'Analytics in Healthcare: Diagnostic AI and Clinical Decision Support', description: 'AI diagnostics outperforming human radiologists on specific tasks — regulation vs adoption trade-off.' },
      { theme: 'Data Sovereignty and Cross-Border Data Flows', description: 'India\'s DPDP Act and the global debate on where data generated by citizens can be stored and processed.' }
    ],
    top20Facts: [
      { rank: 1, fact: 'Analytics professionals in India', number: '30 lakh (3 million)', year: '2024', whyItMatters: 'World\'s largest analytics talent pool — India\'s core competitive asset', source: 'Analytics India Magazine' },
      { rank: 2, fact: 'Fortune 500 companies with India analytics CoEs', number: '60%+', year: '2024', whyItMatters: 'India\'s analytics sector global centrality', source: 'NASSCOM GCC Report' },
      { rank: 3, fact: 'India\'s analytics and AI services exports', number: '$50 billion', year: 'FY25', whyItMatters: 'Scale of India\'s analytics delivery economy', source: 'NASSCOM' },
      { rank: 4, fact: 'Global analytics market size by 2030', number: '$279 billion', year: '2030', whyItMatters: 'Context for the opportunity India is positioned to capture', source: 'Grand View Research' },
      { rank: 5, fact: 'Reduction in routine reporting time through GenAI analytics tools', number: '40-60%', year: '2024', whyItMatters: 'Shows GenAI\'s direct impact on the analytics profession', source: 'Gartner 2024' },
      { rank: 6, fact: 'Enterprises with active BI deployments globally', number: '85%', year: '2024', whyItMatters: 'Analytics is now table stakes for competitive business — not a differentiator', source: 'IDC Analytics Survey' },
      { rank: 7, fact: 'India domestic analytics market size', number: '₹35,000 crore', year: '2024', whyItMatters: 'Growing domestic demand separate from export market', source: 'Analytics India Magazine' },
      { rank: 8, fact: 'Organisations with a formal Chief Data Officer', number: '65%+ of Fortune 500', year: '2024', whyItMatters: 'Data governance is now C-suite priority', source: 'Gartner CDO Survey' },
      { rank: 9, fact: 'AI model training data volume required for frontier models', number: '15 trillion tokens', year: '2024', whyItMatters: 'Shows why data is the true competitive asset in the AI era', source: 'Anthropic Model Card (Claude 3)' },
      { rank: 10, fact: 'Projected analytics jobs at risk from AI by 2030', number: '30% of routine tasks', year: '2030', whyItMatters: 'Frames the reskilling urgency for analytics professionals', source: 'WEF Future of Jobs 2025' }
    ],
    openingStrategies: [
      {
        style: 'data-led',
        styleLabel: 'Data-Led Opening',
        script: '"India has 30 lakh analytics professionals — the world\'s largest talent pool — and exports $50 billion in analytics services annually. Yet we own zero of the top 10 global analytics platforms. This single fact encapsulates the entire analytics opportunity and challenge for India: we are the world\'s analytics execution engine, but we have not yet become the analytics innovation engine. That transition is the central question this GD must address."'
      },
      {
        style: 'current-affairs',
        styleLabel: 'Current Affairs Opening',
        script: '"Gartner predicts that by 2025, 80% of analytics queries will be handled by automated AI systems rather than human analysts. This isn\'t a future scenario — it is happening today. In India\'s analytics sector, this creates both the most significant opportunity and the most urgent reskilling challenge. If we pivot analytics roles from report building to AI governance and strategic insight — we win. If we don\'t — 30 lakh jobs are at risk."'
      },
      {
        style: 'business-led',
        styleLabel: 'Business-Led Opening',
        script: '"The business case for analytics is no longer debatable. Companies in the top quartile for data-driven decision making are 23 times more likely to acquire customers, 6 times as likely to retain them, and 19 times more likely to be profitable (McKinsey). The analytics debate today is not whether to invest — it is whether to invest in people, platforms, or governance. And the answer, inevitably, must be all three."'
      },
      {
        style: 'balanced',
        styleLabel: 'Balanced Opening',
        script: '"Analytics presents the same paradox as many powerful tools: enormous potential and equivalent risk. The upside: personalised medicine, precision agriculture, real-time fraud prevention. The downside: algorithmic bias entrenching discrimination, privacy erosion through surveillance capitalism, and AI-generated analytical overconfidence. A mature discussion on Analytics must engage seriously with both the productivity frontier and the ethical boundary."'
      },
      {
        style: 'strategic',
        styleLabel: 'Strategic Opening',
        script: '"India\'s analytics talent is a national strategic asset. In an era where data is described as the new oil, India generates extraordinary volumes of data from 1.4 billion digital citizens. The question is whether we will be the nation that refines and monetises this data through Indian analytics platforms and AI models — or whether American tech giants will extract the value while we provide the raw material. This is India\'s version of the colonial resource extraction debate, applied to data."'
      }
    ],
    impactStrategies: [
      { category: 'Facts That Will Differentiate Me', items: ['India owns 0% of top-10 global analytics platforms despite 30 lakh analytics professionals', 'Gartner: 80% of analytics queries handled by AI by 2025 — the profession is transforming', 'Indian analytics talent exports $50 billion — but at services margins, not product margins'] },
      { category: 'Numbers I Should Remember', items: ['30 lakh — Analytics professionals in India', '$50 billion — India analytics exports', '$279 billion — Global analytics market by 2030', '60% — Fortune 500 with India analytics CoEs', '40-60% — Routine reporting time reduction from GenAI'] },
      { category: 'Examples I Should Quote', items: ['Flipkart\'s analytics platform predicting demand with 96% accuracy — India supply chain analytics', 'HDFC Bank AI credit scoring reducing default rates while expanding approval rates', 'Government\'s crop analytics for Pradhan Mantri Fasal Bima Yojana satellite crop monitoring'] },
      { category: 'Companies I Should Know', items: ['Mu Sigma — India\'s largest analytics firm (before AI disruption)', 'Fractal Analytics — Indian analytics unicorn serving Fortune 500', 'Tableau (Salesforce) — World\'s most used BI tool, now with Einstein AI', 'Snowflake — Data cloud platform enabling analytics at scale', 'Databricks — ML platform competing with Snowflake for analytics workloads'] },
      { category: 'Government Policies I Should Know', items: ['National Data Governance Framework — India\'s data sharing and governance policy', 'DPDP Act 2023 — Data protection with analytics implications', 'IndiaAI Mission — ₹10,372 crore including analytics and AI research', 'Open Government Data platform — data.gov.in for public dataset analytics'] },
      { category: 'Industry Reports I Should Know', items: ['Gartner Magic Quadrant for Analytics — annual ranking of platforms', 'NASSCOM Analytics Report — India talent and market data', 'IDC Worldwide Business Intelligence Report — global market data', 'WEF Future of Jobs — analytics job transformation data'] },
      { category: 'Trends I Should Mention', items: ['Agentic analytics: AI that not only analyses but also executes decisions autonomously', 'Embedded analytics: insights built into business apps, not separate BI tools', 'Augmented analytics: AI suggesting which analysis to run and why', 'Real-time streaming analytics: processing data as it is generated, not after the fact'] },
      { category: 'Counterarguments I Should Be Prepared For', items: ['Counter: "Analytics is already commoditised" — Response: execution analytics is commoditised; strategic analytics and AI governance are premium', 'Counter: "India\'s GDPR/DPDP Act restricts analytics" — Response: clear data governance builds trust that enables more analytics, not less', 'Counter: "Small companies can\'t afford analytics" — Response: SaaS analytics tools start at $0 (Google Looker Studio), democratising access'] },
      { category: 'Smart Connections to Other Sectors', items: ['Analytics → Finance: algorithmic trading, credit scoring, fraud detection', 'Analytics → Healthcare: diagnostic AI, clinical trial optimisation, supply chain', 'Analytics → Agriculture: precision farming, yield prediction, market price forecasting', 'Analytics → Government: tax compliance, welfare targeting, infrastructure planning'] },
      { category: 'Common Mistakes to Avoid', items: ['Don\'t conflate analytics with AI — analytics includes traditional statistics, BI and reporting, not just ML', 'Don\'t ignore data quality — the most sophisticated model built on bad data produces bad predictions', 'Don\'t underestimate the human element — analytics requires domain knowledge, not just technical skills'] }
    ],
    crossIndustryConnections: [
      { sector: 'Economy', connection: 'Analytics improves resource allocation efficiency at both enterprise and national level — better analytics → better capital deployment', example: 'RBI uses real-time payment analytics to monitor systemic risk in India\'s banking sector' },
      { sector: 'Government & Policy', connection: 'Government analytics enables evidence-based policymaking, programme evaluation and resource targeting', example: 'India\'s PMGSY road construction programme uses geospatial analytics to prioritise connectivity to underserved villages' },
      { sector: 'Technology', connection: 'Analytics is both a consumer and producer of technology — data infrastructure enables analytics, which drives AI model development', example: 'AWS, Azure and GCP are the three largest analytics infrastructure providers, creating cloud dependency' },
      { sector: 'Consumers', connection: 'Analytics enables personalisation at scale — every recommendation, price and offer is driven by consumer data analytics', example: 'Netflix\'s recommendation engine (built partly in India) saves $1 billion annually in content marketing costs' },
      { sector: 'Employment', connection: 'Analytics creates high-skill, high-salary jobs but also automates routine analytical work — the net employment impact is debated', example: 'India\'s analytics sector employs 30 lakh professionals at average salaries 2x the national IT average' },
      { sector: 'Sustainability', connection: 'Analytics enables ESG performance measurement, carbon footprint tracking and sustainability-linked supply chain management', example: 'Tata Steel uses IoT + analytics to optimise energy consumption, reducing per-unit carbon emissions by 18%' },
      { sector: 'Globalisation', connection: 'India\'s analytics talent serves global enterprises through GCCs — analytics has globalised faster than most service industries', example: '60% of Fortune 500 companies have analytics CoEs in India — a unique globalisation of knowledge work' },
      { sector: 'Geopolitics', connection: 'Data localisation, algorithmic sovereignty and AI regulation are reshaping the geopolitics of the analytics economy', example: 'India\'s DPDP Act restricts certain categories of data from leaving India — directly impacting global analytics delivery models' },
      { sector: 'Regulation', connection: 'Analytics faces intersecting regulatory challenges: data privacy, algorithmic accountability, AI bias and sector-specific compliance', example: 'SEBI now requires AI-driven trading algorithms to be registered and auditable — analytics governance as regulatory requirement' },
      { sector: 'Innovation', connection: 'Analytics is the foundation of innovation in every sector — without data insights, product development is guesswork', example: 'India\'s pharmaceutical sector uses clinical trial analytics to reduce drug development timelines from 10 years to 7' }
    ],
    companiesToKnow: [
      { name: 'Fractal Analytics', type: 'Indian', whatTheyDo: 'AI and analytics company serving Fortune 500 — decision science, AI engineering, design', whyRelevant: 'India\'s most successful analytics unicorn — valued at over $1 billion', recentDevelopment: 'Partnered with Microsoft for Azure-native analytics services; expanded AI engineering practice', gdUse: 'Use as example of Indian analytics company competing globally in consulting-grade analytics' },
      { name: 'Mu Sigma', type: 'Indian', whatTheyDo: 'Decision sciences company — analytics and big data services', whyRelevant: 'Was India\'s largest analytics company — case study in scaling, governance challenges and GenAI impact on analytics staffing models', recentDevelopment: 'Restructuring from pure analytics staffing to AI-augmented analytics solutions model', gdUse: 'Use as case study in analytics industry transformation — the disruption of the analytics staffing model by AI' },
      { name: 'Tableau (Salesforce)', type: 'Global', whatTheyDo: 'World\'s leading business intelligence and data visualisation platform', whyRelevant: 'Tableau with Einstein AI represents the embedded AI in analytics megatrend', recentDevelopment: 'Tableau Pulse — AI-generated data summaries and proactive insight delivery without user querying', gdUse: 'Use as example of the shift from user-queried analytics to AI-proactive analytics' },
      { name: 'Snowflake', type: 'Global', whatTheyDo: 'Cloud data platform enabling analytics, data sharing and AI workloads at scale', whyRelevant: 'Snowflake\'s Data Cloud represents the shift from on-premise data warehouses to shared, governed cloud data ecosystems', recentDevelopment: 'Cortex AI — GenAI capabilities embedded directly in Snowflake for LLM-powered analytics', gdUse: 'Use as example of cloud data infrastructure enabling enterprise analytics at scale' },
      { name: 'Databricks', type: 'Global', whatTheyDo: 'Unified analytics platform for data engineering, ML and AI', whyRelevant: 'Databricks\' open-source Lakehouse architecture is challenging Snowflake\'s proprietary model', recentDevelopment: 'Valued at $43 billion post-funding; MosaicML acquisition enables custom LLM training', gdUse: 'Use to discuss open-source vs proprietary analytics platform strategies' },
      { name: 'HDFC Bank', type: 'Indian', whatTheyDo: 'India\'s largest private bank — uses analytics for credit scoring, fraud detection, personalisation', whyRelevant: 'HDFC Bank\'s analytics CoE processes 40 million data points daily for real-time credit decisioning', recentDevelopment: 'AI-powered personal loan approval in under 10 seconds using alternative data analytics', gdUse: 'Use as example of analytics transformation in Indian financial services' },
      { name: 'Palantir', type: 'Global', whatTheyDo: 'Data analytics platform for defence, government and enterprise — controversial but influential', whyRelevant: 'Palantir\'s government analytics model (used by US intelligence agencies) raises important questions about analytics and civil liberties', recentDevelopment: 'AIP (Artificial Intelligence Platform) — GenAI on enterprise data, adopted by healthcare, manufacturing and defence', gdUse: 'Use as example of analytics in government/defence — raises ethical questions about surveillance analytics' },
      { name: 'Persistent Systems', type: 'Indian', whatTheyDo: 'IT services with strong analytics and AI practice', whyRelevant: 'One of the fastest-growing Indian IT companies with a strong analytics and GenAI focus', recentDevelopment: 'Revenue crossed $1 billion with 40%+ growth from analytics and AI services; acquired Starburstdata for data analytics capability', gdUse: 'Use as example of mid-tier Indian IT company successfully pivoting to analytics and AI' }
    ],
    reportsToKnow: [
      { title: 'Gartner Magic Quadrant for Analytics and Business Intelligence Platforms', publisher: 'Gartner', year: '2024', keyFinding: 'Microsoft Power BI, Tableau and Qlik lead the MQ; GenAI integration now primary evaluation criterion', gdUse: 'Use to show awareness of the analytics platform landscape and evaluation criteria', url: 'https://www.gartner.com/en/documents/analytics-bi-magic-quadrant' },
      { title: 'NASSCOM Analytics Sector Report', publisher: 'NASSCOM', year: '2024', keyFinding: '30 lakh analytics professionals in India; $50 billion exports; 60%+ Fortune 500 with India CoEs', gdUse: 'Essential for any India analytics GD — primary data source', url: 'https://www.nasscom.in' },
      { title: 'IDC Worldwide Business Intelligence and Analytics Software Forecast', publisher: 'IDC', year: '2024', keyFinding: 'Analytics software market growing at 12% CAGR; $110 billion by 2026; AI-augmented analytics fastest growing segment', gdUse: 'Use for market size and growth rate arguments', url: 'https://www.idc.com/getdoc.jsp?containerId=prUS50784823' },
      { title: 'McKinsey Analytics Maturity Report', publisher: 'McKinsey & Company', year: '2024', keyFinding: 'Companies in top analytics quartile are 23x more likely to acquire customers and 6x more likely to retain them', gdUse: 'Most powerful single-sentence business case for analytics investment', url: 'https://www.mckinsey.com/capabilities/quantumblack' },
      { title: 'WEF Data-Driven Value Creation Report', publisher: 'World Economic Forum', year: '2024', keyFinding: 'Data analytics estimated to add $15 trillion to global GDP by 2030 through improved decision-making', gdUse: 'Use for macro-economic impact of analytics argument', url: 'https://www.weforum.org' }
    ],
    thirtySecondSummary: 'Analytics in 2025 is defined by a fundamental shift from descriptive reporting to prescriptive AI intelligence. India has 30 lakh analytics professionals and exports $50 billion in services — but owns zero major global analytics platforms. The strategic imperative is converting India\'s analytics talent depth into analytics product innovation, while simultaneously reskilling our workforce from routine report-building to AI-augmented strategic insight generation.',
    sixtySecondSummary: 'India\'s analytics sector has achieved extraordinary scale — 30 lakh professionals, $50 billion in exports, 60% of Fortune 500 companies with India analytics CoEs — but the sector faces a structural inflection point. Generative AI can now automate 40-60% of routine analytical tasks that currently employ large analytics teams. This means India\'s analytics workforce must transition from execution to strategy, from report-building to model governance, from data wrangling to insight design. The opportunity is equally significant: as the analytics market grows to $279 billion by 2030, India\'s talent base is uniquely positioned to capture high-value consulting and product development work — if we make the strategic pivot from service delivery to IP creation. The one fact that defines the challenge: India is the world\'s analytics execution capital, but we have yet to build a single globally competitive analytics software company.',
    rapidRevision: {
      tenThingsMustKnow: [
        'India has 30 lakh analytics professionals — world\'s largest talent pool (Analytics India Magazine 2024)',
        'India exports $50 billion in analytics services but owns zero top-10 analytics platforms',
        '60%+ Fortune 500 companies run global analytics CoEs from India',
        'GenAI reduces routine analytical reporting time by 40-60% (Gartner 2024)',
        'Global analytics market projected at $279 billion by 2030',
        'Analytics-leading companies are 23x more likely to acquire and 6x more likely to retain customers (McKinsey)',
        'Gartner predicts 80% of analytics queries handled by AI by 2025',
        'India\'s domestic analytics market is ₹35,000 crore and growing',
        'DPDP Act 2023 creates data protection framework that directly impacts analytics delivery',
        'Agentic analytics: AI that autonomously executes analytical decisions — the next frontier'
      ],
      tenNumbersMustRemember: [
        '30 lakh — Analytics professionals in India',
        '$50 billion — Analytics services exports',
        '$279 billion — Global market by 2030',
        '60% — Fortune 500 with India analytics CoEs',
        '40-60% — Routine reporting time reduction by GenAI',
        '23x — Customer acquisition advantage for analytics-leading firms',
        '6x — Customer retention advantage for analytics-leading firms',
        '80% — Analytics queries to be AI-handled by 2025 (Gartner)',
        '₹35,000 crore — India domestic analytics market',
        '$15 trillion — Analytics contribution to global GDP by 2030 (WEF)'
      ],
      fiveCompaniesMustKnow: [
        'Fractal Analytics — India\'s analytics unicorn serving Fortune 500',
        'Tableau (Salesforce) — World\'s most used BI platform, now AI-powered',
        'Snowflake — Cloud data platform enabling enterprise analytics',
        'Databricks — Open-source challenger to Snowflake for ML/AI analytics',
        'Mu Sigma — Case study in analytics industry disruption by GenAI'
      ],
      fiveReportsMustKnow: [
        'NASSCOM Analytics Report — India market and talent data',
        'Gartner MQ for Analytics — platform landscape assessment',
        'McKinsey Analytics Maturity Report — 23x customer acquisition advantage',
        'IDC Analytics Software Forecast — $110 billion market by 2026',
        'WEF Data-Driven Value Creation — $15 trillion GDP impact'
      ],
      fiveCurrentTrends: [
        'Natural language analytics: querying data by typing/speaking questions instead of building dashboards',
        'Agentic analytics: AI not just analysing but also executing recommendations autonomously',
        'DataOps: applying DevOps principles to data pipelines for faster, more reliable analytics',
        'Responsible AI analytics: explainability, bias detection and audit trails for algorithmic decisions',
        'Embedded analytics: analytics built into every business application, not a separate tool'
      ],
      fivePotentialGDQuestions: [
        'Can India transition from analytics service delivery to analytics product creation?',
        'Will GenAI eliminate entry-level analytics jobs or create new categories of analytics work?',
        'Should algorithmic decisions (credit, insurance, hiring) require human override capability?',
        'Is India\'s data privacy law (DPDP Act) balanced between protection and enabling analytics value?',
        'How do we address algorithmic bias in analytics systems used for high-stakes decisions?'
      ]
    },
    sources: [
      { name: 'Analytics India Magazine', url: 'https://analyticsindiamag.com', type: 'Research' },
      { name: 'NASSCOM', url: 'https://www.nasscom.in', type: 'Research' },
      { name: 'Gartner', url: 'https://www.gartner.com', type: 'Research' },
      { name: 'McKinsey & Company', url: 'https://www.mckinsey.com', type: 'Research' }
    ],
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}

function getEnergyDomain(domain: string): DomainAnalysis {
  // Return a simplified version based on Finance domain structure
  return {
    domain,
    description: 'The Energy domain covers electricity generation, renewable power, fossil fuels, energy storage, grid infrastructure, energy policy and the global transition to clean energy systems.',
    executiveSummary: 'India crossed 200 GW of non-fossil energy capacity in 2025, covering 46.3% of total installed capacity. With a 500 GW target by 2030 and net-zero by 2070, energy is simultaneously India\'s greatest infrastructure challenge and its most important climate commitment. The energy transition creates new winners (solar, storage, EVs) and new risks (grid stability, Discom debt, import dependency for critical minerals).',
    top25Developments: [
      {
        rank: 1,
        title: 'India Crosses 200 GW Non-Fossil Energy Capacity — Ahead of Schedule',
        category: 'Government',
        subCategory: 'Renewable Energy Policy',
        whatHappened: 'India\'s non-fossil fuel energy capacity crossed 200 GW, representing 46.3% of total installed electricity capacity. Solar capacity alone crossed 90 GW. This milestone was achieved ahead of national timelines.',
        whyItMatters: 'Energy security is economic security. India\'s renewable transition reduces import dependency on fossil fuels while addressing climate commitments and creating new industrial opportunities.',
        gdPointers: [
          'India\'s energy transition is being driven by economic logic, not just environmental idealism — solar is now cheaper than coal at ₹2.60/kWh vs ₹4.50/kWh.',
          'Generation capacity is solved — grid stability, storage and Discom financial health are the real bottlenecks.',
          'The EU Carbon Border Adjustment Mechanism (CBAM) makes renewable energy a direct determinant of Indian export competitiveness.',
          'India\'s renewable target of 500 GW by 2030 requires adding 40 GW per year — we are on track but storage remains the critical gap.',
          'Energy poverty vs energy transition: 30 million households still lack reliable 24x7 electricity — the transition must serve them, not just green industrial consumers.'
        ],
        importantFacts: [
          { value: '200+ GW', context: 'Non-fossil energy capacity installed — ahead of schedule', yearDate: '2025', source: 'Ministry of New and Renewable Energy (MNRE)' },
          { value: '46.3%', context: 'Non-fossil share of total installed electricity generation capacity', yearDate: '2025', source: 'Central Electricity Authority (CEA)' },
          { value: '500 GW', context: 'India\'s 2030 renewable energy target — Panchamrit commitment to COP26', yearDate: '2030 target', source: 'MNRE' },
          { value: '₹2.60/kWh', context: 'Levelized cost of solar power — cheaper than new coal plants at ₹4.50/kWh', yearDate: '2025', source: 'CEA Report' }
        ],
        impactFact: 'Solar energy is now cheaper than coal in India — ₹2.60/kWh vs ₹4.50/kWh — meaning the energy transition is commercially driven, not just policy-driven.',
        gdQuestions: [
          'Can India achieve 500 GW renewable by 2030 without resolving Discom debt of ₹6.5 lakh crore?',
          'Should India retire coal plants faster, or maintain baseload reliability until storage scales?',
          'Will the EU CBAM carbon tariff harm Indian exporters despite our renewable investments?'
        ],
        businessImplication: 'Industrial consumers with access to renewable power purchase agreements (RPAs) can access cheaper electricity and build ESG credentials. Those relying on grid power face carbon cost risk under emerging frameworks.',
        societalImplication: 'Energy transition creates new jobs in solar manufacturing, installation and maintenance — but threatens coal mining communities that need managed transition support.',
        balancedView: 'India\'s renewable achievement is genuine and significant. The transition is commercially rational and environmentally necessary. The challenge is ensuring grid stability, DISCOM financial health and just transition for coal workers.',
        counterargument: 'Critics argue India is retiring coal prematurely — coal provides reliable baseload power that solar and wind cannot match without expensive storage, and forced retirement risks power cuts that hurt the poor most.',
        gdIntervention: 'Crossing 200 GW in renewable power confirms India\'s clean energy leadership. But here\'s the number that matters more: ₹6.5 lakh crore — the accumulated debt of India\'s electricity distribution companies. Every megawatt of clean energy that Discoms can\'t afford to buy is a megawatt that doesn\'t serve consumers. The real energy GD is about financing the distribution infrastructure, not celebrating the generation milestone.',
        sources: [
          { name: 'Ministry of New and Renewable Energy', url: 'https://mnre.gov.in', type: 'Primary' },
          { name: 'Central Electricity Authority', url: 'https://cea.nic.in', type: 'Primary' }
        ]
      }
    ],
    top15GDThemes: [
      { theme: 'Renewable vs Coal: Reliability vs Sustainability', description: 'The fundamental trade-off between clean but intermittent solar/wind and reliable but polluting coal.' },
      { theme: 'Energy Storage: The Missing Piece', description: 'Battery storage economics determine whether 24x7 renewable power is viable — and India\'s strategy.' },
      { theme: 'Discom Debt and Power Sector Reform', description: '₹6.5 lakh crore in Discom debt threatens the economic viability of India\'s energy transition.' },
      { theme: 'Green Hydrogen: Opportunity or Hype?', description: 'India\'s National Green Hydrogen Mission targets 5 MMT production — is this commercially viable?' },
      { theme: 'Energy Justice: Transition Without Leaving Anyone Behind', description: 'How to manage coal community transition and ensure energy access for 30 million energy-poor households.' },
      { theme: 'Critical Minerals for Energy Transition', description: 'Lithium, cobalt and rare earths for batteries create new import dependencies replacing oil.' },
      { theme: 'Carbon Markets and CBAM', description: 'EU\'s carbon border tariff and India\'s domestic carbon credit market development.' },
      { theme: 'Nuclear Energy: India\'s Clean Baseload Option', description: 'India\'s nuclear expansion plans and the debate between cost, safety and energy security.' },
      { theme: 'EVs and Grid Integration', description: 'Electric vehicle charging creates new peak demand patterns — the grid must adapt.' },
      { theme: 'Energy Geopolitics: Oil, Gas and Sovereignty', description: 'India\'s energy import dependency creates geopolitical vulnerabilities and negotiating constraints.' }
    ],
    top20Facts: [
      { rank: 1, fact: 'India non-fossil energy capacity', number: '200+ GW', year: '2025', whyItMatters: 'World\'s third-largest renewable capacity — milestone ahead of schedule', source: 'MNRE' },
      { rank: 2, fact: 'Non-fossil share of installed capacity', number: '46.3%', year: '2025', whyItMatters: 'Context for India\'s 2030 target of 67%', source: 'CEA' },
      { rank: 3, fact: 'Levelized cost of solar in India', number: '₹2.60/kWh', year: '2025', whyItMatters: 'Solar is cheaper than new coal — transition is commercially rational', source: 'CEA' },
      { rank: 4, fact: 'India\'s 2030 renewable target', number: '500 GW', year: '2030', whyItMatters: 'Panchamrit commitment to COP26 — Nationally Determined Contribution', source: 'MNRE' },
      { rank: 5, fact: 'Discom accumulated debt', number: '₹6.5 lakh crore', year: '2025', whyItMatters: 'Single biggest financial barrier to India\'s energy transition', source: 'Ministry of Power' },
      { rank: 6, fact: 'Battery storage needed by 2030', number: '47 GW / 236 GWh', year: '2030', whyItMatters: 'Required to firm up renewable intermittency for 24x7 supply', source: 'CEA Optimal Generation Mix Report' },
      { rank: 7, fact: 'India oil import bill', number: '$100+ billion/year', year: '2024', whyItMatters: 'Energy import dependency is the biggest drag on India\'s current account', source: 'Ministry of Petroleum' },
      { rank: 8, fact: 'India National Green Hydrogen Mission target', number: '5 MMT by 2030', year: '2030 target', whyItMatters: 'Potential to reduce fertiliser, steel and refinery fossil fuel dependency', source: 'MNRE' },
      { rank: 9, fact: 'India EV sales (two and three-wheelers + cars)', number: '1.5 million units', year: 'FY24', whyItMatters: 'EV adoption creating new electricity demand patterns on the grid', source: 'SIAM' },
      { rank: 10, fact: 'India solar manufacturing capacity target', number: '100 GW/year by 2030', year: '2030', whyItMatters: 'India targeting self-sufficiency in solar module manufacturing under PLI', source: 'MNRE PLI Scheme' }
    ],
    openingStrategies: [
      { style: 'data-led', styleLabel: 'Data-Led Opening', script: '"India crossing 200 GW in renewable energy capacity is a milestone — but here is the number that defines the real challenge: ₹6.5 lakh crore — the accumulated debt of India\'s electricity distribution companies. Every megawatt of clean energy that Discoms cannot afford to procure is energy that does not reach Indian consumers or industry. The energy GD question is not about generation capacity — it is about whether the financial infrastructure of energy distribution can support the transition."' },
      { style: 'current-affairs', styleLabel: 'Current Affairs Opening', script: '"India has just crossed 200 GW in non-fossil capacity, with solar at ₹2.60 per unit — cheaper than coal. This is the moment when the energy transition shifted from a policy aspiration to a commercial inevitability. The question now is not whether to transition, but how fast — and whether the grid, the Discoms and the coal communities can manage the pace of change without social and economic disruption."' },
      { style: 'business-led', styleLabel: 'Business-Led Opening', script: '"For businesses in India, the energy transition is not an ESG checkbox — it is a competitive survival question. The EU\'s Carbon Border Adjustment Mechanism will tax Indian exports based on their carbon footprint from 2026. Companies that don\'t shift to renewable power will pay a tariff that erodes their price competitiveness in the world\'s largest trade bloc. India\'s renewable transition is now directly linked to our export competitiveness."' },
      { style: 'balanced', styleLabel: 'Balanced Opening', script: '"India\'s energy story is one of genuine achievement and genuine risk simultaneously. 200 GW of renewable capacity, solar at ₹2.60/kWh, world\'s largest renewable auction programme — these are real achievements. But ₹6.5 lakh crore in Discom debt, 30 million households without 24x7 electricity, and coal\'s role in supporting 4 million mining and transport jobs — these are equally real constraints. A mature energy GD must hold both."' },
      { style: 'strategic', styleLabel: 'Strategic Opening', script: '"India\'s energy strategy is being shaped by three simultaneous forces: the climate imperative, the economic opportunity and the geopolitical context. India spends $100+ billion annually importing oil — money that could fund our infrastructure. A successful energy transition reduces this import bill while building new industries. But replacing oil import dependency with lithium and cobalt import dependency for batteries is not energy sovereignty — it is dependency substitution."' }
    ],
    impactStrategies: [
      { category: 'Facts That Will Differentiate Me', items: ['Solar is now cheaper than coal in India (₹2.60 vs ₹4.50/kWh) — transition is commercially rational, not just idealistic', 'India spends $100+ billion on oil imports annually — the strategic case for renewables is energy sovereignty', '₹6.5 lakh crore Discom debt is the actual binding constraint on India\'s energy transition'] },
      { category: 'Numbers I Should Remember', items: ['200 GW — Non-fossil energy capacity (2025)', '500 GW — 2030 renewable target', '46.3% — Renewable share of installed capacity', '₹2.60/kWh — Levelized cost of solar', '₹6.5 lakh crore — Discom debt'] },
      { category: 'Examples I Should Quote', items: ['India Solar One (Rajasthan) — world\'s largest solar park', 'ReNew Power — India\'s leading renewable energy company', 'EU CBAM impact on Indian steel and aluminium exporters'] },
      { category: 'Companies I Should Know', items: ['Adani Green Energy — India\'s largest renewable company', 'Tata Power — Diversified energy company with renewables + traditional', 'ReNew Power — Renewable IPP, NYSE-listed', 'NTPC — PSU transitioning from coal to renewables', 'Suzlon Energy — India wind energy pioneer'] },
      { category: 'Government Policies I Should Know', items: ['Panchamrit Goals — Net zero by 2070, 500 GW renewables by 2030', 'National Green Hydrogen Mission — 5 MMT target', 'PM Kusum — Rooftop solar for farmers', 'PM-JANMAN — Solar for tribal and underserved communities'] },
      { category: 'Industry Reports I Should Know', items: ['MNRE Annual Report — renewable capacity and targets', 'CEA Optimal Generation Mix Report — storage and grid planning', 'IEA India Energy Outlook — international perspective', 'IRENA Renewable Power Generation Costs — global benchmarks'] },
      { category: 'Trends I Should Mention', items: ['Pumped hydro revival: India building 50 GW of pumped hydro for long-duration storage', 'Offshore wind: India\'s coastline = 50 GW+ offshore wind potential, barely begun', 'Agrivoltaics: dual-use land for solar + agriculture simultaneously', 'Rooftop solar democratisation: PM Suryodaya Yojana for 1 crore households'] },
      { category: 'Counterarguments I Should Be Prepared For', items: ['Counter: "Renewables are unreliable" — Response: storage + grid management solves intermittency; solar+4hr storage is ₹4.30/kWh, still viable', 'Counter: "Coal cannot be retired — workers depend on it" — Response: just transition funds + new jobs in renewables can absorb affected workers', 'Counter: "India should wait for developed countries to decarbonise first" — Response: India\'s oil import bill is $100B — transition is in India\'s immediate interest'] },
      { category: 'Smart Connections to Other Sectors', items: ['Energy → Manufacturing: cheap renewable power makes India competitive vs China in solar-intensive manufacturing', 'Energy → Finance: green bonds, ESG, renewable project financing changing capital markets', 'Energy → Agriculture: solar pumps replacing diesel for irrigation — $7 billion annual subsidy reduction potential', 'Energy → Geopolitics: India-Gulf energy relationship evolving from oil to green hydrogen'] },
      { category: 'Common Mistakes to Avoid', items: ['Don\'t conflate generation capacity with actual energy generation — capacity factor for solar is 22-25%, not 100%', 'Don\'t ignore storage when discussing renewables — intermittency is the real challenge', 'Don\'t forget Discom debt — it is the single biggest barrier to India\'s energy transition'] }
    ],
    crossIndustryConnections: [
      { sector: 'Economy', connection: 'Energy costs determine industrial competitiveness — cheap renewable power is India\'s manufacturing cost advantage', example: 'India\'s ₹2.60/kWh solar is among the world\'s cheapest — lower than coal in most countries' },
      { sector: 'Government & Policy', connection: 'Energy policy is fiscal policy — subsidies, Discom bailouts and renewable incentives shape the budget', example: 'Ujjwal Discom Assurance Yojana (UDAY) provided ₹2.7 lakh crore in state debt restructuring for power distributors' },
      { sector: 'Technology', connection: 'AI and IoT are enabling smart grids, predictive maintenance and energy demand forecasting', example: 'NTPC uses AI for coal plant predictive maintenance, reducing unplanned outages by 15%' },
      { sector: 'Consumers', connection: 'Energy affordability directly determines household purchasing power — electricity prices affect inflation', example: 'Rooftop solar under PM Suryodaya Yojana targets zero electricity bills for 1 crore poor households' },
      { sector: 'Employment', connection: 'Renewable energy creates 3x more jobs per unit of energy than coal — but in different geographies', example: 'Solar installation and maintenance jobs are being created in Rajasthan and Gujarat — not in coal-belt Jharkhand' },
      { sector: 'Sustainability', connection: 'Energy transition is the core of India\'s Paris Agreement and net-zero 2070 commitment', example: 'India\'s renewable capacity expansion is reducing CO2 intensity of electricity by 30% since 2014' },
      { sector: 'Globalisation', connection: 'Green energy enables exports to EU markets that face CBAM carbon tariffs', example: 'Indian steel manufacturers with renewable power purchase agreements are exempt from EU CBAM tariffs' },
      { sector: 'Geopolitics', connection: 'India\'s oil import dependency creates strategic vulnerability — Russia, Gulf states shape India\'s energy security', example: 'India\'s discounted Russian oil imports post-2022 saved $20+ billion in energy costs, funding renewable investment' },
      { sector: 'Regulation', connection: 'Energy sector has multiple overlapping regulators — CERC, SERCs, MNRE, MoP — creating coordination challenges', example: 'Interstate transmission tariffs and DISCOM power purchase agreement approvals require regulatory alignment' },
      { sector: 'Innovation', connection: 'Green hydrogen, advanced batteries, offshore wind and agrivoltaics are India\'s energy innovation frontiers', example: 'India\'s National Green Hydrogen Mission is creating an entirely new energy ecosystem from electrolysers to fuel cells' }
    ],
    companiesToKnow: [
      { name: 'Adani Green Energy', type: 'Indian', whatTheyDo: 'India\'s largest renewable energy company — solar and wind IPP', whyRelevant: 'Targeting 45 GW capacity by 2030 — integral to India\'s 500 GW ambition', recentDevelopment: '10 GW solar-wind hybrid project in Rajasthan — world\'s largest single renewable project site', gdUse: 'Use as India\'s renewable capacity scale example — and also to discuss corporate governance questions in infrastructure' },
      { name: 'ReNew Power', type: 'Indian', whatTheyDo: 'India\'s leading renewable independent power producer — listed on NASDAQ', whyRelevant: 'First Indian renewable company listed internationally — 16 GW portfolio', recentDevelopment: 'Green hydrogen electrolysis projects and energy storage commitments for round-the-clock renewable supply', gdUse: 'Use as example of Indian renewable companies accessing international capital markets' },
      { name: 'NTPC', type: 'Indian', whatTheyDo: 'India\'s largest power utility — historically coal, now transitioning to renewables', whyRelevant: 'NTPC Renewable Energy targeting 60 GW renewable by 2032 — the PSU transition story', recentDevelopment: 'Pumped hydro project approvals; floating solar on reservoirs; green hydrogen pilot at Vindhyachal', gdUse: 'Use as the just transition case study — India\'s largest coal utility going green' },
      { name: 'Vestas', type: 'Global', whatTheyDo: 'World\'s largest wind turbine manufacturer — Denmark', whyRelevant: 'India is Vestas\' key manufacturing and supply chain hub for Asia', recentDevelopment: 'New offshore wind turbine platform for India\'s 30 GW offshore wind ambition', gdUse: 'Use for India wind energy manufacturing and Make in India in energy equipment' },
      { name: 'Waaree Energies', type: 'Indian', whatTheyDo: 'India\'s largest solar panel manufacturer — 13 GW annual production capacity', whyRelevant: 'PLI-supported manufacturing scale that positions India to reduce Chinese solar panel dependency', recentDevelopment: 'IPO in 2024, US factory under development, capacity expansion to 20 GW', gdUse: 'Use as example of India\'s solar manufacturing ambition and the China+1 supply chain strategy' }
    ],
    reportsToKnow: [
      { title: 'MNRE Annual Report', publisher: 'Ministry of New and Renewable Energy', year: '2024-25', keyFinding: 'Non-fossil capacity at 200+ GW; solar at 90+ GW; 500 GW target on track', gdUse: 'Primary source for all India renewable capacity statistics', url: 'https://mnre.gov.in/annual-report' },
      { title: 'IEA India Energy Outlook', publisher: 'International Energy Agency', year: '2024', keyFinding: 'India will add more renewable capacity than any country except China by 2030; energy efficiency investments critical', gdUse: 'Use for international comparison and global energy transition context', url: 'https://www.iea.org/reports/india-energy-outlook-2021' },
      { title: 'CEA Optimal Generation Mix Report', publisher: 'Central Electricity Authority', year: '2023', keyFinding: '47 GW / 236 GWh of battery storage needed by 2030; transmission investment of ₹2.4 lakh crore required', gdUse: 'Use for grid infrastructure and storage requirement discussions', url: 'https://cea.nic.in' },
      { title: 'IRENA Renewable Power Generation Costs', publisher: 'International Renewable Energy Agency', year: '2024', keyFinding: 'India among cheapest solar markets globally at $0.03/kWh; wind at $0.035/kWh', gdUse: 'Use for global cost benchmarking of India\'s renewable economics', url: 'https://www.irena.org/Publications/2024/Sep/Renewable-Power-Generation-Costs-in-2023' },
      { title: 'WEF Energy Transition Index', publisher: 'World Economic Forum', year: '2024', keyFinding: 'India ranked 67th in energy transition — strong on renewable deployment but low on energy security and equity', gdUse: 'Use for balanced discussion showing India\'s progress and gaps in energy transition', url: 'https://www.weforum.org/publications/fostering-effective-energy-transition-2024' }
    ],
    thirtySecondSummary: 'India\'s energy transition has crossed a critical tipping point: 200 GW of non-fossil capacity, solar at ₹2.60/kWh cheaper than new coal, and a 500 GW 2030 target that is now commercially credible rather than aspirational. The real energy GD debate is about the three bottlenecks: ₹6.5 lakh crore in Discom debt, 47 GW of storage needed by 2030, and ensuring the transition is just — delivering reliable energy to 30 million still-underserved households while managing the livelihoods of 4 million coal sector workers.',
    sixtySecondSummary: 'India\'s energy story in 2025 is defined by an achievement and a challenge of equal magnitude. The achievement: crossing 200 GW of renewable capacity, solar at the world\'s cheapest levels, and a clear pathway to 500 GW by 2030. The challenge: ₹6.5 lakh crore in Discom financial distress, 47 GW of storage infrastructure still needed, and a just transition that must simultaneously retire coal while creating new employment for affected communities. The energy transition is no longer about whether solar will be cost-competitive — it already is. The transition is now about grid infrastructure, financial sustainability and social equity. India must solve all three simultaneously or risk a renewable revolution that powers industrial parks while leaving villages dark.',
    rapidRevision: {
      tenThingsMustKnow: [
        'Non-fossil energy capacity crossed 200 GW — 46.3% of total installed capacity',
        '500 GW renewable target by 2030 — India\'s COP26 Panchamrit commitment',
        'Solar at ₹2.60/kWh — cheaper than new coal at ₹4.50/kWh',
        'Discom debt at ₹6.5 lakh crore — biggest barrier to energy transition',
        '47 GW / 236 GWh battery storage needed by 2030 (CEA)',
        'India imports $100+ billion of oil annually — energy import dependency',
        'National Green Hydrogen Mission targets 5 MMT production by 2030',
        'EU CBAM — carbon tariff making India\'s renewable transition an export competitiveness issue',
        'India EV market at 1.5 million units and growing — new grid demand patterns',
        'Pumped hydro revival — 50 GW target for long-duration energy storage'
      ],
      tenNumbersMustRemember: [
        '200 GW — Non-fossil energy capacity',
        '500 GW — 2030 renewable target',
        '46.3% — Renewable share of installed capacity',
        '₹2.60/kWh — Solar levelized cost',
        '₹6.5 lakh crore — Discom debt',
        '47 GW — Battery storage needed by 2030',
        '$100+ billion — Annual oil import bill',
        '5 MMT — Green hydrogen production target',
        '90 GW — Solar capacity alone',
        '3x — Jobs created per unit by renewables vs coal'
      ],
      fiveCompaniesMustKnow: [
        'Adani Green Energy — India\'s largest renewable IPP',
        'NTPC — Coal giant transitioning to 60 GW renewable by 2032',
        'ReNew Power — India\'s NASDAQ-listed renewable leader',
        'Waaree Energies — India\'s largest solar panel manufacturer',
        'Tata Power — Diversified energy company: generation + distribution + EV charging'
      ],
      fiveReportsMustKnow: [
        'MNRE Annual Report — renewable capacity and government targets',
        'CEA Optimal Generation Mix — storage and grid planning',
        'IEA India Energy Outlook — international context',
        'IRENA Renewable Costs Report — global cost benchmarks',
        'WEF Energy Transition Index — India\'s ranking and gaps'
      ],
      fiveCurrentTrends: [
        'Round-the-clock renewable supply: bundling solar + wind + storage for firm power contracts',
        'Agrivoltaics: dual-use land — solar panels above crops for farmer income + power generation',
        'Offshore wind: India\'s 30 GW offshore wind target by 2030 barely started',
        'Green hydrogen: potential to decarbonise fertiliser, steel and shipping',
        'Distributed energy resources: rooftop solar, microgrids and community energy systems'
      ],
      fivePotentialGDQuestions: [
        'Should India retire coal plants faster to meet climate targets, even at the risk of power shortages?',
        'Is India\'s green hydrogen mission commercially viable without a global hydrogen market?',
        'How should India finance the ₹6.5 lakh crore Discom debt without burdening state governments?',
        'Will the EU CBAM carbon tariff create more incentive for India\'s energy transition than domestic climate policy?',
        'Is replacing oil import dependency with battery mineral imports genuinely "energy sovereignty"?'
      ]
    },
    sources: [
      { name: 'Ministry of New and Renewable Energy (MNRE)', url: 'https://mnre.gov.in', type: 'Primary' },
      { name: 'Central Electricity Authority (CEA)', url: 'https://cea.nic.in', type: 'Primary' },
      { name: 'International Energy Agency (IEA)', url: 'https://www.iea.org', type: 'Research' }
    ],
    generatedAt: new Date().toISOString(),
    isDemo: true,
    researchMode: 'demo'
  }
}
