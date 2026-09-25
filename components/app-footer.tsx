"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { useI18n } from "@/lib/i18n"

export default function AppFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center">
            <span className="font-anton text-xl tracking-wider uppercase text-foreground">PROPTHAM</span>
          </Link>
          <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="space-y-2">
            <h4 className="font-medium">{t.footer.company}</h4>
            <ul className="grid gap-1">
              <li><Link href="/about" className="text-sm hover:underline">{t.nav.about}</Link></li>
              <li><Link href="/careers" className="text-sm hover:underline">{t.footer.careers}</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">{t.nav.contact}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">{t.nav.properties}</h4>
            <ul className="grid gap-1">
              <li><Link href="/properties" className="text-sm hover:underline">{t.footer.allProperties}</Link></li>
              <li><Link href="/properties/for-sale" className="text-sm hover:underline">{t.footer.forSale}</Link></li>
              <li><Link href="/properties/for-rent" className="text-sm hover:underline">{t.footer.forRent}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">{t.footer.legal}</h4>
            <ul className="grid gap-1">
              <li><Link href="/privacy" className="text-sm hover:underline">{t.footer.privacy}</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline">{t.footer.terms}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
