import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Target, Shield, CheckCircle, FileText, Brain, Network, ArrowRight, GitBranch, Lock } from 'lucide-react'
import EnhancedHeroBackground from '../../components/EnhancedHeroBackground'

const ThreatModeling = () => {
  const modelingApproaches = [
    {
      icon: Target,
      title: 'STRIDE Analysis',
      description: 'Systematic threat identification using STRIDE methodology.',
      threats: ['Spoofing', 'Tampering', 'Repudiation', 'Information Disclosure', 'Denial of Service', 'Elevation of Privilege']
    },
    {
      icon: GitBranch,
      title: 'Attack Trees',
      description: 'Visual representation of attack paths and scenarios.',
      threats: ['Attack path mapping', 'Threat scenario development', 'Risk prioritization', 'Countermeasure identification']
    },
    {
      icon: Network,
      title: 'Data Flow Diagrams',
      description: 'Mapping data flows and identifying trust boundaries.',
      threats: ['Data flow analysis', 'Trust boundary identification', 'Entry point mapping', 'Data protection requirements']
    },
    {
      icon: Lock,
      title: 'Threat Scenarios',
      description: 'Developing realistic attack scenarios based on threat intelligence.',
      threats: ['Scenario development', 'Attack simulation', 'Impact assessment', 'Mitigation strategies']
    }
  ]

  const outputs = [
    { item: 'Threat Model Document', icon: FileText, count: '30+' },
    { item: 'Attack Tree Diagrams', icon: Network, count: '15+' },
    { item: 'Risk Assessment Matrix', icon: Shield, count: '50+' },
    { item: 'Mitigation Roadmap', icon: Brain, count: '40+' }
  ]

  const processSteps = [
    { phase: '01', title: 'System Modeling', description: 'Map architecture and data flows' },
    { phase: '02', title: 'Threat Identification', description: 'Identify potential threats' },
    { phase: '03', title: 'Risk Assessment', description: 'Evaluate threat severity' },
    { phase: '04', title: 'Mitigation Planning', description: 'Develop countermeasures' }
  ]

  return (
    <div className="relative min-h-screen bg-slate-900">
      
      {/* Hero Section with Background Image */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center py-24 pt-32">
        <EnhancedHeroBackground 
          imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80"
          gradientFrom="blue-500"
          gradientTo="cyan-500"
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Phase 02: Threat Modeling</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Threat Modeling &
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Risk Assessment
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Systematic threat modeling using STRIDE, attack trees, and data flow analysis. Identifying threats,
              assessing risks, and developing mitigation strategies before exploitation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all flex items-center gap-2"
              >
                Start Threat Modeling
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
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
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

      {/* Modeling Approaches Section */}
      <section className="relative w-full py-24 bg-slate-900">

        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Threat Modeling Approaches
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {modelingApproaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 inline-flex mb-4">
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{approach.title}</h3>
                <p className="text-gray-400 mb-4">{approach.description}</p>
                <div className="space-y-2">
                  {approach.threats.map((threat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{threat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Deliverables</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Threat Modeling Outputs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outputs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all"
              >
                <item.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">{item.item}</p>
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{item.count}</p>
                <p className="text-xs text-gray-400 mt-1">Threat Models</p>
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
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Begin Threat Modeling Phase
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Get systematic threat modeling and risk assessment. Identify threats and develop mitigation strategies
              before penetration testing execution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
              >
                Start Threat Modeling
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

export default ThreatModeling
