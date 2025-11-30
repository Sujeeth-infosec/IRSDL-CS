import { useEffect, useRef } from 'react'

interface EnhancedHeroBackgroundProps {
  imageUrl: string
  gradientFrom?: string
  gradientTo?: string
}

const EnhancedHeroBackground = ({ 
  imageUrl, 
  gradientFrom = 'purple-500', 
  gradientTo = 'pink-500' 
}: EnhancedHeroBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Background Image - Fixed Full Viewport */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <img
          src={imageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90"></div>
      </div>

      {/* Animated particles canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen', zIndex: 1 }}
      />

      {/* Gradient orbs */}
      <div className={`fixed top-20 left-10 w-96 h-96 bg-${gradientFrom} rounded-full blur-3xl opacity-20 animate-pulse`} style={{ zIndex: 1 }}></div>
      <div className={`fixed bottom-20 right-10 w-96 h-96 bg-${gradientTo} rounded-full blur-3xl opacity-20 animate-pulse`} style={{ animationDelay: '1s', zIndex: 1 }}></div>
      
      {/* Scanning line effect */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-scan"></div>
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: 1
      }}></div>
    </>
  )
}

export default EnhancedHeroBackground
