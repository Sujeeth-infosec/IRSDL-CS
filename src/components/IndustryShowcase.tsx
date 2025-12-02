import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, DollarSign, Cloud, Factory, Building2, ArrowRight } from 'lucide-react'

const industries = [
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant security for patient data and medical systems',
    stats: '150+ Healthcare Clients',
    color: 'from-red-500 to-pink-500',
    link: '/industries/healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: DollarSign,
    title: 'Fintech',
    description: 'RBI and PCI-DSS compliant security for financial services',
    stats: '200+ Financial Institutions',
    color: 'from-green-500 to-emerald-500',
    link: '/industries/fintech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Cloud,
    title: 'SaaS',
    description: 'Cloud-native security for modern software platforms',
    stats: '300+ SaaS Companies',
    color: 'from-blue-500 to-cyan-500',
    link: '/industries/saas',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'ICS/SCADA security for industrial operations',
    stats: '100+ Manufacturing Units',
    color: 'from-orange-500 to-red-500',
    link: '/industries/manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Building2,
    title: 'Public Sector',
    description: 'Government-grade security with CERT-In alignment',
    stats: '50+ Government Agencies',
    color: 'from-indigo-500 to-purple-500',
    link: '/industries/public-sector',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
]

const IndustryShowcase = () => {
  return (
    <section className="py-10 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Specialized Security Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-specific expertise with deep understanding of regulatory requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={industry.link}>
                <div className="relative bg-gradient-to-br from-gray-50/50 to-white/50 backdrop-blur-xl border border-gray-200/50 rounded-2xl overflow-hidden h-full hover:border-blue-500/50 transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-white/50 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${industry.color} shadow-lg`}>
                      <industry.icon className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {industry.description}
                    </p>
                    
                    {/* Stats */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${industry.color} bg-opacity-10 border border-current mb-4`}>
                      <span className="text-sm font-semibold text-gray-900">{industry.stats}</span>
                    </div>

                    {/* Link */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${industry.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryShowcase

