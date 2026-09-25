import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Proptham Methodology - Data Sources, Freshness & Confidence | Proptham",
  description: "Understand Proptham's research methodology: source provenance, transaction deed cross-referencing, explicit unknown labels, and confidence scoring.",
}

export default function MethodologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">TRUST & TRANSPARENCY</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">PROPTHAM RESEARCH METHODOLOGY</h1>
            <p className="text-slate-300 text-base sm:text-lg">How Proptham knows what it knows: source provenance, confidence scoring, and explicit unknown labeling.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
