import { motion } from 'framer-motion'
import { Search, Target, Code, FileCheck, Shield, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery & Reconnaissance',
    description: 'Comprehensive asset mapping and threat surface analysis',
    duration: '1-2 days',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Threat Modeling',
    description: 'Risk assessment and attack vector identification',
    duration: '2-3 days',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Code,
    title: 'Active Testing',
    description: 'Manual and automated security testing execution',
    duration: '5-7 days',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FileCheck,
    title: 'Analysis & Validation',
    description: 'Vulnerability verification and impact assessment',
    duration: '2-3 days',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Reporting',
    description: 'Detailed findings with remediation guidance',
    duration: '2-3 days',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Rocket,
    title: 'Remediation Support',
    description: 'Ongoing support and re-testing services',
    duration: 'Continuous',
    color: 'from-teal-500 to-cyan-500'
  }
]

const ProcessTimeline = () => {
  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Structured Security Assessment
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A proven methodology that ensures comprehensive coverage and actionable results
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                          <step.icon className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-blue-600 font-semibold">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-slate-900`}
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline

