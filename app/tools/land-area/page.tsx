import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Land Area Unit Converter - Grounds, Cents, Guntha & Acres | Proptham",
  description: "Convert land measurement units: Ground (2,400 sq.ft), Cent (435.6 sq.ft), Guntha (1,089 sq.ft), and Acres.",
}

export default function LandAreaToolPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">TOOLS • CONVERTER</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">LAND AREA UNIT CONVERTER</h1>
            <p className="text-slate-300 text-base sm:text-lg">Convert Grounds, Cents, Guntha, Sq.Ft, and Acres instantly.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
