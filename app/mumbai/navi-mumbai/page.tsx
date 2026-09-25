import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Navi Mumbai Locality Intelligence | Proptham",
  description: "Navi Mumbai real estate research: MTHL Trans-Harbour Link, International Airport, CIDCO plot sanctions, and LandCheck title verification.",
}

export default function NaviMumbaiPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">LOCALITY INTELLIGENCE • MUMBAI MMR</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">NAVI MUMBAI LOCALITY ANALYSIS</h1>
            <p className="text-slate-300 text-base sm:text-lg">MTHL Atal Setu corridor, Navi Mumbai Airport, and CIDCO title due diligence.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
