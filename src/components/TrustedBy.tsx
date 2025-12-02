import { motion } from 'framer-motion'
import { Shield, Terminal, Network, Lock, Bug, Search, FileCode, Database } from 'lucide-react'

const tools = [
  { name: 'Burp Suite', icon: Bug, color: 'from-orange-500 to-red-500' },
  { name: 'Nmap', icon: Network, color: 'from-blue-500 to-cyan-500' },
  { name: 'Metasploit', icon: Terminal, color: 'from-purple-500 to-pink-500' },
  { name: 'Wireshark', icon: Search, color: 'from-green-500 to-emerald-500' },
  { name: 'OWASP ZAP', icon: Shield, color: 'from-indigo-500 to-blue-500' },
  { name: 'SQLMap', icon: Database, color: 'from-yellow-500 to-orange-500' },
  { name: 'Nikto', icon: FileCode, color: 'from-red-500 to-pink-500' },
  { name: 'Nessus', icon: Lock, color: 'from-cyan-500 to-blue-500' }
]

const TrustedBy = () => {
  return (
    <section className="py-16 w-full relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 text-sm uppercase tracking-wider font-semibold">Our Arsenal</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Industry-Leading Security Tools
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We leverage the most advanced cybersecurity tools to protect your digital assets
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
