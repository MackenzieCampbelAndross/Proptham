import type { Metadata } from "next"
import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"

export const metadata: Metadata = {
  title: "Due Diligence & Legal Verification Guides | Proptham",
  description: "Educational research on verifying property title deeds, Encumbrance Certificates, Patta/Khata, and RERA approval records in India.",
}

export default function DueDiligenceGuidesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      <AppHeader />
      <main className="flex-1 pt-24 pb-20">
        <section className="w-full py-16 bg-slate-950 text-white">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase">RESEARCH • DUE DILIGENCE</span>
            <h1 className="font-anton text-4xl sm:text-6xl uppercase">LEGAL DUE DILIGENCE GUIDES</h1>
            <p className="text-slate-300 text-base sm:text-lg">Detailed educational frameworks for title verification, Encumbrance Certificates, and RERA compliance.</p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}
