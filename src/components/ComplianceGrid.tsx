import { motion } from 'framer-motion'
import { Shield, CheckCircle2 } from 'lucide-react'

const compliances = [
  {
    name: 'CERT-In',
    description: 'Indian Computer Emergency Response Team aligned',
    logo: '🇮🇳'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    logo: '🔒'
  },
  {
    name: 'PCI-DSS',
    description: 'Payment Card Industry Data Security',
    logo: '💳'
  },
  {
    name: 'HIPAA',
    description: 'Healthcare Information Privacy',
    logo: '🏥'
  },
  {
    name: 'SOC 2',
    description: 'Service Organization Control',
    logo: '✓'
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    logo: '🇪🇺'
  },
  {
    name: 'RBI Guidelines',
    description: 'Reserve Bank of India Compliance',
    logo: '🏦'
  },
  {
    name: 'IRDAI',
    description: 'Insurance Regulatory Authority',
    logo: '🛡️'
  }
]

const ComplianceGrid = () => {
  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Compliance & Certifications</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Regulatory Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Certified and compliant with global and Indian regulatory standards
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {compliances.map((compliance, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 h-full hover:border-blue-500/50 transition-all text-center">
                {/* Logo */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {compliance.logo}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {compliance.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3">
                  {compliance.description}
                </p>

                {/* Check mark */}
                <div className="flex items-center justify-center gap-1 text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-semibold">Certified</span>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-gray-900 font-semibold">50+ Industry Certifications</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComplianceGrid

