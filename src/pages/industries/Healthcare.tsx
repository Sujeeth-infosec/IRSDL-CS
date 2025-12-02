import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Shield, CheckCircle, ArrowRight, Database, Users, FileText, Activity } from 'lucide-react'
import ThemedBackground from '../../components/ThemedBackground'

const Healthcare = () => {
  const stats = [
    { value: '93%', label: 'Healthcare Orgs Hit by Cyberattacks', color: 'text-red-600' },
    { value: '$10.9M', label: 'Avg Healthcare Breach Cost', color: 'text-orange-600' },
    { value: '329', label: 'Days to Identify Breach', color: 'text-purple-600' },
    { value: '45M', label: 'Patient Records Exposed (2023)', color: 'text-blue-600' }
  ]

  const challenges = [
    {
      icon: Database,
      title: 'Patient Data Protection',
      description: 'Securing electronic health records and sensitive patient information',
      risks: ['Data breaches', 'Unauthorized access', 'PHI exposure', 'Ransomware attacks']
    },
    {
      icon: Users,
      title: 'Medical Device Security',
      description: 'Protecting connected medical devices and IoT healthcare systems',
      risks: ['Device tampering', 'Network vulnerabilities', 'Firmware exploits', 'Remote attacks']
    },
    {
      icon: FileText,
      title: 'Compliance Requirements',
      description: 'Meeting HIPAA, DPDP Act, and healthcare regulatory standards',
      risks: ['Non-compliance penalties', 'Audit failures', 'Legal liabilities', 'Reputation damage']
    },
    {
      icon: Activity,
      title: 'Telemedicine Security',
      description: 'Securing remote healthcare delivery and virtual consultations',
      risks: ['Video hijacking', 'Data interception', 'Authentication bypass', 'Privacy violations']
    }
  ]

  const solutions = [
    {
      title: 'EHR/EMR Security Testing',
      description: 'Comprehensive testing of electronic health record systems',
      features: ['Access control testing', 'Data encryption validation', 'Audit log review', 'Integration security']
    },
    {
      title: 'Medical Device Pentesting',
      description: 'Security assessment of connected medical devices',
      features: ['Firmware analysis', 'Network security', 'Protocol testing', 'Physical security']
    },
    {
      title: 'HIPAA Compliance Audit',
      description: 'Complete HIPAA security rule compliance assessment',
      features: ['Risk analysis', 'Security controls', 'Documentation review', 'Remediation guidance']
    },
    {
      title: 'Telemedicine Platform Testing',
      description: 'Security testing for telehealth applications',
      features: ['Video security', 'End-to-end encryption', 'Authentication testing', 'Privacy controls']
    }
  ]

  const compliance = [
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'DPDP Act 2023', description: 'Digital Personal Data Protection Act' },
    { name: 'ABDM Guidelines', description: 'Ayushman Bharat Digital Mission' },
    { name: 'Medical Device Regulations', description: 'FDA & CDSCO compliance' }
  ]

  return (
    <div className="relative min-h-screen">
      <ThemedBackground theme="red" />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80" 
            alt="Healthcare Security" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-400/20 rounded-full px-6 py-3 mb-8">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium text-red-700">Healthcare Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Healthcare Security
                <span className="block bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                HIPAA-compliant security for hospitals, clinics, and healthcare technology providers.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-gray-600 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-red-500/50 transition-all"
                >
                  Schedule Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
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
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Healthcare Challenges</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
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
                  className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:bg-white/10 hover:border-red-400/30 transition-all"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-400/30">
                      <challenge.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                      <p className="text-gray-600 mb-4">{challenge.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-red-400 mb-2">Common Risks:</p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.risks.map((risk, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-red-500/20 border border-red-400/30 rounded-full text-xs text-red-700"
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
      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-red-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                Healthcare Security Services
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
                  className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:bg-white/10 hover:border-red-400/30 transition-all"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-700 text-sm">{feature}</span>
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
              <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Compliance</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                Healthcare Regulatory Compliance
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
                  className="bg-white/5 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-red-400/30 transition-all"
                >
                  <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
              className="bg-gradient-to-r from-red-500/20 via-pink-500/20 to-rose-500/20 backdrop-blur-xl border border-red-400/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Protect Your Healthcare Organization
              </h2>
              <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
                Ensure HIPAA compliance and protect patient data with comprehensive healthcare security testing. 
                Schedule a consultation with our healthcare security experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-red-500/50 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+919493782350"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
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

export default Healthcare
