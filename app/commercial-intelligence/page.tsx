import type { Metadata } from "next"
import Link from "next/link"
import { Building2, ArrowRight, ShieldCheck, BarChart3 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Commercial Property Intelligence - Office, Retail & Industrial | Proptham",
  description: "Evaluate office spaces, retail outlets, industrial parks, and commercial plots with tenant yield signals, operational outlays, and asset risk audits.",
}

export default function CommercialIntelligencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Building2 className="h-3.5 w-3.5 text-teal-400" /> COMMERCIAL INTELLIGENCE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              REAL ESTATE IS NOT ALWAYS ABOUT WHERE YOU LIVE.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Structured decision frameworks for office spaces, retail footfall corridors, industrial parks, and commercial land investments.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">COMMERCIAL ASSET CATEGORIES</span>
              <h2 className="text-3xl font-extrabold text-slate-950">Tailored Analysis Frameworks</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Office Space", desc: "Grade-A IT parks, co-working floor efficiency, HVAC outlays & corporate lease lock-in terms." },
                { title: "Retail Outlets", desc: "High-street footfall velocity, frontage visibility, anchor tenant stability & revenue share models." },
                { title: "Industrial Parks", desc: "Warehousing ceiling clearance, heavy vehicle turning radius, power grid capacity & logistics connectivity." },
                { title: "Commercial Plots", desc: "FSI/FAR ratios, master plan zoning compliance, road width access & commercial sanction status." },
              ].map((c, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <Building2 className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-bold text-slate-950">{c.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-slate-50 border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-700 uppercase">SAMPLE COMMERCIAL AUDIT</span>
              <Badge className="bg-amber-500/20 text-amber-800 border-amber-300 text-xs">DEMO AUDIT</Badge>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold text-slate-950">Prime OMR Commercial Tech Floor (12,500 sq.ft)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 font-semibold block">Asking Rent</span>
                  <span className="font-bold text-slate-950">₹85 / sq.ft / mo</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block">Fair Yield</span>
                  <span className="font-bold text-teal-700">7.8% Cap Rate</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block">Lease Lock-in</span>
                  <span className="font-bold text-slate-950">3 Years Active</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block">LandCheck Status</span>
                  <span className="font-bold text-emerald-600">Commercial Approved</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
