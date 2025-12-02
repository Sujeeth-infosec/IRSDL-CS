import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import {
  Shield,
  Target,
  Headset,
  Radar,
  CloudCog,
  ServerCog,
  ShieldCheck,
  Fingerprint,
  Bug,
  Landmark,
  ArrowRight,
  CheckCircle,
  Zap,
  Lock,
  Eye,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SimpleBackground from '../components/SimpleBackground'

const iconMap: Record<string, LucideIcon> = {
  vapt: Shield,
  'red-team': Target,
  soc: Headset,
  'threat-intelligence': Radar,
  'cloud-security': CloudCog,
  devsecops: ServerCog,
  'incident-response': ShieldCheck,
  'digital-forensics': Fingerprint,
  'malware-analysis': Bug,
  'security-consulting': Landmark,
}

const colorMap: Record<string, string> = {
  vapt: 'from-blue-500 to-cyan-500',
  'red-team': 'from-red-500 to-orange-500',
  soc: 'from-purple-500 to-pink-500',
  'threat-intelligence': 'from-indigo-500 to-blue-500',
  'cloud-security': 'from-cyan-500 to-blue-500',
  devsecops: 'from-green-500 to-emerald-500',
  'incident-response': 'from-orange-500 to-red-500',
  'digital-forensics': 'from-violet-500 to-purple-500',
  'malware-analysis': 'from-pink-500 to-rose-500',
  'security-consulting': 'from-amber-500 to-orange-500',
}

const Services = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <SimpleBackground />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-3 mb-8">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Comprehensive Security Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Cybersecurity Without
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Compromises
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Whether you need deep offensive testing, cloud guardrails, or 24/7 detection and response, 
                we deploy the exact team and tooling stack you need.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Shield, value: '10+', label: 'Services' },
                  { icon: Zap, value: '500+', label: 'Projects' },
                  { icon: Lock, value: '99%', label: 'Success Rate' },
                  { icon: Eye, value: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative w-full pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.slug] || Shield
                const gradient = colorMap[service.slug] || 'from-blue-500 to-cyan-500'
                
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/services/${service.slug}`}
                      className="group block h-full"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 rounded-2xl p-8 h-full transition-all hover:bg-white/10 hover:scale-105">
                        {/* Icon */}
                        <div className="flex items-start justify-between mb-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                          {service.tagline}
                        </p>

                        {/* Key Benefits */}
                        <div className="space-y-2 pt-4 border-t border-white/10">
                          {service.benefits.slice(0, 2).map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-400 text-xs leading-relaxed">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tools Badge */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {service.tools.slice(0, 3).map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                            >
                              {tool}
                            </span>
                          ))}
                          {service.tools.length > 3 && (
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                              +{service.tools.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Need a Custom Security Solution?
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Our experts can design a tailored security program that fits your unique requirements. 
                Let's discuss your security challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919493782350"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Call: +91 94937 82350
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

