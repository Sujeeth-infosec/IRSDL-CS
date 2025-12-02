import { Link } from 'react-router-dom'

type CTASectionProps = {
  title?: string
  description?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

const CTASection = ({ 
  title = "Ready to Secure Your Digital Assets?",
  description = "Get started with a comprehensive security assessment today.",
  primaryCta = { label: "Get Started", href: "/contact" },
  secondaryCta = { label: "Learn More", href: "/services" }
}: CTASectionProps) => (
  <section className="bg-gradient-to-r from-primary via-neon to-accent text-gray-900 rounded-3xl px-8 py-12 lg:px-16 lg:py-16 shadow-panel">
    <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-gray-900/80 mt-4 max-w-2xl">{description}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link to={primaryCta.href} className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg">
          {primaryCta.label}
        </Link>
        {secondaryCta && (
          <Link
            to={secondaryCta.href}
            className="border border-white/30 text-gray-900 px-6 py-3 rounded-full font-semibold"
          >
            {secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  </section>
)

export default CTASection


