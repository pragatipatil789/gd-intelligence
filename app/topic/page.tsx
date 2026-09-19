'use client'

import { Suspense, useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Brain, ArrowLeft, Download, Printer, X } from 'lucide-react'
import { TopicAnalysis } from '@/types'
import { LoadingState, TOPIC_LOADING_STEPS } from '@/components/ui/LoadingState'
import { ErrorState } from '@/components/ui/ErrorState'
import { TopicAnalysisView } from '@/components/topic/TopicAnalysisView'
import { addToHistory, incrementStat } from '@/lib/storage/local'
import { isValidTopic } from '@/lib/utils'
import Link from 'next/link'

const QUICK_TOPICS = {
  current: ['Energy', 'Artificial Intelligence', 'India\'s Economy', 'Climate Change', 'Digital Payments', 'Electric Vehicles', 'Cryptocurrency', 'Startups'],
  abstract: ['Black and White', 'Red', 'Sunrise', 'Zero', 'Circle', 'The Other Side', 'Grey Area', 'Time'],
  business: ['Globalisation', 'ESG Investing', 'Future of Work', 'Gig Economy', 'Supply Chain', 'Inflation'],
}

function TopicPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const topicParam = searchParams.get('q') || ''

  const [inputValue, setInputValue] = useState(topicParam)
  const [analysis, setAnalysis] = useState<TopicAnalysis | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<{ error: string; code?: string; details?: string } | null>(null)

  const analyseTopicFn = useCallback(async (topic: string) => {
    if (!isValidTopic(topic)) {
      setError({ error: 'Please enter a topic with at least 2 characters.', code: 'INVALID_TOPIC' })
      return
    }
    setLoading(true)
    setError(null)
    setAnalysis(null)

    try {
      const res = await fetch('/api/analyze-topic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data)
        return
      }
      setAnalysis(data)
      addToHistory({ type: 'topic', input: topic.trim(), label: topic.trim() })
      incrementStat('topicsAnalysed')
      incrementStat('gdTopicsPrepared')
    } catch {
      setError({ error: 'Network error. Please check your connection and try again.', code: 'NETWORK_ERROR' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (topicParam && isValidTopic(topicParam)) {
      setInputValue(topicParam)
      analyseTopicFn(topicParam)
    }
  }, [topicParam, analyseTopicFn])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return
    router.push(`/topic?q=${encodeURIComponent(trimmed)}`)
    analyseTopicFn(trimmed)
  }

  const handleQuickTopic = (topic: string) => {
    setInputValue(topic)
    router.push(`/topic?q=${encodeURIComponent(topic)}`)
    analyseTopicFn(topic)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="btn-icon">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Brain size={18} className="text-indigo-600" />
            Topic Analysis
          </h1>
          <p className="text-slate-500 text-sm">Complete GD preparation framework for any topic</p>
        </div>
      </div>

      {/* Topic input */}
      <div className="card p-5 mb-6 no-print">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="flex-1 relative">
            <label className="section-title block mb-1.5">Enter GD Topic</label>
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="e.g. Energy, AI, Black and White, India's Growth"
                className="input-base pr-10"
                id="topic-input"
                autoComplete="off"
              />
              {inputValue && (
                <button
                  type="button"
                  onClick={() => setInputValue('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
          <div className="sm:self-end">
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              className="btn-primary w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
            >
              <Brain size={15} />
              Analyse Topic
            </button>
          </div>
        </form>

        {/* Quick topics */}
        <div className="space-y-3">
          {Object.entries(QUICK_TOPICS).map(([group, topics]) => (
            <div key={group}>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                {group === 'current' ? '🎯 Current' : group === 'abstract' ? '🌀 Abstract' : '💼 Business'}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleQuickTopic(topic)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors border ${
                      group === 'abstract'
                        ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                        : group === 'business'
                        ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <LoadingState
          steps={TOPIC_LOADING_STEPS}
          title={`Analysing "${inputValue}"...`}
        />
      )}

      {/* Error */}
      {error && !loading && (
        <ErrorState
          error={error.error}
          code={error.code}
          details={error.details}
          onRetry={() => analyseTopicFn(inputValue)}
        />
      )}

      {/* Results */}
      {analysis && !loading && (
        <div>
          {/* Actions bar */}
          <div className="flex items-center justify-between mb-4 no-print">
            <p className="text-sm text-slate-500">
              {analysis.classification} topic · {analysis.researchMode === 'live' ? 'Live research' : 'General knowledge'}
            </p>
            <div className="flex gap-2">
              <button onClick={() => window.print()} className="btn-ghost text-xs">
                <Printer size={13} /> Print
              </button>
              <button onClick={() => window.print()} className="btn-ghost text-xs">
                <Download size={13} /> Export PDF
              </button>
            </div>
          </div>

          <TopicAnalysisView analysis={analysis} />
        </div>
      )}

      {/* Empty state */}
      {!analysis && !loading && !error && (
        <div className="card p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4">
            <Brain size={28} className="text-indigo-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Enter a GD Topic to Begin</h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto mb-4">
            Type any topic above — current affairs, business, social, or even abstract topics like &quot;Black and White&quot;.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Energy', 'Black and White', 'Artificial Intelligence', 'Circle'].map((t) => (
              <button
                key={t}
                onClick={() => handleQuickTopic(t)}
                className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-200 hover:bg-indigo-100 transition-colors"
              >
                Try &quot;{t}&quot;
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function TopicPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-20 text-slate-400">Loading...</div>}>
      <TopicPageContent />
    </Suspense>
  )
}
