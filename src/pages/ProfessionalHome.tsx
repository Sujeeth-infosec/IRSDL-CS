import AnimatedHero from '../components/AnimatedHero'
import CyberThreeBackground from '../components/CyberThreeBackground'
import ProcessTimeline from '../components/ProcessTimeline'
import LiveThreatMap from '../components/LiveThreatMap'
import CompetitiveAdvantage from '../components/CompetitiveAdvantage'
import CTASection from '../components/CTASection'
import CompanyStory from '../components/CompanyStory'
import ConstructionBanner from '../components/ConstructionBanner'

const ProfessionalHome = () => {
  return (
    <div className="relative w-full m-0 p-0">
      <ConstructionBanner />
      <CyberThreeBackground />
      <AnimatedHero />
      <CompanyStory />
      <ProcessTimeline />
      <LiveThreatMap />
      <CompetitiveAdvantage />
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
