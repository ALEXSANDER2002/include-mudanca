import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chapa #INCLUDE <MUDANÇA>",
  description: "Transformando a educação através da inovação, inclusão e colaboração.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <style>{`
          /* Esconder o indicador de desenvolvimento do Next.js */
          #__next-build-watcher, 
          .nextjs-build-watcher,
          [data-nextjs-static-indicator] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'