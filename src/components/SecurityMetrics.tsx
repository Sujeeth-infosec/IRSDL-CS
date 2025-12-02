import { motion } from 'framer-motion'
import { Shield, TrendingUp, Clock, Award, Users, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

const metrics = [
  {
    icon: Shield,
    value: 10000,
    suffix: '+',
    label: 'Vulnerabilities Found',
    color: 'from-blue-500 to-cyan-500',
    description: 'Critical security issues identified and resolved'
  },
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Clients Protected',
    color: 'from-purple-500 to-pink-500',
    description: 'Enterprises trusting our security solutions'
  },
  {
    icon: Clock,
    value: 12,
    suffix: ' min',
    label: 'Avg Response Time',
    color: 'from-green-500 to-emerald-500',
    description: 'Industry-leading incident response'
  },
  {
    icon: TrendingUp,
    value: 99.9,
    suffix: '%',
    label: 'Uptime SLA',
    color: 'from-orange-500 to-red-500',
    description: 'Guaranteed service availability'
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'Certifications',
    color: 'from-indigo-500 to-blue-500',
    description: 'Industry-recognized security certifications'
  },
  {
    icon: Target,
    value: 98,
    suffix: '%',
    label: 'Detection Rate',
    color: 'from-teal-500 to-cyan-500',
    description: 'Advanced threat detection accuracy'
  }
]

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const SecurityMetrics = () => {
  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Security Excellence in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proven track record of protecting Indian enterprises from cyber threats
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-blue-500/50">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${metric.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="w-8 h-8 text-gray-900" />
                </div>

                {/* Value */}
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  <Counter end={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-700 mb-3">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {metric.description}
                </p>

                {/* Decorative elements */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${metric.color} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecurityMetrics

