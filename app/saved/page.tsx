'use client'

import { useState, useEffect } from 'react'
import { BookmarkCheck, Trash2, Brain, Newspaper, Quote, BarChart3, Copy, Search } from 'lucide-react'
import { getSavedItems, removeSavedItem } from '@/lib/storage/local'
import { SavedItem } from '@/types'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

const TYPE_ICONS: Record<SavedItem['type'], React.ElementType> = {
  news: Newspaper,
  topic: Brain,
  fact: BarChart3,
  gdpoint: Quote,
}

const TYPE_LABELS: Record<SavedItem['type'], string> = {
  news: 'News Item',
  topic: 'Topic Analysis',
  fact: 'Fact',
  gdpoint: 'GD Speaking Point',
}

export default function SavedPage() {
  const [items, setItems] = useState<SavedItem[]>([])
  const [filter, setFilter] = useState<'all' | SavedItem['type']>('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setItems(getSavedItems())
  }, [])

  const handleDelete = (id: string) => {
    removeSavedItem(id)
    setItems((prev) => prev.filter((i) => i.id !== id))
    toast('Removed from saved items', 'info')
  }

  const handleCopy = async (content: string) => {
    await copyToClipboard(content)
    toast('Copied to clipboard!', 'success')
  }

  const filtered = items
    .filter((i) => filter === 'all' || i.type === filter)
    .filter(
      (i) =>
        !search ||
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.content.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <BookmarkCheck size={18} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Saved GD Preparation</h1>
          <p className="text-slate-500 text-sm">{items.length} saved items</p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="card p-12 text-center">
          <BookmarkCheck size={32} className="text-slate-300 mx-auto mb-3" />
          <h2 className="font-bold text-slate-700 mb-1">No saved items yet</h2>
          <p className="text-slate-500 text-sm">
            Save facts, GD answers, and news items while browsing analyses.
          </p>
        </div>
      ) : (
        <>
          {/* Filters */}
          <div className="card p-4 mb-6 flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search saved items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-base pl-9"
              />
            </div>
            {/* Type filter */}
            <div className="flex gap-2 flex-wrap">
              {(['all', 'news', 'topic', 'fact', 'gdpoint'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    filter === t
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {t === 'all' ? `All (${items.length})` : TYPE_LABELS[t]}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="card p-8 text-center text-slate-500">
              <p>No items match your filter.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => {
                const Icon = TYPE_ICONS[item.type]
                return (
                  <div key={item.id} className="card p-5 animate-fade-in-up">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Icon size={15} className="text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-[10px] mb-1">
                              {TYPE_LABELS[item.type]}
                            </span>
                            <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button
                              onClick={() => handleCopy(item.content)}
                              className="btn-icon"
                              title="Copy"
                            >
                              <Copy size={13} />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="btn-icon hover:text-red-600 hover:bg-red-50"
                              title="Delete"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                          {item.content}
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                          Saved {new Date(item.savedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}
