import type { Metadata } from "next"
import Link from "next/link"
import { BarChart3, TrendingUp, DollarSign, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Price Intelligence & Fair Market Valuation | Proptham",
  description: "Evaluate asking price per sq.ft., guideline values, market transaction benchmarks, and hidden purchase outlays with Proptham Price Intelligence.",
}

export default function PriceIntelligencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <BarChart3 className="h-3.5 w-3.5 text-teal-400" /> PRICE INTELLIGENCE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              IS THIS PROPERTY ACTUALLY PRICED REASONABLY?
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Validate asking price per sq.ft against government guideline values, historical micro-market appreciation, and all-inclusive total outlay.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/property-analysis">Check Property Price</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">VALUATION BREAKDOWN</span>
              <h2 className="text-3xl font-extrabold text-slate-950">How Proptham Validates Price</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">01</span>
                <h3 className="text-lg font-bold text-slate-950">Guideline Value vs Asking</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Measures the gap between official government stamp duty registration value and developer asking rate to highlight true market markup.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">02</span>
                <h3 className="text-lg font-bold text-slate-950">Recent Deed Benchmarks</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cross-references 40+ recent registered sale deeds in the same survey sector to calculate true per-sq.ft range.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">03</span>
                <h3 className="text-lg font-bold text-slate-950">Hidden Outlay Audit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculates GST, registration, club membership, floor rise, and maintenance deposits so buyers see true all-in cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AEO Section */}
        <section className="w-full py-16 bg-slate-50 border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-slate-950">How do I identify an overpriced property?</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              An overpriced property typically trades more than 15% above recent registered transaction deeds in the immediate locality without offering superior construction specification, verified LandCheck title, or transit proximity. Compare asking rate with guideline values and verified neighboring sales.
            </p>
            <div className="pt-2">
              <Button variant="outline" className="text-xs font-semibold" asChild>
                <Link href="/compare">Compare Properties Side-by-Side</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
