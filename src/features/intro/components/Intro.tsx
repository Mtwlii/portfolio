import { useEffect, useState } from 'react'
import { animate, motion } from 'framer-motion'

export function Intro({ done }: { done: () => void }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const c = animate(0, 100, { duration: 1.6, ease: 'easeInOut', onUpdate: x => setN(Math.round(x)), onComplete: () => setTimeout(done, 250) })
    return () => c.stop()
  }, [done])
  return (
    <motion.div className="curtain" exit={{ y: '-100%' }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
      <span className="small">Metwaly Mohamed / Portfolio</span>
      <span className="big-count">{n}</span>
    </motion.div>
  )
}
