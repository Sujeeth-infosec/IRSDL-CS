import { motion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import CyberBackground from './CyberBackground'

type HeroSectionProps = {
  eyebrow?: string
  title: ReactNode
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const HeroSection = ({ eyebrow, title, description, primaryCta, secondaryCta }: HeroSectionProps) => {
  return (
    <section className="hero-gradient rounded-3xl px-6 py-16 lg:px-16 lg:py-24 shadow-panel relative overflow-hidden">
      <CyberBackground />
      <div className="absolute inset-0 opacity-30 cyber-grid" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          {eyebrow && <p className="text-sm font-semibold text-accent uppercase tracking-widest">{eyebrow}</p>}
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white mt-4 leading-tight">{title}</h1>
          <p className="text-lg text-slate-200 mt-6 max-w-2xl">{description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-accent/30"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-2 border border-white/20 text-slate-100 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
        <motion.div
          className="glass-panel rounded-2xl p-8 space-y-6 text-white/90"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <Shield className="h-12 w-12 text-primary" />
            <div>
              <p className="font-semibold text-neon">Unified Cyber Defense</p>
              <p className="text-sm text-slate-300">
                Securing cloud, code, and critical operations with always-on intelligence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Breaches stopped', value: '1,200+' },
              { label: 'Assets monitored', value: '4.5M' },
              { label: 'Threat intel feeds', value: '65+' },
              { label: 'Avg. response', value: '< 15 min' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-4 bg-midnight/70 border border-white/5">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="text-xs text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

