import { motion } from 'framer-motion'
import { Check, X, Zap, Shield, Clock, Award, Users, Globe } from 'lucide-react'

const features = [
  { name: 'VAPT Services', us: true, others: 'Limited' },
  { name: 'CERT-In Aligned', us: true, others: false },
  { name: 'Bilingual Support', us: true, others: false },
  { name: 'Indian Data Centers', us: true, others: 'Partial' },
  { name: 'Response Time < 15 min', us: true, others: false },
  { name: 'Dedicated Security Analyst', us: true, others: 'Enterprise Only' },
  { name: 'Custom Compliance Reports', us: true, others: 'Extra Cost' },
  { name: 'On-site Support Available', us: true, others: false },
  { name: 'AI-Powered Threat Detection', us: true, others: 'Limited' },
  { name: 'Continuous Vulnerability Scanning', us: true, others: 'Scheduled' }
]

const advantages = [
  {
    icon: Zap,
    title: 'Fastest Response',
    description: '12-minute average response time vs industry standard 2+ hours',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'India-First Security',
    description: 'Built for Indian compliance with local data residency',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Rapid Response',
    description: 'Quick turnaround with dedicated security experts',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: '50+ industry certifications and compliance frameworks',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Personal security analyst assigned to every account',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'International best practices with local expertise',
    color: 'from-teal-500 to-cyan-500'
  }
]

const CompetitiveAdvantage = () => {
  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            The IRSDL Advantage
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we compare to other cybersecurity providers
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${advantage.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <advantage.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
                
                {/* Decorative gradient */}
                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${advantage.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200/50">
              <div className="text-gray-600 font-semibold">Feature</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Shield className="w-4 h-4 text-gray-900" />
                  <span className="font-bold text-gray-900">IRSDL</span>
                </div>
              </div>
              <div className="text-center text-gray-600 font-semibold">Others</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-700/50">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50/30 transition-colors"
                >
                  <div className="text-gray-900 font-medium">{feature.name}</div>
                  <div className="flex justify-center">
                    {feature.us === true ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20">
                        <Check className="w-5 h-5 text-green-400" />
                      </div>
                    ) : (
                      <span className="text-gray-600 text-sm">{feature.us}</span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {feature.others === false ? (
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20">
                        <X className="w-5 h-5 text-red-400" />
                      </div>
                    ) : (
                      <span className="text-gray-600 text-sm">{feature.others}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Join 500+ enterprises who trust IRSDL for their cybersecurity needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all hover:scale-105"
            >
              Schedule a Demo
            </a>
            <a
              href="/services"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 border border-white/20 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              View All Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitiveAdvantage

