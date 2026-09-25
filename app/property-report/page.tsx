import type { Metadata } from "next"
import Link from "next/link"
import { FileText, ArrowRight, ShieldCheck, Download, Sparkles } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Property Research Report - Detailed Evaluation Output | Proptham",
  description: "Download custom property research reports featuring fair market valuations, builder track record analysis, legal document verification, and explicit risk profiles.",
}

export default function PropertyReportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <FileText className="h-3.5 w-3.5 text-teal-400" /> PROPERTY RESEARCH REPORT
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              CUSTOM PROPERTY RESEARCH REPORT
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Consolidated intelligence report detailing per-sq.ft. valuation, builder track record, LandCheck title audits, and explicit risk factors.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-950">Report Output Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-teal-700 uppercase">SECTION A</span>
                <h3 className="text-base font-bold text-slate-950">Executive Valuation Summary</h3>
                <p className="text-slate-600">Fair market price range vs asking price, guideline value gap, and historical per-sq.ft appreciation.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-teal-700 uppercase">SECTION B</span>
                <h3 className="text-base font-bold text-slate-950">LandCheck Legal & Title Audit</h3>
                <p className="text-slate-600">30-year Mother Deed trace, Encumbrance Certificate liabilities, Patta/Khata status & RERA compliance.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-teal-700 uppercase">SECTION C</span>
                <h3 className="text-base font-bold text-slate-950">Locality & Transit Velocity</h3>
                <p className="text-slate-600">Upcoming metro lines, road widenings, commercial job hubs & environmental risk factors.</p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="font-bold text-teal-700 uppercase">SECTION D</span>
                <h3 className="text-base font-bold text-slate-950">Source Provenance & Unknowns</h3>
                <p className="text-slate-600">Explicit listing of data sources, confidence levels, and unverified broker claims.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/property-analysis">Generate Report for Your Property</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
