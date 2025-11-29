import ContactForm from '../components/ContactForm'
import { Phone, Mail, MapPin, Building2 } from 'lucide-react'

const Contact = () => {
  const offices = [
    {
      title: 'Head Office',
      location: 'Tirupati, Andhra Pradesh',
      address: '23-7-169, 3rd Floor, Santhi Nagar, MR Palli Circle, Tirupati, Andhra Pradesh - 517502',
      icon: Building2,
    },
    {
      title: 'Bangalore Branch',
      location: 'Bangalore, Karnataka',
      address: '57 Novel Business Park, Gajendra Nager, Hosur Road, Anepalya, Bangalore - 560030',
      icon: Building2,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Contact</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">Talk with a cyber strategist</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We respond within one business day for advisory and within minutes for IR retainers.
        </p>
      </div>

      {/* Office Locations */}
      <div className="grid gap-6 md:grid-cols-2">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <office.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{office.title}</h3>
                <p className="text-sm text-blue-600 font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{office.address}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Reach out directly</h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <p className="font-semibold text-slate-900">+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="font-semibold text-slate-900">contact@irsdlcyber.com</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6">
            <p className="font-bold text-slate-900 mb-2">Incident Response Hotline</p>
            <p className="text-sm text-slate-600 mb-2">24/7 breach response available</p>
            <p className="text-lg font-semibold text-blue-600">+91 98765 43210</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
