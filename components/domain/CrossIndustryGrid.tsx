'use client'

import { CrossIndustryConnection } from '@/types'
import {
  Shuffle, Globe2, Landmark, Cpu, ShoppingBag,
  Briefcase, Leaf, Compass, ShieldAlert, Lightbulb, Copy
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface CrossIndustryGridProps {
  connections: CrossIndustryConnection[]
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Economy: Landmark,
  'Government & Policy': Landmark,
  Technology: Cpu,
  Consumers: ShoppingBag,
  Employment: Briefcase,
  Sustainability: Leaf,
  Globalisation: Globe2,
  Geopolitics: Compass,
  Regulation: ShieldAlert,
  Innovation: Lightbulb,
}

export function CrossIndustryGrid({ connections }: CrossIndustryGridProps) {
  const handleCopy = async (c: CrossIndustryConnection) => {
    const text = `Cross-Industry Connection (${c.sector}): ${c.connection}. Example: ${c.example}`
    await copyToClipboard(text)
    toast(`Connection to ${c.sector} copied!`, 'success')
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-xs">
            <Shuffle size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              10 Cross-Industry & Macro Connections
            </h3>
            <p className="text-xs text-slate-500">
              Evaluators award maximum marks when candidates link domain discussions to broader systemic and economic impacts.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {connections.map((c, idx) => {
          const Icon = SECTOR_ICONS[c.sector] || Globe2

          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-teal-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon size={14} />
                    </div>
                    <span className="font-bold text-xs text-slate-900 uppercase tracking-wide">
                      {c.sector}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(c)}
                    className="text-slate-400 hover:text-teal-700 transition-colors p-1"
                    title="Copy connection"
                  >
                    <Copy size={12} />
                  </button>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-medium mt-1">
                  {c.connection}
                </p>
              </div>

              {c.example && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] text-teal-900 bg-teal-50/50 p-2 rounded-md">
                  <span className="font-bold text-teal-800">Example: </span>
                  {c.example}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
