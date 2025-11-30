import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { DollarSign, Shield, CheckCircle, ArrowRight, Lock, CreditCard, Smartphone, TrendingUp } from 'lucide-react'
import SimpleBackground from '../../components/SimpleBackground'

const Fintech = () => {
  const challenges = [
    {
      icon: CreditCard,
      title: 'Payment Security',
      description: 'Securing digital payments, UPI, and transaction processing',
      risks: ['Payment fraud', 'Transaction tampering', 'Card data theft', 'Man-in-the-middle attacks']
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking Security',
      description: 'Protecting mobile banking apps and digital wallets',
      risks: ['App vulnerabilities', 'Jailbreak/root detection', 'Session hijacking', 'Malware attacks']
    },
    {
      icon: Lock,
      title: 'API Security',
      description: 'Securing financial APIs and third-party integrations',
      risks: ['API abuse', 'Authentication bypass', 'Data exposure', 'Rate limiting issues']
    },
    {
      icon: TrendingUp,
      title: 'Regulatory Compliance',
      description: 'Meeting RBI, SEBI, and financial regulatory requirements',
      risks: ['Non-compliance penalties', 'Audit failures', 'License revocation', 'Legal liabilities']
    }
  ]

  const solutions = [
    {
      title: 'Payment Gateway Testing',
      description: 'Comprehensive security testing for payment processing systems',
      features: ['PCI DSS compliance', 'Transaction security', 'Encryption validation', 'Fraud prevention']
    },
    {
      title: 'Mobile Banking Pentest',
      description: 'Security assessment of banking and fintech mobile applications',
      features: ['OWASP Mobile Top 10', 'Biometric security', 'Secure storage', 'Network security']
    },
    {
      title: 'Open Banking Security',
      description: 'Testing for account aggregator and open banking APIs',
      features: ['API security', 'OAuth/JWT testing', 'Data privacy', 'Third-party integration']
    },
    {
      title: 'RBI Compliance Audit',
      description: 'Complete RBI cybersecurity framework compliance assessment',
      features: ['Risk assessment', 'Security controls', 'Incident response', 'Documentation review']
    }
  ]

  const compliance = [
    { name: 'RBI Guidelines', description: 'Reserve Bank of India Cybersecurity Framework' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'DPDP Act 2023', description: 'Digital Personal Data Protection Act' },
    { name: 'NPCI Standards', description: 'National Payments Corporation of India' }
  ]

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
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-400/20 rounded-full px-6 py-3 mb-8">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium text-green-300">Fintech Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Fintech Security
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                RBI-compliant security testing for banks, payment processors, and fintech startups. 
                Protect financial transactions and ensure regulatory compliance with specialized fintech security expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/50 transition-all"
                >
                  Schedule Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Fintech Challenges</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
                Critical Security Challenges
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-400/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30">
                      <challenge.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                      <p className="text-gray-400 mb-4">{challenge.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-green-400 mb-2">Common Risks:</p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.risks.map((risk, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300"
                        >
                          {risk}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-green-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
                Fintech Security Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-400/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Compliance</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
                Financial Regulatory Compliance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compliance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-green-400/30 transition-all"
                >
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-green-400/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Secure Your Fintech Platform
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Ensure RBI compliance and protect financial transactions with comprehensive fintech security testing. 
                Schedule a consultation with our fintech security experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/50 transition-all"
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

export default Fintech
