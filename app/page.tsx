"use client"

import Link from "next/link"
import {
  ArrowRight,
  Home as HomeIcon,
  Tag,
  TrendingUp,
  Building2,
  Scale,
  FileText,
  MessageSquare,
  ExternalLink,
  Share2,
  ChevronRight,
  Check,
  AlertTriangle,
  Search,
  Shield,
  CheckCircle2,
} from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { useAskProptham } from "@/components/ask-proptham-widget"

export default function Home() {
  const { openWidget } = useAskProptham()

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      <AppHeader transparent={true} />

      <main className="flex-1">
        {/* ===================================================
            SECTION 1: DARK CINEMATIC HERO
            =================================================== */}
        <section className="relative min-h-[85vh] bg-slate-950 text-white flex items-center pt-24 pb-16 overflow-hidden">
          {/* Hero Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-night-villa.jpg"
              alt="Proptham Luxury Modern Architecture at Night"
              className="w-full h-full object-cover object-center brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent lg:w-[60%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
          </div>

          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 z-10 relative">
            
            {/* Left Content Column */}
            <div className="max-w-2xl lg:max-w-3xl space-y-6 pt-6">
              <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-wide uppercase leading-[0.95] text-white">
                FIND YOUR<br />DESTINED PROPERTY
              </h1>
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 2: "WHAT ARE YOU TRYING TO DECIDE?"
            =================================================== */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                FOR EVERY PROPERTY DECISION
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
                What are you trying to decide?
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Get relevant insights based on your goal.
              </p>
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Buyer", href: "/buy", icon: HomeIcon, desc: "Understand a property before buying" },
                { title: "Seller", href: "/seller-intelligence", icon: Tag, desc: "Understand your property's market position" },
                { title: "Investor", href: "/research", icon: TrendingUp, desc: "Research value, locality and opportunity" },
                { title: "Commercial", href: "/commercial", icon: Building2, desc: "Evaluate commercial property, rent and market context" },
                { title: "Compare", href: "/compare", icon: Scale, desc: "Understand the differences between properties" },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between h-40"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors mb-3">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex items-center justify-between font-bold text-slate-900 text-sm">
                        <span>{item.title}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 3: "THREE WAYS TO USE PROPTHAM"
            =================================================== */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                GET STARTED
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
                Three ways to use Proptham
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Different questions. One intelligence layer.
              </p>
            </div>

            {/* 3 Showcase Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Analyse a Property */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-xs hover:shadow-md transition-all h-[280px]">
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-800">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Analyse a Property</h3>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Understand price, location, risk, suitability and full context.
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <Link
                    href="/property-analysis"
                    className="bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
                  >
                    Analyse Property <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Decorative house crop graphic */}
                <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-20 pointer-events-none transition-opacity group-hover:opacity-30">
                  <img src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=600&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>

              {/* Card 2: Compare Properties */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-xs hover:shadow-md transition-all h-[280px]">
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-800">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Compare Properties</h3>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Compare the same decision dimensions side by side.
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <Link
                    href="/compare"
                    className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
                  >
                    Compare Properties <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-20 pointer-events-none transition-opacity group-hover:opacity-30">
                  <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>

              {/* Card 3: Ask Proptham */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden group shadow-xs hover:shadow-md transition-all h-[280px]">
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-800">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Ask Proptham</h3>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                    Have a question? Get a direct answer with relevant next steps.
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <button
                    onClick={() => openWidget()}
                    className="bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold px-4 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    Ask Proptham <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="absolute -bottom-6 -right-6 w-44 h-44 opacity-20 pointer-events-none transition-opacity group-hover:opacity-30">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop" alt="Architecture" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 4: PROPERTY INTELLIGENCE REPORT SHOWCASE
            =================================================== */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                REAL INSIGHTS. NOT JUST LISTINGS.
              </div>

              <h2 className="font-anton text-4xl sm:text-5xl text-slate-900 tracking-wide uppercase leading-tight">
                A complete property intelligence report.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Go beyond surface information. Get a structured analysis with price context, location signals, risks and verified sources.
              </p>

              <div>
                <Link
                  href="/property-report"
                  className="bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm"
                >
                  View sample analysis <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Side: Realistic Report Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=200&auto=format&fit=crop"
                      alt="Property"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <div className="text-xs text-slate-400 font-mono uppercase">PROPERTY INTELLIGENCE</div>
                      <h3 className="font-bold text-slate-900 text-base">42 Greenway Avenue</h3>
                      <p className="text-xs text-slate-500">OMR, Chennai</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-[11px] text-slate-400">
                      Last updated <span className="font-semibold text-slate-700">14 Sep 2026</span>
                    </div>
                    <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5">
                      <Share2 className="h-3.5 w-3.5" /> Share
                    </button>
                  </div>
                </div>

                {/* Top 3 Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Price Analysis */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Price Analysis</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-900">₹1.18 Cr</div>
                    <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span>&bull; +4.1%</span> <span className="text-slate-500 font-normal">Observed market range ₹1.12M - ₹1.24M</span>
                    </div>
                    {/* Mini SVG Sparkline */}
                    <svg className="w-full h-8 pt-1" viewBox="0 0 100 25" fill="none">
                      <path d="M0 20 L25 15 L50 18 L75 8 L100 12" stroke="#0d9488" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  {/* Location Insights */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Location Insights</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-700 font-medium">
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500 shrink-0" /> Strong connectivity</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500 shrink-0" /> Upcoming metro line</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500 shrink-0" /> Good social infrastructure</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500 shrink-0" /> Low flood risk</li>
                    </ul>
                  </div>

                  {/* Risk Summary */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>Risk Summary</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                    <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 flex items-center gap-2 text-rose-700 text-[11px] font-semibold">
                      <AlertTriangle className="h-4 w-4 shrink-0 text-rose-500" />
                      <span>2 areas require further verification</span>
                    </div>
                    <div className="space-y-1 text-[10px] text-slate-500">
                      <div>Title verification pending</div>
                      <div>Check encumbrance record</div>
                    </div>
                  </div>

                </div>

                {/* Bottom Row Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                  
                  {/* Property Details */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1.5">
                    <div className="font-bold text-slate-900 text-xs">Property Details</div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                      <div>3 BHK Apartment</div>
                      <div>1,450 sq.ft</div>
                      <div>North-Facing</div>
                      <div>Built in 2022</div>
                    </div>
                  </div>

                  {/* Market Context */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                    <div className="font-bold text-slate-900 text-xs">Market Context</div>
                    <div className="text-sm font-bold font-mono text-slate-900">₹10,850 <span className="text-[10px] font-normal text-slate-500">/ sq.ft</span></div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-teal-600 h-[1.5] w-3/5 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Below Range</span>
                      <span>Above Range</span>
                    </div>
                  </div>

                  {/* Data Sources */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 flex justify-between items-center">
                    <div>
                      <div className="font-bold text-slate-900 text-xs mb-1">Data Sources</div>
                      <div className="space-y-0.5 text-[10px] text-slate-600">
                        <div>&bull; Government records</div>
                        <div>&bull; Market data</div>
                        <div>&bull; Location data</div>
                        <div>&bull; Property records</div>
                      </div>
                    </div>

                    <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                      <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=200&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white bg-slate-950/80 px-1.5 py-0.5 rounded">View map ↗</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 5: THE PROPTHAM DECISION ENGINE
            =================================================== */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto space-y-12">
            <div className="text-center space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                FROM INFORMATION TO A CONFIDENT DECISION
              </div>
              <h2 className="font-anton text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
                The Proptham Decision Engine
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                A structured journey from research to action.
              </p>
            </div>

            {/* Horizontal Flow Steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
              {[
                { title: "Research", icon: Search, desc: "Understand the property, locality and market." },
                { title: "Analyse", icon: FileText, desc: "Get data-driven insights and price context." },
                { title: "Verify", icon: Shield, desc: "Check what matters with LandCheck." },
                { title: "Compare", icon: Scale, desc: "Evaluate your options side by side." },
                { title: "Decide", icon: CheckCircle2, desc: "Make a confident decision with clarity." },
              ].map((step, idx, arr) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    <div className="flex flex-col items-center text-center space-y-3 max-w-[160px]">
                      <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs hover:border-teal-500 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-snug">{step.desc}</p>
                    </div>

                    {idx < arr.length - 1 && (
                      <div className="hidden md:block text-slate-300 mx-2">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 6: CONVERSATIONAL INTELLIGENCE / ASK PROPTHAM
            =================================================== */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-[#F7F5F0] border-b border-slate-200">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                CONVERSATIONAL INTELLIGENCE
              </div>

              <h2 className="font-anton text-4xl sm:text-5xl text-slate-900 tracking-wide uppercase leading-tight">
                Ask the property question you don&apos;t know how to ask.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Get clear, context-aware answers backed by real data, sources, and next steps.
              </p>

              <div>
                <button
                  onClick={() => openWidget()}
                  className="bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  Ask Proptham <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Right Chat Mockup UI Container */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-8 space-y-5">
                
                {/* User Message 1 */}
                <div className="flex justify-end">
                  <div className="bg-slate-100 text-slate-900 px-4 py-2.5 rounded-2xl rounded-tr-xs text-xs font-medium max-w-sm">
                    Is this property fairly priced for OMR?
                  </div>
                </div>

                {/* Proptham Response 1 */}
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-anton flex items-center justify-center text-sm shrink-0">
                    P
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-xs p-4 text-xs space-y-3 max-w-lg">
                    <div className="font-bold text-slate-900">Proptham:</div>
                    <p className="text-slate-700 leading-relaxed">
                      Based on the available market data, the asking price of ₹1.18 Cr is within the observed range for comparable properties in OMR.
                    </p>
                    <div className="text-[11px] font-semibold text-slate-500 space-y-1">
                      <div>Two factors require attention:</div>
                      <div className="text-slate-700 font-normal">&bull; 1. Title verification is pending.</div>
                      <div className="text-slate-700 font-normal">&bull; 2. Check for any encumbrance records.</div>
                    </div>
                    <div className="pt-1">
                      <Link href="/property-analysis" className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-[11px] font-semibold text-slate-800 hover:bg-slate-50 inline-flex items-center gap-1">
                        View full analysis <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* User Message 2 */}
                <div className="flex justify-end pt-2">
                  <div className="bg-slate-100 text-slate-900 px-4 py-2.5 rounded-2xl rounded-tr-xs text-xs font-medium max-w-sm">
                    What should I verify before buying?
                  </div>
                </div>

                {/* Proptham Response 2 */}
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-white font-anton flex items-center justify-center text-sm shrink-0">
                    P
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-xs p-4 text-xs space-y-3 max-w-lg">
                    <div className="font-bold text-slate-900">Proptham:</div>
                    <p className="text-slate-700 leading-relaxed">
                      You should verify the following:
                    </p>
                    <ul className="space-y-1 text-[11px] text-slate-700 font-medium">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> Ownership and title documents</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> Encumbrance certificate</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> RERA registration (if applicable)</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-600" /> Approved building plan and land use</li>
                    </ul>
                    <div className="pt-1">
                      <Link href="/landcheck" className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-[11px] font-semibold text-slate-800 hover:bg-slate-50 inline-flex items-center gap-1">
                        Start verification with LandCheck <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 7: RESEARCH DISCOVERY SECTION
            =================================================== */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
          <div className="max-w-[1600px] mx-auto space-y-8">
            
            {/* Header Flex */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                  RESEARCH WITH CONTEXT
                </div>
                <h2 className="font-anton text-3xl sm:text-4xl text-slate-900 tracking-wide uppercase">
                  Explore property research
                </h2>
                <p className="text-slate-500 text-sm">
                  Guides, insights and analysis to help you make informed decisions.
                </p>
              </div>

              <div>
                <Link
                  href="/research"
                  className="px-4 py-2.5 rounded-full border border-slate-300 text-slate-800 hover:bg-slate-50 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  View all research <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Property Research", desc: "How to evaluate a property before buying", href: "/guides/buying", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" },
                { title: "Price Intelligence", desc: "How to understand property prices", href: "/price-intelligence", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop" },
                { title: "Location Intelligence", desc: "How to evaluate a locality", href: "/location-analysis", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" },
                { title: "Due Diligence", desc: "What should you verify?", href: "/property-due-diligence", img: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=400&auto=format&fit=crop" },
                { title: "Investment Research", desc: "How to research an investment property", href: "/guides/investment", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop" },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between h-56"
                >
                  <div className="h-28 w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-xs">{item.title}</h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                    </div>
                    <div className="flex justify-end pt-2">
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================
            SECTION 8: FINAL CALL TO ACTION
            =================================================== */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1600px] mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 min-h-[380px] flex items-center">
              
              {/* Background Architectural Crop */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=1600&auto=format&fit=crop"
                  alt="Proptham Modern Luxury Real Estate"
                  className="w-full h-full object-cover object-right opacity-30 lg:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/90 to-transparent lg:w-[60%]" />
              </div>

              {/* Content Box */}
              <div className="relative z-10 max-w-xl p-8 sm:p-12 space-y-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
                  MAKE BETTER PROPERTY DECISIONS
                </div>

                <h2 className="font-anton text-4xl sm:text-5xl text-slate-900 tracking-wide uppercase leading-[0.95]">
                  Before you decide,<br />know what you&apos;re deciding.
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Research the property. Understand the context. Verify what matters. Compare your options. Make the decision with better information.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    href="/property-analysis"
                    className="bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm"
                  >
                    Analyse a Property <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    onClick={() => openWidget()}
                    className="bg-white hover:bg-slate-50 text-slate-950 border border-slate-300 font-semibold text-xs px-6 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                  >
                    Ask Proptham <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
