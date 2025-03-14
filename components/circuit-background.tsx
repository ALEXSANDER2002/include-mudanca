"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Circuit node class
    class Node {
      x: number
      y: number
      size: number
      connections: Node[]
      color: string
      pulse: boolean
      pulseStrength: number
      pulseDirection: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 2 + 1
        this.connections = []
        this.color = "#0077FF"
        this.pulse = Math.random() > 0.7
        this.pulseStrength = 0
        this.pulseDirection = 1
      }

      update() {
        if (this.pulse) {
          this.pulseStrength += 0.02 * this.pulseDirection
          if (this.pulseStrength >= 1) this.pulseDirection = -1
          if (this.pulseStrength <= 0) {
            this.pulseDirection = 1
            this.pulse = Math.random() > 0.9 // Randomly pulse again
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.pulse ? 0.3 + this.pulseStrength * 0.7 : 0.3
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create circuit grid
    const gridSize = 50
    const nodes: Node[] = []
    const rows = Math.ceil(canvas.height / gridSize)
    const cols = Math.ceil(canvas.width / gridSize)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Add some randomness to grid positions
        const offsetX = (Math.random() - 0.5) * 20
        const offsetY = (Math.random() - 0.5) * 20

        // Skip some nodes for a more natural look
        if (Math.random() > 0.8) continue

        nodes.push(new Node(x * gridSize + offsetX, y * gridSize + offsetY))
      }
    }

    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue

        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Connect to nearby nodes
        if (distance < gridSize * 1.5) {
          nodes[i].connections.push(nodes[j])
        }
      }
    }

    // Draw circuit
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (const node of nodes) {
        for (const connection of node.connections) {
          ctx.beginPath()
          ctx.strokeStyle = "#0077FF"
          ctx.globalAlpha = node.pulse ? 0.1 + node.pulseStrength * 0.2 : 0.1
          ctx.lineWidth = 0.5
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connection.x, connection.y)
          ctx.stroke()
          ctx.globalAlpha = 1
        }
      }

      // Draw nodes
      for (const node of nodes) {
        node.update()
        node.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}

