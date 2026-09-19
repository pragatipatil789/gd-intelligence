'use client'

import { NewsCategory } from '@/types'

const CATEGORIES: NewsCategory[] = [
  'Economy', 'Business', 'Finance', 'Technology', 'AI', 'Energy',
  'Government & Policy', 'Geopolitics', 'Climate', 'Healthcare',
  'Startups', 'Markets', 'Society', 'Infrastructure', 'Defence',
  'Education', 'Employment', 'Regulation', 'International Relations',
  'Global Affairs',
]

interface NewsFilterProps {
  activeCategory: string
  onCategoryChange: (cat: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
  totalCount: number
  filteredCount: number
}

export function NewsFilter({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  totalCount,
  filteredCount,
}: NewsFilterProps) {
  return (
    <div className="card p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        {/* Category filter */}
        <div className="flex-1 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 pb-1">
            <button
              onClick={() => onCategoryChange('All')}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeCategory === 'All'
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              All ({totalCount})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="shrink-0 flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="relevance">GD Relevance</option>
            <option value="rank">Rank</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      {/* Result count */}
      {activeCategory !== 'All' && (
        <p className="text-xs text-slate-500 mt-2">
          Showing {filteredCount} of {totalCount} stories in <strong>{activeCategory}</strong>
        </p>
      )}
    </div>
  )
}
