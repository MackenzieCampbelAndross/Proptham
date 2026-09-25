import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, ShieldCheck, CheckCircle2, AlertTriangle, Search, FileText, ChevronRight, Sparkles } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Property Analysis Service - Structured Property Evaluation | Proptham",
  description: "Analyse fair market valuation, builder track record, legal title risks, and locality appreciation velocity with Proptham Property Analysis.",
  openGraph: {
    title: "Property Analysis Service | Proptham",
    description: "Analyse property value, title risks, and market benchmarks before buying.",
  },
}

export default function PropertyAnalysisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Proptham Property Analysis Service",
    "provider": {
      "@type": "Organization",
      "name": "Proptham"
    },
    "description": "Comprehensive quantitative property evaluation including market valuation, builder track record, and LandCheck legal verification.",
    "areaServed": "India"
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        {/* Page Header */}
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <BarChart3 className="h-3.5 w-3.5 text-teal-400" /> PROPERTY ANALYSIS SERVICE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PROPERTY ANALYSIS & SUITABILITY AUDIT
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Evaluate target property pricing, builder delivery history, hidden outlays, and legal encumbrance risks before signing booking forms.
            </p>

            <form className="pt-4 max-w-xl flex gap-2">
              <Input
                type="text"
                placeholder="Enter property name, survey number, or locality..."
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-0 text-sm h-12 rounded-xl"
              />
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-6 rounded-xl shrink-0">
                Analyze Property
              </Button>
            </form>
          </div>
        </section>

        {/* Core Analysis Overview */}
        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">WHAT WE AUDIT</span>
              <h2 className="text-3xl font-extrabold text-slate-950">Six Core Intelligence Pillars</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Every property analysis report aggregates verified market transactions, layout approvals, and title encumbrances.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Price Valuation", desc: "Per sq.ft fair market benchmark vs developer asking price." },
                { title: "Builder Track Record", desc: "Past project completion timelines and delay history." },
                { title: "LandCheck Legal Status", desc: "30-year Mother Deed title trace & Encumbrance Certificate." },
                { title: "Hidden Outlay Audit", desc: "GST, registration fees, floor rise charges & maintenance deposits." },
                { title: "Locality Growth Signals", desc: "Upcoming metro stations, road expansions & civic infrastructure." },
                { title: "Explicit Risk Profile", desc: "Flood zone proximity, CRZ buffer compliance & zoning approvals." },
              ].map((p, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <span className="text-xs font-bold text-teal-700 font-mono">PILLAR 0{i + 1}</span>
                  <h3 className="text-lg font-bold text-slate-950">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Output Demo */}
        <section className="w-full py-16 bg-slate-50 border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-teal-700">SAMPLE ANALYSIS PREVIEW</span>
                <h2 className="text-2xl font-bold text-slate-950">Aura Heights Villa Project</h2>
              </div>
              <Badge className="bg-amber-500/20 text-amber-800 border-amber-300 text-xs">DEMO REPORT</Badge>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Asking Price</span>
                  <div className="text-xl font-extrabold text-slate-950">₹1,25,000 / sq.ft</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Valuation Status</span>
                  <div className="text-xl font-extrabold text-teal-700">Fair Market</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Title Status</span>
                  <div className="text-xl font-extrabold text-emerald-600">LandCheck Clear</div>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 uppercase font-semibold">Risk Rating</span>
                  <div className="text-xl font-extrabold text-slate-950">Low Risk</div>
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <span className="text-xs font-bold text-slate-950">AEO Answer Context: How do I know if a property is worth buying?</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A property is worth buying when asking price per sq.ft matches recent registered land transactions within 1.5 km, RERA clearance is verified active with zero pending litigations, and title chain is free of registered encumbrances.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <Link href="/property-report" className="text-teal-700 hover:text-teal-800 text-sm font-bold flex items-center gap-1">
                Explore Full Custom Property Report <ChevronRight className="h-4 w-4" />
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs px-6 h-10 rounded-xl" asChild>
                <Link href="/ask">Ask Proptham Assistant</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
