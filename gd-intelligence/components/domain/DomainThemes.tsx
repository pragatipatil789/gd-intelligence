'use client'

import { useState } from 'react'
import { Target, Search, Copy, Check } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface DomainThemesProps {
  themes: Array<{ theme: string; description: string }>
}

export function DomainThemes({ themes }: DomainThemesProps) {
  const [filter, setFilter] = useState('')

  const filtered = themes.filter(
    (t) =>
      t.theme.toLowerCase().includes(filter.toLowerCase()) ||
      t.description.toLowerCase().includes(filter.toLowerCase())
  )

  const handleCopy = async (t: { theme: string; description: string }) => {
    await copyToClipboard(`GD Theme: ${t.theme}\nContext: ${t.description}`)
    toast(`Theme "${t.theme}" copied!`, 'success')
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
            <Target size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Top GD Discussion Themes
            </h3>
            <p className="text-xs text-slate-500">
              Recurring debate topics and motion themes set by B-school panels and consulting evaluators.
            </p>
          </div>
        </div>

        <div className="relative min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search themes..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 focus:bg-white"
          />
        </div>
      </div>

      <div className="p-5 sm:p-6 grid sm:grid-cols-2 gap-3.5">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-purple-300 transition-all flex items-start justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-md bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center mt-0.5">
                {idx + 1}
              </span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {item.theme}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopy(item)}
              className="text-slate-400 hover:text-purple-600 p-1 shrink-0 transition-colors"
              title="Copy theme"
            >
              <Copy size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
