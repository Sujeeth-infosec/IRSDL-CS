import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-mist">
    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">404</p>
    <h1 className="text-4xl font-bold text-ink mb-4">Signal lost</h1>
    <p className="text-slate-600 max-w-md">
      The page you were tracking moved or never existed. Let’s get you back to secured territory.
    </p>
    <div className="flex flex-wrap gap-3 mt-8">
      <Link to="/" className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/40">
        Return home
      </Link>
      <Link to="/services" className="border border-ink/10 px-6 py-3 rounded-full font-semibold text-ink">
        View services
      </Link>
    </div>
  </div>
)

export default NotFound

