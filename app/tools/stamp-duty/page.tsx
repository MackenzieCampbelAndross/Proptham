import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Stamp Duty & Registration Fee Calculator | Proptham Tools",
  description: "Calculate exact state stamp duty, registration fees, and GST outlays for property purchases across Tamil Nadu, Karnataka, Telangana, Maharashtra.",
}

export default function StampDutyToolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">TOOLS • CALCULATOR</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">STAMP DUTY & REGISTRATION CALCULATOR</h1>
            <p className="text-slate-300 text-base sm:text-lg">Calculate exact state registration costs, stamp duty percentages, and surcharge fees.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
