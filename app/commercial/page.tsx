import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Search, Building, Store, Warehouse, MapPin } from "lucide-react"

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-14 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <div className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-1">
                Proptham Commercial Intelligence & Discovery
              </div>
              <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
                Commercial Real Estate & Intelligence
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl">
                Dedicated commercial property portal for grade-A office spaces, retail showrooms, industrial warehouses, and commercial land backed by occupancy demand signals and location intelligence.
              </p>
            </div>

            {/* Commercial Search */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-900 text-xs">
              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="City, Business District, SEZ..."
                  className="w-full bg-transparent border-none outline-none font-medium text-slate-900 placeholder:text-slate-400 text-xs"
                />
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <Building className="h-4 w-4 text-slate-400 shrink-0" />
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Asset Category</option>
                  <option value="office">Office Space & Coworking</option>
                  <option value="retail">Retail Shops & Showrooms</option>
                  <option value="industrial">Warehouses & Logistics</option>
                  <option value="land">Commercial / Industrial Land</option>
                </select>
              </div>

              <div className="bg-white rounded-xl p-2.5 flex items-center gap-2">
                <select className="w-full bg-transparent border-none outline-none font-medium text-slate-900 text-xs cursor-pointer">
                  <option value="">Transaction Type</option>
                  <option value="buy">Buy Commercial</option>
                  <option value="rent">Rent / Lease Commercial</option>
                  <option value="pre-leased">Pre-Leased Investment</option>
                </select>
              </div>

              <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Search className="h-4 w-4" /> Commercial Search
              </button>
            </div>
          </div>
        </section>

        {/* ASSET TYPE NAVIGATION CHIPS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <Link href="/commercial" className="px-4 py-2 rounded-full border bg-slate-900 text-white border-slate-900">All Commercial</Link>
            <Link href="/commercial/office" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Office Space</Link>
            <Link href="/commercial/retail" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Retail & Showrooms</Link>
            <Link href="/commercial/warehouse" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Warehouses & Logistics</Link>
            <Link href="/commercial/industrial" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Industrial Sheds</Link>
            <Link href="/commercial/land" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Commercial Land</Link>
            <Link href="/commercial/intelligence" className="px-4 py-2 rounded-full border bg-white text-slate-700 border-slate-200 hover:border-slate-400">Commercial Intelligence</Link>
          </div>
        </section>

        {/* COMMERCIAL INTEL HIGHLIGHT CARDS */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Building className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Office & IT Park Leasing</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Grade-A office space listings across CBD, SBD, and IT corridors with floor plate specs, power backup ratios, and tech tenant density.
            </p>
            <Link href="/commercial/office" className="text-teal-700 font-bold text-xs flex items-center gap-1 hover:underline pt-2">
              Browse Office Space &rarr;
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <Store className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Retail & High Street</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Prime retail shop fronts, mall spaces, and high-street showrooms with footfall catchment estimates and frontage dimensions.
            </p>
            <Link href="/commercial/retail" className="text-teal-700 font-bold text-xs flex items-center gap-1 hover:underline pt-2">
              Browse Retail Spaces &rarr;
            </Link>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Warehouse className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Logistics & Industrial</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Industrial parks, warehousing complexes, and cold-storage spaces with clear height, dock levellers, and heavy transport connectivity.
            </p>
            <Link href="/commercial/warehouse" className="text-teal-700 font-bold text-xs flex items-center gap-1 hover:underline pt-2">
              Browse Warehouses &rarr;
            </Link>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
