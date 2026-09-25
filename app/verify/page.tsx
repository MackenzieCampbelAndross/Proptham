"use client"

import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, FileCheck, Search, AlertCircle, CheckCircle2 } from "lucide-react"

export default function VerifyPage() {
  return (
    <PageShell>
      <section className="w-full py-12 md:py-20 bg-background border-b">
        <div className="container px-4 md:px-6 max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-600 text-teal-700 bg-teal-50 text-xs font-semibold">
            <ShieldCheck className="h-4 w-4 text-teal-600" /> LANDCHECK VERIFICATION LAYER
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Verify Before You Commit
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proptham LandCheck integrates document verification, ownership history, Patta/Khata authenticity, encumbrance records, and legal risk assessment.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-slate-50/50">
        <div className="container px-4 md:px-6 max-w-4xl space-y-6">
          <div className="bg-background border rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
            <h3 className="text-xl font-bold border-b pb-4">LandCheck Verification Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 border rounded-xl bg-slate-50/50">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Ownership & Title Chain</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">30-year legal title trace and seller authorization audit.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border rounded-xl bg-slate-50/50">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Encumbrance Certificate (EC)</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Digital verification of registered mortgages and liabilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border rounded-xl bg-slate-50/50">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">Patta / Khata Authenticity</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Government revenue portal cross-validation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 border rounded-xl bg-slate-50/50">
                <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground">RERA & Zoning Compliance</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Approved plan layout and environmental clearance check.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
