import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"

export default function TopPicksPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />
      <main className="flex-1 pt-24 pb-16">
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest">
              Proptham Curated Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              Top Picks & High-Yield Properties
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Handpicked properties with verified clear titles, fair market valuation scores, and superior location growth factors.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
