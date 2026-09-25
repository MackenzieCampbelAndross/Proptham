import type { Metadata } from "next"
import Link from "next/link"
import { Building2, ArrowRight, CheckCircle2 } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Projects Intelligence Directory - RERA & Delivery Audit | Proptham",
  description: "Explore real estate project profiles with RERA registration validity, delivery timeline benchmarks, and construction status audit.",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Building2 className="h-3.5 w-3.5 text-teal-400" /> PROJECTS DIRECTORY
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              REAL ESTATE PROJECT PROFILES
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Audit project delivery history, RERA filings, and construction milestone compliance.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Aura Heights Villa Project", loc: "OMR, Chennai", status: "Ready to Move", rera: "TN/29/Building/0192" },
                { name: "Grand Horizon Towers", loc: "ECR, Chennai", status: "Under Construction", rera: "TN/29/Building/0341" },
                { name: "Prestige Tech Park Villa", loc: "Whitefield, Bangalore", status: "Ready to Move", rera: "PRM/KA/RERA/1251" },
              ].map((proj, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                  <Badge className="bg-teal-50 text-teal-700 border-teal-200 text-xs font-semibold">{proj.status}</Badge>
                  <h3 className="text-lg font-bold text-slate-950">{proj.name}</h3>
                  <p className="text-xs text-slate-500">{proj.loc}</p>
                  <div className="text-[11px] font-mono text-slate-400">RERA: {proj.rera}</div>
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold mt-2" asChild>
                    <Link href="/property-analysis">Analyze Project</Link>
                  </Button>
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
