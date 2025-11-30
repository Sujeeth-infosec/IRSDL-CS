import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Shield, CheckCircle, FileText, Target, Zap, ArrowRight, Database, Globe, Sparkles } from 'lucide-react'
import EnhancedHeroBackground from '../../components/EnhancedHeroBackground'

const SecurityResearch = () => {
  const researchAreas = [
    {
      icon: Search,
      title: 'OSINT & Reconnaissance',
      description: 'Open source intelligence gathering, domain enumeration, and target profiling.',
      activities: ['Domain discovery', 'Subdomain enumeration', 'Technology stack identification', 'Employee profiling']
    },
    {
      icon: Database,
      title: 'Vulnerability Research',
      description: 'Identifying known and zero-day vulnerabilities in target systems.',
      activities: ['CVE analysis', 'Exploit research', 'Patch analysis', 'Vulnerability chaining']
    },
    {
      icon: Shield,
      title: 'Threat Intelligence',
      description: 'Gathering threat intelligence specific to target industry and geography.',
      activities: ['Threat actor profiling', 'Attack pattern analysis', 'Industry-specific threats', 'Geographic threat landscape']
    },
    {
      icon: Globe,
      title: 'Attack Surface Mapping',
      description: 'Comprehensive mapping of all attack vectors and entry points.',
      activities: ['External attack surface', 'Internal network mapping', 'Cloud asset discovery', 'API endpoint enumeration']
    }
  ]

  const deliverables = [
    { item: 'Target Profile Report', icon: FileText, count: '50+' },
    { item: 'Attack Surface Map', icon: Target, count: '100+' },
    { item: 'Threat Intelligence Brief', icon: Shield, count: '25+' },
    { item: 'Vulnerability Database', icon: Zap, count: '200+' }
  ]

  const processSteps = [
    { phase: '01', title: 'Information Gathering', description: 'Collect public data and OSINT' },
    { phase: '02', title: 'Asset Discovery', description: 'Map digital footprint and assets' },
    { phase: '03', title: 'Threat Analysis', description: 'Identify vulnerabilities and threats' },
    { phase: '04', title: 'Report Generation', description: 'Document findings and intelligence' }
  ]

  return (
    <div className="relative min-h-screen bg-slate-900">
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center py-24 pt-32">
        <EnhancedHeroBackground 
          imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          gradientFrom="purple-500"
          gradientTo="pink-500"
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Phase 01: Security Research</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Security Research &
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Reconnaissance
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Comprehensive security research and reconnaissance phase. Gathering intelligence, mapping attack surfaces,
              and identifying vulnerabilities before penetration testing begins.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                Start Security Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              {processSteps.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.phase}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{stat.title}</div>
                  <div className="text-gray-400 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="relative w-full py-24 bg-slate-900">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Research Areas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 inline-flex mb-4">
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{activity}</span>
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
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Deliverables</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Research Deliverables
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">{item.item}</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{item.count}</p>
                <p className="text-xs text-gray-400 mt-1">Data Points</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-slate-800">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Begin Your Security Research Phase
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Get comprehensive security research and reconnaissance. Identify vulnerabilities and map attack surfaces
              before penetration testing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 transition-all"
              >
                Start Security Research
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
      </section>
    </div>
  )
}

export default SecurityResearch
