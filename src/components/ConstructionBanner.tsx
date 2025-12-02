import { span } from 'framer-motion/client'
import { Construction } from 'lucide-react'

const ConstructionBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[40] bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        <div className="inline-flex items-center gap-8 px-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-2">
              <Construction className="w-4 h-4" />
              <span className="font-bold text-sm">SITE UNDER CONSTRUCTION</span>
              <Construction className="w-4 h-4" />
              <span className="text-sm opacity-75">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConstructionBanner
