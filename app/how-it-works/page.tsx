import type { Metadata } from "next"
import Link from "next/link"
import { Layers, ArrowRight, CheckCircle2 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "How Proptham Works - Five-Step Property Decision Sequence | Proptham",
  description: "Learn the Proptham property intelligence sequence: Research, Analyse, Verify, Compare, and Decide.",
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Layers className="h-3.5 w-3.5 text-teal-400" /> DECISION WORKFLOW
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              CLARITY BEFORE COMMITMENT.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Explore the five-step sequence that transforms scattered real estate data into actionable decision evidence.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            {[
              { num: "01", title: "RESEARCH", text: "Access historical transaction deeds, builder track records, and locality appreciation velocity." },
              { num: "02", title: "ANALYSE", text: "Evaluate per-sq.ft market valuation, all-inclusive hidden outlays, and guideline value gaps." },
              { num: "03", title: "VERIFY", text: "Audit ownership title deeds, 30-year Encumbrance Certificates, Patta/Khata & RERA compliance." },
              { num: "04", title: "COMPARE", text: "Expose material trade-offs, connectivity gaps, and risk profiles side-by-side." },
              { num: "05", title: "DECIDE", text: "Proceed with verified evidence and complete clarity before signing commitment forms." },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <span className="font-anton text-4xl text-teal-600 shrink-0">{s.num}</span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-950">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
