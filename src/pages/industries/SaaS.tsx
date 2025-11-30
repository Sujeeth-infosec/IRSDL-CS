import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cloud, Shield, CheckCircle, ArrowRight, Users, Lock, Database, Globe } from 'lucide-react'
import SimpleBackground from '../../components/SimpleBackground'

const SaaS = () => {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      <SimpleBackground />
      
      <section className="relative w-full pt-32 pb-20">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-3 mb-8">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">SaaS Cybersecurity</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                SaaS Security
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Comprehensive security testing for Software-as-a-Service platforms. Protect multi-tenant environments, 
                secure APIs, and ensure data isolation with specialized SaaS security expertise.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all">
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">SaaS Challenges</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Critical Security Challenges</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Multi-Tenancy Security', desc: 'Ensuring data isolation between tenants', risks: ['Data leakage', 'Tenant isolation', 'Shared resources', 'Access control'] },
                { icon: Lock, title: 'Authentication & Authorization', desc: 'Securing user access and permissions', risks: ['Weak authentication', 'Privilege escalation', 'Session management', 'SSO vulnerabilities'] },
                { icon: Database, title: 'Data Protection', desc: 'Protecting sensitive customer data', risks: ['Data breaches', 'Encryption gaps', 'Backup security', 'Data residency'] },
                { icon: Globe, title: 'API Security', desc: 'Securing REST and GraphQL APIs', risks: ['API abuse', 'Rate limiting', 'Authentication bypass', 'Data exposure'] }
              ].map((challenge, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30">
                      <challenge.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                      <p className="text-gray-400 mb-4">{challenge.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {challenge.risks.map((risk, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300">{risk}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">SaaS Security Services</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Multi-Tenant Testing', desc: 'Comprehensive tenant isolation and data security testing', features: ['Tenant isolation', 'Data segregation', 'Access control', 'Resource sharing'] },
                { title: 'API Security Assessment', desc: 'REST, GraphQL, and microservices security testing', features: ['API authentication', 'Rate limiting', 'Input validation', 'OWASP API Top 10'] },
                { title: 'Cloud Infrastructure Review', desc: 'AWS, Azure, GCP security configuration review', features: ['IAM policies', 'Network security', 'Encryption', 'Compliance'] },
                { title: 'DevSecOps Integration', desc: 'Security integration into CI/CD pipelines', features: ['SAST/DAST', 'Container security', 'IaC scanning', 'Automated testing'] }
              ].map((solution, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-400/30 transition-all">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Secure Your SaaS Platform</h2>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Protect your multi-tenant environment with comprehensive SaaS security testing. 
                Schedule a consultation with our SaaS security experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all">
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

export default SaaS
