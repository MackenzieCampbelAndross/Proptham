"use client"

import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldCheck, BarChart3, TrendingUp, AlertTriangle, Building2, MapPin, CheckCircle2 } from "lucide-react"

export default function IntelligencePage() {
  return (
    <PageShell>
      <section className="w-full py-12 md:py-20 bg-background border-b">
        <div className="container px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col space-y-4 text-center items-center">
            <Badge variant="outline" className="px-3 py-1 border-teal-600 text-teal-700 bg-teal-50/50">
              DEMO DATA INTELLIGENCE
            </Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl">
              Property Intelligence View
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Comprehensive data-driven evaluation of valuation, location growth, builder reputation, RERA compliance, and risk indicators.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-slate-50/50">
        <div className="container px-4 md:px-6 max-w-6xl space-y-8">
          {/* Header Data Card */}
          <div className="bg-background border rounded-2xl p-6 md:p-8 shadow-xs grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Property</span>
              <h3 className="text-xl font-bold mt-1 text-foreground">Aura Heights Villa</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-4 w-4 text-teal-600" /> OMR Corridor, Chennai
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Asking Price</span>
              <p className="text-2xl font-bold mt-1 text-foreground">₹1,25,000 / sq.ft</p>
              <p className="text-xs text-emerald-600 font-medium mt-1">Within Fair Valuation Range</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Builder Score</span>
              <p className="text-2xl font-bold mt-1 text-foreground">4.8 / 5.0</p>
              <p className="text-xs text-muted-foreground mt-1">98% On-time delivery track record</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">RERA Compliance</span>
              <div className="flex items-center gap-1.5 mt-2">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <span className="font-semibold text-teal-700">Verified Compliant</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">TN/RERA/2024/0981</p>
            </div>
          </div>

          {/* Intelligence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Valuation & Price Index</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Locality Average</span>
                  <span className="font-medium">₹1,18,000 / sq.ft</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">3-Yr Appreciation Rate</span>
                  <span className="font-medium text-emerald-600">+14.2% p.a.</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Rental Yield</span>
                  <span className="font-medium">4.1%</span>
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">Builder & Amenities Profile</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Completed Projects</span>
                  <span className="font-medium">24 Projects</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Quality Rating</span>
                  <span className="font-medium text-teal-700">A+ Certified</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Key Amenities</span>
                  <span className="font-medium">EV Charging, Solar, Club</span>
                </div>
              </div>
            </div>

            <div className="bg-background border rounded-2xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg">Risk & Due Diligence</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Encumbrance Status</span>
                  <span className="font-medium text-emerald-600">Clear Title</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span className="text-muted-foreground">Future Infrastructure</span>
                  <span className="font-medium">Metro Phase 2 (800m)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Litigation Risk</span>
                  <span className="font-medium text-emerald-600">Zero Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
