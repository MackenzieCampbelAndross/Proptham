import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { MapPin, ChevronRight } from "lucide-react"

export default function LocalitiesPage() {
  const localities = [
    { city: "Chennai", code: "chennai", items: ["OMR", "Velachery", "Sholinganallur", "Anna Nagar", "Porur", "Tambaram", "Medavakkam"] },
    { city: "Bangalore", code: "bangalore", items: ["Whitefield", "Sarjapur", "HSR Layout", "Yelahanka", "Indiranagar", "Koramangala"] },
    { city: "Hyderabad", code: "hyderabad", items: ["Gachibowli", "Kondapur", "Madhapur", "Manikonda", "HITEC City", "Jubilee Hills"] },
    { city: "Pune", code: "pune", items: ["Hinjewadi", "Wakad", "Kothrud", "Baner", "Viman Nagar"] },
    { city: "Mumbai", code: "mumbai", items: ["Thane", "Navi Mumbai", "Andheri", "Powai", "Bandra"] },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        <section className="bg-slate-950 text-white py-12 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest">
              Proptham Micro-Market Directory
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              Browse Localities & Micro-Markets
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              In-depth locality intelligence including asking price per sq.ft, Metro Phase connectivity, future infrastructure, and market demand signals.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localities.map((group) => (
              <div key={group.code} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b pb-3">
                  <h2 className="font-anton text-2xl text-slate-900 tracking-wide">{group.city} Localities</h2>
                  <Link href={`/${group.code}`} className="text-xs text-teal-700 font-bold hover:underline">City Hub &rarr;</Link>
                </div>

                <div className="space-y-2">
                  {group.items.map((loc) => {
                    const slug = loc.toLowerCase().replace(/\s+/g, "-")
                    return (
                      <Link key={loc} href={`/${group.code}/${slug}`} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 hover:text-teal-700 text-xs font-semibold text-slate-800 transition-colors">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 text-slate-400" /> {loc}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                      </Link>
                    )
                  })}
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
