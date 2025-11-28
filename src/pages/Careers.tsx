import { useState } from 'react'
import type { FormEvent } from 'react'
import { Briefcase } from 'lucide-react'

const roles = [
  { title: 'Senior Red Team Engineer', location: 'Austin, TX · Hybrid', type: 'Full-time', summary: 'Lead stealth simulations, develop custom tooling, and mentor apprentices.' },
  { title: 'DevSecOps Architect', location: 'Remote (US/EU)', type: 'Full-time', summary: 'Design secure SDLC pipelines, integrate security testing automation, and coach product squads.' },
  { title: 'Threat Intelligence Analyst', location: 'Singapore · Onsite', type: 'Full-time', summary: 'Curate global intel feeds, produce PIRs, and brief executive stakeholders weekly.' },
]

const Careers = () => {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">Careers</p>
        <h1 className="text-4xl font-bold text-ink">Join the cyber vanguard</h1>
        <p className="text-slate-600">Operate with elite teams, contribute to global missions, and grow your craft.</p>
      </div>

      <section className="grid gap-6">
        {roles.map((role) => (
          <div key={role.title} className="glass-panel rounded-3xl p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <div>
                <p className="text-xl font-semibold text-ink">{role.title}</p>
                <p className="text-sm text-slate-500">
                  {role.location} · {role.type}
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">{role.summary}</p>
          </div>
        ))}
      </section>

      <section className="glass-panel rounded-3xl p-6">
        <h2 className="text-2xl font-semibold text-ink mb-4">Apply now</h2>
        <form className="space-y-4" onSubmit={handleApply}>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-600">Full name</label>
              <input required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Jordan Steele" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-600">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="you@cyber.com" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600">Role of interest</label>
            <select className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3">
              {roles.map((role) => (
                <option key={role.title}>{role.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Share accomplishments, links, or timeline." />
          </div>
          <button type="submit" className="bg-primary text-white w-full py-3 rounded-xl font-semibold">
            {status === 'submitted' ? 'Application Received ✓' : 'Submit application'}
          </button>
        </form>
      </section>
    </div>
  )
}

export default Careers

