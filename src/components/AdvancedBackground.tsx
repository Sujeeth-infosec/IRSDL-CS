const AdvancedBackground = () => {
  // Light theme - simple gradient background
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
    </div>
  )
}

export default AdvancedBackground
