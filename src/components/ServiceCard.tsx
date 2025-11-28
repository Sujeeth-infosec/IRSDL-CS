import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ServiceCardProps = {
  slug: string
  title: string
  description: string
  icon: ReactNode
}

const ServiceCard = ({ slug, title, description, icon }: ServiceCardProps) => (
  <Link
    to={`/services/${slug}`}
    className="group surface-light rounded-2xl p-6 hover:-translate-y-1 transition"
  >
    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 border border-primary/10">
      {icon}
    </div>
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-lg font-semibold text-midnight">{title}</p>
        <p className="text-sm text-slate-600 mt-2 line-clamp-3">{description}</p>
      </div>
      <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition" />
    </div>
  </Link>
)

export default ServiceCard

