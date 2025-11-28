import HeroSection from '../components/HeroSection'
import { services } from '../data/services'
import { stats } from '../data/stats'
import StatsCounter from '../components/StatsCounter'
import ServiceCard from '../components/ServiceCard'
import TestimonialsSlider from '../components/TestimonialsSlider'
import CTASection from '../components/CTASection'
import FeatureShowcase from '../components/FeatureShowcase'
import { featureShowcases } from '../data/features'
import { Shield, Target, ServerCog, Radar, CloudCog, Bug, ShieldCheck, Headset } from 'lucide-react'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  vapt: <Shield className="h-6 w-6" />,
  'red-team': <Target className="h-6 w-6" />,
  soc: <Headset className="h-6 w-6" />,
  'threat-intelligence': <Radar className="h-6 w-6" />,
  'cloud-security': <CloudCog className="h-6 w-6" />,
  devsecops: <ServerCog className="h-6 w-6" />,
  'incident-response': <ShieldCheck className="h-6 w-6" />,
  'digital-forensics': <Bug className="h-6 w-6" />,
  'malware-analysis': <Bug className="h-6 w-6" />,
  'security-consulting': <ShieldCheck className="h-6 w-6" />,
}

const Home = () => {
  const featuredServices = services.slice(0, 6)

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      <HeroSection
        eyebrow="Securing Digital India"
        title={
          <>
            Protect India’s code, cloud, and citizens <span className="text-primary">without compromise.</span>
          </>
        }
        description="From RBI-regulated banks to ONDC startups, IRSDL CyberSecure delivers Indian threat intelligence, CERT-In aligned SOC operations, and cloud guardrails built for Mumbai, Hyderabad, and Delhi regions."
        primaryCta={{ label: 'Start for Free', href: '/contact' }}
        secondaryCta={{ label: 'Book a Demo', href: '/contact' }}
      />

      {featureShowcases.map((feature, index) => (
        <FeatureShowcase key={feature.title} {...feature} reverse={index % 2 === 1} />
      ))}

      <section className="surface-light rounded-3xl p-8 lg:p-12 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">What we secure</p>
            <h2 className="text-3xl font-bold text-midnight mt-2">Unified cybersecurity services</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.tagline}
              icon={iconMap[service.slug] ?? <Shield className="h-6 w-6" />}
            />
          ))}
        </div>
      </section>

      <section className="surface-light rounded-3xl p-8 lg:p-12 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Proof in numbers</p>
            <h2 className="text-3xl font-bold text-midnight mt-2">Outcomes that stand up to Indian board scrutiny</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatsCounter key={item.label} label={item.label} value={item.value} suffix={item.suffix} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <TestimonialsSlider />
        <div className="surface-light rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">Active monitoring</p>
            <h3 className="text-2xl font-bold text-midnight mt-2">50k+ assets observed across Indian regions</h3>
            <p className="text-sm text-slate-600 mt-4">
              Live dashboards correlate CERT-In feeds, ISAC alerts, and your telemetry to surface threats in under 30
              seconds.
            </p>
          </div>
          <button className="mt-8 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-2xl font-semibold shadow-lg">
            See how it works
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-white/5 bg-panel/60 p-8 lg:p-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-neon">Nationwide presence</p>
          <h3 className="text-3xl font-bold text-white">Fusion teams across Bengaluru, Mumbai, Delhi NCR</h3>
          <p className="text-slate-300">
            Embedded responders can be onsite within four hours in every Indian metro. Regional playbooks cover UPI,
            ONDC, UIDAI, and Smart City workloads with localized forensic readiness.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl bg-midnight/80 p-4 border border-white/5">
              <p className="text-xl font-semibold text-primary">4 hrs</p>
              <p className="text-slate-400 mt-1">IR arrival SLA across metros</p>
            </div>
            <div className="rounded-2xl bg-midnight/80 p-4 border border-white/5">
              <p className="text-xl font-semibold text-primary">12</p>
              <p className="text-slate-400 mt-1">Indian industries covered</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
            alt="Indian cyber operations"
            className="relative rounded-2xl border border-white/10 shadow-2xl w-full h-full object-cover min-h-[320px]"
            loading="lazy"
          />
        </div>
      </section>

      <CTASection
        title="Ready to outpace attackers?"
        description="Bring IRSDL CyberSecure into your stack for unified VAPT, SOC, threat intelligence, DevSecOps, and IR response—purpose-built for India’s regulatory landscape."
        primaryCta={{ label: 'Book a demo', href: '/contact' }}
        secondaryCta={{ label: 'Explore services', href: '/services' }}
      />
    </div>
  )
}

export default Home

