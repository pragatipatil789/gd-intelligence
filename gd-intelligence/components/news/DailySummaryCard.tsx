'use client'

import { DailySummary } from '@/types'
import { TrendingUp, Lightbulb, MessageSquare, BarChart3, RefreshCw } from 'lucide-react'

interface DailySummaryCardProps {
  summary: DailySummary
  date: string
  researchMode: 'live' | 'general' | 'demo'
  newsCount: number
}

export function DailySummaryCard({ summary, date, researchMode, newsCount }: DailySummaryCardProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Header */}
      <div className="card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
                researchMode === 'live' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-amber-100 text-amber-700'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${researchMode === 'live' ? 'bg-green-500' : 'bg-amber-500'} animate-pulse-dot`} />
                {researchMode === 'live' ? 'Live Research' : 'General Knowledge'}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Today&apos;s GD Intelligence</h1>
            <p className="text-slate-500 text-sm mt-1">{date} · {newsCount} stories analysed</p>
          </div>
        </div>
      </div>

      {/* Themes + GD Topics */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Top Themes */}
        {summary.topThemes?.length > 0 && (
          <div className="card p-5">
            <div className="section-title flex items-center gap-1.5">
              <TrendingUp size={11} /> Top 5 Themes Today
            </div>
            <ol className="space-y-2">
              {summary.topThemes.slice(0, 5).map((theme, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-700 font-medium">{theme}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Top GD Topics */}
        {summary.topGDTopics?.length > 0 && (
          <div className="card p-5">
            <div className="section-title flex items-center gap-1.5">
              <MessageSquare size={11} /> Top GD Topics
            </div>
            <ul className="space-y-1.5">
              {summary.topGDTopics.slice(0, 10).map((topic, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Top Facts */}
      {summary.topFacts?.length > 0 && (
        <div className="card p-5">
          <div className="section-title flex items-center gap-1.5">
            <BarChart3 size={11} /> Top 10 Facts to Use in GD
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {summary.topFacts.slice(0, 10).map((fact, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-slate-50 rounded-lg p-3">
                <span className="shrink-0 w-5 h-5 rounded bg-slate-200 text-slate-600 text-xs flex items-center justify-center font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Opening lines */}
      {summary.openingLines?.length > 0 && (
        <div className="card p-5 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <div className="section-title flex items-center gap-1.5">
            <Lightbulb size={11} /> 5 Data-Based Opening Lines
          </div>
          <div className="space-y-3">
            {summary.openingLines.slice(0, 5).map((line, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 text-blue-400 font-bold text-sm mt-0.5">{i + 1}.</span>
                <p className="text-sm text-slate-800 italic leading-relaxed">&ldquo;{line}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Counterargument frameworks */}
      {summary.counterargumentFrameworks?.length > 0 && (
        <div className="card p-5">
          <div className="section-title flex items-center gap-1.5">
            <RefreshCw size={11} /> Counterargument Frameworks
          </div>
          <div className="space-y-2">
            {summary.counterargumentFrameworks.slice(0, 5).map((fw, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-amber-50 rounded-lg p-3 border border-amber-100">
                <span className="shrink-0 text-amber-500 font-bold text-sm mt-0.5">{i + 1}.</span>
                <p className="text-sm text-slate-800">{fw}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
