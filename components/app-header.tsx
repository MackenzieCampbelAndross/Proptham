"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAskProptham } from "@/components/ask-proptham-widget"

export default function AppHeader({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { openWidget } = useAskProptham()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDarkState = transparent && !scrolled

  const handleAskClick = () => {
    openWidget()
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkState
          ? "bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent text-white border-b border-white/10"
          : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200 shadow-xs"
      }`}
    >
      <div className="w-full flex h-20 items-center justify-between px-6 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        
        {/* LEFT: WORDMARK (Extreme Left) */}
        <Link href="/" className="flex items-center gap-2 z-10 shrink-0">
          <span
            className={`font-anton text-3xl sm:text-4xl tracking-wider uppercase transition-colors ${
              isDarkState ? "text-white" : "text-slate-950"
            }`}
          >
            PROPTHAM
          </span>
        </Link>

        {/* CENTER: 8 PRIMARY NAV SECTIONS (Visually Centered, Clean Spacing, No Arrows) */}
        <nav className="hidden xl:flex items-center justify-center gap-7 xl:gap-8 flex-1 mx-6 font-sans z-10">
          
          {/* 1. BUY */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("buy")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/buy"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Buy
            </Link>

            {activeDropdown === "buy" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[580px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">PROPERTY TYPE</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/buy/apartments" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Apartments</Link>
                      <Link href="/buy/villas" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Villas</Link>
                      <Link href="/buy/houses" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Independent Houses</Link>
                      <Link href="/buy/builder-floors" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Builder Floors</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">PROPERTY STATUS</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/buy/ready-to-move" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Ready to Move</Link>
                      <Link href="/buy/under-construction" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Under Construction</Link>
                      <Link href="/buy/resale" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Resale</Link>
                      <Link href="/buy/new-launches" className="py-1 text-slate-700 hover:text-teal-600 font-medium">New Launches</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">BUYER INTENT</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/buy/luxury" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Luxury Homes</Link>
                      <Link href="/buy/affordable" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Affordable Homes</Link>
                      <Link href="/buy/investment" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Investment Properties</Link>
                      <Link href="/buy" className="py-1 text-teal-700 font-bold hover:underline pt-1">Browse All Buy &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. RENT */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("rent")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/rent"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Rent
            </Link>

            {activeDropdown === "rent" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[520px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">RESIDENTIAL</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/rent/flats" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Flats for Rent</Link>
                      <Link href="/rent/houses" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Houses for Rent</Link>
                      <Link href="/rent/villas" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Villas for Rent</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">FURNISHING</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/rent/furnished" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Fully Furnished</Link>
                      <Link href="/rent/semi-furnished" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Semi Furnished</Link>
                      <Link href="/rent/unfurnished" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Unfurnished</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">LIVING</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/rent/pg" className="py-1 text-slate-700 hover:text-teal-600 font-medium">PG & Hostels</Link>
                      <Link href="/rent/co-living" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Co-Living</Link>
                      <Link href="/rent" className="py-1 text-teal-700 font-bold hover:underline pt-1">Browse All Rent &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. PROJECTS */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/projects"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Projects
            </Link>

            {activeDropdown === "projects" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[480px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">PROJECT STATUS</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/projects/new-launches" className="py-1 text-slate-700 hover:text-teal-600 font-medium">New Launches</Link>
                      <Link href="/projects/upcoming" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Upcoming Projects</Link>
                      <Link href="/projects/under-construction" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Under Construction</Link>
                      <Link href="/projects/ready-to-move" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Ready to Move</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">PROJECT CITIES</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/projects/chennai" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Chennai Projects</Link>
                      <Link href="/projects/bangalore" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Bangalore Projects</Link>
                      <Link href="/projects/hyderabad" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Hyderabad Projects</Link>
                      <Link href="/builders" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Builder Directory</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. PLOTS */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("plots")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/plots"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Plots
            </Link>

            {activeDropdown === "plots" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[480px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">RESIDENTIAL PLOTS</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/plots/residential" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Residential Plots</Link>
                      <Link href="/plots/gated" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Gated Community Plots</Link>
                      <Link href="/plots/land" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Land for Sale</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">COMMERCIAL & FARM</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/plots/commercial" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Commercial Land</Link>
                      <Link href="/plots/agricultural" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Agricultural & Farm Land</Link>
                      <Link href="/plots/research" className="py-1 text-teal-700 font-bold hover:underline pt-1">Plot Due Diligence &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. COMMERCIAL */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("commercial")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/commercial"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Commercial
            </Link>

            {activeDropdown === "commercial" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[560px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">OFFICE</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/commercial/office" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Office Space</Link>
                      <Link href="/commercial/office" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Coworking Spaces</Link>
                      <Link href="/commercial/office" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Managed Office</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">RETAIL & WAREHOUSE</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/commercial/retail" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Retail Shops</Link>
                      <Link href="/commercial/showrooms" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Showrooms</Link>
                      <Link href="/commercial/warehouse" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Warehouses & Sheds</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">INTELLIGENCE</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/commercial/buy" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Buy Commercial</Link>
                      <Link href="/commercial/rent" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Rent Commercial</Link>
                      <Link href="/commercial-intelligence" className="py-1 text-teal-700 font-bold hover:underline pt-1">Commercial Analytics &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 6. COMPARE */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("compare")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/compare"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Compare
            </Link>

            {activeDropdown === "compare" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-64 animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3 text-slate-900 space-y-1">
                  <Link href="/compare/properties" className="block px-3 py-2 text-xs font-semibold rounded-lg hover:bg-slate-50">
                    Compare Properties
                  </Link>
                  <Link href="/compare/projects" className="block px-3 py-2 text-xs font-semibold rounded-lg hover:bg-slate-50">
                    Compare Projects
                  </Link>
                  <Link href="/compare/localities" className="block px-3 py-2 text-xs font-semibold rounded-lg hover:bg-slate-50">
                    Compare Localities
                  </Link>
                  <Link href="/compare/ready-to-move-vs-under-construction" className="block px-3 py-2 text-xs font-semibold rounded-lg hover:bg-slate-50 text-teal-700 font-bold">
                    Ready to Move vs Under Construction
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 7. EXPLORE */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("explore")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/explore"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Explore
            </Link>

            {activeDropdown === "explore" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[480px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">CITIES</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/chennai" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Chennai</Link>
                      <Link href="/bangalore" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Bangalore</Link>
                      <Link href="/hyderabad" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Hyderabad</Link>
                      <Link href="/pune" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Pune</Link>
                      <Link href="/mumbai" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Mumbai</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">ENTITIES & LISTING</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/localities" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Browse Localities</Link>
                      <Link href="/builders" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Builders & Developers</Link>
                      <Link href="/list-property" className="py-1 text-teal-700 font-bold hover:underline pt-1">+ List Your Property</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 8. RESEARCH */}
          <div
            className="relative py-6 group"
            onMouseEnter={() => setActiveDropdown("research")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/research"
              className={`text-sm font-semibold transition-colors ${
                isDarkState ? "text-slate-200 hover:text-teal-400" : "text-slate-700 hover:text-teal-600"
              }`}
            >
              Research
            </Link>

            {activeDropdown === "research" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-[540px] animate-in fade-in-0 slide-in-from-top-1 duration-150 ease-out">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-5 text-slate-900 grid grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">GUIDES</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/guides/buying" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Buying Guides</Link>
                      <Link href="/guides/due-diligence" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Due Diligence Checklist</Link>
                      <Link href="/guides/investment" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Investment Research</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">ANALYSIS & TOOLS</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/price-intelligence" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Price Intelligence</Link>
                      <Link href="/location-analysis" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Location Intelligence</Link>
                      <Link href="/tools" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Calculators & Tools</Link>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">TRUST</div>
                    <div className="flex flex-col space-y-1 text-xs">
                      <Link href="/methodology" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Proptham Methodology</Link>
                      <Link href="/trust" className="py-1 text-slate-700 hover:text-teal-600 font-medium">Trust Standards</Link>
                      <Link href="/research" className="py-1 text-teal-700 font-bold hover:underline pt-1">Research Hub &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </nav>

        {/* RIGHT: ASK PROPTHAM & SIGN IN */}
        <div className="hidden xl:flex items-center gap-3 z-10 shrink-0">
          <Button
            size="sm"
            onClick={handleAskClick}
            className="bg-[#00a896] hover:bg-teal-600 text-white font-semibold text-xs px-4 h-9 shadow-sm flex items-center gap-1.5 rounded-full border-0 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-teal-100" /> Ask Proptham
          </Button>

          <Button
            variant={isDarkState ? "secondary" : "outline"}
            size="sm"
            className={`font-semibold text-xs h-9 px-4 rounded-xl ${
              isDarkState
                ? "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                : "border-slate-300 text-slate-800 hover:bg-slate-100"
            }`}
            asChild
          >
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex xl:hidden items-center gap-2 z-10">
          <Button
            size="sm"
            onClick={handleAskClick}
            className="bg-[#00a896] text-white text-xs px-3.5 h-8.5 rounded-full border-0 cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="h-3 w-3" /> Ask
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={isDarkState ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-100"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* MOBILE DROPDOWN ACCORDION MENU */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b bg-white text-slate-900 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3 font-semibold text-sm">
            <Link href="/buy" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Buy Properties</Link>
            <Link href="/rent" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Rent Properties</Link>
            <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Projects</Link>
            <Link href="/plots" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Plots & Land</Link>
            <Link href="/commercial" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Commercial Real Estate</Link>
            <Link href="/compare" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Compare Properties</Link>
            <Link href="/explore" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Explore Cities & Entities</Link>
            <Link href="/research" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-600 border-b pb-2">Research & Guides</Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <Button className="w-full justify-center bg-[#00a896] text-white font-semibold rounded-full" onClick={handleAskClick}>
              Ask Proptham
            </Button>
            <Button variant="outline" size="sm" asChild className="w-full justify-center rounded-xl">
              <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
