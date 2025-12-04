import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-blue-50 to-white m-0 p-0" style={{ margin: 0, padding: 0 }}>
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" fillOpacity="0.5"/>
          <rect width="100%" height="100%" fill="url(#gridGradient)"/>
        </svg>

        {/* Animated glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
        />

        {/* Cyber Grid Lines */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              y: [0, 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>
        
        {/* Floating Cyber Elements */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              opacity: [null, Math.random() * 0.8 + 0.4, null],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Cyber Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="70%" y1="30%" x2="90%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <line x1="30%" y1="70%" x2="60%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1"/>
          <circle cx="25%" cy="25%" r="3" fill="#3b82f6" opacity="0.5"/>
          <circle cx="75%" cy="65%" r="3" fill="#8b5cf6" opacity="0.5"/>
          <circle cx="50%" cy="50%" r="3" fill="#3b82f6" opacity="0.5"/>
        </svg>
      </div>

      <div className="w-full px-6 lg:px-12 py-12 relative z-10">
        <div className="flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900"
            >
              Intelligent <span className="text-blue-600">Security</span> for
              <span className="block text-gray-900">
                Modern Businesses.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              IRSDL brings Security to your fingertips & streamline tasks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 transition-all flex items-center gap-2 hover:scale-105"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-gray-200 hover:bg-gray-300 text-gray-900 border border-gray-300 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              >
                View services
              </Link>
            </motion.div>
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
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AnimatedHero
