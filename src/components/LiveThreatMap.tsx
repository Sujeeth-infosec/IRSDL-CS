import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AlertTriangle, Shield, Activity } from 'lucide-react'

interface Threat {
  id: number
  type: string
  source: string
  target: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  timestamp: string
}

const LiveThreatMap = () => {
  const [threats, setThreats] = useState<Threat[]>([])
  const [stats, setStats] = useState({
    blocked: 0,
    detected: 0,
    active: 0
  })

  useEffect(() => {
    // Simulate real-time threat detection
    const interval = setInterval(() => {
      const newThreat: Threat = {
        id: Date.now(),
        type: ['SQL Injection', 'XSS Attack', 'DDoS Attempt', 'Malware', 'Phishing'][Math.floor(Math.random() * 5)],
        source: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'][Math.floor(Math.random() * 5)],
        target: ['Web Server', 'Database', 'API Gateway', 'Cloud Storage'][Math.floor(Math.random() * 4)],
        severity: (['low', 'medium', 'high', 'critical'] as const)[Math.floor(Math.random() * 4)],
        timestamp: new Date().toLocaleTimeString()
      }

      setThreats(prev => [newThreat, ...prev].slice(0, 5))
      setStats(prev => ({
        blocked: prev.blocked + 1,
        detected: prev.detected + 1,
        active: Math.floor(Math.random() * 10)
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'from-red-500 to-pink-500'
      case 'high': return 'from-orange-500 to-red-500'
      case 'medium': return 'from-yellow-500 to-orange-500'
      default: return 'from-blue-500 to-cyan-500'
    }
  }

  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Live Security Operations</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Real-Time Threat Detection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            24/7 monitoring and instant response to emerging threats
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <Shield className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Threats Blocked</p>
                <p className="text-3xl font-bold text-gray-900">{stats.blocked.toLocaleString()}</p>
              </div>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Activity className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Threats Detected</p>
                <p className="text-3xl font-bold text-gray-900">{stats.detected.toLocaleString()}</p>
              </div>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                <AlertTriangle className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Active Threats</p>
                <p className="text-3xl font-bold text-gray-900">{stats.active}</p>
              </div>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-orange-500 to-red-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Live Threat Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Live Threat Feed</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
            </div>

            <div className="space-y-3">
              {threats.map((threat) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-xl border border-gray-200/50"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${getSeverityColor(threat.severity)}`}>
                    <AlertTriangle className="w-4 h-4 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{threat.type}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        threat.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                        threat.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        threat.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-600'
                      }`}>
                        {threat.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {threat.source} → {threat.target}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{threat.timestamp}</p>
                    <p className="text-xs text-green-400 font-semibold">BLOCKED</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LiveThreatMap

