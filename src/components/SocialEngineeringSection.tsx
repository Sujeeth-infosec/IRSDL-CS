import { motion } from 'framer-motion'
import { Users, Mail, Phone, MessageSquare, AlertTriangle, Shield } from 'lucide-react'

const SocialEngineeringSection = () => {
  return (
    <section className="relative w-full py-24 bg-white">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-orange-100 rounded-full px-6 py-3 mb-6">
              <Users className="w-6 h-6 text-orange-600" />
              <span className="font-semibold text-orange-900">Human Factor Testing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Social Engineering
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Test your organization's human defenses against manipulation tactics used by cybercriminals. 
              Our social engineering assessments identify vulnerabilities in employee awareness and security culture.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                  alt="Social Engineering"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <AlertTriangle className="w-6 h-6" />
                      <span className="font-bold text-lg">95% of breaches involve human error</span>
                    </div>
                    <p className="text-sm text-white/90">Train your team to recognize and prevent attacks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Social Engineering Services
              </h3>

              <div className="grid gap-6">
                {[
                  {
                    icon: Mail,
                    title: 'Phishing Campaigns',
                    description: 'Simulated phishing attacks to test employee awareness and response to malicious emails.',
                    color: 'from-red-500 to-orange-500'
                  },
                  {
                    icon: Phone,
                    title: 'Vishing (Voice Phishing)',
                    description: 'Phone-based social engineering tests to assess susceptibility to voice manipulation tactics.',
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Smishing (SMS Phishing)',
                    description: 'Text message-based attacks to evaluate mobile security awareness and response protocols.',
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    icon: Users,
                    title: 'Physical Security Testing',
                    description: 'On-site assessments including tailgating, badge cloning, and unauthorized access attempts.',
                    color: 'from-green-500 to-emerald-500'
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-500/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Security Awareness Training</h4>
                    <p className="text-sm text-gray-700">
                      Following each assessment, we provide comprehensive training programs to educate 
                      employees on recognizing and responding to social engineering attacks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialEngineeringSection
