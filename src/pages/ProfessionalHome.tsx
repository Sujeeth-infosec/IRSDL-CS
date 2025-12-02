import AnimatedHero from '../components/AnimatedHero'
import AdvancedBackground from '../components/AdvancedBackground'
import TrustedBy from '../components/TrustedBy'
import SecurityDashboard from '../components/SecurityDashboard'
import SecurityInsights from '../components/SecurityInsights'
import ProcessTimeline from '../components/ProcessTimeline'
import LiveThreatMap from '../components/LiveThreatMap'
import CompetitiveAdvantage from '../components/CompetitiveAdvantage'
import AnimatedStats from '../components/AnimatedStats'
import CaseStudies from '../components/CaseStudies'
import ModernTestimonials from '../components/ModernTestimonials'
import CTASection from '../components/CTASection'
import CompanyStory from '../components/CompanyStory'
import ConstructionBanner from '../components/ConstructionBanner'

const ProfessionalHome = () => {
  return (
    <div className="relative">
      <ConstructionBanner />
      <AdvancedBackground />
      <AnimatedHero />
      <TrustedBy />
      <CompanyStory />
      <SecurityInsights />
      <SecurityDashboard />
      <ProcessTimeline />
      <LiveThreatMap />
      <CompetitiveAdvantage />
      <AnimatedStats />
      <CaseStudies />
      <ModernTestimonials />
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
