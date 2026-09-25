"use client"

import { useState } from "react"
import Link from "next/link"
import PageShell from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Bot, User, Send, ChevronRight, BarChart3, ShieldCheck, Scale } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export default function AskPage() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState<Array<{ role: string; text: string; action?: { label: string; href: string } }>>([
    {
      role: "assistant",
      text: "Hello! I am Proptham Assistant. Ask me anything regarding property pricing, RERA compliance, builder delivery track records, or locality investments.",
    }
  ])

  const handleSend = (textToSend?: string) => {
    const q = textToSend || query
    if (!q.trim()) return

    trackEvent("question_submitted", { question: q })

    const newMsgs = [...messages, { role: "user", text: q }]
    setMessages(newMsgs)
    setQuery("")

    setTimeout(() => {
      let reply = "Proptham Intelligence: OMR Corridor properties are trading within a fair market range of ₹1,18,000 to ₹1,28,000/sq.ft based on 42 recent registered sale deeds."
      let action = { label: "View Price Intelligence", href: "/price-intelligence" }

      if (q.toLowerCase().includes("verify") || q.toLowerCase().includes("document")) {
        reply = "Verification Protocol: Audit 30-year Mother Deed title chain, Encumbrance Certificate (EC), Patta registration, and active RERA project status."
        action = { label: "Verify with LandCheck", href: "/landcheck" }
      } else if (q.toLowerCase().includes("compare")) {
        reply = "Comparison Engine: Evaluate target properties side-by-side on per-sq.ft price, floor layout efficiency, builder delivery records, and transit proximity."
        action = { label: "Compare Properties", href: "/compare" }
      } else if (q.toLowerCase().includes("sell")) {
        reply = "Seller Positioning: Benchmark asking price against active competing supply and audit potential buyer document objections."
        action = { label: "Seller Intelligence", href: "/seller-intelligence" }
      }
      setMessages([...newMsgs, { role: "assistant", text: reply, action }])
    }, 500)
  }

  return (
    <PageShell>
      <section className="w-full py-12 bg-slate-950 text-white border-b border-slate-800">
        <div className="container px-4 md:px-6 max-w-4xl text-center space-y-4 mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/40 bg-teal-950/60 text-teal-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-4 w-4 text-teal-400" /> CONVERSATIONAL PROPERTY ASSISTANT
          </div>
          <h1 className="font-anton text-4xl sm:text-6xl tracking-wider uppercase text-white">
            Ask Proptham Assistant
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Instant data-backed answers and contextual next actions for real estate decisions.
          </p>
        </div>
      </section>

      <section className="w-full py-10 bg-slate-50 min-h-[65vh]">
        <div className="container px-4 md:px-6 max-w-3xl space-y-6 mx-auto">
          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Is this property reasonably priced?",
              "What should I verify before buying?",
              "Which property should I compare?",
              "What should I consider before selling?",
            ].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-xs bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-500 text-slate-800 font-medium px-3.5 py-1.5 rounded-full transition-colors shadow-2xs"
              >
                "{prompt}"
              </button>
            ))}
          </div>

          {/* Chat Window */}
          <div className="bg-white border rounded-2xl p-4 md:p-6 shadow-sm flex flex-col space-y-4 min-h-[400px]">
            <div className="flex-1 space-y-4 overflow-y-auto max-h-[500px] p-2">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`p-2 rounded-full text-white shrink-0 ${m.role === "user" ? "bg-slate-900" : "bg-teal-600"}`}>
                    {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`space-y-3 max-w-[85%]`}>
                    <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${m.role === "user" ? "bg-slate-950 text-white rounded-tr-none font-medium" : "bg-slate-100 text-slate-900 rounded-tl-none"}`}>
                      {m.text}
                    </div>
                    {m.action && (
                      <div className="pt-1">
                        <Button size="sm" variant="outline" className="text-xs font-semibold border-teal-600/30 text-teal-700 bg-teal-50 hover:bg-teal-100" asChild>
                          <Link href={m.action.href}>
                            {m.action.label} <ChevronRight className="ml-1 h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2 border-t pt-4">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Proptham a question about price, title, or locality..."
                className="flex-1 text-sm h-11 rounded-xl"
              />
              <Button type="submit" className="bg-teal-600 hover:bg-teal-500 text-white h-11 px-5 rounded-xl">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
