import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function ScrollProgress() {
  const line = useScrollProgress()
  return <motion.div className="rule" style={{ scaleX: line }} />
}
