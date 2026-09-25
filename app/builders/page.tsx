import type { Metadata } from "next"
import Link from "next/link"
import { Building2, CheckCircle2, ShieldCheck } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Builder Track Record & Reputation Audit | Proptham",
  description: "Evaluate builder track record, delivery timelines, past project delays, and customer delivery compliance in Indian real estate.",
}

export default function BuildersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Building2 className="h-3.5 w-3.5 text-teal-400" /> BUILDER TRACK RECORD AUDIT
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              HOW TO RESEARCH A BUILDER BEFORE BUYING
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Expose developer delivery history, past project completion delays, financial stability signals, and RERA compliance ratings.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Urban Developers Ltd", rating: "4.8 / 5.0", delivered: "14 Projects", delay: "0% Delay" },
                { name: "Apex Infrastructure", rating: "4.5 / 5.0", delivered: "9 Projects", delay: "3 Mos Avg" },
                { name: "Horizon Realty Corp", rating: "4.6 / 5.0", delivered: "22 Projects", delay: "1 Mo Avg" },
              ].map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                  <h3 className="text-lg font-bold text-slate-950">{b.name}</h3>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>Delivery Rating: <span className="font-bold text-teal-700">{b.rating}</span></div>
                    <div>Delivered: <span className="font-semibold text-slate-800">{b.delivered}</span></div>
                    <div>Historical Delay: <span className="font-semibold text-slate-800">{b.delay}</span></div>
                  </div>
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
