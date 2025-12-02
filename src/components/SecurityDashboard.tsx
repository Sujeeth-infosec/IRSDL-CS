import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Shield, AlertTriangle, CheckCircle, TrendingUp, Activity, Lock } from 'lucide-react'

const SecurityDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'threats' | 'compliance'>('overview')
  const [liveData, setLiveData] = useState({
    securityScore: 98,
    activeThreats: 3,
    blockedAttacks: 1247,
    complianceRate: 100
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        securityScore: Math.min(100, prev.securityScore + Math.random() * 2 - 1),
        activeThreats: Math.max(0, Math.floor(prev.activeThreats + Math.random() * 3 - 1)),
        blockedAttacks: prev.blockedAttacks + Math.floor(Math.random() * 5),
        complianceRate: Math.min(100, prev.complianceRate + Math.random() * 0.5 - 0.2)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Security Dashboard</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Unified Security Command Center
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real-time visibility into your security posture with actionable insights
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'threats', label: 'Threat Intelligence', icon: AlertTriangle },
              { id: 'compliance', label: 'Compliance', icon: CheckCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-gray-900 shadow-lg shadow-blue-500/50'
                    : 'bg-gray-50/50 text-gray-600 hover:text-gray-900 border border-gray-200/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8"
          >
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Security Score */}
                <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                      <Shield className="w-6 h-6 text-gray-900" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Security Score</p>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {liveData.securityScore.toFixed(1)}%
                  </p>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${liveData.securityScore}%` }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                </div>

                {/* Active Threats */}
                <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                      <AlertTriangle className="w-6 h-6 text-gray-900" />
                    </div>
                    <Activity className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Active Threats</p>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {liveData.activeThreats}
                  </p>
                  <p className="text-sm text-orange-400">Being monitored</p>
                </div>

                {/* Blocked Attacks */}
                <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Lock className="w-6 h-6 text-gray-900" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Blocked Today</p>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {liveData.blockedAttacks.toLocaleString()}
                  </p>
                  <p className="text-sm text-blue-600">+{Math.floor(Math.random() * 50)} in last hour</p>
                </div>

                {/* Compliance Rate */}
                <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <CheckCircle className="w-6 h-6 text-gray-900" />
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Compliance</p>
                  <p className="text-4xl font-bold text-gray-900 mb-2">
                    {liveData.complianceRate.toFixed(1)}%
                  </p>
                  <p className="text-sm text-green-400">All checks passed</p>
                </div>
              </div>
            )}

            {activeTab === 'threats' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Threat Activity</h3>
                {[
                  { type: 'SQL Injection', severity: 'high', status: 'blocked', time: '2 min ago' },
                  { type: 'DDoS Attempt', severity: 'critical', status: 'mitigated', time: '5 min ago' },
                  { type: 'Malware Detection', severity: 'medium', status: 'quarantined', time: '12 min ago' },
                  { type: 'Phishing Email', severity: 'low', status: 'blocked', time: '18 min ago' }
                ].map((threat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-200/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        threat.severity === 'critical' ? 'bg-red-500/20' :
                        threat.severity === 'high' ? 'bg-orange-500/20' :
                        threat.severity === 'medium' ? 'bg-yellow-500/20' :
                        'bg-blue-500/20'
                      }`}>
                        <AlertTriangle className={`w-5 h-5 ${
                          threat.severity === 'critical' ? 'text-red-400' :
                          threat.severity === 'high' ? 'text-orange-400' :
                          threat.severity === 'medium' ? 'text-yellow-400' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{threat.type}</p>
                        <p className="text-sm text-gray-600">{threat.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        threat.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        threat.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        threat.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-600'
                      }`}>
                        {threat.severity.toUpperCase()}
                      </span>
                      <span className="text-sm text-green-400 font-semibold uppercase">
                        {threat.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'CERT-In', status: 100, checks: 45 },
                  { name: 'ISO 27001', status: 98, checks: 114 },
                  { name: 'PCI-DSS', status: 100, checks: 329 },
                  { name: 'GDPR', status: 95, checks: 78 }
                ].map((compliance, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50/50 rounded-xl p-6 border border-gray-200/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{compliance.name}</h4>
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 text-sm">Compliance Rate</span>
                        <span className="text-gray-900 font-bold">{compliance.status}%</span>
                      </div>
                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${compliance.status}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {compliance.checks} checks passed
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SecurityDashboard

