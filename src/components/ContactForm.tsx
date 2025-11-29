import { useState } from 'react'
import type { FormEvent } from 'react'

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-600">Name</label>
          <input
            type="text"
            required
            placeholder="Jane Doe"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Email</label>
          <input
            type="email"
            required
            placeholder="security@company.com"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-600">Phone</label>
        <input
          type="tel"
          placeholder="+1 (555) 123-4567"
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-600">How can we help?</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your environment, goals, and urgency."
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-lg shadow-primary/30"
      >
        {status === 'submitted' ? 'Message Received ✓' : 'Submit Request'}
      </button>
    </form>
  )
}

export default ContactForm

