import { Search, Shield, CheckCircle, FileText, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const SecurityResearch = () => {
  const researchAreas = [
    {
      title: 'OSINT & Reconnaissance',
      description: 'Open source intelligence gathering, domain enumeration, and target profiling.',
      activities: ['Domain discovery', 'Subdomain enumeration', 'Technology stack identification', 'Employee profiling'],
      icon: '🔍',
    },
    {
      title: 'Vulnerability Research',
      description: 'Identifying known and zero-day vulnerabilities in target systems.',
      activities: ['CVE analysis', 'Exploit research', 'Patch analysis', 'Vulnerability chaining'],
      icon: '🔬',
    },
    {
      title: 'Threat Intelligence',
      description: 'Gathering threat intelligence specific to target industry and geography.',
      activities: ['Threat actor profiling', 'Attack pattern analysis', 'Industry-specific threats', 'Geographic threat landscape'],
      icon: '📊',
    },
    {
      title: 'Attack Surface Mapping',
      description: 'Comprehensive mapping of all attack vectors and entry points.',
      activities: ['External attack surface', 'Internal network mapping', 'Cloud asset discovery', 'API endpoint enumeration'],
      icon: '🗺️',
    },
  ]

  const deliverables = [
    { item: 'Target Profile Report', icon: FileText },
    { item: 'Attack Surface Map', icon: Target },
    { item: 'Threat Intelligence Brief', icon: Shield },
    { item: 'Vulnerability Database', icon: Zap },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-midnight to-midnight" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Search className="h-4 w-4" />
              Phase 01: Security Research
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Security Research &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Reconnaissance
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive security research and reconnaissance phase. Gathering intelligence, mapping attack surfaces,
              and identifying vulnerabilities before penetration testing begins.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition"
              >
                Start Security Research
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Areas</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive security research covering all attack vectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:border-purple-500/30 transition"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-slate-300 mb-4">{area.description}</p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">Activities:</p>
                  <ul className="space-y-2">
                    {area.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
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
              <FileText className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Research Deliverables</h2>
              <p className="text-slate-400 text-lg">
                Comprehensive documentation and intelligence gathered during research phase
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-midnight/50 rounded-2xl border border-slate-700"
                >
                  <item.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{item.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Security Research Phase
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get comprehensive security research and reconnaissance. Identify vulnerabilities and map attack surfaces
            before penetration testing.
          </p>
          <Link
            to="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition inline-block"
          >
            Start Security Research
          </Link>
        </div>
      </section>
    </div>
  )
}

export default SecurityResearch

