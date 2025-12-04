import { motion } from 'framer-motion'
import { Shield, CheckCircle, MapPin, Target } from 'lucide-react'
import SimpleBackground from '../components/SimpleBackground'

const About = () => {
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
              About IRSDL Cyber Security
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in cybersecurity, delivering affordable and reliable VAPT services 
              for startups and small businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview with Image */}
      <section className="relative w-full py-16">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  IRSDL CyberSecure is a specialized cybersecurity firm focused on making enterprise-grade 
                  security accessible to startups and small businesses. Founded with the mission to democratize 
                  cybersecurity, we believe that every business, regardless of size, deserves robust protection 
                  against digital threats.
                </p>
                <p>
                  Our team comprises certified security professionals with extensive experience in vulnerability 
                  assessment and penetration testing (VAPT). We combine industry best practices with practical, 
                  cost-effective solutions tailored to the unique needs of growing businesses.
                </p>
                <p>
                  Operating across major Indian cities including Bengaluru, Mumbai, Gurugram, and Hyderabad, 
                  we serve clients nationwide with both on-site and remote security assessment services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Cybersecurity team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Mission, Values & Vision */}
      <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto text-center">
              To deliver cutting-edge technology solutions and professional services that drive digital transformation 
              for businesses across industries, enabling our clients to achieve operational excellence, enhanced security, 
              and sustainable growth in an ever-evolving digital landscape.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At IRSDL, we are guided by principles that define who we are and how we operate
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct our business with the highest ethical standards, building trust through transparency, accountability, and honest communication with our clients, partners, and team members.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace creativity and continuous improvement, staying ahead of technological advancements to deliver solutions that solve complex challenges and create lasting value.'
                },
                {
                  title: 'Excellence',
                  description: 'We are committed to delivering superior quality in every project, service, and interaction, exceeding expectations and setting new benchmarks in our industry.'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and partnerships, working closely with our clients to understand their unique needs and co-create solutions that drive mutual success.'
                },
                {
                  title: 'Customer-Centricity',
                  description: 'We place our clients at the heart of everything we do, ensuring their satisfaction through responsive service, tailored solutions, and unwavering dedication to their success.'
                },
                {
                  title: 'Reliability',
                  description: 'We honor our commitments and deliver consistent, dependable results that our clients can count on, building long-term relationships founded on trust and proven performance.'
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-blue-50 leading-relaxed max-w-5xl mx-auto">
              To be a globally recognized leader in technology solutions and digital services, distinguished by our 
              expertise, innovation, and commitment to empowering organizations worldwide. We aspire to shape the 
              future of business through transformative technologies, creating a connected, secure, and efficient 
              digital ecosystem that benefits enterprises, communities, and stakeholders across all sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Security assessment process"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We conduct thorough vulnerability assessments using industry-standard tools including 
                    Burp Suite, Nmap, Metasploit, and OWASP ZAP. Our methodology covers web applications, 
                    networks, APIs, mobile apps, and cloud infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Reporting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every assessment includes a comprehensive report with executive summary, technical 
                    findings, risk ratings (CVSS scoring), proof-of-concept exploits, and prioritized 
                    remediation recommendations with step-by-step guidance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Post-assessment support includes remediation verification, security awareness training, 
                    and ongoing consultation to help you maintain a strong security posture as your business grows.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="relative w-full py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our security assessments leverage industry-leading tools and methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-7 h-7 text-blue-600" />
                Security Tools
              </h3>
              <div className="space-y-3">
                {[
                  'Burp Suite Professional - Web application security testing',
                  'Nmap - Network discovery and security auditing',
                  'Metasploit Framework - Penetration testing platform',
                  'OWASP ZAP - Web application vulnerability scanner',
                  'Wireshark - Network protocol analyzer',
                  'SQLMap - SQL injection detection and exploitation',
                  'Nikto - Web server scanner',
                  'Nessus - Vulnerability assessment tool'
                ].map((tool, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-blue-600" />
                Testing Methodologies
              </h3>
              <div className="space-y-3">
                {[
                  'OWASP Top 10 - Web application security risks',
                  'OWASP ASVS - Application security verification',
                  'PTES - Penetration Testing Execution Standard',
                  'NIST SP 800-115 - Technical security testing',
                  'OSSTMM - Open Source Security Testing',
                  'CWE Top 25 - Most dangerous software weaknesses',
                  'SANS Top 25 - Most dangerous programming errors',
                  'CERT-In Guidelines - Indian cybersecurity standards'
                ].map((method, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="relative w-full py-20">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide on-site and remote security assessment services across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { city: 'Tirupati', region: 'Andhra Pradesh', services: 'Head Office', badge: 'HQ' },
              { city: 'Bangalore', region: 'Karnataka', services: 'Full VAPT Services', badge: null },
              { city: 'Hyderabad', region: 'Telangana', services: 'Full VAPT Services', badge: null }
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 relative"
              >
                {location.badge && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {location.badge}
                  </span>
                )}
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{location.city}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.region}</p>
                <p className="text-sm text-blue-600 font-semibold">{location.services}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              Remote services available nationwide • On-site assessments in major metros
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative w-full py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose IRSDL CyberSecure</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Affordable, reliable, and comprehensive security solutions for growing businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Affordable Pricing',
                description: 'Transparent pricing models designed for startups and small businesses. No hidden costs, flexible payment options.'
              },
              {
                title: 'Expert Team',
                description: 'Certified security professionals with hands-on experience in real-world penetration testing and vulnerability assessment.'
              },
              {
                title: 'Quick Turnaround',
                description: 'Fast assessment completion with detailed reports delivered within agreed timelines. Rapid response for urgent security needs.'
              },
              {
                title: 'Comprehensive Coverage',
                description: 'Full-spectrum security testing covering web apps, mobile apps, networks, APIs, and cloud infrastructure.'
              },
              {
                title: 'Actionable Reports',
                description: 'Clear, detailed reports with prioritized findings and step-by-step remediation guidance that your team can implement.'
              },
              {
                title: 'Ongoing Support',
                description: 'Post-assessment support including remediation verification, security training, and consultation as you grow.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
