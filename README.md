# 🧠 GD Intelligence Assistant
### AI-Powered Group Discussion & Interview Prep Engine for MBA Candidates

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**GD Intelligence Assistant** is a specialized, production-ready full-stack application tailored for MBA/PGDM candidates preparing for top B-school selections (IIMs, XLRI, FMS, SPJIMR), consulting case assessments, and corporate management trainee evaluation rounds.

Unlike generic news summaries, it translates news events and debate topics directly into **speakable, fact-based, structured GD ammunition** with pre-formulated opening lines, nuanced arguments, business frameworks (PESTLE, Stakeholder matrices), and crisp conclusions.

---

## 🌟 Core Modes & Capabilities

### 📅 Mode A: Date-Based Current Affairs
* **Date Research**: Enter any date (or pick with 1 click: Today, Yesterday, Last Week).
* **Curated GD Intelligence**: Extracts the top 5–7 most critical national and global events worthy of GD discussion.
* **Each Event Includes**:
  * **Event Summary & Context**: Concise, objective breakdown of what occurred.
  * **Why It Matters for MBA GDs**: Business, macroeconomic, and policy ramifications.
  * **Key Facts, Figures & Data**: Hard statistical anchors to cite with authority.
  * **Multi-Stakeholder Perspectives**: Government, Corporates, Consumers, Global bodies.
  * **Framework Breakdown**: Structured analytical evaluation (PESTLE / STEEPLE).
  * **Speakable Opening Hooks**: Crisp 20-second opening statements.
  * **Strong Closing Remarks**: Balanced, forward-looking conclusions.
  * **Contrarian / Differentiator Angles**: Unique points that make candidates stand out from the crowd.

### 💡 Mode B: Topic Intelligence Engine
* **Any GD Topic Analysis**: Enter any concrete, abstract, or hybrid topic (e.g., *"Red vs Blue"*, *"Is AI creating or killing jobs?"*, *"Universal Basic Income in developing nations"*).
* **Intelligent Topic Classification**: Classifies topics into **Concrete**, **Abstract**, or **Hybrid** with tailored answering strategies.
* **Abstract Demystification**: Decodes abstract metaphors into business and philosophical dimensions.
* **Arguments For & Against**: Balanced, rigorous debate points supported by real-world case studies.
* **Framework Mapping**: McKinsey 3Cs, Porter's 5 Forces, or PESTLE lenses.
* **Counter-Attack Resilience**: Pre-empts typical GD arguments with rebuttal shields.

### ⚡ Power Features for High-Intensity GD Prep
* **Bookmark & Quick-Save**: Save key statistics, arguments, and quotes to your personal vault for last-minute revision.
* **Export & Print Ready**: One-click Clean Print / PDF mode for offline reading.
* **Search History**: Persistent local caching of researched dates and analyzed topics.
* **Zero-Config Fallback Mode**: Ships with built-in realistic mock intelligence so candidates can practice instantly even without entering an API key.
* **Live LLM Integration**: Powered by Groq ultra-fast Llama-3 inference for sub-second real-time analyses.

---

## 🛠️ Architecture & Tech Stack

* **Framework**: Next.js 16 (App Router, Turbopack, React 19)
* **Styling**: Tailwind CSS v4 with custom utility tokens, modern card layouts, and responsive dark/light accents
* **Icons**: Lucide React
* **Validation**: Zod schema enforcement for structured, reliable JSON responses
* **AI Orchestration**: Groq SDK (`groq-sdk`) with automatic fallback to high-fidelity mock generators
* **Client Storage**: LocalStorage adapter with zero external database dependencies for privacy and rapid offline caching

---

## 🚀 Quick Start

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/gd-intelligence.git
cd gd-intelligence
npm install
```

### 2. Configure Environment (Optional)
Create a `.env.local` file in the root directory:
```env
# Optional: Get an ultra-fast free API key from https://console.groq.com/keys
GROQ_API_KEY=your_groq_api_key_here
```
> *Note: If `GROQ_API_KEY` is not provided, the application will seamlessly run in **Demonstration / Offline Mode** with high-yield MBA sample data.*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   ├── analyze-topic/route.ts  # LLM endpoint for Topic Intelligence
│   │   └── daily-news/route.ts     # LLM endpoint for Date-based News
│   ├── daily/page.tsx              # Mode A: Current Affairs UI
│   ├── topic/page.tsx              # Mode B: Topic Intelligence UI
│   ├── saved/page.tsx              # Personal Saved Vault
│   ├── history/page.tsx            # Recent Searches & Topics
│   ├── settings/page.tsx           # Configuration & API Key management
│   ├── layout.tsx                  # Root navigation & layout
│   ├── page.tsx                    # Command Center Dashboard
│   └── globals.css                 # Tailwind v4 theme & utility tokens
├── components/
│   ├── Navbar.tsx                  # Header navigation & quick links
│   ├── DailyNewsDisplay.tsx        # Fact-sheet & speaking-card renderers
│   └── TopicAnalysisDisplay.tsx    # Multi-dimensional topic visualizer
├── lib/
│   ├── ai/
│   │   ├── groq.ts                 # Groq client & prompt engineering
│   │   ├── mock-data.ts            # High-fidelity MBA offline fallback
│   │   └── schemas.ts              # Zod schemas for AI structured outputs
│   └── storage/
│       └── local.ts                # Client storage management for bookmarks
└── types/
    └── index.ts                    # Full TypeScript domain models
```

---

## 🎯 Deployment

### Deploy on Vercel
1. Push your repository to GitHub.
2. Import your repo on [Vercel](https://vercel.com/new).
3. Add `GROQ_API_KEY` under **Environment Variables** (optional).
4. Click **Deploy**.

---

## 📜 License
MIT License. Built for ambitious MBA candidates and interview aspirants worldwide.
