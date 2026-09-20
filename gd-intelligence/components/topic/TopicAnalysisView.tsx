'use client'

import { useState } from 'react'
import { TopicAnalysis } from '@/types'
import { ClassificationBadge } from '@/components/ui/Badges'
import {
  Brain, ChevronDown, ChevronUp, Copy, Bookmark, BookmarkCheck,
  Zap, BarChart3, Target, Quote, RefreshCw, Star, Lightbulb,
  ExternalLink, BookOpen, Layers, Scale, Mic, Eye
} from 'lucide-react'
import { copyToClipboard } from '@/lib/utils'
import { saveItem, isItemSaved } from '@/lib/storage/local'
import { toast } from '@/components/ui/Toaster'

interface TopicAnalysisViewProps {
  analysis: TopicAnalysis
}

type SectionKey = 'oneLineSummary' | 'realWorld' | 'generic' | 'abstract' | 'perspectives' | 'facts' |
  'examples' | 'balancedView' | 'impactFactors' | 'speaking' | 'answers' | 'revision' | 'sources'

export function TopicAnalysisView({ analysis }: TopicAnalysisViewProps) {
  const [openSections, setOpenSections] = useState<Set<SectionKey>>(
    new Set(['realWorld', 'impactFactors', 'answers', 'revision'])
  )
  const [saved30, setSaved30] = useState(isItemSaved('gdpoint', `30s: ${analysis.topic}`))
  const [saved60, setSaved60] = useState(isItemSaved('gdpoint', `60s: ${analysis.topic}`))

  const toggle = (key: SectionKey) => {
    setOpenSections((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const open = (key: SectionKey) => openSections.has(key)

  const copy30 = async () => {
    await copyToClipboard(analysis.thirtySecondAnswer)
    toast('30-second answer copied!', 'success')
  }

  const copy60 = async () => {
    await copyToClipboard(analysis.sixtySecondAnswer)
    toast('60-second answer copied!', 'success')
  }

  const save30 = () => {
    if (saved30) { toast('Already saved!', 'info'); return }
    saveItem({ type: 'gdpoint', title: `30s: ${analysis.topic}`, content: analysis.thirtySecondAnswer })
    setSaved30(true)
    toast('30-second answer saved!', 'success')
  }

  const save60 = () => {
    if (saved60) { toast('Already saved!', 'info'); return }
    saveItem({ type: 'gdpoint', title: `60s: ${analysis.topic}`, content: analysis.sixtySecondAnswer })
    setSaved60(true)
    toast('60-second answer saved!', 'success')
  }

  const SectionHeader = ({ sectionKey, icon: Icon, title, count }: {
    sectionKey: SectionKey; icon: React.ElementType; title: string; count?: number
  }) => (
    <button
      onClick={() => toggle(sectionKey)}
      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center">
          <Icon size={14} className="text-slate-600" />
        </div>
        <span className="font-semibold text-slate-900 text-sm">{title}</span>
        {count !== undefined && (
          <span className="badge bg-slate-100 text-slate-600 border-slate-200 text-[10px]">{count}</span>
        )}
      </div>
      {open(sectionKey) ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
    </button>
  )

  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Topic Header */}
      <div className="card p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <ClassificationBadge classification={analysis.classification} />
              <span className={`badge text-[11px] ${
                analysis.researchMode === 'live'
                  ? 'bg-green-100 text-green-700 border-green-200'
                  : 'bg-amber-100 text-amber-700 border-amber-200'
              }`}>
                {analysis.researchMode === 'live' ? '● Live Research' : '● General Knowledge'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 capitalize">{analysis.topic}</h1>
            <p className="text-slate-500 text-sm mt-1.5 italic">{analysis.classificationReason}</p>
          </div>
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Brain className="text-white" size={20} />
          </div>
        </div>

        {analysis.oneLineExplanation && (
          <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">In one line: </span>
              {analysis.oneLineExplanation}
            </p>
          </div>
        )}
      </div>

      {/* WHAT WILL MAKE YOU STAND OUT — always visible */}
      <div className="card border-l-4 border-l-blue-600">
        <button
          onClick={() => toggle('impactFactors')}
          className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Star size={16} className="text-blue-600" />
            <span className="font-bold text-slate-900 text-sm">What Will Make You Stand Out?</span>
          </div>
          {open('impactFactors') ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
        </button>
        {open('impactFactors') && analysis.impactFactors && (
          <div className="px-5 pb-5 border-t border-slate-100 grid sm:grid-cols-2 gap-3">
            {[
              { label: '🏆 Strongest Fact', value: analysis.impactFactors.strongestFact },
              { label: '💡 Strongest Example', value: analysis.impactFactors.strongestExample },
              { label: '⚡ Strongest Argument', value: analysis.impactFactors.strongestArgument },
              { label: '🔄 Strongest Counterargument', value: analysis.impactFactors.strongestCounterargument },
              { label: '🧠 Smartest Connection', value: analysis.impactFactors.smartestConnection },
              { label: '🎯 Unconventional Perspective', value: analysis.impactFactors.unconventionalPerspective },
              { label: '⚠️ Common Mistake to Avoid', value: analysis.impactFactors.commonMistakeToAvoid, fullWidth: true },
            ].map(({ label, value, fullWidth }) => (
              <div key={label} className={`bg-slate-50 rounded-lg p-3 border border-slate-100 ${fullWidth ? 'sm:col-span-2' : ''}`}>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm text-slate-800">{value || '—'}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Real-World GD Pointers */}
      {analysis.realWorldPointers?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="realWorld" icon={Target} title="Real-World GD Pointers" count={analysis.realWorldPointers.length} />
          {open('realWorld') && (
            <div className="border-t border-slate-100">
              {analysis.realWorldPointers.map((pointer, i) => (
                <div key={i} className={`p-5 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{pointer.argument}</p>
                      <p className="text-sm text-slate-600 mb-2">{pointer.explanation}</p>
                      <div className="flex flex-wrap gap-3 text-xs">
                        {pointer.fact && (
                          <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                            📊 {pointer.fact}
                          </span>
                        )}
                        {pointer.example && (
                          <span className="bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md border border-amber-100">
                            💡 {pointer.example}
                          </span>
                        )}
                        {pointer.source && (
                          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                            📚 {pointer.source}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Abstract Interpretations */}
      {analysis.abstractInterpretations && analysis.abstractInterpretations.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="abstract" icon={Layers} title="Conceptual Interpretations" count={analysis.abstractInterpretations.length} />
          {open('abstract') && (
            <div className="border-t border-slate-100">
              {analysis.abstractInterpretations.map((interp, i) => (
                <div key={i} className={`p-5 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 px-2.5 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-bold border border-purple-200">
                      {interp.lens}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mt-2 mb-3">{interp.interpretation}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase mb-1">Arguments</p>
                      <ul className="space-y-1">
                        {interp.arguments.map((arg, j) => (
                          <li key={j} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <span className="text-purple-400 mt-0.5">›</span> {arg}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase mb-1">Examples</p>
                      <ul className="space-y-1">
                        {interp.examples.map((ex, j) => (
                          <li key={j} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <span className="text-amber-400 mt-0.5">›</span> {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Generic GD Pointers */}
      {analysis.genericPointers?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="generic" icon={Zap} title="Generic GD Arguments" count={analysis.genericPointers.length} />
          {open('generic') && (
            <div className="border-t border-slate-100">
              {analysis.genericPointers.map((pointer, i) => (
                <div key={i} className={`p-5 ${i > 0 ? 'border-t border-slate-100' : ''}`}>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 text-sm mb-1">{pointer.argument}</p>
                      <p className="text-sm text-slate-600">{pointer.explanation}</p>
                      {(pointer.fact || pointer.example) && (
                        <div className="flex flex-wrap gap-2 mt-2 text-xs">
                          {pointer.fact && (
                            <span className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                              📊 {pointer.fact}
                            </span>
                          )}
                          {pointer.example && (
                            <span className="bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                              💡 {pointer.example}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Multiple Perspectives */}
      {analysis.perspectives?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="perspectives" icon={Eye} title="Multiple Perspectives" count={analysis.perspectives.length} />
          {open('perspectives') && (
            <div className="p-5 border-t border-slate-100 grid sm:grid-cols-2 gap-4">
              {analysis.perspectives.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{p.dimension}</p>
                  <p className="text-sm text-slate-700 mb-2">{p.content}</p>
                  {p.keyPoints?.length > 0 && (
                    <ul className="space-y-1">
                      {p.keyPoints.map((kp, j) => (
                        <li key={j} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-blue-400 mt-0.5">›</span> {kp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Facts & Statistics */}
      {analysis.facts?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="facts" icon={BarChart3} title="Facts & Statistics" count={analysis.facts.length} />
          {open('facts') && (
            <div className="p-5 border-t border-slate-100 space-y-3">
              {analysis.facts.map((fact, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-start gap-3">
                    {fact.number && (
                      <div className="shrink-0 px-2.5 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold">
                        {fact.number}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">{fact.fact}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{fact.context}</p>
                      <div className="flex flex-wrap gap-2 mt-2 text-xs text-slate-500">
                        {fact.yearDate && <span>📅 {fact.yearDate}</span>}
                        <span>📚 {fact.source}</span>
                      </div>
                      <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-100">
                        <p className="text-xs text-green-800"><strong>GD Tip:</strong> {fact.howToUseInGD}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Examples */}
      {analysis.examples?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="examples" icon={BookOpen} title="Strong Examples" count={analysis.examples.length} />
          {open('examples') && (
            <div className="p-5 border-t border-slate-100 grid sm:grid-cols-2 gap-3">
              {analysis.examples.map((ex, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <p className="font-semibold text-slate-900 text-sm mb-1">{ex.title}</p>
                  <p className="text-xs text-slate-600 mb-2">{ex.description}</p>
                  <p className="text-xs text-blue-700 bg-blue-50 rounded p-1.5 border border-blue-100">
                    <strong>Relevance:</strong> {ex.relevance}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">{ex.howToMention}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Balanced View */}
      {analysis.balancedView && (
        <div className="card">
          <SectionHeader sectionKey="balancedView" icon={Scale} title="Balanced Viewpoint" />
          {open('balancedView') && (
            <div className="p-5 border-t border-slate-100 space-y-4">
              <div>
                <p className="section-title">My View</p>
                <p className="content-body">{analysis.balancedView.myView}</p>
              </div>
              {analysis.balancedView.supportingArguments?.length > 0 && (
                <div>
                  <p className="section-title">Supporting Arguments</p>
                  <ul className="space-y-2">
                    {analysis.balancedView.supportingArguments.map((arg, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs flex items-center justify-center font-semibold">
                          {i + 1}
                        </span>
                        {arg}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="highlight-box-amber">
                  <p className="section-title mb-1">⚡ Counterargument</p>
                  <p className="text-sm text-amber-900">{analysis.balancedView.counterargument}</p>
                </div>
                <div className="highlight-box-green">
                  <p className="section-title mb-1">✅ Balanced Conclusion</p>
                  <p className="text-sm text-emerald-900">{analysis.balancedView.balancedConclusion}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Speaking Toolkit */}
      <div className="card">
        <SectionHeader sectionKey="speaking" icon={Mic} title="Speaking Toolkit" />
        {open('speaking') && (
          <div className="p-5 border-t border-slate-100 space-y-6">
            {/* Opening Statements */}
            {analysis.openingStatements?.length > 0 && (
              <div>
                <p className="section-title">Opening Statements</p>
                <div className="space-y-3">
                  {analysis.openingStatements.map((stmt, i) => (
                    <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <span className="badge bg-blue-100 text-blue-700 border-blue-200 text-[10px] mb-2">
                        {stmt.type}
                      </span>
                      <p className="text-sm text-slate-800 italic mt-2">&ldquo;{stmt.statement}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mid-GD Interventions */}
            {analysis.midGDInterventions?.length > 0 && (
              <div>
                <p className="section-title">Mid-GD Entry Lines</p>
                <div className="space-y-2">
                  {analysis.midGDInterventions.map((line, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <span className="text-slate-400 text-sm mt-0.5">›</span>
                      <p className="text-sm text-slate-700 italic">&ldquo;{line}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disagreement Frameworks */}
            {analysis.disagreementFrameworks?.length > 0 && (
              <div>
                <p className="section-title flex items-center gap-1.5"><RefreshCw size={10} /> Disagreement Frameworks</p>
                <div className="space-y-2">
                  {analysis.disagreementFrameworks.map((fw, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-amber-50 rounded-lg p-3 border border-amber-100">
                      <span className="text-amber-400 text-sm mt-0.5">›</span>
                      <p className="text-sm text-slate-800 italic">&ldquo;{fw}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Model Answers */}
      <div className="card">
        <SectionHeader sectionKey="answers" icon={Quote} title="Model GD Answers" />
        {open('answers') && (
          <div className="border-t border-slate-100 space-y-4 p-5">
            {/* 30-second */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-bold text-slate-900 text-sm">30-Second GD Answer</span>
                  <p className="text-xs text-slate-500 mt-0.5">Context → Argument → Fact → Example → Conclusion</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={save30} className="btn-ghost text-xs">
                    {saved30 ? <BookmarkCheck size={13} className="text-blue-600" /> : <Bookmark size={13} />}
                  </button>
                  <button onClick={copy30} className="btn-ghost text-xs">
                    <Copy size={13} /> Copy
                  </button>
                </div>
              </div>
              <blockquote className="text-sm text-slate-800 italic leading-relaxed border-l-4 border-blue-500 pl-4">
                {analysis.thirtySecondAnswer}
              </blockquote>
            </div>

            {/* 60-second */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-bold text-slate-900 text-sm">60-Second GD Answer</span>
                  <p className="text-xs text-slate-500 mt-0.5">Context → Argument → Data → Example → Counterargument → Conclusion</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={save60} className="btn-ghost text-xs">
                    {saved60 ? <BookmarkCheck size={13} className="text-blue-600" /> : <Bookmark size={13} />}
                  </button>
                  <button onClick={copy60} className="btn-ghost text-xs">
                    <Copy size={13} /> Copy
                  </button>
                </div>
              </div>
              <blockquote className="text-sm text-slate-800 italic leading-relaxed border-l-4 border-indigo-500 pl-4">
                {analysis.sixtySecondAnswer}
              </blockquote>
            </div>
          </div>
        )}
      </div>

      {/* Revision Card */}
      <div className="card border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50">
        <SectionHeader sectionKey="revision" icon={Lightbulb} title="⚡ Rapid Revision — Remember These 5 Things" />
        {open('revision') && analysis.revisionCard && (
          <div className="p-5 border-t border-blue-100 grid sm:grid-cols-2 gap-3">
            {[
              { num: 1, label: 'Core Idea', value: analysis.revisionCard.coreIdea },
              { num: 2, label: 'Key Fact', value: analysis.revisionCard.keyFact },
              { num: 3, label: 'Key Number', value: analysis.revisionCard.keyNumber },
              { num: 4, label: 'Best Example', value: analysis.revisionCard.bestExample },
              { num: 5, label: 'Balanced Conclusion', value: analysis.revisionCard.balancedConclusion, fullWidth: true },
            ].map(({ num, label, value, fullWidth }) => (
              <div key={num} className={`bg-white rounded-xl p-4 border border-blue-100 shadow-sm ${fullWidth ? 'sm:col-span-2' : ''}`}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0">
                    {num}
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</span>
                </div>
                <p className="text-sm text-slate-800 font-medium">{value || '—'}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sources */}
      {analysis.sources?.length > 0 && (
        <div className="card">
          <SectionHeader sectionKey="sources" icon={ExternalLink} title="Sources" count={analysis.sources.length} />
          {open('sources') && (
            <div className="p-5 border-t border-slate-100 flex flex-wrap gap-2">
              {analysis.sources.map((src, i) => (
                <a
                  key={i}
                  href={src.url || '#'}
                  target={src.url ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  {src.name}
                  {src.url && <ExternalLink size={10} className="opacity-50" />}
                  <span className="opacity-50">({src.type})</span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
