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
    className="group block h-full"
  >
    <div className="h-full">
      <div className="h-12 w-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 mb-4 transition-colors">
        {icon}
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</p>
          <p className="text-sm text-slate-600 mt-2 line-clamp-3">{description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-blue-600 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
      </div>
    </div>
  </Link>
)

export default ServiceCard
