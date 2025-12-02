const SimpleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Advanced Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      
      {/* Cybersecurity Themed Background Image with Fade */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Floating Tech Elements - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none">
        {/* Digital Lock Icon */}
        <div className="absolute top-1/4 left-20 w-32 h-32 opacity-10 animate-pulse" style={{ animationDuration: '4s' }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400">
            <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm3 8H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z" fill="currentColor"/>
          </svg>
        </div>

        {/* Shield Icon */}
        <div className="absolute top-1/2 left-32 w-24 h-24 opacity-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-cyan-400">
            <path d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>

        {/* Binary Code Pattern */}
        <div className="absolute top-1/3 left-10 text-blue-500/10 font-mono text-xs leading-relaxed animate-pulse" style={{ animationDuration: '6s' }}>
          01001001 01010010<br/>
          01010011 01000100<br/>
          01001100 00100000
        </div>
      </div>
      
      {/* Animated Gradient Orbs - Modern Style */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/25 via-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-indigo-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
            radial-gradient(at 40% 70%, rgba(6, 182, 212, 0.3) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(168, 85, 247, 0.3) 0px, transparent 50%)
          `
        }} />
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Noise Texture for Depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
      }} />

      {/* Animated Light Rays */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Circuit Board Lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 L50 100 L50 50 L150 50 L150 150 L100 150" stroke="#3b82f6" strokeWidth="2" fill="none"/>
              <circle cx="50" cy="100" r="3" fill="#3b82f6"/>
              <circle cx="50" cy="50" r="3" fill="#3b82f6"/>
              <circle cx="150" cy="50" r="3" fill="#3b82f6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Glow Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent" />
    </div>
  )
}

export default SimpleBackground
