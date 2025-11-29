import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'
import CTASection from '../components/CTASection'
import { ArrowLeft } from 'lucide-react'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-2xl font-bold text-ink">Service not found</p>
        <p className="text-slate-600">The service you are looking for does not exist. Browse the catalog to find a match.</p>
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold">
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      <section className="hero-gradient rounded-3xl p-8 lg:p-12 shadow-panel relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="relative">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">{service.title}</p>
          <h1 className="text-4xl font-bold text-ink">{service.tagline}</h1>
          <p className="text-slate-700 mt-6 max-w-3xl">{service.overview}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/40">
              Engage this service
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-ink">
              <ArrowLeft className="h-4 w-4" />
              Back to catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-ink mb-4">Methodology</h2>
          <ul className="space-y-3 text-slate-700">
            {service.methodology.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-panel rounded-3xl p-8">
          <h2 className="text-2xl font-semibold text-ink mb-4">Tools we deploy</h2>
          <div className="flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span key={tool} className="px-4 py-2 bg-mist rounded-full text-sm text-ink">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-semibold text-ink mb-4">Strategic benefits</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="p-4 border border-slate-100 rounded-2xl bg-white">
              <p className="text-slate-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Need this capability on standby?"
        description="Engage our response-ready teams to deploy this service as a subscription or managed program tailored to your environment."
        primaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />
    </div>
  )
}

export default ServiceDetail

