import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Factory, Shield, CheckCircle, ArrowRight, Cpu, Network, Lock, AlertTriangle } from 'lucide-react'
import SimpleBackground from '../../components/SimpleBackground'

const Manufacturing = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <SimpleBackground />
      
      <section className="relative w-full pt-32 pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-400/20 rounded-full px-6 py-3 mb-8">
                <Factory className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Manufacturing Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Manufacturing Security
                <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                IEC 62443-compliant security testing for industrial control systems, SCADA, and OT/IT networks. 
                Protect manufacturing operations and ensure operational continuity with specialized ICS security expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-500/50 transition-all">
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
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Manufacturing Challenges</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Critical Security Challenges</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Cpu, title: 'SCADA/ICS Security', desc: 'Protecting industrial control systems and SCADA networks', risks: ['Unauthorized access', 'System manipulation', 'Production disruption', 'Safety incidents'] },
                { icon: Network, title: 'OT/IT Convergence', desc: 'Securing the convergence of operational and IT networks', risks: ['Network segmentation', 'Legacy systems', 'Protocol vulnerabilities', 'Lateral movement'] },
                { icon: Lock, title: 'Supply Chain Security', desc: 'Protecting supply chain and vendor integrations', risks: ['Third-party risks', 'Vendor access', 'Data sharing', 'Integration security'] },
                { icon: AlertTriangle, title: 'Operational Continuity', desc: 'Ensuring continuous manufacturing operations', risks: ['Ransomware', 'DDoS attacks', 'System downtime', 'Production loss'] }
              ].map((challenge, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-400/30 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30">
                      <challenge.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                      <p className="text-gray-400 mb-4">{challenge.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.risks.map((risk, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-xs text-orange-300">{risk}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-orange-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Manufacturing Security Services</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'ICS/SCADA Pentesting', desc: 'Comprehensive security testing for industrial control systems', features: ['SCADA security', 'PLC testing', 'HMI security', 'Protocol analysis'] },
                { title: 'OT Network Assessment', desc: 'Operational technology network security review', features: ['Network segmentation', 'Asset discovery', 'Vulnerability scanning', 'Traffic analysis'] },
                { title: 'IEC 62443 Compliance', desc: 'Industrial cybersecurity standard compliance assessment', features: ['Risk assessment', 'Security levels', 'Zone/conduit model', 'Documentation'] },
                { title: 'Incident Response Planning', desc: 'OT-specific incident response and recovery planning', features: ['IR playbooks', 'Tabletop exercises', 'Recovery procedures', 'Business continuity'] }
              ].map((solution, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-400/30 transition-all">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Secure Your Manufacturing Operations</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Protect your industrial control systems and ensure operational continuity with comprehensive ICS security testing. 
                Schedule a consultation with our OT security experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-orange-500/50 transition-all">
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

export default Manufacturing
