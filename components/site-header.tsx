"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GlowingButton } from "@/components/glowing-button"

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Início",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "Sobre Nós",
      active: pathname === "/about",
    },
   
    {
      href: "/contact",
      label: "Contato",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-blue-500/20 bg-background/95 backdrop-blur-lg">
      <div className="container flex h-14 md:h-16 items-center px-4">
        <div className="flex gap-4 md:gap-6 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
            <span className="inline-block font-bold text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              #INCLUDE &lt;MUDANÇA&gt;
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route, i) => (
              <Link
                key={route.href}
                href={route.href}
                className={`relative text-sm font-medium transition-colors hover:text-blue-500 ${
                  route.active ? "text-blue-500" : "text-muted-foreground"
                }`}
              >
                {route.label}
                {route.active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-blue-500"
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <div className="hidden md:flex">
            <GlowingButton size="sm">Participe</GlowingButton>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Alternar Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-blue-500/20 bg-background/95 backdrop-blur-lg w-[80vw] max-w-[300px]"
            >
              <div className="px-7">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-blue-500" />
                  <span className="inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                    #INCLUDE &lt;MUDANÇA&gt;
                  </span>
                </Link>
              </div>
              <nav className="mt-6 flex flex-col gap-3 px-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-base font-medium transition-colors hover:text-blue-500 ${
                      route.active ? "text-blue-500" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <GlowingButton className="mt-4" size="sm">
                  Participe
                </GlowingButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

