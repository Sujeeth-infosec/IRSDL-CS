import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConstructionBanner from '../components/ConstructionBanner'

const MainLayout = () => (
  <div 
    className="min-h-screen w-full bg-slate-50 text-gray-900 flex flex-col" 
    style={{ margin: 0, padding: 0, width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}
  >
    <ConstructionBanner />
    <Navbar />
    
    <main 
      className="flex-1 w-full" 
      style={{ margin: 0, padding: 0, width: '100vw', maxWidth: '100vw' }}
    >
      <Outlet />
    </main>
    
    <Footer />
  </div>
)

export default MainLayout
