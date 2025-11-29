import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SimpleBackground from '../components/SimpleBackground'

const Contact = () => {
  const offices = [
    {
      title: 'Head Office',
      location: 'Tirupati, Andhra Pradesh',
      address: '23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, AP - 517502',
      phone: '+91 12345 67890',
      email: 'tirupati@irsdlcyber.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    },
    {
      title: 'Bangalore Branch',
      location: 'Bangalore, Karnataka',
      address: '57 Novel Business Park, Gajendra Nager, Hosur Road, Anepalya, Bangalore - 560030',
      phone: '+91 98765 43210',
      email: 'bangalore@irsdlcyber.com',
      hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our security experts',
      value: '+91 12345 67890',
      action: 'tel:+911234567890',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get a response within 24 hours',
      value: 'contact@irsdlcyber.com',
      action: 'mailto:contact@irsdlcyber.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team instantly',
      value: 'Start Chat',
      action: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      value: 'Book Now',
      action: '#',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="relative bg-slate-900 min-h-screen">
      <SimpleBackground />
      
      {/* Hero Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Let's Secure Your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Assets
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Talk with our cybersecurity experts. We respond within one business day for advisory 
              and within minutes for incident response.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative w-full py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="text-blue-400 font-semibold">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Our Offices</h2>
                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-slate-700/50 last:border-0 pb-8 last:pb-0">
                      <h3 className="text-xl font-bold text-white mb-2">{office.title}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{office.location}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 text-sm">{office.address}</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-gray-300 text-sm hover:text-blue-400 transition">
                            {office.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-gray-300 text-sm hover:text-blue-400 transition">
                            {office.email}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <p className="text-gray-300 text-sm">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-red-400/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">24/7 Incident Response</h3>
                    <p className="text-gray-300 text-sm">Emergency security hotline</p>
                  </div>
                </div>
                <a 
                  href="tel:+919876543210"
                  className="text-2xl font-bold text-white hover:text-red-400 transition"
                >
                  +91 98765 43210
                </a>
                <p className="text-gray-400 text-sm mt-2">
                  For immediate security incidents and breach response
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative w-full py-24 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Visit Our Offices</h2>
            <p className="text-gray-400 text-lg">We're located across major Indian cities</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{office.title}</h3>
                  <p className="text-gray-400 text-sm">{office.address}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-12 text-center"
          >
            <Send className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our cybersecurity experts are ready to help you secure your digital infrastructure. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:contact@irsdlcyber.com"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
