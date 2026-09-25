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

  return (
    <Link href={`/properties/${property.id}`}>
      <div className="group h-full overflow-hidden rounded-lg border hover:shadow-md transition-shadow">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute end-2 top-2">{status}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-bold truncate">{title}</h3>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground truncate">{location}</span>
          </div>
          <div className="mt-3">
            <span className="text-xl font-bold">${property.price.toLocaleString("en-IN")}</span>
            <span className="text-sm text-muted-foreground ms-1">{type}</span>
          </div>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-3 gap-2 mt-4 text-sm">
            <div className="flex min-w-0 items-center gap-1">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{property.beds} {t.property.beds}</span>
            </div>
            <div className="flex min-w-0 items-center gap-1">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{property.baths} {t.property.baths}</span>
            </div>
            <div className="flex min-w-0 items-center gap-1">
              <Square className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{property.sqft} {t.property.sqft}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
