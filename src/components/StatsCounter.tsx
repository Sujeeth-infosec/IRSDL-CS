import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatsCounterProps = {
  label: string
  value: number
  suffix?: string
}

const StatsCounter = ({ label, value, suffix = '' }: StatsCounterProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const startTime = performance.now()
    const start = 0

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const current = Math.round(start + progress * (value - start))
      setDisplayValue(current)
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }, [isInView, value])

  return (
    <div ref={ref} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-panel/30">
      <p className="text-3xl font-bold text-primary">
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-slate-600 mt-2">{label}</p>
    </div>
  )
}

export default StatsCounter

