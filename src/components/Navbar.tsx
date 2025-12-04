import { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Globe, Shield, Cloud, Smartphone, Network, Cpu } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/training', label: 'Training' },
  { path: '/careers', label: 'Careers' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [auditDropdownOpen, setAuditDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const hoverTimeout = useRef<number | undefined>(undefined)

  const handleAuditFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Add access key to form data
    formData.append('access_key', '99fc77a8-710b-4e41-b20a-dafd22a0ef91')
    
    // Add custom subject
    const companyName = formData.get('companyName')
    formData.append('subject', `Free Cybersecurity Audit Request - ${companyName}`)
    
    // Add custom message with all details
    const fullName = formData.get('fullName')
    const phoneNumber = formData.get('phoneNumber')
    const email = formData.get('email')
    const service = formData.get('service')
    
    formData.append('message', `New Free Cybersecurity Audit Request

Full Name: ${fullName}
Company Name: ${companyName}
Phone Number: ${phoneNumber}
Email: ${email}
Service Requested: ${service}

Please contact this lead as soon as possible.`)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setSubmitMessage('✓ Mail sent successfully! We will contact you soon.')
        form.reset()
        setTimeout(() => {
          setAuditDropdownOpen(false)
          setSubmitMessage('')
        }, 3000)
      } else {
        console.error('Web3Forms Error:', data)
        setSubmitMessage(`✗ ${data.message || 'Failed to send. Please try again or call us.'}`)
      }
    } catch (error) {
      console.error('Fetch Error:', error)
      setSubmitMessage('✗ Failed to send. Please try again or call us.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll() // Check initial scroll position
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (auditDropdownOpen && !target.closest('.audit-dropdown-container')) {
        setAuditDropdownOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [auditDropdownOpen])

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



  return (
    <header className="fixed top-14 left-1/2 -translate-x-1/2 z-50 pt-4 w-full max-w-7xl px-4 lg:px-8">
      <div className={`transition-all duration-300 rounded-full ${
        scrolled 
          ? 'bg-slate-800/95 backdrop-blur-xl border border-slate-700 shadow-lg shadow-black/20' 
          : 'bg-slate-800/90 backdrop-blur-md border border-slate-700/50'
      }`}>
      <div className={`flex items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? 'py-2.5' : 'py-3'
      } relative`}>
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg flex-shrink-0">
          <img 
            src="/IRSDL-LOGO-white.png" 
            alt="IRSDL Research & Thrive" 
            className={`w-auto hover:opacity-90 transition-all duration-300 ${
              scrolled ? 'h-8' : 'h-10'
            }`} 
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white mx-auto">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button className="text-white hover:text-cyan-400 transition font-semibold">Pentest</button>
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
                <div className="flex items-center justify-between border-t border-slate-700 pt-4 mt-4 text-gray-300">
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
                `transition-colors hover:text-cyan-400 ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative hidden md:block audit-dropdown-container">
          <button
            onClick={() => setAuditDropdownOpen(!auditDropdownOpen)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30 transition hover:scale-105 flex-shrink-0"
          >
            Get Quote
          </button>
          {auditDropdownOpen && (
            <div
              className="absolute right-0 top-12 w-96 bg-slate-800 text-white shadow-2xl rounded-2xl border border-slate-700 p-6 z-40"
            >
              <h3 className="text-lg font-bold mb-1">Get Your Free Audit</h3>
              <p className="text-xs text-gray-400 mb-4">Fill out the form below and we'll contact you</p>
              
              <form className="space-y-3" onSubmit={handleAuditFormSubmit}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    required
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="">Select Service *</option>
                    <option value="Web Application Pentest">Web Application Pentest</option>
                    <option value="API Pentest">API Pentest</option>
                    <option value="AI/ML Security Assessment">AI/ML Security Assessment</option>
                    <option value="Cloud Pentest">Cloud Pentest</option>
                    <option value="Mobile Pentest">Mobile Pentest</option>
                    <option value="Network Pentest">Network Pentest</option>
                    <option value="Vulnerability Management">Vulnerability Management</option>
                    <option value="M365 Security Assessment">M365 Security Assessment</option>
                    <option value="Social Engineering">Social Engineering</option>
                    <option value="Compliance Services">Compliance Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="flex items-center gap-2 py-2">
                  <input
                    type="checkbox"
                    id="robot-check"
                    required
                    className="w-4 h-4 bg-slate-700 border border-slate-600 rounded focus:ring-2 focus:ring-cyan-500"
                  />
                  <label htmlFor="robot-check" className="text-sm text-gray-300">
                    I'm not a robot *
                  </label>
                </div>
                
                {submitMessage && (
                  <div className={`text-sm text-center py-2 rounded-lg ${
                    submitMessage.includes('✓') 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            </div>
          )}
        </div>

        <button className="md:hidden text-white flex-shrink-0" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-2xl mt-2 shadow-lg px-4 pb-6">
          <div className="flex flex-col gap-4 py-4 text-white">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-white hover:text-cyan-400 font-medium transition"
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
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
