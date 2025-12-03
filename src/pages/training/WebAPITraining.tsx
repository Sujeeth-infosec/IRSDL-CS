import { motion } from 'framer-motion'
import { Globe, Shield, CheckCircle, BookOpen } from 'lucide-react'
import SimpleBackground from '../../components/SimpleBackground'

const WebAPITraining = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SimpleBackground />
      
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Web, API & Mobile Penetration Testing Training
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hands-on training for testing web applications, APIs, and mobile apps
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="space-y-4">
                {[
                  'OWASP Top 10 vulnerabilities and exploitation techniques',
                  'SQL injection, XSS, CSRF, and authentication bypass',
                  'API security testing (REST, GraphQL, SOAP)',
                  'Mobile app security for iOS and Android',
                  'Burp Suite, OWASP ZAP, and other testing tools',
                  'Manual testing techniques and automation',
                  'Report writing and remediation recommendations',
                  'Real-world penetration testing scenarios'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Training session"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Duration', value: '5 Days' },
              { icon: BookOpen, title: 'Level', value: 'Intermediate' },
              { icon: Shield, title: 'Certificate', value: 'Included' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 text-center"
              >
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebAPITraining
