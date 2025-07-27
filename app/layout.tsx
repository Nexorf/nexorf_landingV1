import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Nexorf | Ingeniería de Software Personalizada - Quito, Ecuador",
  description:
    "Nexorf es una empresa ecuatoriana especializada en desarrollo de software a medida. Creamos ERP, POS, apps móviles, sitios web y e-commerce con tecnología de vanguardia.",
  keywords:
    "desarrollo software, ERP Ecuador, POS Ecuador, apps móviles, sitios web, e-commerce, Quito, software personalizado",
  authors: [{ name: "Nexorf" }],
  creator: "Nexorf",
  publisher: "Nexorf",
  robots: "index, follow",
  openGraph: {
    title: "Nexorf | Ingeniería de Software Personalizada",
    description: "Tecnología con propósito, diseño con visión, soluciones con resultados.",
    url: "https://nexorf.com",
    siteName: "Nexorf",
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexorf | Ingeniería de Software Personalizada",
    description: "Tecnología con propósito, diseño con visión, soluciones con resultados.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={lato.variable}>
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  )
}
