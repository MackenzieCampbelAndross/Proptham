import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Hinjewadi Pune Locality Intelligence | Proptham",
  description: "Hinjewadi Pune real estate research: Rajiv Gandhi IT Park Phase 1/2/3, Metro Line 3, PMRDA approvals, and LandCheck legal due diligence.",
}

export default function HinjewadiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">LOCALITY INTELLIGENCE • PUNE</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">HINJEWADI LOCALITY ANALYSIS</h1>
            <p className="text-slate-300 text-base sm:text-lg">Rajiv Gandhi IT Park Phase 1/2/3, Pune Metro Line 3, and MahaRERA filings.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
