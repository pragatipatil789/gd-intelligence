'use client'

import { useState } from 'react'
import { ImpactStrategy } from '@/types'
import {
  Layers, ChevronDown, ChevronUp, Copy, Check, Lightbulb,
  Building, FileText, TrendingUp, AlertTriangle, ShieldCheck,
  Hash, Quote, Shuffle
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface ImpactStrategiesCardProps {
  strategies: ImpactStrategy[]
}

const ICONS_MAP: Record<string, React.ElementType> = {
  'Facts That Will Differentiate Me': Lightbulb,
  'Numbers I Should Remember': Hash,
  'Examples I Should Quote': Quote,
  'Companies I Should Know': Building,
  'Government Policies I Should Know': ShieldCheck,
  'Industry Reports I Should Know': FileText,
  'Trends I Should Mention': TrendingUp,
  'Counterarguments I Should Be Prepared For': AlertTriangle,
  'Smart Connections to Other Sectors': Shuffle,
  'Common Mistakes to Avoid': AlertTriangle,
}

export function ImpactStrategiesCard({ strategies }: ImpactStrategiesCardProps) {
  const [expandedAll, setExpandedAll] = useState(false)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'Facts That Will Differentiate Me': true,
    'Numbers I Should Remember': true,
  })

  const toggleCategory = (cat: string) => {
    setOpenItems((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const handleToggleAll = () => {
    const nextState = !expandedAll
    setExpandedAll(nextState)
    const newOpen: Record<string, boolean> = {}
    strategies.forEach((s) => {
      newOpen[s.category] = nextState
    })
    setOpenItems(newOpen)
  }

  const handleCopyCategory = async (strat: ImpactStrategy, e: React.MouseEvent) => {
    e.stopPropagation()
    const content = `${strat.category}:\n` + strat.items.map((it, idx) => `${idx + 1}. ${it}`).join('\n')
    await copyToClipboard(content)
    toast(`${strat.category} copied!`, 'success')
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
            <Layers size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              10 Impact Strategies & Differentiators
            </h3>
            <p className="text-xs text-slate-500">
              High-scoring content categories that set top 1% MBA candidates apart from the rest of the group.
            </p>
          </div>
        </div>

        <button
          onClick={handleToggleAll}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 self-start sm:self-auto"
        >
          {expandedAll ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="p-5 divide-y divide-slate-100">
        {strategies.map((strat, idx) => {
          const isOpen = openItems[strat.category] ?? false
          const Icon = ICONS_MAP[strat.category] || Lightbulb

          return (
            <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
              <div
                onClick={() => toggleCategory(strat.category)}
                className="flex items-center justify-between gap-3 cursor-pointer select-none group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 text-slate-500 flex items-center justify-center transition-colors">
                    <Icon size={14} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {strat.category}
                  </h4>
                  <span className="badge bg-slate-100 text-slate-600 text-[10px]">
                    {strat.items.length} points
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => handleCopyCategory(strat, e)}
                    className="p-1 rounded text-slate-400 hover:text-blue-600 transition-colors"
                    title="Copy this category"
                  >
                    <Copy size={13} />
                  </button>
                  <div className="p-1 text-slate-400">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
              </div>

              {isOpen && (
                <ul className="mt-3 pl-8 sm:pl-9 space-y-2">
                  {strat.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-700 leading-relaxed list-disc marker:text-amber-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
