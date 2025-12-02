import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => (
  <div className="min-h-screen w-full text-white flex flex-col m-0 p-0">
    <Navbar />
    <main className="flex-1 w-full pt-16 m-0 p-0">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default MainLayout

