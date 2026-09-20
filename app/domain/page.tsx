'use client'

import { Suspense, useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import {
  Compass, ArrowLeft, Search, Sparkles, TrendingUp,
  Landmark, Cpu, BarChart3, Leaf, HeartPulse, ShoppingBag,
  Zap
} from 'lucide-react'
import { DomainAnalysis } from '@/types'
import { LoadingState, DOMAIN_LOADING_STEPS } from '@/components/ui/LoadingState'
import { ErrorState } from '@/components/ui/ErrorState'
import { DomainAnalysisView } from '@/components/domain/DomainAnalysisView'
import { addToHistory, incrementStat } from '@/lib/storage/local'
import Link from 'next/link'

const PRESET_DOMAINS = [
  { name: 'Finance & Banking', query: 'Finance', icon: Landmark, color: 'blue', desc: 'Monetary policy, NPAs, UPI, FinTech, demat boom' },
  { name: 'Technology & AI', query: 'Technology', icon: Cpu, color: 'indigo', desc: 'GenAI, semiconductor mission, IT services, cloud' },
  { name: 'Analytics & Consulting', query: 'Analytics', icon: BarChart3, color: 'purple', desc: 'Decision sciences, GCCs, BI, data governance' },
  { name: 'Energy & Sustainability', query: 'Energy', icon: Leaf, color: 'emerald', desc: 'Renewables, green hydrogen, Discoms, ESG' },
  { name: 'Healthcare & Pharma', query: 'Healthcare', icon: HeartPulse, color: 'rose', desc: 'Pharma exports, medtech, Ayushman Bharat' },
  { name: 'E-commerce & Retail', query: 'Retail', icon: ShoppingBag, color: 'amber', desc: 'Quick commerce, ONDC, supply chain, D2C' },
]


function DomainPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const domainParam = searchParams.get('d') || ''

  const [inputValue, setInputValue] = useState(domainParam)
  const [analysis, setAnalysis] = useState<DomainAnalysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<{ error: string; code?: string; details?: string } | null>(null)

  const analyseDomainFn = useCallback(async (domainName: string) => {
    if (!domainName || domainName.trim().length < 2) {
      setError({ error: 'Please enter a valid domain name.', code: 'INVALID_DOMAIN' })
      return
    }

    setLoading(true)
    setError(null)
    setAnalysis(null)

    try {
      const res = await fetch('/api/analyze-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: domainName.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data)
        return
      }
      setAnalysis(data)
      addToHistory({ type: 'domain', input: domainName.trim(), label: `${domainName.trim()} Domain` })
      incrementStat('topicsAnalysed')
      incrementStat('gdTopicsPrepared')
    } catch {
      setError({ error: 'Network error. Please check your connection and try again.', code: 'NETWORK_ERROR' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (domainParam && domainParam.trim().length >= 2) {
      setInputValue(domainParam)
      analyseDomainFn(domainParam)
    }
  }, [domainParam, analyseDomainFn])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    router.push(`/domain?d=${encodeURIComponent(trimmed)}`)
    analyseDomainFn(trimmed)
  }

  const handleSelectDomain = (domainQuery: string) => {
    setInputValue(domainQuery)
    router.push(`/domain?d=${encodeURIComponent(domainQuery)}`)
    analyseDomainFn(domainQuery)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="btn-icon">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Compass size={22} className="text-blue-600" />
            Domain Intelligence Mode
          </h1>
          <p className="text-slate-500 text-sm">
            Top 25 Developments, Top 20 Facts, 10 Cross-Industry Links, Opening Strategies & Pre-GD Cheat Sheets
          </p>
        </div>
      </div>

      {/* Domain Input Card */}
      <div className="card p-5 sm:p-6 mb-8 border border-slate-200 bg-white no-print">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search or enter any domain (e.g. Finance, Tech, Consulting, Energy, Auto, Pharma)..."
              className="input-base pl-10 text-sm sm:text-base py-3"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary px-6 py-3 justify-center text-sm font-bold shrink-0"
          >
            <Sparkles size={16} />
            Generate Domain Intelligence
          </button>
        </form>

        {/* Quick Presets */}
        <div>
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Target Placement Domains
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PRESET_DOMAINS.map((item) => {
              const Icon = item.icon
              const isSelected = domainParam.toLowerCase() === item.query.toLowerCase()

              return (
                <button
                  key={item.query}
                  type="button"
                  onClick={() => handleSelectDomain(item.query)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-150 flex items-start gap-3 group ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <LoadingState
          title={`Compiling ${inputValue || 'Domain'} Intelligence`}
          steps={DOMAIN_LOADING_STEPS}
        />
      )}

      {/* Error state */}
      {error && (
        <ErrorState
          error={error.error}
          code={error.code}
          details={error.details}
          onRetry={() => inputValue && analyseDomainFn(inputValue)}
        />
      )}


      {/* Analysis Result */}
      {analysis && !loading && (
        <DomainAnalysisView analysis={analysis} />
      )}

      {/* Initial empty helper state */}
      {!analysis && !loading && !error && (
        <div className="text-center py-12 card p-8 border-dashed border-2 border-slate-200 bg-slate-50/30">
          <Compass size={40} className="mx-auto text-slate-300 mb-3" />
          <h3 className="text-base font-bold text-slate-800 mb-1">
            Select a Domain to Begin Preparation
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            Choose Finance, Technology, Consulting, or Energy above to load comprehensive verified data, opening strategies, and speaking interventions tailored for MBA placement panels.
          </p>
        </div>
      )}
    </div>
  )
}

export default function DomainPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12 text-center text-slate-400">Loading domain workspace...</div>}>
      <DomainPageContent />
    </Suspense>
  )
}
