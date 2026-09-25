"use client"

import React, { createContext, useContext, useState } from "react"
import { Sparkles, X, Send, Bot, User, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { trackEvent } from "@/lib/analytics"

interface AskPropthamContextType {
  isOpen: boolean
  openWidget: (initialQuestion?: string) => void
  closeWidget: () => void
  toggleWidget: () => void
}

const AskPropthamContext = createContext<AskPropthamContextType>({
  isOpen: false,
  openWidget: () => {},
  closeWidget: () => {},
  toggleWidget: () => {},
})

export const useAskProptham = () => useContext(AskPropthamContext)

export function AskPropthamProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<
    Array<{ role: "assistant" | "user"; text: string; action?: { label: string; href: string } }>
  >([
    {
      role: "assistant",
      text: "Hi. What would you like to know about a property?",
    },
  ])
  const [inputQuery, setInputQuery] = useState("")

  const openWidget = (initialQuestion?: string) => {
    setIsOpen(true)
    trackEvent("ask_question_started")
    if (initialQuestion) {
      handleSend(initialQuestion)
    }
  }

  const closeWidget = () => setIsOpen(false)
  const toggleWidget = () => setIsOpen((prev) => !prev)

  const handleSend = (textToSend?: string) => {
    const q = textToSend || inputQuery
    if (!q.trim()) return

    trackEvent("question_submitted", { question: q })

    const newMsgs = [...messages, { role: "user" as const, text: q }]
    setMessages(newMsgs)
    setInputQuery("")

    setTimeout(() => {
      let reply =
        "Proptham Intelligence: Based on 42 recent land registration deeds in the OMR Corridor, fair market value is ₹1,18,000–₹1,28,000/sq.ft."
      let action = { label: "View Price Analysis", href: "/price-intelligence" }

      const lower = q.toLowerCase()
      if (lower.includes("verify") || lower.includes("buying") || lower.includes("document")) {
        reply =
          "Verification Protocol: Always audit 30-year Mother Deed title chain, Encumbrance Certificate (EC), Patta/Khata status, and active RERA filing code."
        action = { label: "Audit with LandCheck", href: "/landcheck" }
      } else if (lower.includes("locality") || lower.includes("know")) {
        reply =
          "Locality Analytics: OMR IT Expressway exhibits +14.2% historical 3-year appreciation velocity, catalyzed by Metro Phase 2 extension."
        action = { label: "Explore Location Analytics", href: "/location-analysis" }
      } else if (lower.includes("compare")) {
        reply =
          "Comparison Engine: Evaluate target properties side-by-side on per-sq.ft pricing, floor layout efficiency, and builder delivery track records."
        action = { label: "Compare Properties", href: "/compare" }
      } else if (lower.includes("sell") || lower.includes("selling")) {
        reply =
          "Seller Positioning: Benchmark your asking price against active competing supply and eliminate buyer document objections before listing."
        action = { label: "Seller Intelligence", href: "/seller-intelligence" }
      }

      setMessages([...newMsgs, { role: "assistant" as const, text: reply, action }])
    }, 450)
  }

  const suggestedQuestions = [
    "Is this property reasonably priced?",
    "What should I verify before buying?",
    "What should I know about this locality?",
    "Which properties should I compare?",
    "What should I consider before selling?",
  ]

  return (
    <AskPropthamContext.Provider value={{ isOpen, openWidget, closeWidget, toggleWidget }}>
      {children}

      {/* FLOATING CHAT PANEL */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[380px] h-[520px] max-h-[75vh] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* HEADER */}
          <div className="bg-slate-950 text-white px-4 py-3.5 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white shrink-0">
                <Sparkles className="h-4 w-4 text-teal-200" />
              </div>
              <div>
                <div className="font-bold text-sm leading-none flex items-center gap-2">
                  Ask Proptham
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Property intelligence assistant
                </div>
              </div>
            </div>

            <button
              onClick={closeWidget}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-slate-900 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex items-start gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`p-1.5 rounded-full text-white shrink-0 ${
                    m.role === "user" ? "bg-slate-900" : "bg-teal-600"
                  }`}
                >
                  {m.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>
                <div className="space-y-2 max-w-[85%]">
                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-slate-950 text-white rounded-tr-none font-medium"
                        : "bg-white border border-slate-200 text-slate-900 rounded-tl-none shadow-2xs"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.action && (
                    <div className="pt-0.5">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-[11px] h-7 font-semibold border-teal-600/30 text-teal-700 bg-teal-50 hover:bg-teal-100"
                        asChild
                      >
                        <Link href={m.action.href} onClick={closeWidget}>
                          {m.action.label} <ChevronRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* SUGGESTED QUESTIONS (Shown if conversation is short) */}
            {messages.length <= 2 && (
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">
                  SUGGESTED QUESTIONS
                </span>
                <div className="flex flex-col gap-1.5">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-left text-xs bg-white hover:bg-teal-50 border border-slate-200 hover:border-teal-500/50 text-slate-800 font-medium px-3 py-2 rounded-xl transition-colors shadow-2xs"
                    >
                      "{q}"
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* INPUT BAR */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="p-3 bg-white border-t border-slate-200 flex gap-2 shrink-0"
          >
            <Input
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything about a property..."
              className="flex-1 text-xs h-9 rounded-xl border-slate-200 focus-visible:ring-1 focus-visible:ring-teal-600"
            />
            <Button type="submit" size="sm" className="bg-teal-600 hover:bg-teal-500 text-white h-9 px-3 rounded-xl shrink-0">
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      )}
    </AskPropthamContext.Provider>
  )
}
