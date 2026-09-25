"use client"

import PageShell from "@/components/page-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Scale, ArrowRight, Info } from "lucide-react"
import Link from "next/link"

export default function ComparePage() {
  return (
    <PageShell>
      <section className="w-full py-12 md:py-16 bg-slate-950 text-white border-b border-slate-800">
        <div className="container px-4 md:px-6 max-w-6xl text-center space-y-4 mx-auto">
          <Badge variant="outline" className="px-3.5 py-1.5 border-teal-500/40 text-teal-300 bg-teal-950/60 font-bold text-xs uppercase tracking-wider">
            <Scale className="h-3.5 w-3.5 mr-1.5 text-teal-400 inline" /> SIDE-BY-SIDE EVALUATION
          </Badge>
          <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white">
            Compare Properties with Context
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Compare asking price per sq.ft., valuation benchmarks, builder reputation, LandCheck legal verification, and risk indicators.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto space-y-8">
          <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b bg-slate-100/70">
                    <th className="p-4 md:p-6 font-bold text-slate-500 uppercase text-xs">Evaluation Criteria</th>
                    <th className="p-4 md:p-6 font-bold text-slate-950 text-base">Aura Heights (OMR)</th>
                    <th className="p-4 md:p-6 font-bold text-slate-950 text-base">Grand Horizon (ECR)</th>
                    <th className="p-4 md:p-6 font-bold text-slate-950 text-base">Skyline Enclave (Velachery)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">Asking Price / Sq.Ft.</td>
                    <td className="p-4 md:p-6 font-bold text-teal-700">₹1,25,000 / sq.ft</td>
                    <td className="p-4 md:p-6 font-bold text-slate-900">₹1,45,000 / sq.ft</td>
                    <td className="p-4 md:p-6 font-bold text-slate-900">₹1,10,000 / sq.ft</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">Fair Valuation Benchmark</td>
                    <td className="p-4 md:p-6 text-teal-700 font-semibold">Fair Market (₹1.22L)</td>
                    <td className="p-4 md:p-6 text-amber-700 font-semibold">+12% Premium</td>
                    <td className="p-4 md:p-6 text-teal-700 font-semibold">Fair Market (₹1.08L)</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">LandCheck Legal Status</td>
                    <td className="p-4 md:p-6 font-bold text-teal-700 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" /> Verified Clear
                    </td>
                    <td className="p-4 md:p-6 font-bold text-teal-700 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" /> Verified Clear
                    </td>
                    <td className="p-4 md:p-6 font-bold text-teal-700 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" /> Verified Clear
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">Builder Track Record</td>
                    <td className="p-4 md:p-6 text-emerald-600 font-semibold">98% On-Time Delivery</td>
                    <td className="p-4 md:p-6 text-amber-600 font-semibold">82% On-Time Delivery</td>
                    <td className="p-4 md:p-6 text-emerald-600 font-semibold">95% On-Time Delivery</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">Metro Proximity</td>
                    <td className="p-4 md:p-6 font-medium text-slate-900">800m (Phase 2 Line)</td>
                    <td className="p-4 md:p-6 text-slate-500">3.2 km</td>
                    <td className="p-4 md:p-6 font-medium text-slate-900">1.1 km</td>
                  </tr>
                  <tr>
                    <td className="p-4 md:p-6 font-semibold text-slate-600">Risk Profile</td>
                    <td className="p-4 md:p-6 text-emerald-600 font-bold">Low Risk</td>
                    <td className="p-4 md:p-6 text-amber-600 font-bold">Coastal Buffer Risk</td>
                    <td className="p-4 md:p-6 text-emerald-600 font-bold">Low Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-950 text-sm">
                <Info className="h-4 w-4 text-teal-600" /> Why does this difference matter?
              </div>
              <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                Aura Heights provides lower per-sq.ft pricing and direct metro access, making it strong for end-use. Grand Horizon commands a coastal premium but carries coastal regulation zone buffer considerations and a lower historical builder on-time completion record.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-between items-center pt-2">
            <Button className="bg-teal-600 hover:bg-teal-500 text-white font-semibold" asChild>
              <Link href="/property-analysis">Analyze Target Property</Link>
            </Button>
            <Button variant="outline" className="font-semibold" asChild>
              <Link href="/landcheck">Verify Title with LandCheck</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
