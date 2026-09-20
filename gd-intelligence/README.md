# 🧠 GD Intelligence Assistant
### AI-Powered MBA Group Discussion & Current Affairs Intelligence Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Repository**: [https://github.com/pragatipatil789/gd-intelligence](https://github.com/pragatipatil789/gd-intelligence)

**GD Intelligence** is a production-ready full-stack application engineered specifically for MBA / PGDM candidates preparing for top B-school selections (IIMs, XLRI, FMS, SPJIMR), consulting case assessments, and corporate management trainee evaluation rounds.

Unlike generic news aggregators or standard chat tools, GD Intelligence translates current affairs, abstract themes, and industry domains directly into **structured, fact-checked, high-impact GD ammunition** — complete with opening scripts, verified statistics with citations, 10-minute rapid revision cheat sheets, multi-stakeholder lenses, and ready-to-use speaking interventions.

---

## 🌟 3 Core Modes of Preparation

### 📅 Mode A: Date-Based Current Affairs (`/daily`)
* **Date Research**: Enter any date (or pick with 1 click: Today, Yesterday, Custom).
* **Curated GD Intelligence**: Extracts the top 5–7 most critical national and global events worthy of GD discussion.
* **Each Event Breakdown**:
  * **Event Summary & Strategic Context**: Crisp, objective explanation.
  * **Why It Matters for MBA GDs**: Macroeconomic, business, and policy ramifications.
  * **Key Facts, Figures & Data**: Hard statistical anchors to cite with authority.
  * **Multi-Stakeholder Perspectives**: Government, Corporates, Consumers, Global bodies.
  * **Speakable Opening Hooks**: Crisp 20-second opening statements.
  * **30-Second & 60-Second Interventions**: Conversational spoken responses for active GD participation.
  * **Contrarian / Differentiator Angles**: Unique points that make candidates stand out.

### 💡 Mode B: Topic Intelligence Engine (`/topic`)
* **Concrete & Abstract Topic Analysis**: Enter any GD topic (e.g. *"Artificial Intelligence"*, *"Energy"*, or abstract themes like *"Black and White"*, *"Sunrise"*, *"Zero"*).
* **Intelligent Topic Classification**: Automatically categorizes topics into **Concrete**, **Abstract**, or **Hybrid** with tailored answering strategies.
* **Abstract Demystification**: Decodes abstract metaphors into 5+ distinct analytical frameworks.
* **Balanced Perspectives**: Structured arguments for both sides with empirical case studies.
* **What Makes You Stand Out**: Strongest facts, best examples, smart cross-sector connections, and common mistakes to avoid.
* **Speaking Toolkit**: 3 distinct opening personas (Data-led, Context-led, Nuanced/Contrarian), mid-GD steering interventions, and disagreement etiquette scripts.

### 🧭 Mode C: Domain Intelligence Mode (`/domain`)
* **Target Placement Sectors**: Dedicated intelligence suites for **Finance & Banking**, **Technology & AI**, **Analytics & Consulting**, **Energy & Sustainability**, **Healthcare & Pharma**, and **Retail/E-commerce**.
* **Top Developments & Case Studies**: Verified major developments with business and societal implications, balanced views, counterarguments, and speaking scripts.
* **Top 20 Verified Facts Table**: Filterable, searchable data matrix with values, contexts, years, and primary sources.
* **5 High-Impact Opening Strategies**: Data-led, Current Affairs, Business-led, Balanced, and Strategic scripts with text-to-speech rehearsals.
* **10 Impact Strategies & Differentiators**: Numbers to remember, examples to quote, policies, reports, trends, and pitfalls to avoid.
* **10 Cross-Industry Macro Connections**: Links to Economy, Policy, Tech, Consumers, Jobs, Sustainability, Globalisation, Geopolitics, Regulation, and Innovation.
* **Key Companies & Authoritative Reports**: Indian and global players, recent milestones, and primary reports (RBI, SEBI, NASSCOM, WEF, McKinsey).
* **⚡ 10-Minute Pre-GD Cheat Sheet**: 10 things you must know, 10 numbers to remember, 5 companies, 5 reports, 5 trends, and 5 moderator questions for last-minute prep.

---

## ⚡ Candidate Experience & Productivity Features

* **Audio Rehearsal**: Built-in text-to-speech synthesizer to practice vocal pace and delivery before entering the GD room.
* **One-Click Notebook**: Save developments, facts, and speaking points to a persistent local notebook.
* **Search History**: Instant access to previous searches and analyzed topics.
* **Clean Print & PDF Export**: Professional layout formatted for printing cheat sheets.
* **Zero-Config Offline Mode**: Built-in comprehensive MBA-grade mock data for instant practice without requiring an API key.
* **Real-Time AI Processing**: Powered by Google Gemini AI with optional live Tavily search grounding.

---

## 🛠️ Architecture & Tech Stack

* **Framework**: Next.js 16 (App Router, Turbopack, React 19)
* **Styling**: Tailwind CSS v4 with custom tokens and typography
* **Icons**: Lucide React
* **Validation**: Zod schema enforcement for structured JSON outputs
* **AI Orchestration**: Google Gemini Provider (`@google/genai`) with fallback mock generators
* **Client Storage**: LocalStorage adapter with zero external database dependencies for privacy and offline speed

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/pragatipatil789/gd-intelligence.git
cd gd-intelligence
npm install
```

### 2. Configure Environment (Optional)
Copy the example environment file:
```bash
cp .env.example .env.local
```

Add your Gemini API key (optional — the app runs fully in offline demo mode without it):
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
> *Free API keys can be obtained from [Google AI Studio](https://aistudio.google.com).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   ├── analyze-domain/route.ts  # Endpoint for Domain Intelligence
│   │   ├── analyze-topic/route.ts   # Endpoint for Topic Intelligence
│   │   └── daily-news/route.ts      # Endpoint for Date-based News
│   ├── daily/page.tsx               # Mode A: Current Affairs UI
│   ├── topic/page.tsx               # Mode B: Topic Intelligence UI
│   ├── domain/page.tsx              # Mode C: Domain Intelligence UI
│   ├── saved/page.tsx               # Candidate Notebook (Saved items)
│   ├── history/page.tsx             # Search History
│   ├── settings/page.tsx            # API Configuration
│   ├── layout.tsx                   # Main application layout
│   └── page.tsx                     # Landing page with 3 mode cards
├── components/
│   ├── domain/                      # Domain Intelligence components
│   ├── news/                        # Daily News components
│   ├── topic/                       # Topic Analysis components
│   └── ui/                          # Shared UI (Navbar, Badges, Toaster, etc.)
├── lib/
│   ├── ai/                          # Gemini provider and mock generators
│   ├── research/                    # Search service (Tavily/fallback)
│   ├── storage/                     # LocalStorage manager
│   ├── utils/                       # Helpers & string utilities
│   └── validation/                  # Zod schemas
└── types/
    └── index.ts                     # TypeScript definitions for all 3 modes
```

---

## 📄 License

This project is licensed under the MIT License.
