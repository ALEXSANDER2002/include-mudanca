"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="group relative overflow-hidden border-blue-500/20 bg-blue-500/5 transition-colors hover:bg-blue-500/10">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <CardHeader className="relative z-10">
          <div className="mb-2 rounded-full bg-blue-500/10 p-2 w-fit">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

