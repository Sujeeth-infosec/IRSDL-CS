import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, Shield, CheckCircle, ArrowRight, Lock, Database, Users, Globe } from 'lucide-react'
import SimpleBackground from '../../components/SimpleBackground'

const PublicSector = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <SimpleBackground />
      
      <section className="relative w-full pt-32 pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full px-6 py-3 mb-8">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Government Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Public Sector Security
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                CERT-In aligned security testing for government agencies, public sector undertakings, and critical infrastructure. 
                Protect citizen data and ensure national security with specialized government security expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-indigo-500/50 transition-all">
                  Schedule Assessment <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Government Challenges</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Critical Security Challenges</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Database, title: 'Citizen Data Protection', desc: 'Securing Aadhaar, PAN, and sensitive citizen information', risks: ['Data breaches', 'Identity theft', 'Privacy violations', 'Unauthorized access'] },
                { icon: Globe, title: 'E-Governance Security', desc: 'Protecting digital India and e-governance platforms', risks: ['Service disruption', 'Website defacement', 'DDoS attacks', 'Data manipulation'] },
                { icon: Users, title: 'Critical Infrastructure', desc: 'Securing power grids, water systems, and transportation', risks: ['Nation-state attacks', 'Sabotage', 'System failures', 'Public safety'] },
                { icon: Lock, title: 'Compliance Requirements', desc: 'Meeting MeitY, CERT-In, and government security standards', risks: ['Non-compliance', 'Audit failures', 'Security gaps', 'Policy violations'] }
              ].map((challenge, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-400/30 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30">
                      <challenge.icon className="w-8 h-8 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                      <p className="text-gray-400 mb-4">{challenge.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.risks.map((risk, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-xs text-indigo-300">{risk}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-indigo-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-indigo-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Government Security Services</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'E-Governance Platform Testing', desc: 'Security testing for digital India and citizen services', features: ['Portal security', 'API testing', 'Authentication', 'Data protection'] },
                { title: 'Critical Infrastructure Protection', desc: 'Security assessment for national critical infrastructure', features: ['SCADA security', 'Network segmentation', 'Threat modeling', 'Incident response'] },
                { title: 'CERT-In Compliance Audit', desc: 'Complete CERT-In guidelines compliance assessment', features: ['Security controls', 'Vulnerability management', 'Incident reporting', 'Documentation'] },
                { title: 'Smart City Security', desc: 'Security testing for smart city IoT and infrastructure', features: ['IoT security', 'Network security', 'Data privacy', 'Integration testing'] }
              ].map((solution, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-400/30 transition-all">
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.desc}</p>
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

      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-indigo-400/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Secure Your Government Systems</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Protect citizen data and critical infrastructure with comprehensive government security testing. 
                Schedule a consultation with our public sector security experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-indigo-500/50 transition-all">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+919493782350" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all">
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

export default PublicSector
