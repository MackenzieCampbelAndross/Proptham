"use client"

import type React from "react"
import Image from "next/image"
import { Bath, Bed, Check, Heart, MapPin, Share2, Square } from "lucide-react"

import PageShell from "@/components/page-shell"
import PropertyCard from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { properties } from "@/data/properties"
import { useI18n } from "@/lib/i18n"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const { t } = useI18n()
  const property = properties.find((p) => p.id === params.id) || properties[0]
  const relatedProperties = properties.filter((p) => p.id !== property.id).slice(0, 3)
  const localized = t.propertiesData[property.id as keyof typeof t.propertiesData]
  const title = localized?.title ?? property.title
  const location = localized?.location ?? property.location
  const type = localized?.type ?? property.type
  const description = localized?.description ?? property.description
  const features = [
    t.detail.airConditioning,
    t.detail.heating,
    t.detail.parking,
    t.detail.dishwasher,
    t.detail.washerDryer,
    t.detail.hardwoodFloors,
  ]

  return (
    <PageShell>
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={property.image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">{t.detail.addToFavorites}</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">{t.detail.share}</span>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 border rounded-lg p-4">
                <Spec icon={<Bed className="h-5 w-5 text-muted-foreground mb-2" />} label={`${property.beds} ${t.property.beds}`} />
                <Spec icon={<Bath className="h-5 w-5 text-muted-foreground mb-2" />} label={`${property.baths} ${t.property.baths}`} />
                <Spec icon={<Square className="h-5 w-5 text-muted-foreground mb-2" />} label={`${property.sqft} ${t.property.sqft}`} />
              </div>
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">{t.detail.description}</TabsTrigger>
                  <TabsTrigger value="features">{t.detail.features}</TabsTrigger>
                  <TabsTrigger value="location">{t.detail.location}</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="p-4 border rounded-lg mt-2">
                  <p>{description}</p>
                </TabsContent>
                <TabsContent value="features" className="p-4 border rounded-lg mt-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="location" className="p-4 border rounded-lg mt-2">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">{t.detail.mapPlaceholder}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <aside className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    {property.status === "For Rent"
                      ? `₹${property.price.toLocaleString("en-IN")} / mo`
                      : property.price >= 10000000
                      ? `₹${(property.price / 10000000).toFixed(2)} Cr`
                      : `₹${(property.price / 100000).toFixed(2)} Lakhs`}
                  </h2>
                  <span className="text-sm text-muted-foreground">{type}</span>
                </div>
                <div className="mt-6 space-y-4">
                  <Button className="w-full">{t.detail.scheduleTour}</Button>
                  <Button variant="outline" className="w-full">{t.detail.contactAgent}</Button>
                </div>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">{t.detail.contactAgent}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                    <Image
                      src="https://x069my5u3k.ufs.sh/f/2FLtVr6zCdoRbTs7k1KmRXDavhSOKYAZI5iGU6lktweLHu0g"
                      alt={t.detail.agentName}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{t.detail.agentName}</p>
                    <p className="text-sm text-muted-foreground">{t.detail.agentTitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <LabeledInput id="name" label={t.detail.name} placeholder={t.detail.yourName} />
                  <LabeledInput id="email" label={t.pages.email} placeholder={t.detail.yourEmail} type="email" />
                  <LabeledInput id="phone" label={t.pages.phone} placeholder={t.detail.yourPhone} type="tel" />
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium" htmlFor="message">{t.detail.message}</label>
                    <textarea
                      id="message"
                      className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder={t.detail.interested}
                    />
                  </div>
                  <Button className="w-full">{t.detail.sendMessage}</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">{t.detail.similar}</h2>
          <div className="grid responsive-card-grid gap-6">
            {relatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg text-center">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  )
}

function LabeledInput({ id, label, placeholder, type = "text" }: { id: string; label: string; placeholder: string; type?: string }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  )
}
