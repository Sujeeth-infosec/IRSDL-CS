import AnimatedHero from '../components/AnimatedHero'
import SimpleBackground from '../components/SimpleBackground'
import ParticleNetwork from '../components/ParticleNetwork'
import EnhancedServices from '../components/EnhancedServices'
import InteractiveFeatures from '../components/InteractiveFeatures'
import AnimatedStats from '../components/AnimatedStats'
import TestimonialsSlider from '../components/TestimonialsSlider'
import CTASection from '../components/CTASection'

const ProfessionalHome = () => {
  return (
    <div className="relative bg-slate-900">
      <SimpleBackground />
      <ParticleNetwork />
      <AnimatedHero />
      <EnhancedServices />
      <InteractiveFeatures />
      <AnimatedStats />
      <div className="w-full px-6 lg:px-12 py-20">
        <TestimonialsSlider />
      </div>
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
