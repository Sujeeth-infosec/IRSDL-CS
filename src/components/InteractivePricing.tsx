import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Zap, Shield, Crown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Startup',
    icon: Zap,
    price: '₹49,999',
    period: '/month',
    description: 'Affordable & Reliable VAPT for Startups & Small Businesses',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Quarterly vulnerability assessments',
      'Basic penetration testing',
      'Email support (24hr response)',
      'Compliance reporting',
      'Up to 5 applications',
      'Monthly security updates'
    ],
    popular: false
  },
  {
    name: 'Business',
    icon: Shield,
    price: '₹1,49,999',
    period: '/month',
    description: 'Ideal for growing businesses',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Monthly vulnerability assessments',
      'Advanced penetration testing',
      'Priority support (4hr response)',
      'Multi-framework compliance',
      'Up to 20 applications',
      'Weekly security updates',
      'Dedicated security analyst',
      'Custom security policies'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'Custom',
    period: '',
    description: 'For large enterprises with complex needs',
    color: 'from-orange-500 to-red-500',
    features: [
      'Continuous security monitoring',
      'Red team operations',
      'VAPT Services',
      'All compliance frameworks',
      'Unlimited applications',
      'Real-time threat intelligence',
      'Dedicated security team',
      'Custom integrations',
      'On-site support available'
    ],
    popular: false
  }
]

const InteractivePricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section className="py-24 w-full relative overflow-hidden">
      <div className="w-full px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
            Transparent, Flexible Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your security needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border ${
                plan.popular ? 'border-purple-500/50' : 'border-slate-700/50'
              } rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${plan.color} mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>

                {/* Decorative gradient */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${plan.color} rounded-full blur-3xl opacity-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            All plans include SSL certificate, basic DDoS protection, and security awareness training.
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 ml-2">
              Contact us for custom requirements →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractivePricing
