import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

const values = [
  {
    title: 'Relentless Integrity',
    description: 'We treat every engagement with the sensitivity of a live breach and guard confidentiality fiercely.',
  },
  { title: 'Automation-first', description: 'We codify lessons into playbooks and tooling so wins scale across every client.' },
  {
    title: 'Human partnership',
    description: 'Beyond dashboards, we embed with your teams to align on risk, culture, and transformation goals.',
  },
]

const About = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section className="text-center space-y-4">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">About us</p>
        <h1 className="text-4xl font-bold text-ink">Mission-driven cyber guardians</h1>
        <p className="text-slate-600 max-w-3xl mx-auto">
          IRSDL CyberSecure began as an elite incident response collective. Today, we deliver end-to-end cyber resilience
          through offensive testing, SOC operations, and executive risk advisory.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="glass-panel rounded-3xl p-6">
            <p className="text-lg font-semibold text-ink">{value.title}</p>
            <p className="text-sm text-slate-600 mt-3">{value.description}</p>
          </div>
        ))}
      </section>

      <section className="glass-panel rounded-3xl p-8 space-y-4">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">Our story</p>
        <h2 className="text-3xl font-bold text-ink">From crisis responders to strategic partners</h2>
        <p className="text-slate-600">
          After leading global response efforts for some of the most high-profile breaches of the past decade, our founders
          saw a pattern: organizations need a unified partner who can test like attackers, watch like seasoned SOC analysts,
          and advise the board with clarity. IRSDL CyberSecure brings together hunters, engineers, and strategists operating
          from cyber fusion centers across Austin, Singapore, and Amsterdam.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Leadership</p>
          <h2 className="text-3xl font-bold text-ink mt-2">Meet the team</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <TeamCard key={member.name} name={member.name} role={member.role} bio={member.bio} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About

