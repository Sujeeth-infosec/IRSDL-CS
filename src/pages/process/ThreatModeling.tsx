import { Target, Shield, CheckCircle, FileText, Brain, Network } from 'lucide-react'
import { Link } from 'react-router-dom'

const ThreatModeling = () => {
  const modelingApproaches = [
    {
      title: 'STRIDE Analysis',
      description: 'Systematic threat identification using STRIDE methodology.',
      threats: ['Spoofing', 'Tampering', 'Repudiation', 'Information Disclosure', 'Denial of Service', 'Elevation of Privilege'],
      icon: '🎯',
    },
    {
      title: 'Attack Trees',
      description: 'Visual representation of attack paths and scenarios.',
      threats: ['Attack path mapping', 'Threat scenario development', 'Risk prioritization', 'Countermeasure identification'],
      icon: '🌳',
    },
    {
      title: 'Data Flow Diagrams',
      description: 'Mapping data flows and identifying trust boundaries.',
      threats: ['Data flow analysis', 'Trust boundary identification', 'Entry point mapping', 'Data protection requirements'],
      icon: '📊',
    },
    {
      title: 'Threat Scenarios',
      description: 'Developing realistic attack scenarios based on threat intelligence.',
      threats: ['Scenario development', 'Attack simulation', 'Impact assessment', 'Mitigation strategies'],
      icon: '⚔️',
    },
  ]

  const outputs = [
    { item: 'Threat Model Document', icon: FileText },
    { item: 'Attack Tree Diagrams', icon: Network },
    { item: 'Risk Assessment Matrix', icon: Shield },
    { item: 'Mitigation Roadmap', icon: Brain },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-midnight to-midnight" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="h-4 w-4" />
              Phase 02: Threat Modeling
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Threat Modeling &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Risk Assessment
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Systematic threat modeling using STRIDE, attack trees, and data flow analysis. Identifying threats,
              assessing risks, and developing mitigation strategies before exploitation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:scale-105 transition"
              >
                Start Threat Modeling
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Threat Modeling Approaches</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive threat modeling methodologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {modelingApproaches.map((approach, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:border-blue-500/30 transition"
              >
                <div className="text-5xl mb-4">{approach.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{approach.title}</h3>
                <p className="text-slate-300 mb-4">{approach.description}</p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">Components:</p>
                  <ul className="space-y-2">
                    {approach.threats.map((threat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{threat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-midnight to-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="glass-panel rounded-3xl p-10">
            <div className="text-center mb-12">
              <Target className="h-16 w-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Threat Modeling Outputs</h2>
              <p className="text-slate-400 text-lg">
                Comprehensive documentation and analysis from threat modeling phase
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {outputs.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-midnight/50 rounded-2xl border border-slate-700"
                >
                  <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Threat Modeling Phase
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get systematic threat modeling and risk assessment. Identify threats and develop mitigation strategies
            before penetration testing execution.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition inline-block"
          >
            Start Threat Modeling
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ThreatModeling

