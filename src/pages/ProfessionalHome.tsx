import AnimatedHero from '../components/AnimatedHero'
import CyberThreeBackground from '../components/CyberThreeBackground'
import TrustedBy from '../components/TrustedBy'
import ProcessTimeline from '../components/ProcessTimeline'
import LiveThreatMap from '../components/LiveThreatMap'
import CompetitiveAdvantage from '../components/CompetitiveAdvantage'
import ModernTestimonials from '../components/ModernTestimonials'
import CTASection from '../components/CTASection'
import CompanyStory from '../components/CompanyStory'
import ConstructionBanner from '../components/ConstructionBanner'

const ProfessionalHome = () => {
  return (
    <div className="relative">
      <ConstructionBanner />
      <CyberThreeBackground />
      <AnimatedHero />
      <TrustedBy />
      <CompanyStory />
      <ProcessTimeline />
      <LiveThreatMap />
      <CompetitiveAdvantage />
      <ModernTestimonials />
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
