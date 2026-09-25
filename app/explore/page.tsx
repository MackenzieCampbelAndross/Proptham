import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest">
              Proptham Discovery Layer
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              Explore Real Estate Hubs & Entities
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Discover top cities, micro-market localities, major builders, interactive maps, and unlisted owner properties.
            </p>
          </div>
        </section>

        {/* NAVIGATION CHIPS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link href="/explore" className="px-4 py-2 rounded-full border bg-slate-900 text-white border-slate-900">Explore Home</Link>
            <Link href="/cities" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">All Cities</Link>
            <Link href="/localities" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Localities</Link>
            <Link href="/builders" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Builders</Link>
            <Link href="/top-picks" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Top Picks</Link>
            <Link href="/map" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Map View</Link>
            <Link href="/list-property" className="px-4 py-2 rounded-full border bg-teal-500 text-slate-950 font-bold border-teal-500 hover:bg-teal-400">List Property</Link>
          </div>
        </section>

        {/* GRID OF CITIES */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Explore Top Tier-1 Property Markets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Chennai", code: "chennai", props: "4,200+ properties", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop" },
              { name: "Bangalore", code: "bangalore", props: "6,800+ properties", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop" },
              { name: "Hyderabad", code: "hyderabad", props: "5,100+ properties", img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop" },
              { name: "Pune", code: "pune", props: "3,900+ properties", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop" },
              { name: "Mumbai", code: "mumbai", props: "8,400+ properties", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop" },
            ].map((city) => (
              <Link key={city.code} href={`/${city.code}`} className="group relative h-48 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all border border-slate-200 block">
                <img src={city.img} alt={city.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <h3 className="font-anton text-2xl tracking-wide">{city.name}</h3>
                  <p className="text-slate-300 text-xs">{city.props}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TOP PICKS DISPLAY */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Featured Discovery Properties</h2>
            <Link href="/buy" className="text-xs font-bold text-teal-700 hover:underline">View All &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.slice(0, 6).map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
