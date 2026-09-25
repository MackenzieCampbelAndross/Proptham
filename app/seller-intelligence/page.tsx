import type { Metadata } from "next"
import Link from "next/link"
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Seller Intelligence - Market Position & Buyer Objections | Proptham",
  description: "Understand how buyers evaluate your property, audit competing supply, identify information gaps, and position accurately with Proptham Seller Intelligence.",
}

export default function SellerIntelligencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="h-3.5 w-3.5 text-teal-400" /> SELLER INTELLIGENCE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              UNDERSTAND HOW THE MARKET SEES YOUR PROPERTY.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Eliminate pricing guesswork. Understand competing supply, buyer decision criteria, objections, and missing document gaps.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">SELLER DECISION AUDIT</span>
              <h2 className="text-3xl font-extrabold text-slate-950">What Proptham Seller Intelligence Audits</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 font-mono">01</span>
                <h3 className="text-lg font-bold text-slate-950">Market Position & Competing Supply</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Maps active competing listings in your layout to benchmark realistic per-sq.ft asking prices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 font-mono">02</span>
                <h3 className="text-lg font-bold text-slate-950">Buyer Objection Mitigation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identifies friction points (e.g. pending Patta transfer or unverified EC history) before serious buyers raise them.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 font-mono">03</span>
                <h3 className="text-lg font-bold text-slate-950">Document Pre-Verification</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Runs LandCheck audit on your title deeds to provide buyers with transparent, verified confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
