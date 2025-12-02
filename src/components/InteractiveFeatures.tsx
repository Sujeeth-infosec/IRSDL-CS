import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, Zap, Lock, Eye, CheckCircle } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Advanced Threat Detection',
    description: 'AI-powered threat intelligence with real-time monitoring and automated response capabilities.',
    details: [
      'Machine learning-based anomaly detection',
      'Real-time threat intelligence feeds',
      'Automated incident response workflows',
      'Integration with CERT-In alerts'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Rapid Response Team',
    description: '24/7 security operations center with bilingual analysts and sub-15 minute response times.',
    details: [
      'Dual SOCs in Bengaluru and Gurugram',
      'CERT-In certified incident handlers',
      'Average response time: 12 minutes',
      'Dedicated account managers'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    icon: Lock,
    title: 'Compliance Automation',
    description: 'Automated compliance reporting for RBI, IRDAI, SEBI, and other regulatory frameworks.',
    details: [
      'Continuous compliance monitoring',
      'Automated evidence collection',
      'Custom compliance dashboards',
      'Audit-ready documentation'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    icon: Eye,
    title: 'Vulnerability Management',
    description: 'Comprehensive vulnerability scanning and prioritized remediation guidance.',
    details: [
      'Continuous vulnerability scanning',
      'Risk-based prioritization',
      'Remediation tracking',
      'Executive reporting'
    ],
    color: 'from-orange-500 to-red-500'
  }
]

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(1)

  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Enterprise-Grade Security Platform
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Built for Indian enterprises with local compliance and regulatory requirements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feature Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-br from-gray-50/80 to-white/80 border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-50/30 border-gray-200/50 hover:border-slate-600/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} ${
                    activeFeature === feature.id ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeFeature === feature.id ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="lg:sticky lg:top-24">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeFeature === feature.id ? 1 : 0,
                  scale: activeFeature === feature.id ? 1 : 0.9,
                  display: activeFeature === feature.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                      <feature.icon className="w-10 h-10 text-gray-900" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-8">
                      {feature.description}
                    </p>

                    <div className="space-y-4">
                      {feature.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative elements */}
                    <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-10`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveFeatures

