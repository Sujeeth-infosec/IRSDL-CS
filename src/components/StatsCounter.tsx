import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type StatsCounterProps = {
  label: string
  value: number
  suffix?: string
  dark?: boolean
}

const StatsCounter = ({ label, value, suffix = '', dark = false }: StatsCounterProps) => {
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

  if (dark) {
    return (
      <div ref={ref} className="text-center">
        <p className="text-4xl font-bold text-white mb-2">
          {displayValue.toLocaleString()}
          {suffix}
        </p>
        <p className="text-sm text-blue-100">{label}</p>
      </div>
    )
  }

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-blue-600 mb-2">
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  )
}

export default StatsCounter
