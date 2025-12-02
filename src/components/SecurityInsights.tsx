import { motion } from 'framer-motion'
import { Shield, Lock, AlertTriangle, FileCheck, Code, Database, Cloud, Network } from 'lucide-react'

const SecurityInsights = () => {
  const insights = [
    {
      icon: Shield,
      title: 'Zero Trust Architecture',
      description: 'Implement "never trust, always verify" security model with continuous authentication and micro-segmentation.',
      stats: '67% reduction in breach impact',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: 'Advanced Threat Detection',
      description: 'AI-powered behavioral analysis and anomaly detection to identify sophisticated attacks before they cause damage.',
      stats: '99.8% threat detection rate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Management',
      description: 'Continuous scanning and prioritized remediation based on CVSS scores, exploitability, and business impact.',
      stats: 'MTTR reduced by 73%',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileCheck,
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring for ISO 27001, SOC 2, GDPR, HIPAA, and PCI-DSS with real-time reporting.',
      stats: '100% audit readiness',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const frameworks = [
    {
      icon: Code,
      name: 'OWASP Top 10',
      description: 'Comprehensive coverage of critical web application security risks',
      items: ['Injection Flaws', 'Broken Authentication', 'XSS', 'SSRF']
    },
    {
      icon: Database,
      name: 'MITRE ATT&CK',
      description: 'Adversarial tactics and techniques knowledge base',
      items: ['Initial Access', 'Persistence', 'Privilege Escalation', 'Exfiltration']
    },
    {
      icon: Cloud,
      name: 'Cloud Security',
      description: 'Multi-cloud security posture management',
      items: ['IAM Policies', 'Encryption', 'Network Segmentation', 'Logging']
    },
    {
      icon: Network,
      name: 'Network Security',
      description: 'Defense-in-depth network protection strategies',
      items: ['Firewall Rules', 'IDS/IPS', 'DDoS Mitigation', 'VPN Security']
    }
  ]

  const threatLandscape = [
    { threat: 'Ransomware Attacks', increase: '+105%', impact: 'Critical', trend: 'Rising' },
    { threat: 'Supply Chain Attacks', increase: '+42%', impact: 'High', trend: 'Rising' },
    { threat: 'API Vulnerabilities', increase: '+78%', impact: 'High', trend: 'Rising' },
    { threat: 'Cloud Misconfigurations', increase: '+33%', impact: 'Medium', trend: 'Stable' }
  ]

  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Security Intelligence</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Enterprise-Grade Cybersecurity Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Leverage cutting-edge security frameworks and threat intelligence to protect your digital assets
          </p>
        </motion.div>

        {/* Key Security Insights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${insight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <insight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{insight.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-blue-600 font-semibold text-sm">{insight.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Standard Frameworks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <framework.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{framework.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{framework.description}</p>
                <ul className="space-y-2">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 border border-slate-700"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">2024 Threat Landscape</h3>
              <p className="text-gray-400">Real-time cybersecurity threat intelligence</p>
            </div>
            <div className="hidden lg:block px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
              <span className="text-red-400 font-semibold text-sm">LIVE</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {threatLandscape.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{item.threat}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.impact === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    item.impact === 'High' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {item.impact}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">YoY Increase</p>
                    <p className="text-2xl font-bold text-red-400">{item.increase}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm mb-1">Trend</p>
                    <p className={`text-sm font-semibold ${
                      item.trend === 'Rising' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {item.trend}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-white mb-2">$4.45M</p>
                <p className="text-gray-400 text-sm">Average Data Breach Cost</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">277 Days</p>
                <p className="text-gray-400 text-sm">Average Time to Identify Breach</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">83%</p>
                <p className="text-gray-400 text-sm">Organizations Experienced Multiple Breaches</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SecurityInsights
