import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe, Shield, Cloud, Smartphone, Network, Cpu } from 'lucide-react'
import logo from '../assets/logo.svg'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const hoverTimeout = useRef<number>()

  const openMega = () => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current)
    setMegaOpen(true)
  }

  const closeMega = () => {
    hoverTimeout.current = window.setTimeout(() => setMegaOpen(false), 120)
  }

  const pentestServices = [
    { icon: Shield, label: 'Web', description: 'Full-stack web and SaaS pentests' },
    { icon: Globe, label: 'API', description: 'OWASP API Top 10 coverage' },
    { icon: Cpu, label: 'AI', description: 'Prompt injection and model abuse' },
    { icon: Cloud, label: 'Cloud', description: 'AWS, Azure, GCP posture' },
    { icon: Smartphone, label: 'Mobile', description: 'iOS and Android assessments' },
    { icon: Network, label: 'Network', description: 'Internal and perimeter reviews' },
  ]

  const industries = ['Healthcare', 'SaaS', 'Fintech', 'Manufacturing', 'Public Sector']
  const processSteps = ['Security Research', 'Threat Modeling', 'Pentest Execution', 'Reporting & Hardening']

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-midnight/95 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 relative">
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg text-primary">
          <img src={logo} alt="IRSDL Research & Thrive" className="h-12 w-auto" />
          <span className="sr-only">IRSDL CyberSecure</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className="text-slate-200 hover:text-primary transition">Pentest</button>
            {megaOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-12 w-[680px] bg-white text-midnight shadow-2xl rounded-3xl border border-slate-100 p-6 grid gap-6 z-40"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-primary tracking-[0.4em]">Pentest services</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {pentestServices.map((service) => (
                      <div key={service.label} className="flex gap-3 items-start">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-midnight">{service.label}</p>
                          <p className="text-xs text-slate-500">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary tracking-widest">Industry focus</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {industries.map((industry) => (
                        <li key={industry} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary tracking-widest">Astra-style process</p>
                    <ol className="mt-3 space-y-3">
                      {processSteps.map((step, idx) => (
                        <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                          <span className="text-primary font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-slate-600">
                  <div>
                    <p className="text-sm font-semibold text-midnight">Need guidance?</p>
                    <p className="text-xs text-slate-500">Speak with our lead offensive architect in under 3 minutes.</p>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    Book a pentest
                  </Link>
                </div>
              </div>
            )}
          </div>
            {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-accent to-azure text-white px-4 py-2 rounded-full text-sm shadow-lg shadow-accent/30 transition hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </nav>

        <button className="md:hidden text-slate-200" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-t border-white/5 px-4 pb-6">
          <div className="flex flex-col gap-4 py-4 text-slate-200">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-slate-200 font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-accent to-azure text-white px-4 py-2 rounded-full text-center shadow-lg shadow-accent/30"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

