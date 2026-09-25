import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Unbiased Property Buying Guides | Proptham Research",
  description: "Comprehensive property buying guides: apartment evaluation, first-time buyer checklists, questions to ask builders, and avoiding broker misinformation.",
}

export default function BuyingGuidesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <BookOpen className="h-3.5 w-3.5 text-teal-400" /> BUYING GUIDES
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PROPERTY BUYING RESEARCH GUIDES
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Step-by-step educational guides to evaluate properties, negotiate fair prices, and avoid broker misinformation.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "What questions should I ask before buying an apartment?", desc: "12 essential questions regarding maintenance fee caps, floor rise markup, and RERA delivery penalty clauses." },
                { title: "How to research a builder before buying a flat?", desc: "Framework to evaluate builder delivery track record, financial debt filings, and past delay history." },
                { title: "Ready-to-move vs Under Construction Property", desc: "Quantitative breakdown of GST implications, construction risk, and price appreciation trade-offs." },
                { title: "How to avoid being misled by property brokers?", desc: "Identifying verbal claims, checking independent land registration records, and verifying title deeds." },
              ].map((g, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                  <h3 className="text-lg font-bold text-slate-950">{g.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
