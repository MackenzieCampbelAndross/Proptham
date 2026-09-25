"use client"

import PageShell from "@/components/page-shell"
import { MapPin, Navigation, TrendingUp, Building, ShieldAlert } from "lucide-react"

export default function LocationsPage() {
  return (
    <PageShell>
      <section className="w-full py-12 md:py-20 bg-background border-b">
        <div className="container px-4 md:px-6 max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-600 text-teal-700 bg-teal-50 text-xs font-semibold">
            <MapPin className="h-4 w-4 text-teal-600" /> LOCALITY & INFRASTRUCTURE INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Know the Location Behind the Property
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep locality analytics covering connectivity, price trends, infrastructure, civic amenities, and upcoming developments.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-slate-50/50">
        <div className="container px-4 md:px-6 max-w-5xl space-y-8">
          <div className="bg-background border rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-6 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Featured Locality Case Study</span>
                <h2 className="text-2xl font-bold text-foreground mt-1">OMR IT Corridor, Chennai</h2>
                <p className="text-sm text-muted-foreground">Taramani to Siruseri IT Expressway</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Avg Property Price</span>
                <p className="text-2xl font-bold text-foreground">₹1,18,500 / sq.ft</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-xl bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-teal-600 font-semibold">
                  <Navigation className="h-4 w-4" /> Connectivity
                </div>
                <p className="text-sm text-muted-foreground">
                  Metro Line 4 & 5 under construction (Completion 2026). Direct access to ECR Link road and Outer Ring Road.
                </p>
              </div>
              <div className="p-4 border rounded-xl bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-teal-600 font-semibold">
                  <TrendingUp className="h-4 w-4" /> Market Context
                </div>
                <p className="text-sm text-muted-foreground">
                  High rental demand driven by 250,000+ IT workforce across ELCOT SEZ and Tidal Park.
                </p>
              </div>
              <div className="p-4 border rounded-xl bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2 text-teal-600 font-semibold">
                  <ShieldAlert className="h-4 w-4 text-amber-600" /> Locality Risk Note
                </div>
                <p className="text-sm text-muted-foreground">
                  Check monsoon drainage mapping near low-lying lake buffers before finalized booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
