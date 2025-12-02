import { motion } from 'framer-motion'
import { FileCheck, Shield, Award, CheckCircle, Building, Landmark } from 'lucide-react'

const ComplianceServices = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6">
              <Award className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-900">Regulatory Compliance</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Compliance Services
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Navigate complex regulatory requirements with confidence. Our compliance services ensure 
              your organization meets industry standards and regulatory mandates while maintaining robust security.
            </p>
          </motion.div>

          {/* Compliance Frameworks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Shield,
                title: 'ISO 27001',
                description: 'Information Security Management System certification and implementation',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: FileCheck,
                title: 'SOC 2',
                description: 'Service Organization Control compliance for trust service criteria',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Award,
                title: 'PCI DSS',
                description: 'Payment Card Industry Data Security Standard compliance',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Building,
                title: 'GDPR',
                description: 'General Data Protection Regulation compliance for data privacy',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: Landmark,
                title: 'HIPAA',
                description: 'Healthcare data protection and privacy compliance',
                color: 'from-red-500 to-orange-500'
              },
              {
                icon: Shield,
                title: 'CERT-In',
                description: 'Indian Computer Emergency Response Team guidelines compliance',
                color: 'from-orange-500 to-amber-500'
              }
            ].map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-500/50 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${framework.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <framework.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{framework.title}</h3>
                <p className="text-gray-600">{framework.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Indian Regulatory Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Indian Regulatory Compliance
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specialized compliance services for Indian organizations navigating local regulatory requirements:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'RBI Guidelines',
                      description: 'Reserve Bank of India cybersecurity framework for financial institutions'
                    },
                    {
                      title: 'SEBI Framework',
                      description: 'Securities and Exchange Board of India compliance for market participants'
                    },
                    {
                      title: 'IRDAI Standards',
                      description: 'Insurance Regulatory and Development Authority cybersecurity requirements'
                    },
                    {
                      title: 'MeitY Guidelines',
                      description: 'Ministry of Electronics and IT security standards and best practices'
                    },
                    {
                      title: 'Data Localization',
                      description: 'Compliance with Indian data residency and localization requirements'
                    },
                    {
                      title: 'IT Act 2000',
                      description: 'Information Technology Act compliance and legal requirements'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                  alt="Compliance Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <Award className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">Audit-Ready Reports</h4>
                    <p className="text-white/90">Comprehensive documentation for regulatory audits</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceServices
