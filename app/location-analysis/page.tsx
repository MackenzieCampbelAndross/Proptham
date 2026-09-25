import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Compass, ChevronRight, CheckCircle2 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Location Intelligence & Neighborhood Analytics | Proptham",
  description: "Evaluate transit connectivity, upcoming infrastructure projects, school proximity, and environmental risks with Proptham Location Intelligence.",
}

export default function LocationAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <MapPin className="h-3.5 w-3.5 text-teal-400" /> LOCATION ANALYTICS
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              THE PROPERTY IS ONLY PART OF THE DECISION.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Understand transit developments, civic infrastructure velocity, commercial job hubs, and environmental risks before choosing a locality.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/locations">Explore City & Locality Hubs</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">LOCALITY METRICS</span>
              <h2 className="text-3xl font-extrabold text-slate-950">Locality Intelligence Factors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Compass className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-950">Transit & Connectivity</h3>
                <p className="text-xs text-slate-600">Metro station proximity, highway access, arterial congestion points.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Compass className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-950">Infrastructure Catalyst</h3>
                <p className="text-xs text-slate-600">Upcoming flyovers, ring roads, water grid & sewage network expansion.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <Compass className="h-6 w-6 text-teal-600" />
                <h3 className="text-lg font-bold text-slate-950">Environmental & Risk</h3>
                <p className="text-xs text-slate-600">Historical inundation mapping, wetland buffers & industrial noise levels.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
