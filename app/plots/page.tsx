import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { Search, MapPin } from "lucide-react"

export default function PlotsPage() {
  const plotProps = properties.filter((p) => p.type === "Plot" || p.id.includes("prop-"))

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-1">
                Proptham Marketplace &bull; Plots & Land Due Diligence
              </div>
              <h1 className="text-3xl sm:text-4xl font-anton tracking-wide">
                Plots & Land for Sale
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Browse verified residential plots, gated community layouts, agricultural land, and commercial plots with Patta/Khata legal due diligence.
              </p>
            </div>

            {/* Filter */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-slate-900 text-xs">
              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="City or Locality..."
                  className="w-full bg-transparent border-none outline-none font-medium text-slate-900 placeholder:text-slate-400 text-xs"
                />
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Plot Type</option>
                  <option value="residential">Residential Plots</option>
                  <option value="gated">Gated Community Plots</option>
                  <option value="land">Land for Sale</option>
                  <option value="agricultural">Agricultural Land</option>
                  <option value="commercial">Commercial Land</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Plot Area (Sq.Ft / Acres)</option>
                  <option value="sub-1200">Under 1,200 Sq.Ft</option>
                  <option value="1200-2400">1,200 - 2,400 Sq.Ft</option>
                  <option value="2400-5000">2,400 - 5,000 Sq.Ft</option>
                  <option value="above-5000">Above 5,000 Sq.Ft</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Facing (Optional)</option>
                  <option value="east">East Facing</option>
                  <option value="north">North Facing</option>
                  <option value="south">South Facing</option>
                  <option value="west">West Facing</option>
                </select>
              </div>

              <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Search className="h-4 w-4" /> Find Plots
              </button>
            </div>
          </div>
        </section>

        {/* CHIPS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link href="/plots" className="px-4 py-2 rounded-full border bg-slate-900 text-white border-slate-900">All Plots</Link>
            <Link href="/plots/residential" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Residential Plots</Link>
            <Link href="/plots/gated" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Gated Community Plots</Link>
            <Link href="/plots/land" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Land for Sale</Link>
            <Link href="/plots/agricultural" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Agricultural Land</Link>
            <Link href="/plots/commercial" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Commercial Land</Link>
            <Link href="/plots/research" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Plot Due Diligence</Link>
          </div>
        </section>

        {/* LISTINGS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plotProps.slice(0, 6).map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
