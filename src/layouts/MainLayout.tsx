import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => (
  <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%),_#05031a] text-ink flex flex-col">
    <Navbar />
    <main className="flex-1 pt-24 pb-16">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default MainLayout

