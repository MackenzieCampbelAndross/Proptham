import type React from "react"
import type { Metadata } from "next"
import { Anton } from "next/font/google"
import "./globals.css"
import { Providers } from './providers'

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Proptham - Modern Real Estate Platform",
  description: "Find your destined property with Proptham - Your trusted real estate platform",
  applicationName: "Proptham",
  icons: {
    icon: "/Proptham-Logo.png",
    shortcut: "/Proptham-Logo.png",
    apple: "/Proptham-Logo.png",
  },
  openGraph: {
    title: "Proptham - Modern Real Estate Platform",
    description: "Find your destined property with Proptham",
    siteName: "Proptham",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={anton.variable}>
      <head>
        <link rel="icon" href="/Proptham-Logo.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
