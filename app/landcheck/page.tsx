import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, FileCheck2, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "LandCheck Integration - Property Verification Layer | Proptham",
  description: "Audit property ownership deeds, 30-year Encumbrance Certificates, Patta/Khata authenticity, and legal liabilities with LandCheck integrated verification.",
}

export default function LandCheckPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" /> INTEGRATED VERIFICATION ENGINE
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              BEFORE YOU COMMIT, VERIFY WHAT THE PROPERTY CLAIMS.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              LandCheck serves as the integrated verification layer within Proptham, auditing ownership title chains, encumbrances, Patta/Khata authenticity, and zoning compliance.
            </p>
            <div className="pt-2">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/property-analysis">Verify a Property Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Verification Architecture Flow */}
        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">INTEGRATED WORKFLOW</span>
              <h2 className="text-3xl font-extrabold text-slate-950">LandCheck Decision Pipeline</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-teal-700">STEP 01</div>
                <h3 className="text-lg font-bold text-slate-950">PROPTHAM PROPERTY INTELLIGENCE</h3>
                <p className="text-xs text-slate-600">Gather pricing, market context, builder track record, and initial listing data.</p>
              </div>

              <div className="p-6 rounded-2xl bg-teal-950 text-white space-y-3 shadow-lg">
                <div className="text-xs font-bold text-teal-400">STEP 02</div>
                <h3 className="text-lg font-bold">LANDCHECK VERIFICATION LAYER</h3>
                <p className="text-xs text-slate-300">Audit Mother Deed, Encumbrance Certificate, Patta/Khata & RERA litigation records.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-teal-700">STEP 03</div>
                <h3 className="text-lg font-bold text-slate-950">VERIFIED DECISION CONTEXT</h3>
                <p className="text-xs text-slate-600">Proceed with documented legal clarity and risk mitigation confidence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Audit Checklist */}
        <section className="w-full py-16 bg-slate-50 border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-950">Verified Checkpoints</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {[
                "Mother Deed & 30-Year Historical Title Trace",
                "Encumbrance Certificate (EC) Liability Audit",
                "Patta / Khata Registration Authenticity",
                "RERA Project Registration Active Status",
                "Approved Layout & Building Sanction Plan",
                "Wetland, CRZ & Government Buffer Checks",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 font-semibold text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                  <span>{item}</span>
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
