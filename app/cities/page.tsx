import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { MapPin, Building2, TrendingUp, ChevronRight } from "lucide-react"

export default function CitiesPage() {
  const cities = [
    { name: "Chennai", code: "chennai", count: "4,200+ properties", localities: ["OMR", "Velachery", "Sholinganallur", "Anna Nagar", "Porur", "Tambaram", "Medavakkam"], img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&auto=format&fit=crop" },
    { name: "Bangalore", code: "bangalore", count: "6,800+ properties", localities: ["Whitefield", "Sarjapur", "HSR Layout", "Yelahanka", "Indiranagar", "Koramangala"], img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=600&auto=format&fit=crop" },
    { name: "Hyderabad", code: "hyderabad", count: "5,100+ properties", localities: ["Gachibowli", "Kondapur", "Madhapur", "Manikonda", "HITEC City", "Jubilee Hills"], img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600&auto=format&fit=crop" },
    { name: "Pune", code: "pune", count: "3,900+ properties", localities: ["Hinjewadi", "Wakad", "Kothrud", "Baner", "Viman Nagar", "Kharadi"], img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop" },
    { name: "Mumbai", code: "mumbai", count: "8,400+ properties", localities: ["Thane", "Navi Mumbai", "Andheri", "Powai", "Bandra", "Worli"], img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600&auto=format&fit=crop" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest">
              Proptham GEO Entity System
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              Browse Property Markets by City
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Research real estate trends, price benchmarks, major builders, and legal due diligence reports across India&apos;s leading property hubs.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div key={city.code} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-44">
                  <img src={city.img} alt={city.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-4 flex items-end">
                    <div>
                      <h2 className="text-2xl font-anton text-white tracking-wide">{city.name}</h2>
                      <span className="text-xs text-slate-300">{city.count}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Top Localities</div>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {city.localities.map((loc) => (
                      <Link key={loc} href={`/${city.code}/${loc.toLowerCase().replace(/\s+/g, "-")}`} className="bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 px-2.5 py-1 rounded-md font-medium transition-colors">
                        {loc}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <Link href={`/${city.code}`} className="text-xs font-bold text-teal-700 hover:underline flex items-center justify-between">
                    Explore {city.name} Property Market <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
