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
    { icon: Shield, label: 'Web', description: 'Full-stack web and SaaS pentests', path: '/pentest/web' },
    { icon: Globe, label: 'API', description: 'OWASP API Top 10 coverage', path: '/pentest/api' },
    { icon: Cpu, label: 'AI', description: 'Prompt injection and model abuse', path: '/pentest/ai' },
    { icon: Cloud, label: 'Cloud', description: 'AWS, Azure, GCP posture', path: '/pentest/cloud' },
    { icon: Smartphone, label: 'Mobile', description: 'iOS and Android assessments', path: '/pentest/mobile' },
    { icon: Network, label: 'Network', description: 'Internal and perimeter reviews', path: '/pentest/network' },
  ]

  const industries = [
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'SaaS', path: '/industries/saas' },
    { name: 'Fintech', path: '/industries/fintech' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Public Sector', path: '/industries/public-sector' },
  ]
  const processSteps = [
    { name: 'Security Research', path: '/process/security-research' },
    { name: 'Threat Modeling', path: '/process/threat-modeling' },
    { name: 'Pentest Execution', path: '/process/pentest-execution' },
    { name: 'Reporting & Hardening', path: '/process/reporting-hardening' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 relative">
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg text-blue-400">
          <img src={logo} alt="IRSDL Research & Thrive" className="h-12 w-auto" />
          <span className="sr-only">IRSDL CyberSecure</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className="text-gray-300 hover:text-blue-400 transition font-semibold">Pentest</button>
            {megaOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-12 w-[680px] bg-slate-800 text-white shadow-2xl rounded-3xl border border-slate-700 p-6 grid gap-6 z-40"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <div>
                  <p className="text-xs font-semibold uppercase text-blue-400 tracking-[0.4em]">Pentest services</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {pentestServices.map((service) => (
                      <Link
                        key={service.label}
                        to={service.path}
                        className="flex gap-3 items-start hover:bg-slate-700/50 p-2 rounded-xl transition"
                      >
                        <div className="h-10 w-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-400/30">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{service.label}</p>
                          <p className="text-xs text-gray-400">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-400 tracking-widest">Industry focus</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.path}
                          className="flex items-center gap-2 hover:text-blue-400 transition"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          {industry.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-blue-400 tracking-widest">Astra-style process</p>
                    <ol className="mt-3 space-y-3">
                      {processSteps.map((step, idx) => (
                        <Link
                          key={step.name}
                          to={step.path}
                          className="flex items-start gap-3 text-sm text-gray-300 hover:text-blue-400 transition"
                        >
                          <span className="text-blue-400 font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                          {step.name}
                        </Link>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-700 pt-4 text-gray-300">
                  <div>
                    <p className="text-sm font-semibold text-white">Need guidance?</p>
                    <p className="text-xs text-gray-400">Speak with our lead offensive architect in under 3 minutes.</p>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
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
                `transition-colors hover:text-blue-400 ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-gray-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </nav>

        <button className="md:hidden text-gray-300" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 shadow-lg px-4 pb-6">
          <div className="flex flex-col gap-4 py-4 text-gray-300">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-gray-300 hover:text-blue-400 font-medium transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full text-center font-semibold shadow-lg shadow-blue-500/30"
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

