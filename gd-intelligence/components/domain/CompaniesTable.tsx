'use client'

import { useState } from 'react'
import { CompanyToKnow } from '@/types'
import { Building2, Globe, Search, Copy } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface CompaniesTableProps {
  companies: CompanyToKnow[]
}

export function CompaniesTable({ companies }: CompaniesTableProps) {
  const [filterType, setFilterType] = useState<'all' | 'Indian' | 'Global'>('all')

  const filtered = companies.filter((c) => {
    if (filterType === 'all') return true
    return c.type === filterType
  })

  const handleCopy = async (c: CompanyToKnow) => {
    const text = `${c.name} (${c.type}): ${c.whatTheyDo}. Recent Dev: ${c.recentDevelopment}. GD Use: ${c.gdUse}`
    await copyToClipboard(text)
    toast(`${c.name} details copied!`, 'success')
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
            <Building2 size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Key Companies You Must Know
            </h3>
            <p className="text-xs text-slate-500">
              Indian industry leaders and global benchmarks with recent developments and exact GD speaking angles.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
          {(['all', 'Indian', 'Global'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                filterType === t
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t === 'all' ? 'All Companies' : t}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6 grid sm:grid-cols-2 gap-4">
        {filtered.map((c, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{c.name}</h4>
                  <span
                    className={`badge text-[10px] font-bold ${
                      c.type === 'Indian'
                        ? 'bg-orange-50 text-orange-700 border-orange-200'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {c.type}
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(c)}
                  className="text-slate-400 hover:text-blue-600 p-1 transition-colors"
                  title="Copy company note"
                >
                  <Copy size={12} />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-medium mb-2">
                {c.whatTheyDo}
              </p>

              {c.recentDevelopment && (
                <div className="mb-2 p-2 rounded-lg bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900">
                  <span className="font-bold text-blue-800">Recent: </span>
                  {c.recentDevelopment}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700">
              <span className="font-bold text-slate-900">How to quote in GD: </span>
              <span className="italic">{c.gdUse}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
