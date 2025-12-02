import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CompanyStory = () => {
  return (
    <section className="relative w-full py-24 bg-gray-50">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              The Story of IRSDL
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="IRSDL Cybersecurity"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                At IRSDL, we're a cybersecurity and digital forensics company committed to protecting 
                your digital world. Our story began with a clear vision — to close the gap between 
                advanced technology and powerful, reliable security solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Backed by hands-on experience and a passionate team of professionals, we've built a 
                strong reputation for protecting businesses and individuals from the constantly evolving 
                landscape of cyber threats. Innovation and trust are at the heart of everything we do.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With CERT-In aligned practices and presence across major Indian cities, we deliver 
                enterprise-grade security solutions tailored for Indian regulations and compliance 
                requirements.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
              >
                About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
