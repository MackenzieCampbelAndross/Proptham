"use client"

import PageShell from "@/components/page-shell"
import { BookOpen, FileText, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GuidesPage() {
  const guides = [
    {
      category: "PRICE INTELLIGENCE",
      title: "How to Evaluate Fair Market Price Per Sq.Ft. in Growing Corridors",
      excerpt: "A structured methodology to separate marketing inflation from genuine land appreciation.",
      date: "Market Report",
      readTime: "6 min read"
    },
    {
      category: "DUE DILIGENCE",
      title: "Essential Document Checklist Before Signing Property Booking Form",
      excerpt: "Key clauses, RERA verification steps, and Encumbrance Certificate red flags every buyer must inspect.",
      date: "Legal Framework",
      readTime: "8 min read"
    },
    {
      category: "LOCATION INTELLIGENCE",
      title: "Infrastructure Impact Analysis: Metro Corridor vs Expressway",
      excerpt: "Quantitative assessment of residential capital appreciation following transit expansion.",
      date: "Research Brief",
      readTime: "5 min read"
    }
  ]

  return (
    <PageShell>
      <section className="w-full py-12 md:py-20 bg-background border-b">
        <div className="container px-4 md:px-6 max-w-5xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-600 text-teal-700 bg-teal-50 text-xs font-semibold">
            <BookOpen className="h-4 w-4 text-teal-600" /> RESEARCH & INSIGHTS PUBLICATION
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Proptham Intelligence & Guides
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Editorial due diligence guides, price trend publications, and legal verification frameworks.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-slate-50/50">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((item, idx) => (
              <div key={idx} className="bg-background border rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-teal-600/50 transition-colors">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">{item.category}</span>
                  <h3 className="text-lg font-bold text-foreground leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </div>
                <div className="pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.date} • {item.readTime}</span>
                  <span className="text-teal-700 font-semibold flex items-center gap-1">Read <ArrowRight className="h-3 w-3" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
