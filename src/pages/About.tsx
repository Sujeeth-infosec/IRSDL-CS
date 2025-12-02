import { motion } from 'framer-motion'
import { Shield, Award, MapPin, CheckCircle, Target, Eye, Heart } from 'lucide-react'
import { team, teamStats } from '../data/team'
import SimpleBackground from '../components/SimpleBackground'

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security of Indian enterprises with CERT-In aligned practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Delivering world-class cybersecurity services tailored for Indian regulations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and detailed reporting for all security assessments.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: '24/7 dedicated support with bilingual analysts across Indian metros.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="relative bg-slate-900 min-h-screen">
      <SimpleBackground />
      
      {/* Hero Section */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">About IRSDL CyberSecure</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Securing India's
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              India's premier cybersecurity partner, providing CERT-In aligned security solutions 
              with 24/7 SOC monitoring across Bengaluru, Gurugram, Mumbai, and Hyderabad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: teamStats.totalExperts + '+', label: 'Security Experts' },
              { value: teamStats.certInCertified + '+', label: 'CERT-In Certified' },
              { value: teamStats.avgExperience + '+', label: 'Years Experience' },
              { value: '15+', label: 'Indian Cities' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                To empower Indian enterprises with world-class cybersecurity solutions that comply 
                with local regulations while meeting international standards.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We bridge the gap between global security best practices and India-specific 
                requirements including RBI, IRDAI, SEBI, and MeitY frameworks.
              </p>
              <div className="space-y-4">
                {[
                  'CERT-In empanelled security partner',
                  'ISO 27001:2013 certified operations',
                  'Data localization compliance',
                  'Bilingual support (English & Hindi)'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Meet Our Experts
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              CERT-In certified professionals with deep expertise in Indian cybersecurity landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-xl"></div>
                </div>
                
                <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-400"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center"
          >
            <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Certifications & Compliance</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Recognized by Indian regulatory bodies and international standards organizations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['CERT-In Empanelled', 'ISO 27001:2013', 'SOC 2 Type II', 'PCI DSS', 'RBI Compliant', 'IRDAI Guidelines', 'SEBI Framework', 'MeitY Standards'].map((cert, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 font-semibold"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
