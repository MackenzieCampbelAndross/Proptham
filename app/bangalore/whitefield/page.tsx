import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight, BarChart3, ShieldCheck } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Whitefield Bangalore Locality Intelligence | Proptham",
  description: "Whitefield Bangalore real estate research: Purple Line Metro, ITPB corridor pricing, BBMP A-Khata due diligence, and LandCheck legal verification.",
}

export default function WhitefieldLocalityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3.5 w-3.5 text-teal-400" /> LOCALITY INTELLIGENCE • BANGALORE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              WHITEFIELD LOCALITY ANALYSIS
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              ITPB and Hope Farm Expressway Corridor. Analyze Purple Line Metro connectivity, BBMP Khata status, and price benchmarks.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">PRICE RANGE</span>
                <div className="text-2xl font-extrabold text-slate-950">₹7,500 – ₹14,000</div>
                <p className="text-xs text-slate-500">Per sq.ft fair market range</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">APPRECIATION</span>
                <div className="text-2xl font-extrabold text-emerald-600">+12.8% / yr</div>
                <p className="text-xs text-slate-500">3-year compounding growth</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">KEY CATALYST</span>
                <div className="text-lg font-bold text-slate-950">Purple Line Extension</div>
                <p className="text-xs text-slate-500">Active Metro Station & Peripheral Ring Road</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
