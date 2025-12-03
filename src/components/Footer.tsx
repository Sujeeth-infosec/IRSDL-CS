import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import irsdlLogo from '../assets/IRSDL LOGO-01.png'

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
    {
      title: 'Hyderabad Branch',
      location: 'Hyderabad, Telangana',
      address: 'Flat No.24, Dollar Hills, Pragathi Nagar, Nizampet, Medchal-Malkajgiri District, Telangana - 500090',
    },
  ]

  return (
    <footer className="bg-gray-50 backdrop-blur-md text-gray-900 border-t border-gray-200">
      <div className="px-6 lg:px-12 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mb-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src={irsdlLogo} alt="IRSDL Research & Thrive" className="h-12 mb-3 hover:opacity-90 transition-opacity" />
            </Link>
            <p className="text-xs text-gray-600 mb-4 max-w-sm">
              Elite cybersecurity and digital resilience for forward-looking enterprises across India.
            </p>
            <div className="space-y-2">

              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Mail className="h-3 w-3 text-blue-600 flex-shrink-0" />
                <span>contact@irsdl.com</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="font-semibold text-xs uppercase tracking-wide text-gray-900 mb-3">Explore</p>
            <div className="flex flex-col gap-1.5 text-xs">
              <Link to="/services" className="text-gray-600 hover:text-blue-600 transition">
                Services
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                About
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-blue-600 transition">
                Careers
              </Link>
            </div>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-2">
            <p className="font-semibold text-xs uppercase tracking-wide text-gray-900 mb-3">Our Offices</p>
            <div className="space-y-3">
              {offices.map((office, index) => (
                <div key={index} className="text-xs">
                  <p className="font-semibold text-gray-900 mb-0.5">{office.title}</p>
                  <p className="text-blue-600 text-xs mb-0.5">{office.location}</p>
                  <div className="flex items-start gap-1.5 text-gray-600">
                    <MapPin className="h-3 w-3 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs leading-relaxed">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-4 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                YouTube
              </a>
            </div>
            <p className="text-xs text-gray-500 text-center md:text-right">
              © {year} IRSDL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
