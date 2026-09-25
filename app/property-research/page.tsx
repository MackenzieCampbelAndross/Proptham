import type { Metadata } from "next"
import Link from "next/link"
import { Search, ArrowRight, BarChart3, ShieldCheck } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Property Research Service - Unbiased Evidence & Analysis | Proptham",
  description: "Independent property research service for Indian real estate buyers: pricing benchmarks, builder track records, legal due diligence, and locality analytics.",
}

export default function PropertyResearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Search className="h-3.5 w-3.5 text-teal-400" /> INDEPENDENT PROPERTY RESEARCH
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PROPERTY RESEARCH SERVICE
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Unbiased real estate research providing evidence, valuation benchmarks, and verification before you buy.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/property-analysis">Start Property Research</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
