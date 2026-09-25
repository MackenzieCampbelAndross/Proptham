import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { Search, MapPin, Building2, SlidersHorizontal, CheckCircle2 } from "lucide-react"

export default function BuyPage() {
  const buyProps = properties.filter((p) => p.status === "For Sale")

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO SEARCH HEADER */}
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-1">
                  Proptham Marketplace &bull; Buy
                </div>
                <h1 className="text-3xl sm:text-4xl font-anton tracking-wide">
                  Properties for Sale
                </h1>
                <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                  Explore verified residential & investment properties across Chennai, Bangalore, Hyderabad, Pune, and Mumbai.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-teal-400" /> 100% LandCheck Legal & Due Diligence Support
              </div>
            </div>

            {/* Marketplace Filters */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-slate-900 text-xs">
              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Location / City / Locality..."
                  className="w-full bg-transparent border-none outline-none font-medium text-slate-900 placeholder:text-slate-400 text-xs"
                />
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400 shrink-0" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">All Property Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="House">Independent House</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-slate-400 shrink-0" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Budget Range</option>
                  <option value="sub-50">Under ₹50 Lakhs</option>
                  <option value="50-1cr">₹50L - ₹1 Cr</option>
                  <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                  <option value="above-2cr">Above ₹2 Cr</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">BHK Configuration</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4+">4+ BHK</option>
                </select>
              </div>

              <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Search className="h-4 w-4" /> Search Properties
              </button>
            </div>
          </div>
        </section>

        {/* QUICK SUB-CATEGORY CHIPS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link href="/buy" className="px-4 py-2 rounded-full border bg-slate-900 text-white border-slate-900">All Buy</Link>
            <Link href="/buy/apartments" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Apartments</Link>
            <Link href="/buy/villas" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Villas</Link>
            <Link href="/buy/houses" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Independent Houses</Link>
            <Link href="/buy/builder-floors" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Builder Floors</Link>
            <Link href="/buy/ready-to-move" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Ready to Move</Link>
            <Link href="/buy/under-construction" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Under Construction</Link>
            <Link href="/buy/luxury" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Luxury Homes</Link>
            <Link href="/buy/affordable" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Affordable Homes</Link>
            <Link href="/buy/investment" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Investment Properties</Link>
          </div>
        </section>

        {/* PROPERTY LISTINGS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Showing <span className="text-teal-700 font-anton text-2xl">{buyProps.length}</span> Verified Listings
            </h2>
            <div className="text-xs text-slate-500 font-medium">
              Sorted by: <span className="text-slate-900 font-bold">Recommended</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyProps.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
