import AnimatedHero from '../components/AnimatedHero'
import AdvancedBackground from '../components/AdvancedBackground'
import EnhancedServices from '../components/EnhancedServices'
import InteractiveFeatures from '../components/InteractiveFeatures'
import AnimatedStats from '../components/AnimatedStats'
import ModernTestimonials from '../components/ModernTestimonials'
import CTASection from '../components/CTASection'

const ProfessionalHome = () => {
  return (
    <div className="relative">
      <AdvancedBackground />
      <AnimatedHero />
      <EnhancedServices />
      <InteractiveFeatures />
      <AnimatedStats />
      <ModernTestimonials />
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
