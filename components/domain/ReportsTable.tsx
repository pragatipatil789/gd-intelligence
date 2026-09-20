'use client'

import { ReportToKnow } from '@/types'
import { FileText, ExternalLink, Copy } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface ReportsTableProps {
  reports: ReportToKnow[]
}

export function ReportsTable({ reports }: ReportsTableProps) {
  const handleCopy = async (r: ReportToKnow) => {
    const text = `${r.title} (${r.publisher}, ${r.year}): Key Finding: ${r.keyFinding}. GD quote: ${r.gdUse}`
    await copyToClipboard(text)
    toast(`${r.title} citation copied!`, 'success')
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <FileText size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Authoritative Reports You Must Quote
            </h3>
            <p className="text-xs text-slate-500">
              Primary reports from RBI, SEBI, NASSCOM, WEF, McKinsey, and global bodies to validate your points.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 grid sm:grid-cols-2 gap-4">
        {reports.map((r, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-indigo-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{r.title}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                    <span className="font-semibold text-slate-700">{r.publisher}</span>
                    <span>•</span>
                    <span className="badge bg-slate-100 text-slate-600 text-[10px]">{r.year}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => handleCopy(r)}
                    className="text-slate-400 hover:text-indigo-600 p-1 transition-colors"
                    title="Copy report citation"
                  >
                    <Copy size={12} />
                  </button>
                  {r.url && (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 p-1 transition-colors"
                      title="Open source report"
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-950 font-medium my-2">
                <span className="font-bold text-indigo-900">Key Finding: </span>
                {r.keyFinding}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
              <span className="font-bold text-slate-800">How to quote in GD: </span>
              <span className="italic">{r.gdUse}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
