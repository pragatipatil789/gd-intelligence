import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'
import { Toaster } from '@/components/ui/Toaster'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'GD Intelligence | MBA Group Discussion Preparation',
  description:
    'Convert current affairs and GD topics into structured, fact-based, speakable GD preparation material for MBA/PGDM students.',
  keywords: 'GD preparation, MBA group discussion, current affairs, PGDM, placement preparation',
  openGraph: {
    title: 'GD Intelligence — MBA GD Preparation',
    description: 'Turn news and topics into arguments, data, and speaking points.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
