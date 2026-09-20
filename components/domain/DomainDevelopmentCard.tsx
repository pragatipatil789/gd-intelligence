'use client'

import { useState } from 'react'
import { DomainDevelopment } from '@/types'
import {
  ChevronDown, ChevronUp, Copy, Bookmark, BookmarkCheck,
  TrendingUp, HelpCircle, Building2, Users, Scale, MessageSquare,
  ExternalLink, CheckCircle2, ShieldAlert
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { saveItem, isItemSaved } from '@/lib/storage/local'
import { toast } from '@/components/ui/Toaster'

interface DomainDevelopmentCardProps {
  development: DomainDevelopment
  defaultExpanded?: boolean
}

export function DomainDevelopmentCard({ development: dev, defaultExpanded = false }: DomainDevelopmentCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const [saved, setSaved] = useState(isItemSaved('domain', dev.title))

  const handleCopyIntervention = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await copyToClipboard(dev.gdIntervention)
    toast('GD Speaking Intervention copied to clipboard!', 'success')
  }

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (saved) {
      toast('Already saved in your notebook!', 'info')
      return
    }
    saveItem({
      type: 'domain',
      title: dev.title,
      content: dev.gdIntervention || dev.whatHappened,
      metadata: {
        category: dev.category,
        subCategory: dev.subCategory,
        impactFact: dev.impactFact,
      }
    })
    setSaved(true)
    toast('Saved to your notebook!', 'success')
  }

  return (
    <div className="card overflow-hidden transition-all duration-200 border border-slate-200 hover:border-blue-200 bg-white">
      {/* Header Bar */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="p-5 cursor-pointer select-none bg-slate-50/50 hover:bg-slate-50 transition-colors flex items-start justify-between gap-4"
      >
        <div className="flex items-start gap-3.5 flex-1">
          <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
            #{dev.rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="badge bg-blue-50 text-blue-700 border-blue-200 text-[11px] font-semibold">
                {dev.category}
              </span>
              {dev.subCategory && (
                <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-[11px]">
                  {dev.subCategory}
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {dev.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 line-clamp-2">
              {dev.whatHappened}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleSave}
            className={`btn-icon ${saved ? 'text-amber-500' : 'text-slate-400 hover:text-slate-700'}`}
            title={saved ? 'Saved' : 'Save this development'}
          >
            {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          </button>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400">
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="p-5 sm:p-6 space-y-6 border-t border-slate-100 bg-white">
          {/* Why It Matters */}
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100">
            <div className="flex items-center gap-2 mb-1 text-blue-800 font-bold text-xs uppercase tracking-wide">
              <TrendingUp size={14} />
              Why It Matters For Your GD
            </div>
            <p className="text-sm text-blue-950 font-medium leading-relaxed">
              {dev.whyItMatters}
            </p>
          </div>

          {/* Key Facts & Numbers */}
          {dev.importantFacts && dev.importantFacts.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                Key Facts & Verified Data
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {dev.importantFacts.map((fact, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-200 bg-slate-50/40">
                    <div className="text-base font-bold text-blue-700">{fact.value}</div>
                    <div className="text-xs text-slate-700 font-medium mt-0.5">{fact.context}</div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 pt-1.5 border-t border-slate-100">
                      <span>{fact.yearDate}</span>
                      <span className="truncate max-w-[150px]">{fact.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Differentiating Fact Banner */}
          {dev.impactFact && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex items-start gap-3">
              <div className="shrink-0 w-6 h-6 rounded-md bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                ★
              </div>
              <div>
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  Differentiating Fact
                </div>
                <p className="text-xs sm:text-sm text-amber-950 font-semibold mt-0.5">
                  {dev.impactFact}
                </p>
              </div>
            </div>
          )}

          {/* GD Pointers */}
          {dev.gdPointers && dev.gdPointers.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                Strategic GD Pointers
              </h4>
              <ul className="space-y-2">
                {dev.gdPointers.map((pointer, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span>{pointer}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Business vs Societal Implications */}
          <div className="grid sm:grid-cols-2 gap-4">
            {dev.businessImplication && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wide mb-1.5">
                  <Building2 size={14} className="text-indigo-600" />
                  Business & Corporate Implication
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {dev.businessImplication}
                </p>
              </div>
            )}
            {dev.societalImplication && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wide mb-1.5">
                  <Users size={14} className="text-teal-600" />
                  Societal & Economic Impact
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {dev.societalImplication}
                </p>
              </div>
            )}
          </div>

          {/* Balanced View & Counterargument */}
          {(dev.balancedView || dev.counterargument) && (
            <div className="grid sm:grid-cols-2 gap-4">
              {dev.balancedView && (
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wide mb-1.5">
                    <Scale size={14} className="text-emerald-700" />
                    Nuanced / Balanced View
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {dev.balancedView}
                  </p>
                </div>
              )}
              {dev.counterargument && (
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                  <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase tracking-wide mb-1.5">
                    <ShieldAlert size={14} className="text-rose-700" />
                    Prepared Counterargument
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                    {dev.counterargument}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Potential GD Questions */}
          {dev.gdQuestions && dev.gdQuestions.length > 0 && (
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200">
              <div className="flex items-center gap-2 text-purple-900 font-bold text-xs uppercase tracking-wide mb-2">
                <HelpCircle size={14} className="text-purple-700" />
                Moderator Questions You May Be Asked
              </div>
              <ul className="space-y-1.5">
                {dev.gdQuestions.map((q, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-purple-950 font-medium flex items-start gap-2">
                    <span className="text-purple-500 font-bold">Q{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ready-to-use GD Speaking Intervention */}
          {dev.gdIntervention && (
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wide">
                  <MessageSquare size={14} />
                  Ready-to-Use GD Intervention (Say This)
                </div>
                <button
                  onClick={handleCopyIntervention}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                >
                  <Copy size={12} />
                  Copy Script
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "{dev.gdIntervention}"
              </p>
            </div>
          )}

          {/* Sources */}
          {dev.sources && dev.sources.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Sources:</span>
              {dev.sources.map((src, idx) => (
                <a
                  key={idx}
                  href={src.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {src.name}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
