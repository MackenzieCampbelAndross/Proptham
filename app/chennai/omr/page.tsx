import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "OMR Chennai Locality Intelligence - Price & Infrastructure Analysis | Proptham",
  description: "Detailed OMR IT Corridor locality research: Taramani to Siruseri price per sq.ft., Metro Phase 2 status, CMDA approvals, and LandCheck title verification.",
}

export default function OMRLocalityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3.5 w-3.5 text-teal-400" /> LOCALITY INTELLIGENCE • CHENNAI
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              OMR IT CORRIDOR LOCALITY ANALYSIS
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Taramani to Siruseri IT Expressway. Analyze price appreciation velocity, Metro Line 3/4/5 stations, and flood mitigation layout status.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">PRICE RANGE</span>
                <div className="text-2xl font-extrabold text-slate-950">₹6,800 – ₹12,500</div>
                <p className="text-xs text-slate-500">Per sq.ft fair market range</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">APPRECIATION</span>
                <div className="text-2xl font-extrabold text-emerald-600">+14.2% / yr</div>
                <p className="text-xs text-slate-500">3-year compounding growth</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-teal-700 uppercase">KEY CATALYST</span>
                <div className="text-lg font-bold text-slate-950">Metro Phase 2 Line</div>
                <p className="text-xs text-slate-500">Stations at Perungudi, Thoraipakkam, Sholinganallur</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button className="bg-teal-600 hover:bg-teal-500 text-white font-semibold" asChild>
                <Link href="/property-analysis">Analyze Property in OMR</Link>
              </Button>
              <Button variant="outline" className="font-semibold" asChild>
                <Link href="/compare">Compare OMR vs Velachery</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
