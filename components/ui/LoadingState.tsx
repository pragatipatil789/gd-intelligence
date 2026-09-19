'use client'

import { CheckCircle2, Circle, Loader2 } from 'lucide-react'

interface Step {
  label: string
  status: 'done' | 'active' | 'pending'
}

interface LoadingStateProps {
  steps: Step[]
  title?: string
}

export function LoadingState({ steps, title = 'Generating your GD brief...' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="card max-w-md w-full p-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-5 shadow-md">
          <Loader2 className="text-white animate-spin" size={26} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
        <p className="text-sm text-slate-500 mb-6">This may take 15–30 seconds</p>

        <div className="space-y-3 text-left">
          {steps.map((step, i) => (
            <div key={i} className={`progress-step ${step.status}`}>
              {step.status === 'done' ? (
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              ) : step.status === 'active' ? (
                <Loader2 size={16} className="animate-spin text-blue-500 shrink-0" />
              ) : (
                <Circle size={16} className="text-slate-300 shrink-0" />
              )}
              <span className="text-sm">{step.label}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 mt-6">Powered by Gemini AI · Sources verified</p>
      </div>
    </div>
  )
}

export const NEWS_LOADING_STEPS: Step[] = [
  { label: 'Researching current developments...', status: 'done' },
  { label: 'Identifying relevant sources', status: 'done' },
  { label: 'Analysing news for GD relevance', status: 'active' },
  { label: 'Extracting statistics and facts', status: 'pending' },
  { label: 'Building GD arguments', status: 'pending' },
  { label: 'Preparing speaking points', status: 'pending' },
  { label: 'Verifying sources', status: 'pending' },
]

export const TOPIC_LOADING_STEPS: Step[] = [
  { label: 'Classifying topic...', status: 'done' },
  { label: 'Researching key developments', status: 'done' },
  { label: 'Building multiple perspectives', status: 'active' },
  { label: 'Extracting facts and statistics', status: 'pending' },
  { label: 'Generating GD arguments', status: 'pending' },
  { label: 'Preparing speaking toolkit', status: 'pending' },
  { label: 'Creating revision card', status: 'pending' },
]
