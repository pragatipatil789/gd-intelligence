'use client'

import { useState } from 'react'
import {
  ChevronDown, ChevronUp, Copy, Bookmark, BookmarkCheck,
  ExternalLink, Quote, BarChart3, Lightbulb, MessageSquare,
  Scale, Zap, HelpCircle
} from 'lucide-react'
import { NewsItem } from '@/types'
import { CategoryBadge, RelevanceBadge } from '@/components/ui/Badges'
import { copyToClipboard } from '@/lib/utils'
import { saveItem, isItemSaved } from '@/lib/storage/local'
import { toast } from '@/components/ui/Toaster'

interface NewsCardProps {
  item: NewsItem
  index: number
}

export function NewsCard({ item, index }: NewsCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [saved, setSaved] = useState(isItemSaved('news', item.title))

  const handleCopy = async () => {
    const success = await copyToClipboard(item.thirtySecondAnswer)
    if (success) toast('30-second answer copied!', 'success')
    else toast('Failed to copy', 'error')
  }

  const handleSave = () => {
    if (saved) {
      toast('Already saved!', 'info')
      return
    }
    saveItem({
      type: 'news',
      title: item.title,
      content: item.thirtySecondAnswer,
      metadata: {
        category: item.category,
        gdRelevance: item.gdRelevance,
        summary: item.summary,
      },
    })
    setSaved(true)
    toast('Saved to your collection!', 'success')
  }

  return (
    <article className="card animate-fade-in-up" id={`news-${item.id}`}>
      {/* Header */}
      <div className="p-5 pb-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <CategoryBadge category={item.category} />
              <RelevanceBadge relevance={item.gdRelevance} />
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug">{item.title}</h3>
            {!expanded && (
              <p className="text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">{item.summary}</p>
            )}
          </div>
        </div>
      </div>

      {/* Actions row */}
      <div className="px-5 pb-4 flex items-center gap-2 border-t border-slate-100 pt-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="btn-ghost flex-1 justify-center text-blue-600 hover:bg-blue-50"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Collapse
            </>
          ) : (
            <>
              <ChevronDown size={14} /> Read Full Analysis
            </>
          )}
        </button>
        <button onClick={handleCopy} className="btn-ghost" title="Copy 30-second answer">
          <Copy size={14} />
          <span className="hidden sm:inline">Copy</span>
        </button>
        <button onClick={handleSave} className="btn-ghost" title="Save">
          {saved ? <BookmarkCheck size={14} className="text-blue-600" /> : <Bookmark size={14} />}
          <span className="hidden sm:inline">{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-slate-100">
          {/* Summary */}
          <div className="p-5 bg-slate-50">
            <div className="section-title flex items-center gap-1.5">
              <MessageSquare size={11} /> What Happened?
            </div>
            <p className="content-body">{item.summary}</p>
          </div>

          {/* Why it matters */}
          <div className="p-5 border-t border-slate-100">
            <div className="section-title flex items-center gap-1.5">
              <Lightbulb size={11} /> Why It Matters
            </div>
            <p className="content-body">{item.whyItMatters}</p>
          </div>

          {/* GD Pointers */}
          {item.gdPointers?.length > 0 && (
            <div className="p-5 border-t border-slate-100">
              <div className="section-title flex items-center gap-1.5">
                <Zap size={11} /> GD Pointers
              </div>
              <ul className="space-y-2">
                {item.gdPointers.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-semibold mt-0.5">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Statistics */}
          {item.statistics?.length > 0 && (
            <div className="p-5 border-t border-slate-100">
              <div className="section-title flex items-center gap-1.5">
                <BarChart3 size={11} /> Important Numbers
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 border-b border-slate-200">
                      <th className="pb-2 pr-4 font-semibold">Metric</th>
                      <th className="pb-2 pr-4 font-semibold">Value</th>
                      <th className="pb-2 pr-4 font-semibold">Year</th>
                      <th className="pb-2 font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.statistics.map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 last:border-0">
                        <td className="py-2 pr-4 text-slate-600">{row.metric}</td>
                        <td className="py-2 pr-4 font-semibold text-slate-900">{row.value}</td>
                        <td className="py-2 pr-4 text-slate-500">{row.year}</td>
                        <td className="py-2 text-slate-500 text-xs">{row.source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Impact facts */}
          {item.impactFacts?.length > 0 && (
            <div className="p-5 border-t border-slate-100">
              <div className="section-title">💡 Impact Facts</div>
              <div className="space-y-2">
                {item.impactFacts.map((fact, i) => (
                  <div key={i} className="highlight-box-amber">
                    <p className="text-sm text-amber-900 font-medium">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GD Questions */}
          {item.gdQuestions?.length > 0 && (
            <div className="p-5 border-t border-slate-100">
              <div className="section-title flex items-center gap-1.5">
                <HelpCircle size={11} /> Possible GD Questions
              </div>
              <ul className="space-y-1.5">
                {item.gdQuestions.map((q, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">›</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Balanced View + Counterargument */}
          <div className="p-5 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
            <div>
              <div className="section-title flex items-center gap-1.5">
                <Scale size={11} /> Balanced View
              </div>
              <p className="content-body">{item.balancedView}</p>
            </div>
            <div>
              <div className="section-title">⚡ Counterargument</div>
              <p className="content-body">{item.counterargument}</p>
            </div>
          </div>

          {/* 30-second GD answer */}
          <div className="p-5 border-t border-slate-100 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between mb-3">
              <div className="section-title flex items-center gap-1.5 mb-0">
                <Quote size={11} /> 30-Second GD Intervention
              </div>
              <button
                onClick={handleCopy}
                className="btn-ghost text-blue-600 hover:bg-blue-100 text-xs"
              >
                <Copy size={12} /> Copy Answer
              </button>
            </div>
            <blockquote className="text-sm text-slate-800 italic leading-relaxed border-l-4 border-blue-400 pl-4 bg-white/60 rounded-r-lg p-3">
              {item.thirtySecondAnswer}
            </blockquote>
          </div>

          {/* Sources */}
          {item.sources?.length > 0 && (
            <div className="p-5 border-t border-slate-100">
              <div className="section-title">Sources</div>
              <div className="flex flex-wrap gap-2">
                {item.sources.map((src, i) => (
                  <a
                    key={i}
                    href={src.url || '#'}
                    target={src.url ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200"
                  >
                    {src.name}
                    {src.url && <ExternalLink size={10} className="opacity-60" />}
                    <span className={`ml-1 text-[10px] opacity-60`}>({src.type})</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
