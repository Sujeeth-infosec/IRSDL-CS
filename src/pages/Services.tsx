import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import {
  Shield,
  Target,
  Headset,
  Radar,
  CloudCog,
  ServerCog,
  ShieldCheck,
  Fingerprint,
  Bug,
  Landmark,
} from 'lucide-react'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  vapt: <Shield className="h-6 w-6" />,
  'red-team': <Target className="h-6 w-6" />,
  soc: <Headset className="h-6 w-6" />,
  'threat-intelligence': <Radar className="h-6 w-6" />,
  'cloud-security': <CloudCog className="h-6 w-6" />,
  devsecops: <ServerCog className="h-6 w-6" />,
  'incident-response': <ShieldCheck className="h-6 w-6" />,
  'digital-forensics': <Fingerprint className="h-6 w-6" />,
  'malware-analysis': <Bug className="h-6 w-6" />,
  'security-consulting': <Landmark className="h-6 w-6" />,
}

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">Service catalog</p>
        <h1 className="text-4xl font-bold text-ink mt-3">Cybersecurity without compromises</h1>
        <p className="text-slate-600 mt-4">
          Whether you need deep offensive testing, cloud guardrails, or 24/7 detection and response, we deploy the exact
          team and tooling stack you need.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            slug={service.slug}
            title={service.title}
            description={service.tagline}
            icon={iconMap[service.slug] ?? <Shield className="h-6 w-6" />}
          />
        ))}
      </div>
    </div>
  )
}

export default Services

