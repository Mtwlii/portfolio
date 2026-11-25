import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

type CountProps = { to: number; suffix?: string; decimals?: number }

export function Count({ to, suffix = '', decimals = 0 }: CountProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const seen = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!seen) return
    const c = animate(0, to, { duration: 1.8, ease: [0.2, 0.7, 0.2, 1], onUpdate: x => setV(x) })
    return () => c.stop()
  }, [seen, to])
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>
}
