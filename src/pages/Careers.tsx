import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Award, ArrowRight, CheckCircle } from 'lucide-react'
import SimpleBackground from '../components/SimpleBackground'

const Careers = () => {
  const openPositions: any[] = []

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression path with regular training and certifications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Sponsored OSCP, CISSP, CEH, and other security certifications',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with experienced security professionals',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Briefcase,
      title: 'Latest Tools',
      description: 'Access to cutting-edge security tools and technologies',
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  const values = [
    'Innovation in cybersecurity',
    'Continuous learning',
    'Ethical hacking practices',
    'Client-first approach',
    'Team collaboration',
    'Work-life balance'
  ]

  return (
    <div className="relative bg-white min-h-screen">
      <SimpleBackground />
      
      {/* Hero Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Build Your Career in
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Join India's premier cybersecurity team. Work with CERT-In certified experts on 
              cutting-edge security challenges for enterprise clients.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Benefits & Perks
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                  <benefit.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="relative w-full py-24 bg-white">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Join Our Team
            </h2>
          </motion.div>

          {openPositions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-12"
            >
              <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Current Openings</h3>
              <p className="text-gray-700 mb-6">
                We don't have any open positions at the moment, but we're always looking for talented 
                cybersecurity professionals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-blue-600 font-semibold">{position.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-400 font-semibold">
                    {position.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{position.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>{position.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span>{position.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-blue-600 mb-3">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Culture</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                What We Value
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                We believe in creating an environment where security professionals can thrive, 
                learn, and make a real impact on India's cybersecurity landscape.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
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
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
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
            <Briefcase className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              We're always looking for talented security professionals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers

