'use client'

import { DomainRapidRevision as RapidRevisionType } from '@/types'
import {
  Zap, Copy, CheckCircle2, Hash, Building2,
  FileText, TrendingUp, HelpCircle
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface DomainRapidRevisionProps {
  revision: RapidRevisionType
  domain: string
}

export function DomainRapidRevision({ revision, domain }: DomainRapidRevisionProps) {
  const handleCopyAll = async () => {
    const text = `
=== RAPID REVISION CHEATSHEET: ${domain.toUpperCase()} ===

10 THINGS YOU MUST KNOW:
${revision.tenThingsMustKnow.map((t, i) => `${i + 1}. ${t}`).join('\n')}

10 NUMBERS TO REMEMBER:
${revision.tenNumbersMustRemember.map((n, i) => `${i + 1}. ${n}`).join('\n')}

5 COMPANIES TO KNOW:
${revision.fiveCompaniesMustKnow.map((c, i) => `${i + 1}. ${c}`).join('\n')}

5 REPORTS TO KNOW:
${revision.fiveReportsMustKnow.map((r, i) => `${i + 1}. ${r}`).join('\n')}

5 CURRENT TRENDS:
${revision.fiveCurrentTrends.map((tr, i) => `${i + 1}. ${tr}`).join('\n')}

5 POTENTIAL GD QUESTIONS:
${revision.fivePotentialGDQuestions.map((q, i) => `Q${i + 1}: ${q}`).join('\n')}
`.trim()

    await copyToClipboard(text)
    toast('Complete 10-Minute Cheat Sheet copied!', 'success')
  }

  return (
    <div className="card border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/40 overflow-hidden shadow-sm">
      <div className="p-5 border-b border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Zap size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              10-Minute Rapid Revision Cheat Sheet
            </h3>
            <p className="text-xs text-slate-500">
              The high-retention summary designed for the final 10 minutes before entering the GD room.
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyAll}
          className="btn-primary text-xs px-3.5 py-1.5 self-start sm:self-auto"
        >
          <Copy size={13} />
          Copy Full Cheat Sheet
        </button>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* 10 Things + 10 Numbers */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 10 Things */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold text-xs uppercase tracking-wide">
              <CheckCircle2 size={14} className="text-blue-600" />
              10 Things You Must Know
            </div>
            <ul className="space-y-2">
              {revision.tenThingsMustKnow.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-blue-600 shrink-0">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 10 Numbers */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3 text-emerald-800 font-bold text-xs uppercase tracking-wide">
              <Hash size={14} className="text-emerald-600" />
              10 Numbers You Must Remember
            </div>
            <ul className="space-y-2">
              {revision.tenNumbersMustRemember.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-emerald-600 shrink-0">{idx + 1}.</span>
                  <span className="font-semibold text-slate-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 Companies, 5 Reports, 5 Trends */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-2.5 text-indigo-800 font-bold text-xs uppercase tracking-wide">
              <Building2 size={14} className="text-indigo-600" />
              5 Companies
            </div>
            <ul className="space-y-1.5">
              {revision.fiveCompaniesMustKnow.map((c, idx) => (
                <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-2.5 text-purple-800 font-bold text-xs uppercase tracking-wide">
              <FileText size={14} className="text-purple-600" />
              5 Reports
            </div>
            <ul className="space-y-1.5">
              {revision.fiveReportsMustKnow.map((r, idx) => (
                <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-1.5 mb-2.5 text-teal-800 font-bold text-xs uppercase tracking-wide">
              <TrendingUp size={14} className="text-teal-600" />
              5 Current Trends
            </div>
            <ul className="space-y-1.5">
              {revision.fiveCurrentTrends.map((tr, idx) => (
                <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                  <span>{tr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5 Potential GD Questions */}
        <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200">
          <div className="flex items-center gap-2 mb-2 text-purple-900 font-bold text-xs uppercase tracking-wide">
            <HelpCircle size={14} className="text-purple-700" />
            5 Potential GD Questions to Anticipate
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {revision.fivePotentialGDQuestions.map((q, idx) => (
              <div key={idx} className="text-xs text-purple-950 font-medium bg-white/80 p-2.5 rounded-lg border border-purple-100 flex items-start gap-2">
                <span className="font-bold text-purple-600 shrink-0">Q{idx + 1}.</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
