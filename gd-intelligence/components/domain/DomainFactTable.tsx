'use client'

import { useState } from 'react'
import { DomainFactRow } from '@/types'
import { Copy, Search, Table, ExternalLink } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface DomainFactTableProps {
  facts: DomainFactRow[]
}

export function DomainFactTable({ facts }: DomainFactTableProps) {
  const [filter, setFilter] = useState('')

  const filteredFacts = facts.filter(
    (f) =>
      f.fact.toLowerCase().includes(filter.toLowerCase()) ||
      f.number.toLowerCase().includes(filter.toLowerCase()) ||
      f.source.toLowerCase().includes(filter.toLowerCase()) ||
      f.whyItMatters.toLowerCase().includes(filter.toLowerCase())
  )

  const handleCopyFact = async (f: DomainFactRow) => {
    const text = `${f.number} — ${f.fact} (Source: ${f.source}, ${f.year}). GD context: ${f.whyItMatters}`
    await copyToClipboard(text)
    toast('Fact copied with citation!', 'success')
  }

  return (
    <div className="card overflow-hidden border border-slate-200 bg-white">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
              <Table size={14} />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Verified Domain Statistics & Numbers
            </h3>
            <span className="badge bg-blue-50 text-blue-700 border-blue-200 text-xs">
              {facts.length} Verified
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Data, citations, and strategic context to quote verbatim during placement GDs.
          </p>
        </div>

        <div className="relative min-w-[220px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search numbers, sources..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4 w-12 text-center">#</th>
              <th className="py-3 px-4 w-36">Metric / Value</th>
              <th className="py-3 px-4">Fact & Significance</th>
              <th className="py-3 px-4 w-44">Source & Year</th>
              <th className="py-3 px-3 w-16 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {filteredFacts.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-400">
                  No facts match your search filter.
                </td>
              </tr>
            ) : (
              filteredFacts.map((row) => (
                <tr key={row.rank} className="hover:bg-blue-50/40 transition-colors group">
                  <td className="py-3 px-4 text-center font-bold text-slate-400 group-hover:text-blue-600">
                    {row.rank}
                  </td>
                  <td className="py-3 px-4 font-bold text-blue-700 text-sm">
                    {row.number}
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-semibold text-slate-900 leading-snug">{row.fact}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{row.whyItMatters}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-800 block truncate">{row.source}</span>
                    <span className="badge bg-slate-100 text-slate-600 text-[10px] mt-1">{row.year}</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <button
                      onClick={() => handleCopyFact(row)}
                      className="btn-icon p-1.5 hover:bg-white hover:shadow-xs text-slate-400 hover:text-blue-600 transition-colors"
                      title="Copy fact with citation"
                    >
                      <Copy size={13} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
