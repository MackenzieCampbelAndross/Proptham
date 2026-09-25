import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { Search, MapPin, Building2, SlidersHorizontal } from "lucide-react"

export default function RentPage() {
  let rentProps = properties.filter((p) => p.status === "For Rent")
  
  if (rentProps.length < 4) {
    const syntheticRentals = properties.slice(0, 8).map((p) => ({
      ...p,
      id: `rent-${p.id}`,
      status: "For Rent" as const,
      price: Math.round(p.price / 300),
    }))
    rentProps = [...rentProps, ...syntheticRentals]
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-1">
                Proptham Marketplace &bull; Rent
              </div>
              <h1 className="text-3xl sm:text-4xl font-anton tracking-wide">
                Properties for Rent
              </h1>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Verified rental flats, houses, villas, and co-living spaces with transparent tenancy research & direct owner connection.
              </p>
            </div>

            {/* Filter */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-900 text-xs">
              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Locality or City..."
                  className="w-full bg-transparent border-none outline-none font-medium text-slate-900 placeholder:text-slate-400 text-xs"
                />
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400 shrink-0" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Furnishing Status</option>
                  <option value="furnished">Fully Furnished</option>
                  <option value="semi-furnished">Semi Furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-slate-400 shrink-0" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Monthly Rent Budget</option>
                  <option value="sub-20k">Under ₹20,000</option>
                  <option value="20k-40k">₹20,000 - ₹40,000</option>
                  <option value="40k-75k">₹40,000 - ₹75,000</option>
                  <option value="above-75k">Above ₹75,000</option>
                </select>
              </div>

              <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Search className="h-4 w-4" /> Find Rental
              </button>
            </div>
          </div>
        </section>

        {/* CHIPS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link href="/rent" className="px-4 py-2 rounded-full border bg-slate-900 text-white border-slate-900">All Rent</Link>
            <Link href="/rent/flats" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Flats for Rent</Link>
            <Link href="/rent/houses" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Houses for Rent</Link>
            <Link href="/rent/villas" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Villas for Rent</Link>
            <Link href="/rent/furnished" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Fully Furnished</Link>
            <Link href="/rent/semi-furnished" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Semi Furnished</Link>
            <Link href="/rent/pg" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">PG & Hostels</Link>
            <Link href="/rent/co-living" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Co-Living</Link>
          </div>
        </section>

        {/* LISTINGS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentProps.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
