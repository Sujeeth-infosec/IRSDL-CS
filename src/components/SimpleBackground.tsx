const SimpleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-900">
      {/* Left side decorative fade effect - MORE VISIBLE */}
      <div className="absolute left-0 top-0 bottom-0 w-2/3 pointer-events-none overflow-hidden">
        {/* Gradient overlay for fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/20 to-slate-900 z-10" />
        
        {/* Large abstract colorful shapes - INCREASED OPACITY */}
        <div className="absolute top-10 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/35 to-pink-500/35 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-20 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Visible grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Diagonal lines for tech effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(59, 130, 246, 0.1) 10px,
              rgba(59, 130, 246, 0.1) 11px
            )`
          }} />
        </div>
      </div>

      {/* Animated gradient orbs on right */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Overall subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  )
}

export default SimpleBackground
