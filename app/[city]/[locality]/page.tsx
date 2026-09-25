import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { MapPin, Building2, TrendingUp, ShieldCheck, CheckCircle2, ChevronRight, Scale, BookOpen } from "lucide-react"

export default function DynamicLocalityPage({ params }: { params: { city: string; locality: string } }) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  const localityName = params.locality.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

  // Find matching properties or default
  const localProps = properties.filter(
    (p) => p.city.toLowerCase() === params.city.toLowerCase() || p.locality.toLowerCase().includes(params.locality.toLowerCase())
  )
  const displayProps = localProps.length > 0 ? localProps : properties.slice(0, 4)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
              <Link href="/cities" className="hover:underline">Cities</Link> &gt;
              <Link href={`/${params.city}`} className="hover:underline">{cityName}</Link> &gt;
              <span className="text-white font-bold">{localityName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              {localityName}, {cityName} Property Intelligence
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Real estate market benchmarks, price per square foot analysis, Metro connectivity projects, and legal due diligence for properties in {localityName}.
            </p>
          </div>
        </section>

        {/* LOCALITY STATS ROW */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 -mt-6 z-10 relative">
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-xs text-slate-500 font-medium">Avg Asking Price</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 font-mono">₹7,800 - ₹12,500</div>
              <div className="text-[11px] text-teal-600 font-semibold">/ sq.ft</div>
            </div>

            <div>
              <div className="text-xs text-slate-500 font-medium">5-Yr Price Trend</div>
              <div className="text-lg sm:text-xl font-bold text-emerald-600 flex items-center justify-center gap-1">
                <TrendingUp className="h-4 w-4" /> +8.4% p.a.
              </div>
              <div className="text-[11px] text-slate-400">Steady Growth</div>
            </div>

            <div>
              <div className="text-xs text-slate-500 font-medium">Metro Connectivity</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900">Phase 2 Line</div>
              <div className="text-[11px] text-teal-600 font-semibold">Under Construction</div>
            </div>

            <div>
              <div className="text-xs text-slate-500 font-medium">LandCheck Status</div>
              <div className="text-lg sm:text-xl font-bold text-teal-700 flex items-center justify-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Verified Clear
              </div>
              <div className="text-[11px] text-slate-400">High Due Diligence</div>
            </div>
          </div>
        </section>

        {/* CONTENT & LISTINGS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 space-y-10">
          {/* LOCALITY OVERVIEW & QUESTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h2 className="text-lg font-bold text-slate-900">Why Research Property in {localityName}?</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {localityName} represents a key growth corridor in {cityName}, driven by IT park expansion, road widening, and residential township projects. When researching property here, evaluate water table stability, road access width, and seller Patta/Khata documentation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" /> Infrastructure & Connectivity
                </h3>
                <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                  <li>Direct arterial road connectivity to major employment hubs.</li>
                  <li>Upcoming Metro station within 1.5 km radius.</li>
                  <li>Proximity to reputed schools, multi-specialty hospitals, and retail malls.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-950 text-white p-6 rounded-2xl space-y-4">
                <h3 className="font-anton text-xl tracking-wide text-teal-400">Locality Research Tools</h3>
                <p className="text-xs text-slate-300">
                  Run pricing analysis or request a custom LandCheck report for any property in {localityName}.
                </p>
                <div className="space-y-2">
                  <Link href="/price-intelligence" className="block w-full text-center py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors">
                    Analyze Locality Pricing
                  </Link>
                  <Link href="/compare" className="block w-full text-center py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl transition-colors border border-white/20">
                    Compare Locality vs Alternatives
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* LISTINGS IN LOCALITY */}
          <div className="space-y-6 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-bold text-slate-900">Properties for Sale in {localityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProps.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
