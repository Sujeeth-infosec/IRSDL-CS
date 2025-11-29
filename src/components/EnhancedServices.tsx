import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Cloud, Smartphone, Code, Network, Brain, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Web Application Pentesting',
    description: 'Comprehensive security testing for web applications, APIs, and cloud infrastructure.',
    color: 'from-blue-500 to-cyan-500',
    link: '/pentest/web'
  },
  {
    icon: Brain,
    title: 'AI/ML Security',
    description: 'Advanced security assessments for AI models, machine learning systems, and data pipelines.',
    color: 'from-purple-500 to-pink-500',
    link: '/pentest/ai'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Security',
    description: 'In-depth security analysis for iOS and Android applications.',
    color: 'from-green-500 to-emerald-500',
    link: '/pentest/mobile'
  },
  {
    icon: Code,
    title: 'API Security Testing',
    description: 'REST, GraphQL, and microservices security assessments.',
    color: 'from-orange-500 to-red-500',
    link: '/pentest/api'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'AWS, Azure, and GCP security audits and compliance checks.',
    color: 'from-indigo-500 to-blue-500',
    link: '/pentest/cloud'
  },
  {
    icon: Network,
    title: 'Network Pentesting',
    description: 'Infrastructure security testing and network vulnerability assessments.',
    color: 'from-teal-500 to-cyan-500',
    link: '/pentest/network'
  }
]

const EnhancedServices = () => {
  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade cybersecurity services tailored for Indian businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <Link to={service.link}>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 h-full overflow-hidden transition-all duration-300 hover:border-blue-500/50">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-blue-400 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnhancedServices
