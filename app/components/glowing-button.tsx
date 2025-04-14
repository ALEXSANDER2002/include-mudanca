"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowingButtonProps extends React.ComponentProps<typeof Button> {
  glowColor?: string
}

export function GlowingButton({
  className,
  glowColor = "rgba(59, 130, 246, 0.5)", // blue-500 with 50% opacity
  ...props
}: GlowingButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          opacity: 0,
        }}
      />
      {props.children}
    </Button>
  )
} 