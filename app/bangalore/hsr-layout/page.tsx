import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "HSR Layout Bangalore Locality Intelligence | Proptham",
  description: "HSR Layout Bangalore real estate research: Startup hub, BDA layout approvals, Silk Board connectivity, and LandCheck title verification.",
}

export default function HSRLayoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">LOCALITY INTELLIGENCE • BANGALORE</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">HSR LAYOUT LOCALITY ANALYSIS</h1>
            <p className="text-slate-300 text-base sm:text-lg">BDA planned layout, commercial startup offices, and price per sq.ft benchmarks.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
