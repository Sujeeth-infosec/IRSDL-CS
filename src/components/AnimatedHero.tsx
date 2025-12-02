import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Zap, Lock, ArrowRight, CheckCircle2, Play } from 'lucide-react'

const AnimatedHero = () => {
  const handleWatchDemo = () => {
    // Open demo video or modal
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Removed solid background - using AdvancedBackground instead */}
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="w-full px-6 lg:px-12 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1600px] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">India's Premier Cybersecurity Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
            >
              Secure Your
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 mb-8 leading-relaxed font-medium"
            >
              CERT-In aligned cybersecurity solutions with 24/7 SOC monitoring, 
              advanced threat intelligence, and rapid incident response for Indian enterprises.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all flex items-center gap-2 hover:scale-105"
              >
                Secure Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                Schedule Call
              </Link>
              <button
                onClick={handleWatchDemo}
                className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/20 px-6 py-4 rounded-full font-semibold transition-all flex items-center gap-2 hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, text: 'CERT-In Aligned' },
                { icon: Lock, text: 'ISO 27001 Certified' },
                { icon: CheckCircle2, text: '99.9% Uptime' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <item.icon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* PROMINENT Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-400/30">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cybersecurity Operations" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <p className="text-3xl font-bold text-white">500+</p>
                    <p className="text-gray-300 text-sm">Clients Protected</p>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <p className="text-3xl font-bold text-white">24/7</p>
                    <p className="text-gray-300 text-sm">SOC Monitoring</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500/90 to-cyan-500/90 backdrop-blur-xl border border-blue-400/50 rounded-2xl p-6 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 rounded-lg p-2">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Threat Detected</p>
                    <p className="text-blue-100 text-sm">Blocked in real-time</p>
                  </div>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-white"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500/90 to-pink-500/90 backdrop-blur-xl border border-purple-400/50 rounded-2xl p-6 shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-lg p-2">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Security Score</p>
                    <p className="text-4xl font-bold text-white">98%</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional floating card */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-12 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-xl border border-green-400/50 rounded-2xl p-4 shadow-2xl z-10"
              >
                <div className="text-center">
                  <p className="text-white font-semibold text-sm mb-1">Uptime</p>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AnimatedHero
