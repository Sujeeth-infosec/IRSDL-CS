import { FileText, Shield, CheckCircle, Target, TrendingUp, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const ReportingHardening = () => {
  const reportComponents = [
    {
      title: 'Executive Summary',
      description: 'High-level overview for C-suite and board members.',
      contents: ['Risk overview', 'Business impact', 'Key findings', 'Recommendations'],
      icon: '📊',
    },
    {
      title: 'Technical Report',
      description: 'Detailed technical findings for security and development teams.',
      contents: ['Vulnerability details', 'Proof of concepts', 'Exploitation steps', 'Remediation guides'],
      icon: '🔧',
    },
    {
      title: 'Risk Assessment',
      description: 'Prioritized risk matrix with business impact analysis.',
      contents: ['CVSS scoring', 'Business impact', 'Exploitability', 'Remediation priority'],
      icon: '⚠️',
    },
    {
      title: 'Remediation Roadmap',
      description: 'Step-by-step remediation guidance and hardening recommendations.',
      contents: ['Remediation steps', 'Code fixes', 'Configuration changes', 'Best practices'],
      icon: '🛠️',
    },
  ]

  const hardeningServices = [
    { service: 'Security Hardening', icon: Lock },
    { service: 'Patch Management', icon: Shield },
    { service: 'Configuration Review', icon: Target },
    { service: 'Security Training', icon: FileText },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-midnight to-midnight" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57b86b6bb?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FileText className="h-4 w-4" />
              Phase 04: Reporting & Hardening
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Reporting &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Security Hardening
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive reporting with executive summaries, technical details, and prioritized remediation
              roadmaps. Follow-up security hardening services to strengthen your defenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-green-500/30 hover:scale-105 transition"
              >
                Get Security Report
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Report Components</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive reporting for all stakeholders
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reportComponents.map((component, index) => (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 hover:border-green-500/30 transition"
              >
                <div className="text-5xl mb-4">{component.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{component.title}</h3>
                <p className="text-slate-300 mb-4">{component.description}</p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">Contents:</p>
                  <ul className="space-y-2">
                    {component.contents.map((content, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{content}</span>
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
              <Shield className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Security Hardening Services</h2>
              <p className="text-slate-400 text-lg">
                Follow-up services to strengthen your security posture
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hardeningServices.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-midnight/50 rounded-2xl border border-slate-700"
                >
                  <item.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">{item.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Security Report & Hardening Plan
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Receive comprehensive security reports with prioritized remediation roadmaps. Follow up with security
            hardening services to strengthen your defenses.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition inline-block"
          >
            Request Security Report
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ReportingHardening

