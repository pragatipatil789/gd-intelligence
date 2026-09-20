'use client'

import { useState, useEffect } from 'react'
import { History, Trash2, Brain, Newspaper, Search, ExternalLink, Compass } from 'lucide-react'

import { getHistory, removeFromHistory, clearHistory } from '@/lib/storage/local'
import { SearchHistoryItem } from '@/types'
import { toast } from '@/components/ui/Toaster'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

export default function HistoryPage() {
  const [items, setItems] = useState<SearchHistoryItem[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setItems(getHistory())
  }, [])

  const handleDelete = (id: string) => {
    removeFromHistory(id)
    setItems((prev) => prev.filter((i) => i.id !== id))
    toast('Removed from history', 'info')
  }

  const handleClear = () => {
    clearHistory()
    setItems([])
    toast('History cleared', 'info')
  }

  const filtered = search
    ? items.filter((i) => i.label.toLowerCase().includes(search.toLowerCase()))
    : items

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <History size={18} className="text-slate-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Recent Preparation</h1>
            <p className="text-slate-500 text-sm">{items.length} searches</p>
          </div>
        </div>
        {items.length > 0 && (
          <button onClick={handleClear} className="btn-ghost text-red-600 hover:bg-red-50 text-xs">
            <Trash2 size={13} /> Clear All
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="card p-12 text-center">
          <History size={32} className="text-slate-300 mx-auto mb-3" />
          <h2 className="font-bold text-slate-700 mb-1">No history yet</h2>
          <p className="text-slate-500 text-sm">Your recent searches will appear here.</p>
          <div className="flex gap-3 justify-center mt-4">
            <Link href="/daily" className="btn-primary text-sm">
              <Newspaper size={13} /> Daily News
            </Link>
            <Link href="/topic" className="btn-secondary text-sm">
              <Brain size={13} /> Topic Analysis
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Search */}
          <div className="card p-4 mb-6">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search history..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-base pl-9"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="card p-8 text-center text-slate-500">No matching history found.</div>
          ) : (
            <div className="space-y-2">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="card p-4 flex items-center gap-3 group animate-fade-in-up"
                >
                  <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                    item.type === 'daily'
                      ? 'bg-blue-100 text-blue-600'
                      : item.type === 'domain'
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    {item.type === 'daily' ? (
                      <Newspaper size={15} />
                    ) : item.type === 'domain' ? (
                      <Compass size={15} />
                    ) : (
                      <Brain size={15} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.type === 'daily' ? 'Daily News' : item.type === 'domain' ? 'Domain Intelligence' : 'Topic Analysis'} ·{' '}
                      {new Date(item.createdAt).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Link
                      href={
                        item.type === 'daily'
                          ? `/daily?date=${item.input}`
                          : item.type === 'domain'
                          ? `/domain?d=${encodeURIComponent(item.input)}`
                          : `/topic?q=${encodeURIComponent(item.input)}`
                      }
                      className="btn-ghost text-blue-600 hover:bg-blue-50 text-xs"
                    >
                      <ExternalLink size={12} /> Open
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn-icon hover:text-red-600 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
