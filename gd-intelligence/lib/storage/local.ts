// localStorage helper for saved items and history
'use client'

import { SearchHistoryItem, SavedItem } from '@/types'

const HISTORY_KEY = 'gd_search_history'
const SAVED_KEY = 'gd_saved_items'
const STATS_KEY = 'gd_stats'

// ========================
// HISTORY
// ========================

export function getHistory(): SearchHistoryItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function addToHistory(item: Omit<SearchHistoryItem, 'id' | 'createdAt'>): void {
  if (typeof window === 'undefined') return
  const history = getHistory()
  const newItem: SearchHistoryItem = {
    ...item,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  // Prevent duplicates (same type + input)
  const filtered = history.filter(
    (h) => !(h.type === item.type && h.input.toLowerCase() === item.input.toLowerCase())
  )
  const updated = [newItem, ...filtered].slice(0, 50) // keep last 50
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
}

export function removeFromHistory(id: string): void {
  if (typeof window === 'undefined') return
  const history = getHistory().filter((h) => h.id !== id)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(HISTORY_KEY)
}

// ========================
// SAVED ITEMS
// ========================

export function getSavedItems(): SavedItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(SAVED_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function saveItem(item: Omit<SavedItem, 'id' | 'savedAt'>): SavedItem {
  const saved = getSavedItems()
  const newItem: SavedItem = {
    ...item,
    id: crypto.randomUUID(),
    savedAt: new Date().toISOString(),
  }
  localStorage.setItem(SAVED_KEY, JSON.stringify([newItem, ...saved]))
  incrementStat('factsSaved')
  return newItem
}

export function removeSavedItem(id: string): void {
  if (typeof window === 'undefined') return
  const saved = getSavedItems().filter((s) => s.id !== id)
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved))
}

export function isItemSaved(type: SavedItem['type'], title: string): boolean {
  return getSavedItems().some((s) => s.type === type && s.title === title)
}

// ========================
// STATS
// ========================

interface Stats {
  newsBriefs: number
  topicsAnalysed: number
  factsSaved: number
  gdTopicsPrepared: number
}

export function getStats(): Stats {
  if (typeof window === 'undefined') return { newsBriefs: 0, topicsAnalysed: 0, factsSaved: 0, gdTopicsPrepared: 0 }
  try {
    const raw = localStorage.getItem(STATS_KEY)
    return raw ? JSON.parse(raw) : { newsBriefs: 0, topicsAnalysed: 0, factsSaved: 0, gdTopicsPrepared: 0 }
  } catch {
    return { newsBriefs: 0, topicsAnalysed: 0, factsSaved: 0, gdTopicsPrepared: 0 }
  }
}

export function incrementStat(key: keyof Stats): void {
  if (typeof window === 'undefined') return
  const stats = getStats()
  stats[key] = (stats[key] || 0) + 1
  localStorage.setItem(STATS_KEY, JSON.stringify(stats))
}
