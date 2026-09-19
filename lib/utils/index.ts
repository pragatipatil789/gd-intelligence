// Utility functions

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return dateStr
  }
}

export function isValidDate(dateStr: string): boolean {
  if (!dateStr) return false
  const d = new Date(dateStr)
  return !isNaN(d.getTime()) && d <= new Date()
}

export function isValidTopic(topic: string): boolean {
  return topic.trim().length >= 2 && topic.trim().length <= 200
}

export function extractJSON(text: string): string {
  // Try to extract JSON from AI response that might contain markdown fences
  const fenceMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fenceMatch) return fenceMatch[1].trim()

  // Find first { and last }
  const firstBrace = text.indexOf('{')
  const lastBrace = text.lastIndexOf('}')
  if (firstBrace !== -1 && lastBrace !== -1) {
    return text.slice(firstBrace, lastBrace + 1)
  }
  return text
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    return success
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Economy: 'bg-blue-100 text-blue-800 border-blue-200',
    Business: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    Finance: 'bg-violet-100 text-violet-800 border-violet-200',
    Technology: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    AI: 'bg-purple-100 text-purple-800 border-purple-200',
    Energy: 'bg-amber-100 text-amber-800 border-amber-200',
    Infrastructure: 'bg-orange-100 text-orange-800 border-orange-200',
    'Government & Policy': 'bg-slate-100 text-slate-800 border-slate-200',
    Geopolitics: 'bg-red-100 text-red-800 border-red-200',
    'International Relations': 'bg-rose-100 text-rose-800 border-rose-200',
    Climate: 'bg-green-100 text-green-800 border-green-200',
    Healthcare: 'bg-teal-100 text-teal-800 border-teal-200',
    Education: 'bg-sky-100 text-sky-800 border-sky-200',
    Employment: 'bg-lime-100 text-lime-800 border-lime-200',
    Startups: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    Markets: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Defence: 'bg-gray-100 text-gray-800 border-gray-200',
    Society: 'bg-pink-100 text-pink-800 border-pink-200',
    Regulation: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Global Affairs': 'bg-blue-100 text-blue-800 border-blue-200',
  }
  return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200'
}

export function getRelevanceBadge(relevance: string): string {
  const badges: Record<string, string> = {
    'Very High': 'bg-green-100 text-green-800',
    High: 'bg-emerald-100 text-emerald-700',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-gray-100 text-gray-600',
  }
  return badges[relevance] || 'bg-gray-100 text-gray-600'
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
