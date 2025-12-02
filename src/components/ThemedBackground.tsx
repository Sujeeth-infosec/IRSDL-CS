import { useEffect, useRef } from 'react'

interface ThemedBackgroundProps {
  theme?: 'blue' | 'red' | 'green' | 'purple' | 'orange' | 'cyan' | 'indigo'
}

const themeColors = {
  blue: {
    primary: 'rgba(59, 130, 246, 0.5)',
    secondary: 'rgba(6, 182, 212, 0.5)',
    tertiary: 'rgba(139, 92, 246, 0.5)',
    gradient: 'from-blue-600/40 via-cyan-500/40',
    orb1: 'bg-blue-500/40',
    orb2: 'bg-cyan-500/40',
    orb3: 'bg-purple-500/40',
    wave: '#3b82f6'
  },
  red: {
    primary: 'rgba(239, 68, 68, 0.5)',
    secondary: 'rgba(251, 146, 60, 0.5)',
    tertiary: 'rgba(236, 72, 153, 0.5)',
    gradient: 'from-red-600/40 via-orange-500/40',
    orb1: 'bg-red-500/40',
    orb2: 'bg-orange-500/40',
    orb3: 'bg-pink-500/40',
    wave: '#ef4444'
  },
  green: {
    primary: 'rgba(34, 197, 94, 0.5)',
    secondary: 'rgba(16, 185, 129, 0.5)',
    tertiary: 'rgba(20, 184, 166, 0.5)',
    gradient: 'from-green-600/40 via-emerald-500/40',
    orb1: 'bg-green-500/40',
    orb2: 'bg-emerald-500/40',
    orb3: 'bg-teal-500/40',
    wave: '#22c55e'
  },
  purple: {
    primary: 'rgba(168, 85, 247, 0.5)',
    secondary: 'rgba(217, 70, 239, 0.5)',
    tertiary: 'rgba(192, 132, 252, 0.5)',
    gradient: 'from-purple-600/40 via-pink-500/40',
    orb1: 'bg-purple-500/40',
    orb2: 'bg-pink-500/40',
    orb3: 'bg-fuchsia-500/40',
    wave: '#a855f7'
  },
  orange: {
    primary: 'rgba(249, 115, 22, 0.5)',
    secondary: 'rgba(251, 146, 60, 0.5)',
    tertiary: 'rgba(234, 179, 8, 0.5)',
    gradient: 'from-orange-600/40 via-amber-500/40',
    orb1: 'bg-orange-500/40',
    orb2: 'bg-amber-500/40',
    orb3: 'bg-yellow-500/40',
    wave: '#f97316'
  },
  cyan: {
    primary: 'rgba(6, 182, 212, 0.5)',
    secondary: 'rgba(14, 165, 233, 0.5)',
    tertiary: 'rgba(59, 130, 246, 0.5)',
    gradient: 'from-cyan-600/40 via-blue-500/40',
    orb1: 'bg-cyan-500/40',
    orb2: 'bg-blue-500/40',
    orb3: 'bg-sky-500/40',
    wave: '#06b6d4'
  },
  indigo: {
    primary: 'rgba(99, 102, 241, 0.5)',
    secondary: 'rgba(139, 92, 246, 0.5)',
    tertiary: 'rgba(168, 85, 247, 0.5)',
    gradient: 'from-indigo-600/40 via-purple-500/40',
    orb1: 'bg-indigo-500/40',
    orb2: 'bg-purple-500/40',
    orb3: 'bg-violet-500/40',
    wave: '#6366f1'
  }
}

const ThemedBackground = ({ theme = 'blue' }: ThemedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const colors = themeColors[theme]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        const particleColors = [colors.primary, colors.secondary, colors.tertiary]
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: Particle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle())
    }

    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.strokeStyle = colors.primary.replace('0.5', `${0.2 * (1 - distance / 100)}`)
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        })
      })
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, colors])

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ background: 'transparent' }} />
      
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill={colors.wave} fillOpacity="0.6" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </path>
          </svg>
        </div>

        <div className={`absolute top-20 left-10 w-96 h-96 ${colors.orb1} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '4s' }} />
        <div className={`absolute top-40 right-20 w-[500px] h-[500px] ${colors.orb2} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className={`absolute bottom-40 left-1/3 w-[450px] h-[450px] ${colors.orb3} rounded-full blur-3xl animate-pulse`} style={{ animationDuration: '5s', animationDelay: '2s' }} />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `linear-gradient(${colors.primary.replace('0.5', '0.5')} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary.replace('0.5', '0.5')} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animationDuration: '8s'
          }} />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute w-full h-1 bg-gradient-to-r from-transparent via-${theme}-400 to-transparent opacity-80 animate-scan shadow-lg`} style={{ boxShadow: `0 0 20px ${colors.wave}` }} />
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          50% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </>
  )
}

export default ThemedBackground
