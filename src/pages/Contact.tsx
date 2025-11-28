import ContactForm from '../components/ContactForm'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</p>
        <h1 className="text-4xl font-bold text-ink">Talk with a cyber strategist</h1>
        <p className="text-slate-600">We respond within one business day for advisory and within minutes for IR retainers.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-ink">Reach out directly</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <span>+1 (555) 987-1234</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <span>contact@irsdlcyber.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span>900 Cyber Ave, Suite 1200, Austin, TX 78701</span>
            </div>
          </div>
          <div className="rounded-2xl bg-mist p-6">
            <p className="font-semibold text-ink">Incident hotline</p>
            <p className="text-sm text-slate-600 mt-2">24/7 breach response: +1 (555) 777-7100</p>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

