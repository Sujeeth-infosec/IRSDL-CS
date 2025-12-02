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
    <div className="relative bg-white min-h-screen">
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
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Securing India's
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                To empower Indian enterprises with world-class cybersecurity solutions that comply 
                with local regulations while meeting international standards.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
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
                    <span className="text-gray-700">{item}</span>
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
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
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
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Expertise Section */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Industry-Leading Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions backed by cutting-edge technology and proven methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Threat Intelligence',
                description: 'Real-time threat monitoring with AI-powered analytics covering 50+ threat actor groups targeting Indian enterprises.',
                stats: '10M+ threats analyzed daily',
                icon: Shield
              },
              {
                title: 'Regulatory Compliance',
                description: 'Expert guidance on RBI, SEBI, IRDAI, MeitY, and CERT-In frameworks with automated compliance tracking.',
                stats: '100% compliance success rate',
                icon: CheckCircle
              },
              {
                title: 'Incident Response',
                description: '24/7 rapid response team with <15 minute SLA for critical incidents across all Indian time zones.',
                stats: 'Average 12-min response time',
                icon: Target
              },
              {
                title: 'Security Operations Center',
                description: 'State-of-the-art SOC facilities in Bengaluru, Mumbai, and Gurugram with 24/7/365 monitoring.',
                stats: '99.99% uptime guarantee',
                icon: Eye
              },
              {
                title: 'Penetration Testing',
                description: 'OWASP Top 10, SANS Top 25, and CERT-In methodology-based testing with comprehensive reporting.',
                stats: '500+ assessments annually',
                icon: Award
              },
              {
                title: 'Security Training',
                description: 'Customized security awareness programs for employees with phishing simulations and compliance training.',
                stats: '10,000+ professionals trained',
                icon: Heart
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-blue-600">{item.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Infrastructure */}
      <section className="relative w-full py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Enterprise-Grade Technology Stack
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Tools & Platforms</h3>
                <div className="space-y-4">
                  {[
                    'Burp Suite Professional & Enterprise',
                    'Metasploit Framework & Pro',
                    'Nessus Professional & Tenable.io',
                    'Qualys VMDR & Web Application Scanning',
                    'Splunk Enterprise Security',
                    'IBM QRadar SIEM',
                    'CrowdStrike Falcon Platform',
                    'Palo Alto Networks Cortex XDR'
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Center Locations</h3>
                <div className="space-y-6">
                  {[
                    { city: 'Bengaluru', facility: 'Tier III Data Center', capacity: 'Primary SOC' },
                    { city: 'Mumbai', facility: 'Tier III Data Center', capacity: 'DR Site' },
                    { city: 'Gurugram', facility: 'Tier III Data Center', capacity: 'Secondary SOC' },
                    { city: 'Hyderabad', facility: 'Tier II Data Center', capacity: 'Testing Lab' }
                  ].map((location, i) => (
                    <div key={i} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span className="font-bold text-gray-900">{location.city}</span>
                      </div>
                      <p className="text-sm text-gray-600">{location.facility}</p>
                      <p className="text-sm text-blue-600 font-semibold">{location.capacity}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="relative w-full py-24">
        <div className="w-full px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-12"
          >
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Protecting critical infrastructure and sensitive data for Fortune 500 companies, government agencies, and high-growth startups across India
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { number: '200+', label: 'Enterprise Clients', sublabel: 'Across 15+ industries' },
                { number: '50+', label: 'Government Projects', sublabel: 'Central & State agencies' },
                { number: '1000+', label: 'Security Assessments', sublabel: 'Completed successfully' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.sublabel}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-center text-gray-600 mb-6 font-semibold">Industry Sectors We Serve</p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Banking & Finance', 'Healthcare', 'E-commerce', 'Government', 'Manufacturing', 'Telecom', 'Education', 'Energy & Utilities', 'Insurance', 'SaaS Platforms'].map((sector, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-700 font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

