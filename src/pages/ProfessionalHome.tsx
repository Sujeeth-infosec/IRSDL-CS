import CyberHero from '../components/CyberHero'
import CyberThreeBackground from '../components/CyberThreeBackground'
import ProcessTimeline from '../components/ProcessTimeline'
import CompetitiveAdvantage from '../components/CompetitiveAdvantage'
import CTASection from '../components/CTASection'
import CompanyStory from '../components/CompanyStory'

const ProfessionalHome = () => {
  return (
    <div className="relative w-full m-0 p-0">
      <CyberThreeBackground />
      <CyberHero />
      <CompanyStory />
      <ProcessTimeline />
      <CompetitiveAdvantage />
      <div className="w-full px-6 lg:px-12 pb-20">
        <CTASection />
      </div>
    </div>
  )
}

export default ProfessionalHome
