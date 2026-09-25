"use client"

import type React from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import PageShell from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useI18n } from "@/lib/i18n"

export default function ContactPage() {
  const { t } = useI18n()

  return (
    <PageShell>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.pages.contactTitle}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{t.pages.contactSubtitle}</p>
              </div>
              <div className="space-y-4">
                <ContactItem icon={<MapPin className="h-6 w-6 text-primary" />} title={t.pages.office}>
                  123 Real Estate Blvd, Suite 100<br />Los Angeles, CA 90001
                </ContactItem>
                <ContactItem icon={<Phone className="h-6 w-6 text-primary" />} title={t.pages.phone}>
                  (555) 123-4567
                </ContactItem>
                <ContactItem icon={<Mail className="h-6 w-6 text-primary" />} title={t.pages.email}>
                  info@proptham.com
                </ContactItem>
              </div>
              <div className="aspect-video overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">{t.pages.mapPlaceholder}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{t.pages.sendMessage}</h2>
                <p className="text-muted-foreground">{t.pages.sendMessageText}</p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <LabeledInput id="first-name" label={t.pages.firstName} placeholder="John" />
                  <LabeledInput id="last-name" label={t.pages.lastName} placeholder="Doe" />
                </div>
                <LabeledInput id="email" label={t.pages.email} placeholder="john.doe@example.com" type="email" />
                <LabeledInput id="phone" label={t.pages.phone} placeholder="(555) 123-4567" type="tel" />
                <LabeledInput id="subject" label={t.pages.subject} placeholder="Property Inquiry" />
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" htmlFor="message">{t.pages.message}</label>
                  <textarea
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    id="message"
                    placeholder={t.pages.messagePlaceholder}
                  />
                </div>
                <Button className="w-full">{t.detail.sendMessage}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}

function LabeledInput({ id, label, placeholder, type = "text" }: { id: string; label: string; placeholder: string; type?: string }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none" htmlFor={id}>{label}</label>
      <Input id={id} placeholder={placeholder} type={type} />
    </div>
  )
}
