import type { Metadata } from "next"
import Link from "next/link"
import { ShieldCheck, FileCheck2, ArrowRight } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Property Due Diligence Checklist & Verification | Proptham",
  description: "Comprehensive due diligence checklist for Indian real estate purchases: Mother Deed, Encumbrance Certificate, Patta/Khata, RERA, and layout approvals.",
}

export default function PropertyDueDiligencePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-400" /> DUE DILIGENCE FRAMEWORK
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PROPERTY DUE DILIGENCE CHECKLIST
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Verify title ownership, legal encumbrances, Patta/Khata authenticity, and layout approvals before paying advance booking deposits.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-slate-950">Essential Due Diligence Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-teal-700">01. TITLE DEED TRACE</span>
                <h3 className="text-base font-bold text-slate-950">30-Year Chain of Title</h3>
                <p className="text-slate-600">Trace ownership from original land allotment deed through parent deeds to current seller.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-teal-700">02. ENCUMBRANCE CERTIFICATE</span>
                <h3 className="text-base font-bold text-slate-950">Form 15 & Form 16 EC</h3>
                <p className="text-slate-600">Audit sub-registrar records for active mortgages, court attachments, or third-party claims.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-teal-700">03. PATTA / KHATA VERIFICATION</span>
                <h3 className="text-base font-bold text-slate-950">Revenue Record Alignment</h3>
                <p className="text-slate-600">Verify revenue record mutation and property tax receipt registration matching seller name.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-teal-700">04. RERA & LAYOUT SANCTIONS</span>
                <h3 className="text-base font-bold text-slate-950">Planning Authority Clearance</h3>
                <p className="text-slate-600">Cross-reference CMDA/DTCP/BBMP/HMDA approved layout plan and RERA project filing status.</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold h-12 px-8 rounded-xl" asChild>
                <Link href="/landcheck">Audit Property with LandCheck</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
