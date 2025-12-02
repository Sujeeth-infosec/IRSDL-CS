import { motion } from 'framer-motion'

const companies = [
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com' },
  { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com' },
  { name: 'HDFC Bank', logo: 'https://logo.clearbit.com/hdfcbank.com' },
  { name: 'ICICI Bank', logo: 'https://logo.clearbit.com/icicibank.com' },
  { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
  { name: 'Paytm', logo: 'https://logo.clearbit.com/paytm.com' },
  { name: 'Zomato', logo: 'https://logo.clearbit.com/zomato.com' }
]

const TrustedBy = () => {
  return (
    <section className="py-8 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-gray-600 text-sm uppercase tracking-wider">Trusted By</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Leading Indian Enterprises
          </h2>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center"
            >
              {[...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center p-4 hover:bg-white/10 transition-all group"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-600 font-semibold text-sm">${company.name}</span>`
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy

