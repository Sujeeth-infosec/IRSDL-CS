type FeatureShowcaseProps = {
  title: string
  description: string
  bullets: string[]
  image: string
  reverse?: boolean
}

const FeatureShowcase = ({ title, description, bullets, image, reverse }: FeatureShowcaseProps) => (
  <section className={`grid gap-10 lg:grid-cols-2 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
      <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">India ready</p>
      <h3 className="text-4xl font-bold text-slate-900">{title}</h3>
      <p className="text-lg text-slate-600">{description}</p>
      <ul className="space-y-4 text-slate-700">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-xl blur-2xl opacity-50" />
      <img
        src={image}
        alt={title}
        className="relative rounded-xl border border-slate-200 shadow-xl w-full h-full object-cover min-h-[400px]"
        loading="lazy"
      />
    </div>
  </section>
)

export default FeatureShowcase
