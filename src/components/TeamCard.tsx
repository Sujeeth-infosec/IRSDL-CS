type TeamCardProps = {
  name: string
  role: string
  bio: string
}

const TeamCard = ({ name, role, bio }: TeamCardProps) => (
  <div className="border border-slate-100 rounded-2xl p-6 shadow-panel/50 bg-white">
    <div className="w-16 h-16 rounded-full bg-mist flex items-center justify-center text-primary text-xl font-semibold mb-4">
      {name
        .split(' ')
        .map((part) => part[0])
        .join('')}
    </div>
    <p className="text-lg font-semibold text-ink">{name}</p>
    <p className="text-sm text-accent font-medium">{role}</p>
    <p className="text-sm text-slate-600 mt-3">{bio}</p>
  </div>
)

export default TeamCard

