'use client'

import { useState } from 'react'
import { DomainAnalysis } from '@/types'
import {
  Compass, Share2, Printer, Bookmark, BookmarkCheck,
  Copy, Volume2, VolumeX, Check, Search, Filter,
  Sparkles, Layers, Table, Target, Zap, Building2,
  FileText, Shuffle, ChevronDown, ChevronUp
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { saveItem, isItemSaved } from '@/lib/storage/local'
import { toast } from '@/components/ui/Toaster'
import { DomainDevelopmentCard } from './DomainDevelopmentCard'
import { DomainFactTable } from './DomainFactTable'
import { DomainThemes } from './DomainThemes'
import { OpeningStrategiesCard } from './OpeningStrategiesCard'
import { ImpactStrategiesCard } from './ImpactStrategiesCard'
import { CrossIndustryGrid } from './CrossIndustryGrid'
import { CompaniesTable } from './CompaniesTable'
import { ReportsTable } from './ReportsTable'
import { DomainRapidRevision } from './DomainRapidRevision'

interface DomainAnalysisViewProps {
  analysis: DomainAnalysis
}

type TabType = 'all' | 'developments' | 'openings' | 'facts' | 'impact' | 'cross-industry' | 'companies' | 'reports' | 'revision'

export function DomainAnalysisView({ analysis }: DomainAnalysisViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [speakingSummary, setSpeakingSummary] = useState<'30s' | '60s' | null>(null)
  const [saved, setSaved] = useState(isItemSaved('domain', analysis.domain))

  // Unique categories for filter
  const categories = ['All', ...Array.from(new Set(analysis.top25Developments.map((d) => d.category)))]

  // Filter developments
  const filteredDevelopments = analysis.top25Developments.filter((d) => {
    const matchesCat = categoryFilter === 'All' || d.category === categoryFilter
    const matchesSearch =
      searchQuery === '' ||
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.whatHappened.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const handleSaveDomain = () => {
    if (saved) {
      toast('Domain already saved in your notebook!', 'info')
      return
    }
    saveItem({
      type: 'domain',
      title: `${analysis.domain} Domain Intelligence`,
      content: analysis.executiveSummary || analysis.thirtySecondSummary,
      metadata: {
        domain: analysis.domain,
        generatedAt: analysis.generatedAt,
      },
    })
    setSaved(true)
    toast('Saved to your notebook!', 'success')
  }

  const handlePrint = () => {
    window.print()
  }

  const handleCopySummary = async (type: '30s' | '60s') => {
    const text = type === '30s' ? analysis.thirtySecondSummary : analysis.sixtySecondSummary
    await copyToClipboard(text)
    toast(`${type.toUpperCase()} Summary copied!`, 'success')
  }

  const handleSpeakSummary = (type: '30s' | '60s') => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      toast('Speech synthesis is not supported in your browser.', 'info')
      return
    }

    if (speakingSummary === type) {
      window.speechSynthesis.cancel()
      setSpeakingSummary(null)
      return
    }

    window.speechSynthesis.cancel()
    const text = type === '30s' ? analysis.thirtySecondSummary : analysis.sixtySecondSummary
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.onend = () => setSpeakingSummary(null)
    utterance.onerror = () => setSpeakingSummary(null)

    setSpeakingSummary(type)
    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="space-y-6 animate-fade-in-up pb-16">
      {/* Header Banner */}
      <div className="card p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white border-0 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="badge bg-blue-500/20 text-blue-300 border-blue-400/30 text-[11px] font-bold">
                Domain Intelligence Mode
              </span>
              <span
                className={`badge text-[11px] font-bold ${
                  analysis.researchMode === 'live'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                    : 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                }`}
              >
                {analysis.researchMode === 'live' ? '● Live Research' : '● Verified Domain Database'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              {analysis.domain} <span className="text-blue-400">Intelligence</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mb-4">
              {analysis.description}
            </p>

            {analysis.executiveSummary && (
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
                <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wider">
                  Executive Briefing:
                </span>
                {analysis.executiveSummary}
              </div>
            )}
          </div>

          <div className="flex md:flex-col items-center md:items-end gap-2 shrink-0">
            <button
              onClick={handleSaveDomain}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                saved ? 'bg-amber-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {saved ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
              {saved ? 'Saved' : 'Save Domain'}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer size={14} />
              Print / PDF
            </button>
          </div>
        </div>
      </div>

      {/* 30-Second & 60-Second Speeches */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* 30-Sec */}
        <div className="card p-5 border-l-4 border-l-blue-600 bg-white">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="badge bg-blue-50 text-blue-700 border-blue-200 text-xs font-bold">
                30-Second Elevator Pitch
              </span>
              <span className="text-[11px] text-slate-400">Quick intervention</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleSpeakSummary('30s')}
                className={`btn-icon p-1.5 ${speakingSummary === '30s' ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:text-slate-700'}`}
                title={speakingSummary === '30s' ? 'Stop' : 'Listen'}
              >
                {speakingSummary === '30s' ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <button
                onClick={() => handleCopySummary('30s')}
                className="btn-icon p-1.5 text-slate-400 hover:text-blue-600"
                title="Copy 30-sec pitch"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
            "{analysis.thirtySecondSummary}"
          </p>
        </div>

        {/* 60-Sec */}
        <div className="card p-5 border-l-4 border-l-indigo-600 bg-white">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="badge bg-indigo-50 text-indigo-700 border-indigo-200 text-xs font-bold">
                60-Second Comprehensive View
              </span>
              <span className="text-[11px] text-slate-400">Moderator opening</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleSpeakSummary('60s')}
                className={`btn-icon p-1.5 ${speakingSummary === '60s' ? 'text-indigo-600 bg-indigo-50' : 'text-slate-400 hover:text-slate-700'}`}
                title={speakingSummary === '60s' ? 'Stop' : 'Listen'}
              >
                {speakingSummary === '60s' ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <button
                onClick={() => handleCopySummary('60s')}
                className="btn-icon p-1.5 text-slate-400 hover:text-indigo-600"
                title="Copy 60-sec speech"
              >
                <Copy size={14} />
              </button>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
            "{analysis.sixtySecondSummary}"
          </p>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        {[
          { id: 'all', label: 'All Intelligence' },
          { id: 'developments', label: `Top Developments (${analysis.top25Developments.length})` },
          { id: 'openings', label: 'Opening Strategies (5)' },
          { id: 'facts', label: `Verified Facts (${analysis.top20Facts.length})` },
          { id: 'impact', label: '10 Impact Strategies' },
          { id: 'cross-industry', label: 'Cross-Industry (10)' },
          { id: 'companies', label: `Companies (${analysis.companiesToKnow.length})` },
          { id: 'reports', label: `Reports (${analysis.reportsToKnow.length})` },
          { id: 'revision', label: '⚡ Rapid Revision' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SECTION: RAPID REVISION */}
      {(activeTab === 'all' || activeTab === 'revision') && (
        <DomainRapidRevision revision={analysis.rapidRevision} domain={analysis.domain} />
      )}

      {/* SECTION: OPENING STRATEGIES */}
      {(activeTab === 'all' || activeTab === 'openings') && (
        <OpeningStrategiesCard strategies={analysis.openingStrategies} domain={analysis.domain} />
      )}

      {/* SECTION: DEVELOPMENTS */}
      {(activeTab === 'all' || activeTab === 'developments') && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Top Developments & Case Studies
              </h3>
              <p className="text-xs text-slate-500">
                Detailed breakdowns with facts, business impacts, balanced views, counterarguments, and speaking scripts.
              </p>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter developments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1 text-xs rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                />
              </div>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-3">
            {filteredDevelopments.map((dev, idx) => (
              <DomainDevelopmentCard
                key={dev.rank}
                development={dev}
                defaultExpanded={idx === 0}
              />
            ))}
          </div>
        </div>
      )}

      {/* SECTION: VERIFIED FACTS */}
      {(activeTab === 'all' || activeTab === 'facts') && (
        <DomainFactTable facts={analysis.top20Facts} />
      )}

      {/* SECTION: TOP GD THEMES */}
      {(activeTab === 'all' || activeTab === 'developments') && (
        <DomainThemes themes={analysis.top15GDThemes} />
      )}

      {/* SECTION: IMPACT STRATEGIES */}
      {(activeTab === 'all' || activeTab === 'impact') && (
        <ImpactStrategiesCard strategies={analysis.impactStrategies} />
      )}

      {/* SECTION: CROSS-INDUSTRY CONNECTIONS */}
      {(activeTab === 'all' || activeTab === 'cross-industry') && (
        <CrossIndustryGrid connections={analysis.crossIndustryConnections} />
      )}

      {/* SECTION: COMPANIES TO KNOW */}
      {(activeTab === 'all' || activeTab === 'companies') && (
        <CompaniesTable companies={analysis.companiesToKnow} />
      )}

      {/* SECTION: REPORTS TO KNOW */}
      {(activeTab === 'all' || activeTab === 'reports') && (
        <ReportsTable reports={analysis.reportsToKnow} />
      )}
    </div>
  )
}
