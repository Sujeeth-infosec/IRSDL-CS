import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <img src={logo} alt="IRSDL Research & Thrive" className="h-12 mb-4" />
          <p className="text-sm text-slate-200">
            Elite cybersecurity and digital resilience for forward-looking enterprises.
          </p>
        </div>
        <div>
          <p className="font-semibold text-sm uppercase tracking-wide text-slate-300">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/services" className="hover:text-accent transition">
              Services
            </Link>
            <Link to="/about" className="hover:text-accent transition">
              About
            </Link>
            <Link to="/careers" className="hover:text-accent transition">
              Careers
            </Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm uppercase tracking-wide text-slate-300">Contact</p>
          <div className="mt-4 text-sm text-slate-200 space-y-1">
            <p>+1 (555) 987-1234</p>
            <p>contact@irsdlcyber.com</p>
            <p>900 Cyber Ave, Suite 1200, Austin, TX</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm uppercase tracking-wide text-slate-300">Follow</p>
          <div className="mt-4 flex gap-3 text-sm text-slate-200">
            <a href="#" className="hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="hover:text-accent">
              Twitter
            </a>
            <a href="#" className="hover:text-accent">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-slate-400 py-4">
        © {year} IRSDL CyberSecure. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

