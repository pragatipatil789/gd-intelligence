'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Newspaper, Brain, ArrowRight, TrendingUp, BookOpen,
  Zap, BarChart3, Target, Clock, Bookmark, ChevronRight, Compass, Sparkles
} from 'lucide-react'
import { getStats, getHistory } from '@/lib/storage/local'
import { formatDate } from '@/lib/utils'

const QUICK_CURRENT_TOPICS = ['Energy', 'Artificial Intelligence', 'India\'s Economy', 'Climate Change', 'Digital Payments']
const QUICK_ABSTRACT_TOPICS = ['Black and White', 'Red', 'Sunrise', 'Zero', 'Circle']
const QUICK_DOMAINS = ['Finance', 'Technology', 'Analytics', 'Energy', 'Healthcare']

export default function HomePage() {
  const [stats, setStats] = useState({ newsBriefs: 0, topicsAnalysed: 0, factsSaved: 0, gdTopicsPrepared: 0 })
  const [history, setHistory] = useState<ReturnType<typeof getHistory>>([])

  useEffect(() => {
    setStats(getStats())
    setHistory(getHistory().slice(0, 4))
  }, [])

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot" />
              MBA Placement GD & Consulting Assistant
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              GD <span className="text-blue-400">Intelligence</span>
            </h1>
            <p className="text-blue-200 text-lg font-medium mb-2">
              Current Affairs → Data → Arguments → GD Excellence
            </p>
            <p className="text-slate-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform current events, abstract prompts, and industry sectors into structured arguments, verified statistics, and winning speaking interventions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/daily" className="btn-primary text-sm sm:text-base px-5 py-3">
                <Newspaper size={16} />
                Daily Current Affairs
              </Link>
              <Link href="/topic" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base">
                <Brain size={16} />
                Topic Analysis
              </Link>
              <Link href="/domain" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 transition-all text-sm sm:text-base shadow-md">
                <Compass size={16} />
                Domain Intelligence
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        {(stats.newsBriefs > 0 || stats.topicsAnalysed > 0) && (
          <div className="relative border-t border-white/10 bg-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {[
                  { label: 'News Briefs Generated', value: stats.newsBriefs, icon: Newspaper },
                  { label: 'Topics Analysed', value: stats.topicsAnalysed, icon: Brain },
                  { label: 'Facts Saved', value: stats.factsSaved, icon: Bookmark },
                  { label: 'GD Topics Prepared', value: stats.gdTopicsPrepared, icon: Target },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-2 text-white/70">
                    <Icon size={13} className="text-blue-400" />
                    <span className="font-bold text-white">{value}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Three main mode cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* MODE A: DATE */}
          <div className="card-hover p-6 bg-white group flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xs">
                  <Newspaper className="text-white" size={20} />
                </div>
                <span className="badge bg-blue-50 text-blue-700 border-blue-200 text-[11px] font-bold">Mode A</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Prepare by Date</h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed">
                Daily GD-relevant news, verified facts, statistics, arguments and balanced perspectives for any date.
              </p>
              <div className="mb-4">
                <label className="section-title block mb-1.5 text-xs">Select Date</label>
                <input
                  type="date"
                  defaultValue={today}
                  max={today}
                  id="home-date-input"
                  className="input-base text-xs"
                />
              </div>
            </div>
            <Link
              href={`/daily?date=${today}`}
              className="btn-primary w-full justify-center text-xs py-2.5"
              onClick={(e) => {
                const dateInput = document.getElementById('home-date-input') as HTMLInputElement
                if (dateInput?.value) {
                  e.preventDefault()
                  window.location.href = `/daily?date=${dateInput.value}`
                }
              }}
            >
              <Zap size={14} />
              Daily GD Brief
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* MODE B: TOPIC */}
          <div className="card-hover p-6 bg-white group flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-xs">
                  <Brain className="text-white" size={20} />
                </div>
                <span className="badge bg-indigo-50 text-indigo-700 border-indigo-200 text-[11px] font-bold">Mode B</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Prepare by Topic</h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed">
                Enter any concrete or abstract GD topic and get 10 arguments, verified data, and opening statements.
              </p>
              <div className="mb-4">
                <label className="section-title block mb-1.5 text-xs">Enter GD Topic</label>
                <input
                  type="text"
                  id="home-topic-input"
                  placeholder="e.g. AI, Black and White, EV"
                  className="input-base text-xs"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const val = (e.target as HTMLInputElement).value.trim()
                      if (val) window.location.href = `/topic?q=${encodeURIComponent(val)}`
                    }
                  }}
                />
              </div>
            </div>
            <button
              className="btn-primary w-full justify-center text-xs py-2.5"
              style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}
              onClick={() => {
                const input = document.getElementById('home-topic-input') as HTMLInputElement
                const val = input?.value?.trim()
                if (val) window.location.href = `/topic?q=${encodeURIComponent(val)}`
              }}
            >
              <Brain size={14} />
              Analyse Topic
              <ArrowRight size={13} />
            </button>
          </div>

          {/* MODE C: DOMAIN INTELLIGENCE */}
          <div className="card-hover p-6 bg-white group flex flex-col justify-between border-2 border-blue-500/30 shadow-xs">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xs">
                  <Compass className="text-white" size={20} />
                </div>
                <span className="badge bg-purple-50 text-purple-700 border-purple-200 text-[11px] font-bold">Mode C</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">Domain Intelligence</h2>
              <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed">
                Top 25 Developments, Top 20 Facts, 5 Opening Scripts, 10 Cross-Industry Links & Pre-GD Cheat Sheets.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {QUICK_DOMAINS.map((dom) => (
                  <Link
                    key={dom}
                    href={`/domain?d=${dom}`}
                    className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-[11px] font-semibold text-slate-700 transition-colors"
                  >
                    {dom}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/domain?d=Finance"
              className="btn-primary w-full justify-center text-xs py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              <Compass size={14} />
              Explore Domains
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>


        {/* Quick examples */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div>
            <p className="section-title mb-3">🎯 Current Topics</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_CURRENT_TOPICS.map((topic) => (
                <Link
                  key={topic}
                  href={`/topic?q=${encodeURIComponent(topic)}`}
                  className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="section-title mb-3">🌀 Abstract Topics</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_ABSTRACT_TOPICS.map((topic) => (
                <Link
                  key={topic}
                  href={`/topic?q=${encodeURIComponent(topic)}`}
                  className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200 hover:bg-purple-100 transition-colors"
                >
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Recent history */}
        {history.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-slate-400" />
                <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Recent Preparation</h2>
              </div>
              <Link href="/history" className="text-xs text-blue-600 font-medium hover:underline">View All</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {history.map((item) => (
                <Link
                  key={item.id}
                  href={item.type === 'daily' ? `/daily?date=${item.input}` : `/topic?q=${encodeURIComponent(item.input)}`}
                  className="card-hover p-4 flex items-start gap-3 group"
                >
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                    item.type === 'daily' ? 'bg-blue-100' : 'bg-indigo-100'
                  }`}>
                    {item.type === 'daily' ? (
                      <Newspaper size={14} className="text-blue-600" />
                    ) : (
                      <Brain size={14} className="text-indigo-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.type === 'daily' ? 'Daily News' : 'Topic Analysis'}
                    </p>
                  </div>
                  <ChevronRight size={13} className="text-slate-300 group-hover:text-blue-600 transition-colors mt-0.5" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Feature highlights */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Everything You Need to Win in GD</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: BarChart3, title: 'Verified Statistics', desc: 'Data with sources, year, and context. Never fabricated.', color: 'blue' },
              { icon: Brain, title: 'Smart Classification', desc: 'Automatically classifies topics as Concrete, Abstract, or Hybrid.', color: 'indigo' },
              { icon: Target, title: 'GD Pointers', desc: '5 real-world + 5 generic arguments for every topic.', color: 'violet' },
              { icon: Zap, title: 'Abstract Topics', desc: 'Turn even "Black and White" or "Zero" into 7+ analytical frameworks.', color: 'purple' },
              { icon: BookOpen, title: 'Model Answers', desc: '30-second and 60-second natural, conversational GD answers.', color: 'teal' },
              { icon: TrendingUp, title: 'Speaking Toolkit', desc: 'Opening lines, entry phrases, and disagreement frameworks.', color: 'emerald' },
            ].map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="card p-5">
                <div className={`w-9 h-9 rounded-lg bg-${color}-100 flex items-center justify-center mb-3`}>
                  <Icon size={16} className={`text-${color}-600`} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
