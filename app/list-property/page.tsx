import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Building2, CheckCircle2, Shield, Sparkles, Upload } from "lucide-react"

export default function ListPropertyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        <section className="bg-slate-950 text-white py-14 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" /> Proptham Owner & Seller Portal
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              List Your Property on Proptham
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Connect directly with verified buyers and institutional investors. Get free LandCheck title verification pre-screening and price benchmark analysis.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-12">
          <form className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1 border-b pb-4">
              <h2 className="text-lg font-bold text-slate-900">Property Information</h2>
              <p className="text-xs text-slate-500">Provide basic location and property details for instant buyer visibility.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Property Purpose</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium">
                  <option value="sale">Sell Property</option>
                  <option value="rent">Rent Property</option>
                  <option value="lease">Lease Commercial</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Property Type</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium">
                  <option value="apartment">Apartment / Flat</option>
                  <option value="villa">Independent Villa</option>
                  <option value="house">Independent House</option>
                  <option value="plot">Plot / Land</option>
                  <option value="commercial">Commercial Office / Retail</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">City</label>
                <input type="text" placeholder="e.g. Chennai" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium" />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Locality</label>
                <input type="text" placeholder="e.g. OMR, Velachery" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium" />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Expected Asking Price (₹)</label>
                <input type="number" placeholder="e.g. 8500000" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium" />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-700">Super Built-up Area (Sq.Ft)</label>
                <input type="number" placeholder="e.g. 1500" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium" />
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label className="font-semibold text-slate-700">Property Description & Highlights</label>
              <textarea rows={4} placeholder="Describe key amenities, metro distance, floor number, facing, and title status..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none font-medium" />
            </div>

            <button type="button" className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-2xl transition-colors text-sm shadow-md">
              Submit Property Listing
            </button>
          </form>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
