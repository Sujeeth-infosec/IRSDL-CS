import { motion } from 'framer-motion'
import { Shield, Search, FileCheck, TrendingUp, CheckCircle, Cloud } from 'lucide-react'

const SecurityAssessments = () => {
  return (
    <section className="relative w-full py-24 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Security Assessments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security evaluation services to identify vulnerabilities and strengthen your defenses
            </p>
          </motion.div>

          {/* Vulnerability Management Services */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                    alt="Vulnerability Management"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Shield className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold">Vulnerability Management</h3>
                    </div>
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Vulnerability Management Services
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Vulnerability Management Services offer:
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: Search,
                        title: 'Continuous Scanning & Detection',
                        description: 'Proactively identify vulnerabilities across your infrastructure before attackers do.'
                      },
                      {
                        icon: TrendingUp,
                        title: 'Risk-Based Prioritization',
                        description: 'Focus your remediation efforts on the vulnerabilities that pose the highest risk.'
                      },
                      {
                        icon: FileCheck,
                        title: 'Remediation Guidance',
                        description: 'Accelerate response with expert-driven patching and mitigation strategies.'
                      },
                      {
                        icon: CheckCircle,
                        title: 'Compliance & Reporting',
                        description: 'Easily meet regulatory requirements with comprehensive, audit-ready reports and actionable insights.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* M365 Security Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-200"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-6 shadow-md">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Microsoft 365 Security</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  M365 Security Assessment
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Microsoft 365 is a vital productivity suite for modern businesses—but without the 
                  right security configurations, it can also be a gateway for cyber threats. Our M365 
                  Security Assessment is designed to uncover vulnerabilities, misconfigurations, and 
                  gaps that could expose your data.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  What you'll gain from our assessment:
                </h4>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Comprehensive Security Analysis',
                      description: 'Evaluate M365 settings, user permissions, and security policies to identify weak points.'
                    },
                    {
                      title: 'Industry-Aligned Recommendations',
                      description: 'Get tailored guidance based on best practices and compliance standards.'
                    },
                    {
                      title: 'Actionable Remediation Plan',
                      description: 'Receive a clear, step-by-step roadmap to enhance your M365 security posture and reduce risk.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-gray-900">{item.title}</h5>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
                    alt="M365 Security"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SecurityAssessments
