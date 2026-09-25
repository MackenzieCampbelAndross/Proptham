"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Search,
  MapPin,
  Home as HomeIcon,
  Briefcase,
  Bed,
  Bath,
  Maximize2,
  SlidersHorizontal,
  ChevronDown,
  ArrowUpDown,
  Heart,
  ShieldCheck,
  ChevronRight,
  X
} from "lucide-react"

import AppHeader from "@/components/app-header"
import AppFooter from "@/components/app-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { properties, Property } from "@/data/properties"
import { trackEvent } from "@/lib/analytics"

export default function Home() {
  const router = useRouter()
  const [heroImgError, setHeroImgError] = useState(false)

  // Hero Search State
  const [searchLocation, setSearchLocation] = useState("")
  const [searchType, setSearchType] = useState("All Types")
  const [searchBudget, setSearchBudget] = useState("Any Budget")

  // Top Picks Interactive Filter State
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedBeds, setSelectedBeds] = useState<number | "All">("All")
  const [sortBy, setSortBy] = useState<"recommended" | "price-asc" | "price-desc">("recommended")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Hero Search Submission
  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent("search_submitted", { location: searchLocation, type: searchType, budget: searchBudget })
    
    const params = new URLSearchParams()
    if (searchLocation.trim()) params.set("q", searchLocation.trim())
    if (searchType !== "All Types") params.set("type", searchType)
    if (searchBudget !== "Any Budget") params.set("budget", searchBudget)
    
    router.push(`/properties?${params.toString()}`)
  }

  // Filtered Properties for Top Picks Section
  const filteredProperties = useMemo(() => {
    return properties
      .filter((p) => {
        if (selectedCity !== "All" && p.city !== selectedCity && p.locality !== selectedCity) {
          return false
        }
        if (selectedType !== "All" && p.type !== selectedType) {
          return false
        }
        if (selectedStatus !== "All" && p.status !== selectedStatus) {
          return false
        }
        if (selectedBeds !== "All" && p.beds < Number(selectedBeds)) {
          return false
        }
        if (searchBudget === "under-1cr" && (p.price > 10000000 || p.status === "For Rent")) {
          return false
        }
        if (searchBudget === "1cr-2cr" && (p.price < 10000000 || p.price > 20000000 || p.status === "For Rent")) {
          return false
        }
        if (searchBudget === "above-2cr" && (p.price < 20000000 || p.status === "For Rent")) {
          return false
        }
        if (searchBudget === "rent" && p.status !== "For Rent") {
          return false
        }
        return true
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        return 0
      })
  }, [selectedCity, selectedType, selectedStatus, selectedBeds, sortBy])

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      
      {/* HEADER OVERLAY */}
      <AppHeader transparent={true} />

      {/* ==================================================
          SECTION 01: CINEMATIC PROPERTY SEARCH HERO (~75vh)
          REPRODUCED EXACTLY FROM THE REFERENCE IMAGE
      ================================================== */}
      <section className="relative w-full h-[75vh] min-h-[580px] max-h-[760px] flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image (Luxury Mansion on the Right, Dark Sky on the Left) */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImgError ? "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" : "/hero-bg.jpg"}
            onError={() => setHeroImgError(true)}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-right sm:object-center scale-105"
          />
          {/* Subtle Dark Left Gradient to create Negative Space for Headline & Search */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
        </div>

        {/* Hero Left Content Container */}
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 pt-14 z-10">
          <div className="max-w-4xl space-y-6 text-left">
            
            {/* MAIN TITLE (Line 1: FIND YOUR, Line 2: DESTINED PROPERTY) */}
            <h1 className="font-anton text-5xl sm:text-7xl lg:text-8xl tracking-wider text-white uppercase leading-[0.95] drop-shadow-xl text-left max-w-4xl">
              FIND YOUR<br />
              <span className="text-teal-400">DESTINED</span> PROPERTY
            </h1>

            {/* FLOATING WHITE SEARCH CONTAINER (Pill Shape) */}
            <form
              onSubmit={handleHeroSearch}
              className="bg-white rounded-full p-2.5 pl-6 shadow-2xl border border-white/20 max-w-3xl w-full text-slate-900 flex flex-wrap lg:flex-nowrap items-center justify-between gap-3"
            >
              {/* Field 1: Location */}
              <div className="flex items-center gap-3 flex-1 min-w-[180px]">
                <MapPin className="h-4.5 w-4.5 text-[#00a896] shrink-0" />
                <div className="flex-1">
                  <label className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block leading-tight">
                    Location
                  </label>
                  <Input
                    type="text"
                    placeholder="Where do you want to live?"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="border-0 p-0 h-5 text-xs text-slate-500 placeholder:text-slate-400 focus-visible:ring-0 bg-transparent font-normal"
                  />
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-slate-200 hidden lg:block shrink-0" />

              {/* Field 2: Property Type */}
              <div className="flex items-center gap-3 flex-1 min-w-[170px]">
                <HomeIcon className="h-4.5 w-4.5 text-[#00a896] shrink-0" />
                <div className="flex-1">
                  <label className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block leading-tight">
                    Property Type
                  </label>
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full bg-transparent text-xs text-slate-500 border-0 focus:outline-none cursor-pointer p-0 h-5 font-normal"
                  >
                    <option value="All Types">Apartment, Villa, Plot...</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Plot">Plot</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="House">House</option>
                  </select>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-slate-200 hidden lg:block shrink-0" />

              {/* Field 3: Budget */}
              <div className="flex items-center gap-3 flex-1 min-w-[140px]">
                <Briefcase className="h-4.5 w-4.5 text-[#00a896] shrink-0" />
                <div className="flex-1">
                  <label className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block leading-tight">
                    Budget
                  </label>
                  <select
                    value={searchBudget}
                    onChange={(e) => setSearchBudget(e.target.value)}
                    className="w-full bg-transparent text-xs text-slate-500 border-0 focus:outline-none cursor-pointer p-0 h-5 font-normal"
                  >
                    <option value="Any Budget">Budget</option>
                    <option value="under-1cr">Under ₹1 Crore</option>
                    <option value="1cr-2cr">₹1 Cr – ₹2 Cr</option>
                    <option value="above-2cr">Above ₹2 Cr</option>
                    <option value="rent">For Rent (&lt; ₹50k)</option>
                  </select>
                </div>
              </div>

              {/* Search Submit Button (Deep Teal Pill) */}
              <Button
                type="submit"
                size="lg"
                className="bg-[#00a896] hover:bg-teal-600 text-white font-semibold text-sm rounded-full px-7 h-12 shadow-md flex items-center justify-center gap-2 shrink-0 border-0 cursor-pointer"
              >
                <Search className="h-4 w-4" /> Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 02: TOP PICKS / PROPERTY DISCOVERY (White)
          EXACT REPRODUCTION OF REFERENCE BAR & CARDS
      ================================================== */}
      <section className="w-full py-10 md:py-14 bg-white text-slate-900 border-b">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 space-y-6">
          
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight text-left">
            Top Picks
          </h2>

          {/* Filter Bar Controls (Rounded Pill Chips) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            
            {/* Left Filters */}
            <div className="flex flex-wrap items-center gap-2.5">
              
              {/* Location Pill */}
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
                >
                  <option value="Chennai">Chennai</option>
                  <option value="OMR">OMR</option>
                  <option value="Velachery">Velachery</option>
                  <option value="Sholinganallur">Sholinganallur</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Whitefield">Whitefield</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="All">All Locations</option>
                </select>
                <MapPin className="h-3.5 w-3.5 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Property Type Filter Pill */}
              <div className="relative">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
                >
                  <option value="All">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="House">House</option>
                </select>
                <HomeIcon className="h-3.5 w-3.5 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Budget Filter Pill */}
              <div className="relative">
                <select
                  value={searchBudget}
                  onChange={(e) => setSearchBudget(e.target.value)}
                  className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
                >
                  <option value="Any Budget">Budget</option>
                  <option value="under-1cr">Under ₹1 Cr</option>
                  <option value="1cr-2cr">₹1 Cr – ₹2 Cr</option>
                  <option value="above-2cr">Above ₹2 Cr</option>
                </select>
                <Briefcase className="h-3.5 w-3.5 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Bedrooms Filter Pill */}
              <div className="relative">
                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value === "All" ? "All" : Number(e.target.value))}
                  className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
                >
                  <option value="All">Bedrooms</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
                <Bed className="h-3.5 w-3.5 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Status Filter Pill */}
              <div className="relative">
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
                >
                  <option value="All">Status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
                <Badge className="bg-transparent text-slate-600 p-0 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-slate-600" />
                </Badge>
                <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* More Filters Button */}
              <button
                onClick={() => setSelectedCity("All")}
                className="bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-full border border-slate-200/60 transition-colors flex items-center gap-1.5"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-slate-600" /> More Filters
              </button>
            </div>

            {/* Right Sort By Dropdown */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-slate-100 hover:bg-slate-200/80 text-slate-900 text-xs font-semibold pl-9 pr-7 py-2.5 rounded-full border border-slate-200/60 focus:outline-none cursor-pointer"
              >
                <option value="recommended">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ArrowUpDown className="h-3.5 w-3.5 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <ChevronDown className="h-3.5 w-3.5 text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* PROPERTY CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-3">
            {filteredProperties.map((p) => {
              const isFav = favorites.includes(p.id)
              return (
                <div
                  key={p.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(p.id, e)}
                        aria-label="Add to Favorites"
                        className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
                      >
                        <Heart className={`h-4 w-4 ${isFav ? "fill-rose-500 text-rose-500" : "text-white"}`} />
                      </button>

                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <Badge className="bg-slate-950/80 text-white text-[10px] font-semibold backdrop-blur-md">
                          {p.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Property Meta Details */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="h-3.5 w-3.5 text-[#00a896] shrink-0" />
                        <span className="truncate">{p.location}</span>
                      </div>

                      <h3 className="font-bold text-slate-950 text-sm leading-snug group-hover:text-[#00a896] transition-colors line-clamp-1">
                        {p.title}
                      </h3>

                      {/* Specs Row */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                        {p.beds > 0 && (
                          <div className="flex items-center gap-1">
                            <Bed className="h-3.5 w-3.5 text-slate-400" />
                            <span>{p.beds} Beds</span>
                          </div>
                        )}
                        {p.baths > 0 && (
                          <div className="flex items-center gap-1">
                            <Bath className="h-3.5 w-3.5 text-slate-400" />
                            <span>{p.baths} Baths</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Maximize2 className="h-3.5 w-3.5 text-slate-400" />
                          <span>{p.sqft.toLocaleString()} sq.ft</span>
                        </div>
                      </div>

                      {/* Price Row */}
                      <div className="pt-2">
                        <div className="text-lg font-extrabold text-slate-950 leading-tight">
                          {p.status === "For Rent"
                            ? `₹${p.price.toLocaleString()} / mo`
                            : p.price >= 10000000
                            ? `₹${(p.price / 10000000).toFixed(2)} Cr`
                            : `₹${(p.price / 100000).toFixed(2)} Lakhs`}
                        </div>
                        {p.pricePerSqFt && (
                          <div className="text-[11px] font-semibold text-[#00a896]">
                            ₹{p.pricePerSqFt.toLocaleString()} / sq.ft
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-4 pb-4 pt-1">
                    <Button
                      variant="outline"
                      className="w-full border-slate-200 text-slate-900 hover:bg-[#00a896] hover:text-white hover:border-[#00a896] font-semibold text-xs h-9 rounded-xl transition-colors flex items-center justify-center gap-1"
                      asChild
                    >
                      <Link href={`/properties/${p.id}`}>
                        View Property <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <AppFooter />
    </div>
  )
}
