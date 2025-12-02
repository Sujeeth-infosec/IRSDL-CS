import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Shield, CheckCircle, Target, TrendingUp, Lock, ArrowRight, Settings, Award } from 'lucide-react'
import ThemedBackground from '../../components/ThemedBackground'

const ReportingHardening = () => {
  const reportComponents = [
    {
      icon: FileText,
      title: 'Executive Summary',
      description: 'High-level overview for C-suite and board members.',
      contents: ['Risk overview', 'Business impact', 'Key findings', 'Recommendations']
    },
    {
      icon: Settings,
      title: 'Technical Report',
      description: 'Detailed technical findings for security and development teams.',
      contents: ['Vulnerability details', 'Proof of concepts', 'Exploitation steps', 'Remediation guides']
    },
    {
      icon: TrendingUp,
      title: 'Risk Assessment',
      description: 'Prioritized risk matrix with business impact analysis.',
      contents: ['CVSS scoring', 'Business impact', 'Exploitability', 'Remediation priority']
    },
    {
      icon: Target,
      title: 'Remediation Roadmap',
      description: 'Step-by-step remediation guidance and hardening recommendations.',
      contents: ['Remediation steps', 'Code fixes', 'Configuration changes', 'Best practices']
    }
  ]

  const hardeningServices = [
    { service: 'Security Hardening', icon: Lock, count: '100+' },
    { service: 'Patch Management', icon: Shield, count: '250+' },
    { service: 'Configuration Review', icon: Settings, count: '75+' },
    { service: 'Security Training', icon: Award, count: '50+' }
  ]

  const processSteps = [
    { phase: '01', title: 'Data Analysis', description: 'Analyze all findings' },
    { phase: '02', title: 'Report Writing', description: 'Document vulnerabilities' },
    { phase: '03', title: 'Risk Scoring', description: 'Prioritize remediation' },
    { phase: '04', title: 'Hardening Plan', description: 'Create action plan' }
  ]

  const deliverables = [
    { item: 'Executive Report', icon: FileText, pages: '15-20' },
    { item: 'Technical Report', icon: Settings, pages: '50-100' },
    { item: 'Risk Matrix', icon: TrendingUp, pages: '10-15' },
    { item: 'Remediation Guide', icon: Target, pages: '30-40' }
  ]

  return (
    <div className="relative min-h-screen">
      <ThemedBackground theme="green" />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-8">
              <FileText className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-green-300">Phase 04: Reporting & Hardening</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Reporting &
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Security Hardening
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprehensive reporting with executive summaries, technical details, and prioritized remediation
              roadmaps. Follow-up security hardening services to strengthen your defenses.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/50 transition-all flex items-center gap-2"
              >
                Get Security Report
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-gray-900 border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              {processSteps.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {stat.phase}
                  </div>
                  <div className="text-gray-900 font-semibold text-sm mb-1">{stat.title}</div>
                  <div className="text-gray-600 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Report Components Section */}
      <section className="relative w-full py-24 bg-white">

        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Report Structure</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Report Components
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {reportComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 hover:border-green-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 inline-flex mb-4">
                  <component.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <div className="space-y-2">
                  {component.contents.map((content, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{content}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Documentation</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Report Deliverables
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-gray-900 font-semibold mb-2">{item.item}</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{item.pages}</p>
                <p className="text-xs text-gray-600 mt-1">Pages</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardening Services Section */}
      <section className="relative w-full py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Follow-up Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Security Hardening Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardeningServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className="text-gray-900 font-semibold mb-2">{item.service}</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{item.count}</p>
                <p className="text-xs text-gray-600 mt-1">Implementations</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get Your Security Report & Hardening Plan
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Receive comprehensive security reports with prioritized remediation roadmaps. Follow up with security
              hardening services to strengthen your defenses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/50 transition-all"
              >
                Request Security Report
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
      </section>
    </div>
  )
}

export default ReportingHardening
