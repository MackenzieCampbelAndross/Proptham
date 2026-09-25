import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, ArrowRight, Calculator } from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Property Decision Tools & Calculators | Proptham",
  description: "Free property intelligence tools: Stamp Duty Calculator, Price Per Sq.Ft Validator, and Land Area Converter.",
}

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />

      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white border-b border-slate-800">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold tracking-widest uppercase">
              <Wrench className="h-3.5 w-3.5 text-teal-400" /> DECISION TOOLS
            </div>
            <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white leading-tight">
              PROPERTY DECISION CALCULATORS
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed">
              Quantitative tools to calculate exact registration outlays, fair price per sq.ft ranges, and land area conversions.
            </p>
          </div>
        </section>

        <section className="w-full py-16 bg-white border-b">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Stamp Duty & Registration Calculator", slug: "/tools/stamp-duty", desc: "Calculate exact state stamp duty rates and sub-registrar fees." },
                { name: "Price Per Sq.Ft Valuation Tool", slug: "/tools/price-analysis", desc: "Validate asking price against micro-market transaction history." },
                { name: "Land Area Converter", slug: "/tools/land-area", desc: "Convert Grounds, Cents, Sq.Ft, Guntha, and Acres seamlessly." },
              ].map((t, idx) => (
                <Link key={idx} href={t.slug} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors space-y-3 block">
                  <Calculator className="h-6 w-6 text-teal-600" />
                  <h3 className="text-lg font-bold text-slate-950">{t.name}</h3>
                  <p className="text-xs text-slate-600">{t.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
