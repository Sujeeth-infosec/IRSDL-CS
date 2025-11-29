import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Shield, Users, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Shield, value: 500, suffix: '+', label: 'Security Assessments', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, value: 150, suffix: '+', label: 'Enterprise Clients', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: 99, suffix: '%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' },
  { icon: Clock, value: 24, suffix: '/7', label: 'SOC Monitoring', color: 'from-orange-500 to-red-500' }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString()
      }
    })
  }, [springValue])

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  )
}

const AnimatedStats = () => {
  return (
    <section className="py-24 w-full relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      <div className="w-full px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 text-center overflow-hidden">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className={`text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-gray-400 font-medium text-lg">
                  {stat.label}
                </p>

                {/* Decorative glow */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${stat.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
