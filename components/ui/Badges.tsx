'use client'

import { getCategoryColor } from '@/lib/utils'

interface CategoryBadgeProps {
  category: string
  size?: 'sm' | 'md'
}

export function CategoryBadge({ category, size = 'sm' }: CategoryBadgeProps) {
  return (
    <span
      className={`badge ${getCategoryColor(category)} ${
        size === 'md' ? 'text-xs px-3 py-1' : 'text-[11px] px-2 py-0.5'
      }`}
    >
      {category}
    </span>
  )
}

interface RelevanceBadgeProps {
  relevance: string
}

export function RelevanceBadge({ relevance }: RelevanceBadgeProps) {
  const classes: Record<string, string> = {
    'Very High': 'bg-green-100 text-green-800 border-green-200',
    High: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Low: 'bg-gray-100 text-gray-600 border-gray-200',
  }

  const dots: Record<string, string> = {
    'Very High': 'bg-green-500',
    High: 'bg-emerald-500',
    Medium: 'bg-yellow-500',
    Low: 'bg-gray-400',
  }

  return (
    <span className={`badge ${classes[relevance] || classes.Medium}`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1 ${dots[relevance] || 'bg-gray-400'}`} />
      GD: {relevance}
    </span>
  )
}

interface ClassificationBadgeProps {
  classification: 'Concrete' | 'Abstract' | 'Hybrid'
}

export function ClassificationBadge({ classification }: ClassificationBadgeProps) {
  const styles: Record<string, string> = {
    Concrete: 'bg-blue-100 text-blue-800 border-blue-200',
    Abstract: 'bg-purple-100 text-purple-800 border-purple-200',
    Hybrid: 'bg-teal-100 text-teal-800 border-teal-200',
  }
  return (
    <span className={`badge text-xs px-3 py-1 ${styles[classification]}`}>
      {classification}
    </span>
  )
}
