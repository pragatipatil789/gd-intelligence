'use client'

import { useState } from 'react'
import { OpeningStrategy } from '@/types'
import { MessageSquare, Copy, Volume2, VolumeX, Sparkles, Check } from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { toast } from '@/components/ui/Toaster'

interface OpeningStrategiesCardProps {
  strategies: OpeningStrategy[]
  domain: string
}

export function OpeningStrategiesCard({ strategies, domain }: OpeningStrategiesCardProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [speakingIndex, setSpeakingIndex] = useState<number | null>(null)

  const handleCopy = async (script: string, idx: number) => {
    await copyToClipboard(script)
    setCopiedIndex(idx)
    toast('Opening script copied to clipboard!', 'success')
    setTimeout(() => setCopiedIndex(null), 2500)
  }

  const handleSpeak = (script: string, idx: number) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      toast('Speech synthesis is not supported in your browser.', 'info')
      return
    }

    if (speakingIndex === idx) {
      window.speechSynthesis.cancel()
      setSpeakingIndex(null)
      return
    }

    window.speechSynthesis.cancel()
    const cleanScript = script.replace(/["']/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanScript)
    utterance.rate = 0.95
    utterance.pitch = 1.0
    utterance.onend = () => setSpeakingIndex(null)
    utterance.onerror = () => setSpeakingIndex(null)

    setSpeakingIndex(idx)
    window.speechSynthesis.speak(utterance)
  }

  const getStyleColor = (style: string) => {
    switch (style.toLowerCase()) {
      case 'data-led':
        return 'border-blue-200 bg-blue-50/50 text-blue-700'
      case 'current-affairs':
        return 'border-emerald-200 bg-emerald-50/50 text-emerald-700'
      case 'business-led':
        return 'border-indigo-200 bg-indigo-50/50 text-indigo-700'
      case 'balanced':
        return 'border-purple-200 bg-purple-50/50 text-purple-700'
      case 'strategic':
        return 'border-amber-200 bg-amber-50/50 text-amber-700'
      default:
        return 'border-slate-200 bg-slate-50 text-slate-700'
    }
  }

  return (
    <div className="card border border-slate-200 bg-white overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles size={16} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">
              5 High-Impact Opening Strategies
            </h3>
            <p className="text-xs text-slate-500">
              Master the first 30 seconds of your GD. Choose the opening persona that matches the group dynamic.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 grid gap-4">
        {strategies.map((strategy, idx) => {
          const isSpeaking = speakingIndex === idx
          const isCopied = copiedIndex === idx

          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-150 bg-slate-50/30 hover:bg-white shadow-xs"
            >
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className={`badge text-[11px] font-bold ${getStyleColor(strategy.style)}`}>
                    {strategy.styleLabel || strategy.style}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    30-sec intervention
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleSpeak(strategy.script, idx)}
                    className={`btn-icon p-1.5 ${isSpeaking ? 'text-blue-600 bg-blue-50' : 'text-slate-400 hover:text-slate-700'}`}
                    title={isSpeaking ? 'Stop rehearsing' : 'Listen to practice speech delivery'}
                  >
                    {isSpeaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                  <button
                    onClick={() => handleCopy(strategy.script, idx)}
                    className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 transition-colors"
                  >
                    {isCopied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                    {isCopied ? 'Copied' : 'Copy Script'}
                  </button>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal italic border-l-2 border-slate-300 pl-3.5 my-1">
                {strategy.script}
              </blockquote>
            </div>
          )
        })}
      </div>
    </div>
  )
}
