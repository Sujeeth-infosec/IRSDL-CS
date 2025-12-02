import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Award, ArrowRight, CheckCircle } from 'lucide-react'
import SimpleBackground from '../components/SimpleBackground'

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Penetration Tester',
      department: 'Security Testing',
      location: 'Bengaluru, Karnataka',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹15-25 LPA',
      skills: ['OSCP', 'Web Security', 'Network Security', 'Python'],
      description: 'Lead penetration testing engagements for enterprise clients across India.'
    },
    {
      title: 'Cloud Security Engineer',
      department: 'Cloud Security',
      location: 'Gurugram, Haryana',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹12-20 LPA',
      skills: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
      description: 'Secure cloud infrastructure for Indian enterprises with focus on data residency.'
    },
    {
      title: 'SOC Analyst',
      department: 'Security Operations',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-15 LPA',
      skills: ['SIEM', 'Threat Hunting', 'Incident Response', 'CERT-In'],
      description: '24/7 security monitoring and incident response for critical infrastructure.'
    },
    {
      title: 'Application Security Engineer',
      department: 'AppSec',
      location: 'Hyderabad, Telangana',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹10-18 LPA',
      skills: ['SAST', 'DAST', 'Secure SDLC', 'DevSecOps'],
      description: 'Integrate security into development lifecycle for enterprise applications.'
    },
    {
      title: 'Compliance Manager',
      department: 'GRC',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹12-20 LPA',
      skills: ['ISO 27001', 'RBI', 'IRDAI', 'SEBI', 'Audit'],
      description: 'Ensure compliance with Indian regulatory frameworks and international standards.'
    },
    {
      title: 'Security Researcher',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '₹15-25 LPA',
      skills: ['Vulnerability Research', 'Exploit Development', 'Bug Bounty'],
      description: 'Discover and research new security vulnerabilities and attack techniques.'
    }
  ]

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
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Build Your Career in
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Join India's premier cybersecurity team. Work with CERT-In certified experts on 
              cutting-edge security challenges for enterprise clients.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Security Experts' },
              { value: '15+', label: 'Indian Cities' },
              { value: '100%', label: 'Certification Support' },
              { value: '4.8/5', label: 'Employee Rating' }
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

      {/* Benefits Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="relative w-full py-24 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Join Our Team
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              {openPositions.length} positions available across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-blue-400 font-semibold">{position.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-400 font-semibold">
                    {position.type}
                  </span>
                </div>

                <p className="text-gray-400 mb-6">{position.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{position.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    <span>{position.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-blue-400 mb-3">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, i) => (
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
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
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
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Culture</span>
              <h2 className="text-4xl font-bold text-white mt-4 mb-6">
                What We Value
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We believe in creating an environment where security professionals can thrive, 
                learn, and make a real impact on India's cybersecurity landscape.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
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
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-2xl"></div>
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
            <Briefcase className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented security professionals. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/50 transition-all"
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
