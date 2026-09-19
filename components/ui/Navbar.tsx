'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Brain, Menu, X, BookOpen, History, BookmarkCheck, Settings, Newspaper } from 'lucide-react'

const navLinks = [
  { href: '/daily', label: 'Daily News', icon: Newspaper },
  { href: '/topic', label: 'Topic Analysis', icon: Brain },
  { href: '/saved', label: 'Saved Topics', icon: BookmarkCheck },
  { href: '/history', label: 'History', icon: History },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-sm">
              <Brain className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm tracking-tight">GD Intelligence</span>
              <div className="text-[10px] text-slate-400 font-medium -mt-0.5 hidden sm:block">MBA Preparation</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link href="/settings" className="hidden md:flex btn-icon" aria-label="Settings">
              <Settings size={16} />
            </Link>
            <Link href="/daily" className="hidden md:flex btn-primary text-sm px-4 py-2">
              <BookOpen size={14} />
              Start Preparing
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden btn-icon"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname.startsWith(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </Link>
              )
            })}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/daily"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center"
              >
                <BookOpen size={14} />
                Start Preparing
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
