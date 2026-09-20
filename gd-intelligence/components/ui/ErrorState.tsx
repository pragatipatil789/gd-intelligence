'use client'

import { AlertTriangle, RefreshCw, Settings } from 'lucide-react'

interface ErrorStateProps {
  error: string
  code?: string
  details?: string
  onRetry?: () => void
}

export function ErrorState({ error, code, details, onRetry }: ErrorStateProps) {
  const isConfigError = code === 'AI_NOT_CONFIGURED'

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="card max-w-md w-full p-8 text-center">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
          isConfigError ? 'bg-amber-100' : 'bg-red-100'
        }`}>
          {isConfigError ? (
            <Settings className="text-amber-600" size={26} />
          ) : (
            <AlertTriangle className="text-red-600" size={26} />
          )}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {isConfigError ? 'API Key Required' : 'Something went wrong'}
        </h3>
        <p className="text-sm text-slate-600 mb-3">{error}</p>

        {isConfigError && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-left mb-4">
            <p className="text-xs font-semibold text-amber-800 mb-2">Setup instructions:</p>
            <ol className="text-xs text-amber-700 space-y-1 list-decimal list-inside">
              <li>Copy <code className="bg-amber-100 px-1 rounded">.env.example</code> to <code className="bg-amber-100 px-1 rounded">.env.local</code></li>
              <li>Get a free Gemini API key from <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold">aistudio.google.com</a></li>
              <li>Add your key: <code className="bg-amber-100 px-1 rounded">GEMINI_API_KEY=your-key</code></li>
              <li>Restart the dev server</li>
            </ol>
          </div>
        )}

        {details && !isConfigError && (
          <p className="text-xs text-slate-400 font-mono bg-slate-50 rounded-lg p-3 mb-4 text-left">
            {details}
          </p>
        )}

        {onRetry && (
          <button onClick={onRetry} className="btn-primary mx-auto">
            <RefreshCw size={14} />
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}
