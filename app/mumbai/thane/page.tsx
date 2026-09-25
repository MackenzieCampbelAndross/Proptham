import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Thane Mumbai Locality Intelligence | Proptham",
  description: "Thane MMR real estate research: Ghodbunder Road pricing, Metro Line 4 status, TMC sanctions, and LandCheck due diligence.",
}

export default function ThanePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">LOCALITY INTELLIGENCE • MUMBAI MMR</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">THANE LOCALITY ANALYSIS</h1>
            <p className="text-slate-300 text-base sm:text-lg">Ghodbunder Road corridor, Metro Line 4 station proximity, and MahaRERA filings.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
