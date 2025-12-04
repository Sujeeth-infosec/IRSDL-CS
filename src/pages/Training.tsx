import { motion } from 'framer-motion'
import { Users, BookOpen, Target, Shield } from 'lucide-react'
import SimpleBackground from '../components/SimpleBackground'

const Training = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SimpleBackground />
      
      {/* Hero Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Security Training Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empower your team with hands-on cybersecurity training and security awareness programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="relative w-full py-16">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Web, API & Mobile Penetration Testing Training',
                description: 'Comprehensive hands-on training covering web application, API, and mobile app security testing. Learn OWASP Top 10, testing tools, and real-world exploitation techniques.',
                path: '/training/web-api-mobile',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Target,
                title: 'Ethical Hacking Training',
                description: 'Master the art of ethical hacking with comprehensive training on reconnaissance, exploitation, system hacking, and post-exploitation techniques.',
                path: '/training/ethical-hacking',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: BookOpen,
                title: 'Network Penetration Testing',
                description: 'Learn to identify and exploit network vulnerabilities, including port scanning, service enumeration, wireless testing, and firewall evasion.',
                path: '/training/network-pentest',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Cloud Penetration Testing',
                description: 'Master cloud security testing for AWS, Azure, and GCP. Learn IAM testing, storage security, container security, and cloud misconfigurations.',
                path: '/training/cloud-pentest',
                color: 'from-orange-500 to-red-500'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={program.path}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                      <program.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional, practical, and effective security training programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Instructors',
                description: 'Learn from certified security professionals with real-world experience in penetration testing and security operations.'
              },
              {
                title: 'Hands-On Learning',
                description: 'Practical exercises and real-world scenarios to reinforce learning and build practical skills.'
              },
              {
                title: 'Flexible Delivery',
                description: 'On-site, remote, or hybrid training options to fit your team\'s schedule and preferences.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Strengthen Your Team's Security Skills?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your training needs and get a customized program for your organization
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all hover:scale-105"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Training
