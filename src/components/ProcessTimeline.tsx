import { motion } from 'framer-motion'
import { Globe, Shield, Smartphone, Cloud, Network, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Globe,
    title: 'Web Application Pentesting',
    description: 'Comprehensive security testing for web applications, covering OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, authentication flaws, and business logic vulnerabilities. We test both frontend and backend components to ensure complete security coverage.',
    path: '/pentest/web',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'API Security Testing',
    description: 'In-depth API security assessment covering REST, GraphQL, and SOAP APIs. We test for authentication bypass, authorization flaws, rate limiting issues, data exposure, and OWASP API Top 10 vulnerabilities to protect your API endpoints.',
    path: '/pentest/api',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Pentesting',
    description: 'Complete mobile application security testing for iOS and Android platforms. We analyze app binaries, test API communications, check data storage security, examine authentication mechanisms, and identify platform-specific vulnerabilities.',
    path: '/pentest/mobile',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Security Assessment',
    description: 'Thorough cloud infrastructure security testing for AWS, Azure, and GCP environments. We assess IAM configurations, storage security, network segmentation, container security, and compliance with cloud security best practices.',
    path: '/pentest/cloud',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Network,
    title: 'Network Pentesting',
    description: 'Comprehensive internal and external network security assessments. We identify vulnerabilities in network devices, test firewall configurations, assess wireless security, and simulate real-world attack scenarios to strengthen your network defenses.',
    path: '/pentest/network',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Cpu,
    title: 'AI/ML Security Testing',
    description: 'Specialized security testing for AI and machine learning systems. We test for prompt injection attacks, model poisoning, data leakage, adversarial inputs, and AI-specific vulnerabilities to ensure your AI systems are secure and reliable.',
    path: '/pentest/ai',
    color: 'from-teal-500 to-cyan-500'
  }
]

const ProcessTimeline = () => {
  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Pentesting Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional security testing across all platforms and technologies
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <Link to={service.path}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      <div className="bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all cursor-pointer">
                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} border-4 border-white shadow-lg`}
                  ></motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline

