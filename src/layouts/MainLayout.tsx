import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConstructionBanner from '../components/ConstructionBanner'

const MainLayout = () => (
  <div 
    className="min-h-screen w-screen bg-black text-gray-900 flex flex-col overflow-hidden" 
    style={{ margin: 0, padding: 0, width: '100%', maxWidth: '100%' }}
  >
    <ConstructionBanner />
    <Navbar />
    
    <main 
      className="flex-1 w-screen bg-white" 
      style={{ margin: 0, padding: 0, width: '100%' }}
    >
      <Outlet />
    </main>
    
    <Footer />
  </div>
)

export default MainLayout
