import Link from "next/link"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { BookOpen, ShieldCheck, DollarSign, ChevronRight, HelpCircle } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <AppHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* HERO */}
        <section className="bg-slate-950 text-white py-14 px-6 sm:px-8 lg:px-12 border-b border-slate-800">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="text-teal-400 font-mono text-xs uppercase tracking-widest">
              Proptham SEO &bull; AEO &bull; GEO Knowledge Architecture
            </div>
            <h1 className="text-3xl sm:text-5xl font-anton tracking-wide">
              Property Research & Intelligence Hub
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
              Authoritative property buying guides, legal due diligence checklists, price validation frameworks, and locality infrastructure analysis for home buyers across India.
            </p>
          </div>
        </section>

        {/* NAVIGATION CATEGORIES */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Buying Guides */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-base">
                <BookOpen className="h-5 w-5" /> Buying Guides
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li><Link href="/guides/buying" className="hover:text-teal-600 flex items-center justify-between">How to Research a Property Before Buying <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/guides/due-diligence" className="hover:text-teal-600 flex items-center justify-between">What to Check Before Buying a Flat <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/guides/first-time-buyer" className="hover:text-teal-600 flex items-center justify-between">First Time Home Buyer Guide <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
              </ul>
            </div>

            {/* 2. Price Intelligence */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-base">
                <DollarSign className="h-5 w-5" /> Price Intelligence
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li><Link href="/price-intelligence" className="hover:text-teal-600 flex items-center justify-between">How to Validate Property Price <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/tools/price-analysis" className="hover:text-teal-600 flex items-center justify-between">How to Identify Overpriced Properties <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/guides/hidden-costs" className="hover:text-teal-600 flex items-center justify-between">Hidden Costs When Buying a Home <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
              </ul>
            </div>

            {/* 3. Due Diligence & Legal */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-base">
                <ShieldCheck className="h-5 w-5" /> Legal Due Diligence
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                <li><Link href="/property-due-diligence" className="hover:text-teal-600 flex items-center justify-between">Property Due Diligence Checklist <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/landcheck" className="hover:text-teal-600 flex items-center justify-between">How to Verify Title & Patta/Khata <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
                <li><Link href="/verify" className="hover:text-teal-600 flex items-center justify-between">How to Verify Broker Information <ChevronRight className="h-3.5 w-3.5 text-slate-400" /></Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* AEO QUESTION ANSWERING SECTION */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 border-t border-slate-200">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
              <HelpCircle className="h-6 w-6 text-teal-600" /> Key Answer Engine Questions (AEO)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">How do I know if a property is overpriced?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Compare the asking price per square foot against recent government guidance values and actual registered sale deeds in the same micro-locality. A variance greater than 15-20% without clear structural upgrades indicates overpricing.
                </p>
                <Link href="/price-intelligence" className="text-teal-700 font-bold text-xs inline-block pt-1 hover:underline">
                  Read Price Intelligence Analysis &rarr;
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm">What documents should I verify before buying a flat?</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Verify the Parent Deed (13 to 30 years encumbrance certificate), Sale Deed, Approved Building Plan copy, RERA Registration Certificate, Occupancy Certificate (OC), and Patta/Khata entry in the current seller&apos;s name.
                </p>
                <Link href="/property-due-diligence" className="text-teal-700 font-bold text-xs inline-block pt-1 hover:underline">
                  Read Legal Due Diligence Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
