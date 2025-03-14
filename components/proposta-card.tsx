"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

interface PropostaCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function PropostaCard({ icon, title, description, delay = 0 }: PropostaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group relative overflow-hidden border-blue-500/20 bg-blue-500/5 transition-colors hover:bg-blue-500/10 h-full">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <CardHeader className="relative z-10 px-4 py-4 md:px-6 md:py-6">
          <div className="mb-2 rounded-full bg-blue-500/10 p-2 w-fit">
            {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6 md:h-8 md:w-8 text-blue-500" })}
          </div>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 px-4 pb-4 md:px-6 md:pb-6">
          <p className="text-sm md:text-base text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

