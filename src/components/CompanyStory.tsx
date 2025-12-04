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
                At IRSDL, we offer a comprehensive security check and evaluation for your organization. 
                Our IT environment is further protected and secured through continuous monitoring, quick 
                incident response with management, and adherence to regulatory requirements, all with our 
                support.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The primary goal of our managed security solutions is to prevent your data from falling 
                into the wrong hands, minimize overall risk, and protect your critical information.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                By identifying and analyzing every potential attack vector and vulnerability in our assets, 
                we can develop and provide a robust security framework that ensures full protection for 
                your users, infrastructure, and digital assets.
              </p>

              <div className="flex justify-center pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                >
                  About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory
