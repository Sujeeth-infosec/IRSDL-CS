const DecorativeBackground = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden">
      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/50 to-slate-900 z-10" />
      
      {/* Abstract shapes */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-60 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  )
}

export default DecorativeBackground
