'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
}

let toastQueue: Toast[] = []
let listeners: ((toasts: Toast[]) => void)[] = []

function notify() {
  listeners.forEach((l) => l([...toastQueue]))
}

export function toast(message: string, type: ToastType = 'success') {
  const id = crypto.randomUUID()
  toastQueue = [{ id, message, type }, ...toastQueue].slice(0, 3)
  notify()
  setTimeout(() => {
    toastQueue = toastQueue.filter((t) => t.id !== id)
    notify()
  }, 3000)
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    listeners.push(setToasts)
    return () => {
      listeners = listeners.filter((l) => l !== setToasts)
    }
  }, [])

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-[100] space-y-2 no-print">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`toast-enter flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium max-w-xs ${
            t.type === 'success'
              ? 'bg-white border-emerald-200 text-emerald-800'
              : t.type === 'error'
              ? 'bg-white border-red-200 text-red-800'
              : 'bg-white border-blue-200 text-blue-800'
          }`}
        >
          {t.type === 'success' ? (
            <CheckCircle className="text-emerald-500 shrink-0" size={16} />
          ) : t.type === 'error' ? (
            <XCircle className="text-red-500 shrink-0" size={16} />
          ) : (
            <AlertCircle className="text-blue-500 shrink-0" size={16} />
          )}
          {t.message}
          <button
            onClick={() => {
              toastQueue = toastQueue.filter((x) => x.id !== t.id)
              notify()
            }}
            className="ml-auto shrink-0 text-slate-400 hover:text-slate-600"
          >
            <X size={13} />
          </button>
        </div>
      ))}
    </div>
  )
}
