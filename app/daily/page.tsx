'use client'

import { Suspense, useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Newspaper, ArrowLeft, Download, Printer } from 'lucide-react'
import { DailyNewsReport, NewsItem } from '@/types'
import { LoadingState, NEWS_LOADING_STEPS } from '@/components/ui/LoadingState'
import { ErrorState } from '@/components/ui/ErrorState'
import { NewsCard } from '@/components/news/NewsCard'
import { DailySummaryCard } from '@/components/news/DailySummaryCard'
import { NewsFilter } from '@/components/news/NewsFilter'
import { addToHistory, incrementStat } from '@/lib/storage/local'
import { formatDate, isValidDate } from '@/lib/utils'
import Link from 'next/link'

function DailyPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const dateParam = searchParams.get('date') || ''

  const [selectedDate, setSelectedDate] = useState(dateParam || new Date().toISOString().split('T')[0])
  const [report, setReport] = useState<DailyNewsReport | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<{ error: string; code?: string; details?: string } | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('relevance')

  const generateBrief = useCallback(async (date: string) => {
    if (!isValidDate(date)) {
      setError({ error: 'Please select a valid date.', code: 'INVALID_DATE' })
      return
    }
    setLoading(true)
    setError(null)
    setReport(null)
    setActiveCategory('All')

    try {
      const res = await fetch('/api/daily-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data)
        return
      }
      setReport(data)
      addToHistory({ type: 'daily', input: date, label: formatDate(date) })
      incrementStat('newsBriefs')
      incrementStat('gdTopicsPrepared')
    } catch {
      setError({ error: 'Network error. Please check your connection and try again.', code: 'NETWORK_ERROR' })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (dateParam && isValidDate(dateParam)) {
      setSelectedDate(dateParam)
      generateBrief(dateParam)
    }
  }, [dateParam, generateBrief])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/daily?date=${selectedDate}`)
    generateBrief(selectedDate)
  }

  // Filter and sort news
  const filteredNews: NewsItem[] = (report?.newsItems || [])
    .filter((item) => activeCategory === 'All' || item.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'relevance') {
        const order = { 'Very High': 0, High: 1, Medium: 2, Low: 3 }
        return (order[a.gdRelevance] ?? 3) - (order[b.gdRelevance] ?? 3)
      }
      if (sortBy === 'category') return a.category.localeCompare(b.category)
      return a.rank - b.rank
    })

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Page header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="btn-icon">
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Newspaper size={18} className="text-blue-600" />
            Daily Current Affairs
          </h1>
          <p className="text-slate-500 text-sm">Get GD-relevant news for any date</p>
        </div>
      </div>

      {/* Date input form */}
      <div className="card p-5 mb-6 no-print">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="section-title block mb-1.5">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              max={today}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="input-base"
              id="daily-date-picker"
            />
          </div>
          <div className="sm:self-end">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full sm:w-auto"
            >
              <Newspaper size={15} />
              Generate GD Brief
            </button>
          </div>
        </form>
      </div>

      {/* Loading */}
      {loading && <LoadingState steps={NEWS_LOADING_STEPS} title="Researching today's GD intelligence..." />}

      {/* Error */}
      {error && !loading && (
        <ErrorState
          error={error.error}
          code={error.code}
          details={error.details}
          onRetry={() => generateBrief(selectedDate)}
        />
      )}

      {/* Results */}
      {report && !loading && (
        <div>
          {/* Print/Export bar */}
          <div className="flex items-center justify-between mb-4 no-print">
            <p className="text-sm text-slate-500">
              {report.newsItems.length} stories analysed · {formatDate(report.date)}
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

          {/* Daily Summary */}
          <DailySummaryCard
            summary={report.summary}
            date={formatDate(report.date)}
            researchMode={report.researchMode}
            newsCount={report.newsItems.length}
          />

          {/* Filter */}
          <div className="no-print">
            <NewsFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalCount={report.newsItems.length}
              filteredCount={filteredNews.length}
            />
          </div>

          {/* News cards */}
          <div className="space-y-4">
            {filteredNews.length === 0 ? (
              <div className="card p-8 text-center text-slate-500">
                <p>No news found in the <strong>{activeCategory}</strong> category.</p>
                <button onClick={() => setActiveCategory('All')} className="btn-ghost mt-3 mx-auto">
                  Show all categories
                </button>
              </div>
            ) : (
              filteredNews.map((item, i) => (
                <NewsCard key={item.id} item={item} index={i} />
              ))
            )}
          </div>
        </div>
      )}

      {/* Empty state — no date selected yet */}
      {!report && !loading && !error && (
        <div className="card p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
            <Newspaper size={28} className="text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Select a Date to Begin</h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto">
            Choose any date above and click &quot;Generate GD Brief&quot; to get structured, fact-based GD preparation material.
          </p>
        </div>
      )}
    </div>
  )
}

export default function DailyPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center py-20 text-slate-400">Loading...</div>}>
      <DailyPageContent />
    </Suspense>
  )
}
