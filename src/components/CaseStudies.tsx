import { motion } from 'framer-motion'
import { useState } from 'react'
import { Shield, TrendingUp, Award, CheckCircle, ArrowRight, Building2, DollarSign, Users } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    company: 'Leading Fintech Platform',
    industry: 'Financial Services',
    icon: DollarSign,
    challenge: 'Critical vulnerabilities in payment processing system exposing customer financial data',
    solution: 'Comprehensive security audit, penetration testing, and implementation of PCI-DSS compliant architecture',
    results: [
      { metric: '100%', label: 'Vulnerabilities Fixed' },
      { metric: '₹50Cr+', label: 'Potential Loss Prevented' },
      { metric: '30 Days', label: 'Complete Remediation' }
    ],
    improvements: [
      'Zero security incidents post-implementation',
      'PCI-DSS Level 1 certification achieved',
      'Customer trust increased by 45%',
      'Reduced security overhead by 60%'
    ],
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    company: 'Healthcare SaaS Provider',
    industry: 'Healthcare Technology',
    icon: Building2,
    challenge: 'HIPAA compliance gaps and patient data security concerns across multi-tenant architecture',
    solution: 'End-to-end security assessment, HIPAA compliance audit, and secure architecture redesign',
    results: [
      { metric: '150+', label: 'Issues Resolved' },
      { metric: '100%', label: 'HIPAA Compliant' },
      { metric: '45 Days', label: 'Full Implementation' }
    ],
    improvements: [
      'HIPAA compliance certification obtained',
      'Zero data breaches since implementation',
      'Patient data encryption at rest and transit',
      'Automated compliance monitoring deployed'
    ],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    company: 'E-Commerce Giant',
    industry: 'Retail & E-Commerce',
    icon: Users,
    challenge: 'Frequent DDoS attacks and API vulnerabilities affecting 10M+ daily users',
    solution: 'Advanced threat detection, API security hardening, and DDoS mitigation implementation',
    results: [
      { metric: '99.99%', label: 'Uptime Achieved' },
      { metric: '10M+', label: 'Users Protected' },
      { metric: '90%', label: 'Attack Reduction' }
    ],
    improvements: [
      'DDoS attacks mitigated in real-time',
      'API security score improved to 98%',
      'Revenue loss prevented: ₹100Cr+',
      'Customer satisfaction up by 35%'
    ],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
]

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how we've helped leading Indian enterprises strengthen their security posture
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all ${
                activeCase === index
                  ? `bg-gradient-to-r ${study.color} text-gray-900 shadow-lg`
                  : 'bg-gray-50/50 text-gray-600 hover:text-gray-900 border border-gray-200/50'
              }`}
            >
              <study.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{study.industry}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCase === index ? 1 : 0,
                y: activeCase === index ? 0 : 20,
                display: activeCase === index ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Image & Company Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-gray-200/50">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-white/50 to-transparent"></div>
                    
                    {/* Company Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${study.color}`}>
                            <study.icon className="w-5 h-5 text-gray-900" />
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-bold">{study.company}</h3>
                            <p className="text-gray-700 text-sm">{study.industry}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Cards */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {study.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-xl p-4 text-center"
                      >
                        <p className={`text-2xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-1`}>
                          {result.metric}
                        </p>
                        <p className="text-gray-600 text-xs">{result.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Details */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Challenge */}
                  <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Shield className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">The Challenge</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${study.color} bg-opacity-20`}>
                        <Award className="w-5 h-5 text-gray-900" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Our Solution</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Improvements */}
                  <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Key Improvements</h4>
                    </div>
                    <div className="space-y-3">
                      {study.improvements.map((improvement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{improvement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your security posture?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all hover:scale-105"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies

