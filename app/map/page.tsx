import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import PropertyCard from "@/components/property-card"
import { properties } from "@/data/properties"
import { Map, Layers, MapPin } from "lucide-react"

export default function MapPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-20 flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* MAP PANEL */}
        <div className="lg:w-7/12 bg-slate-900 text-white relative flex flex-col items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 text-center space-y-4 max-w-md">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/40 text-teal-400 flex items-center justify-center mx-auto">
              <Map className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-anton tracking-wide">Interactive GIS & Map View</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Explore property spatial boundaries, Metro Phase 2 alignments, CRZ coastal zones, and price per sq.ft heatmaps.
            </p>
            <div className="pt-2 flex justify-center gap-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[11px] font-mono text-teal-400">
                Lat: 12.9716&deg; N
              </span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[11px] font-mono text-teal-400">
                Long: 77.5946&deg; E
              </span>
            </div>
          </div>
        </div>

        {/* PROPERTY LIST SIDE PANEL */}
        <div className="lg:w-5/12 overflow-y-auto p-6 space-y-4 bg-slate-50">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm">Nearby Map Properties</h3>
            <span className="text-xs text-slate-500 font-mono">{properties.length} Active Listings</span>
          </div>

          <div className="space-y-4">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
