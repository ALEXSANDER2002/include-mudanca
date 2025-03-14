import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
      <body className={`${inter.className} dark min-h-screen overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}