import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.svg'

const Footer = () => {
  const year = new Date().getFullYear()

  const offices = [
    {
      title: 'Head Office',
      location: 'Tirupati, Andhra Pradesh',
      address: '23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, AP - 517502',
    },
    {
      title: 'Bangalore Branch',
      location: 'Bangalore, Karnataka',
      address: '57 Novel Business Park, Gajendra Nager, Hosur Road, Anepalya, Bangalore - 560030',
    },
  ]

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="px-6 lg:px-12 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="IRSDL Research & Thrive" className="h-12 mb-4" />
            <p className="text-sm text-slate-300 mb-6 max-w-sm">
              Elite cybersecurity and digital resilience for forward-looking enterprises across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>contact@irsdlcyber.com</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-wide text-slate-200 mb-4">Explore</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services" className="text-slate-300 hover:text-blue-400 transition">
                Services
              </Link>
              <Link to="/about" className="text-slate-300 hover:text-blue-400 transition">
                About
              </Link>
              <Link to="/careers" className="text-slate-300 hover:text-blue-400 transition">
                Careers
              </Link>
              <Link to="/contact" className="text-slate-300 hover:text-blue-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-sm uppercase tracking-wide text-slate-200 mb-4">Our Offices</p>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <p className="font-semibold text-white mb-1">{office.title}</p>
                  <p className="text-blue-400 mb-1">{office.location}</p>
                  <div className="flex items-start gap-2 text-slate-300">
                    <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm text-slate-200 mb-2">Follow Us</p>
              <div className="flex gap-4 text-sm text-slate-300">
                <a href="#" className="hover:text-blue-400 transition">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  YouTube
                </a>
              </div>
            </div>
            <p className="text-xs text-slate-400 text-center md:text-right">
              © {year} IRSDL CyberSecure. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
