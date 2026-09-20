'use client'

import { Settings, Key, Search, Info } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
          <Settings size={18} className="text-slate-600" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500 text-sm">Configure API keys and preferences</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* API Keys section */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <Key size={16} className="text-slate-600" />
            <h2 className="font-bold text-slate-900 text-sm">API Configuration</h2>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <Info size={14} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-amber-800 mb-1">Server-Side Configuration Required</p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  API keys are configured server-side via environment variables for security. 
                  They cannot be entered here. Please edit your <code className="bg-amber-100 px-1 rounded">.env.local</code> file.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                name: 'GEMINI_API_KEY',
                label: 'Google Gemini API Key',
                description: 'Required for AI-powered GD content generation',
                link: 'https://aistudio.google.com/app/apikey',
                linkLabel: 'Get API Key →',
              },
              {
                name: 'TAVILY_API_KEY',
                label: 'Tavily Search API Key',
                description: 'Optional. Enables live web research for verified current affairs',
                link: 'https://tavily.com',
                linkLabel: 'Get API Key →',
              },
            ].map(({ name, label, description, link, linkLabel }) => (
              <div key={name} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{label}</p>
                    <code className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded mt-0.5 inline-block">{name}</code>
                    <p className="text-xs text-slate-500 mt-1">{description}</p>
                  </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-blue-600 font-medium hover:underline"
                  >
                    {linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-100">
            <p className="text-xs font-semibold text-slate-600 mb-2">Setup Steps:</p>
            <ol className="text-xs text-slate-600 space-y-1 list-decimal list-inside">
              <li>Copy <code className="bg-slate-100 px-1 rounded">.env.example</code> to <code className="bg-slate-100 px-1 rounded">.env.local</code> in the project root</li>
              <li>Get a Gemini API key from Google AI Studio (free tier available)</li>
              <li>Paste the key: <code className="bg-slate-100 px-1 rounded">GEMINI_API_KEY=your-key-here</code></li>
              <li>Restart the development server</li>
              <li>Optionally, add a Tavily key for live web research</li>
            </ol>
          </div>
        </div>

        {/* Research Mode */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Search size={16} className="text-slate-600" />
            <h2 className="font-bold text-slate-900 text-sm">Research Mode</h2>
          </div>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
              <div>
                <strong className="text-green-800">Live Research</strong> — Active when TAVILY_API_KEY is configured. Fetches real-time news and data.
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
              <div>
                <strong className="text-amber-800">General Knowledge</strong> — Default mode. AI uses its training knowledge. Suitable for topic analysis and general GD prep.
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Info size={16} className="text-slate-600" />
            <h2 className="font-bold text-slate-900 text-sm">About</h2>
          </div>
          <div className="text-sm text-slate-600 space-y-1">
            <p><strong>GD Intelligence</strong> — MBA GD Preparation Platform</p>
            <p className="text-xs text-slate-500">
              Powered by Google Gemini AI · Built for MBA/PGDM students preparing for Group Discussions, placements, and consulting interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
