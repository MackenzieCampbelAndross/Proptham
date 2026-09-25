"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"

interface Property {
  id: string
  title: string
  location: string
  price: number
  image: string
  beds: number
  baths: number
  sqft: number
  type: string
  status: "For Sale" | "For Rent"
}

export default function PropertyCard({ property }: { property: Property }) {
  const { t } = useI18n()
  const status = property.status === "For Sale" ? t.property.forSale : t.property.forRent
  const localizedProperty = t.propertiesData[property.id as keyof typeof t.propertiesData]
  const title = localizedProperty?.title ?? property.title
  const location = localizedProperty?.location ?? property.location
  const type = localizedProperty?.type ?? property.type

  const formattedPrice = property.price >= 10000000
    ? `₹${(property.price / 10000000).toFixed(2)} Cr`
    : property.price >= 100000
    ? `₹${(property.price / 100000).toFixed(2)} Lakhs`
    : `₹${property.price.toLocaleString("en-IN")}`

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute end-2 top-2 bg-slate-950/80 backdrop-blur-md text-white border-0">{status}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-slate-900 truncate">{title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="text-xs text-slate-500 truncate">{location}</span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-lg font-bold text-teal-700">{formattedPrice}</span>
            <span className="text-xs font-medium text-slate-500">{type}</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-slate-600 border-t pt-3">
            <div className="flex min-w-0 items-center gap-1">
              <Bed className="h-3.5 w-3.5 text-slate-400" />
              <span className="truncate">{property.beds} {t.property.beds}</span>
            </div>
            <div className="flex min-w-0 items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-slate-400" />
              <span className="truncate">{property.baths} {t.property.baths}</span>
            </div>
            <div className="flex min-w-0 items-center gap-1">
              <Square className="h-3.5 w-3.5 text-slate-400" />
              <span className="truncate">{property.sqft} {t.property.sqft}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
