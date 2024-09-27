'use client'

import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  speedX: number
  speedY: number
  draw: (ctx: CanvasRenderingContext2D) => void
  update: (canvas: HTMLCanvasElement) => void
}

interface SVGShape {
  x: number
  y: number
  size: number
  color: string
  shape: string
  rotation: number
  speedY: number
  draw: (ctx: CanvasRenderingContext2D) => void
  update: (canvas: HTMLCanvasElement) => void
}

const EnhancedAuraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const particles: Particle[] = []
    const svgShapes: SVGShape[] = []
    const particleCount = 100
    const svgCount = 20
    const colors = ['#FF0080', '#7928CA', '#FF0080', '#0070F3', '#00DFD8']

    class ParticleClass implements Particle {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 2 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update(canvas: HTMLCanvasElement) {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX = -this.speedX
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY = -this.speedY
        }
        this.x += this.speedX
        this.y += this.speedY
      }
    }

    class SVGShapeClass implements SVGShape {
      x: number
      y: number
      size: number
      color: string
      shape: string
      rotation: number
      speedY: number

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width
        this.y = -50 // Start above the canvas
        this.size = Math.random() * 30 + 10
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.shape = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
        this.rotation = Math.random() * 360
        this.speedY = Math.random() * 2 + 0.5
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        ctx.fillStyle = this.color

        switch (this.shape) {
          case 'circle':
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.fill()
            break
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break
          case 'triangle':
            ctx.beginPath()
            ctx.moveTo(0, -this.size / 2)
            ctx.lineTo(-this.size / 2, this.size / 2)
            ctx.lineTo(this.size / 2, this.size / 2)
            ctx.closePath()
            ctx.fill()
            break
        }

        ctx.restore()
      }

      update(canvas: HTMLCanvasElement) {
        this.y += this.speedY
        this.rotation += 1
        if (this.y > canvas.height + 50) {
          this.y = -50
          this.x = Math.random() * canvas.width
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleClass(canvas))
    }

    for (let i = 0; i < svgCount; i++) {
      svgShapes.push(new SVGShapeClass(canvas))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.update(canvas)
        particle.draw(ctx)
      })
      svgShapes.forEach((shape) => {
        shape.update(canvas)
        shape.draw(ctx)
      })
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

export default EnhancedAuraBackground