import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Trust, Risk & Evidence Standards | Proptham",
  description: "Learn how Proptham maintains independent evidence standards, eliminates broker misinformation, and protects property buyers.",
}

export default function TrustPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">INDEPENDENT EVIDENCE</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">TRUST & RISK STANDARDS</h1>
            <p className="text-slate-300 text-base sm:text-lg">Unbiased property decision support with zero unsupported claims.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
