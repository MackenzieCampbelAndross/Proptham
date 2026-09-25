import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Pune Property Research & Locality Intelligence | Proptham",
  description: "Pune real estate research: Hinjewadi IT Park, Wakad, Baner pricing, PMRDA approvals, MahaRERA filings, and LandCheck legal due diligence.",
}

export default function PuneCityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3.5 w-3.5 text-teal-400" /> CITY AUTHORITY HUB
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PUNE PROPERTY INTELLIGENCE
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Research Hinjewadi IT Park, Wakad, and Baner price per sq.ft benchmarks, PMRDA layout approvals, and MahaRERA due diligence.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-950">Major Pune Locality Hubs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: "Hinjewadi", slug: "/pune/hinjewadi", range: "₹5,800 - ₹9,500/sq.ft", note: "Rajiv Gandhi IT Park" },
                { name: "Wakad", slug: "/pune/wakad", range: "₹6,500 - ₹11,000/sq.ft", note: "Expressway Access & Residential" },
              ].map((loc, idx) => (
                <Link key={idx} href={loc.slug} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors space-y-2 block">
                  <h3 className="text-lg font-bold text-slate-950">{loc.name}</h3>
                  <div className="text-xs font-semibold text-teal-700">{loc.range}</div>
                  <p className="text-xs text-slate-500">{loc.note}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
