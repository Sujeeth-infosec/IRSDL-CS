type FeatureShowcaseProps = {
  title: string
  description: string
  bullets: string[]
  image: string
  reverse?: boolean
}

const FeatureShowcase = ({ title, description, bullets, image, reverse }: FeatureShowcaseProps) => (
  <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-panel/80 p-8 lg:p-12 shadow-panel grid gap-10 lg:grid-cols-2">
    <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-neon">India ready</p>
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-slate-300">{description}</p>
      <ul className="space-y-3 text-slate-200">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
    <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/30 blur-3xl opacity-70" />
      <img
        src={image}
        alt={title}
        className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-full object-cover min-h-[280px]"
        loading="lazy"
      />
    </div>
  </section>
)

export default FeatureShowcase

