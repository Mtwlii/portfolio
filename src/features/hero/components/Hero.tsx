import { motion } from 'framer-motion'
import { rise } from '../../../shared/animations'
import { headlineLines } from '../data/words'
import { useHeroParallax } from '../hooks/useHeroParallax'

export function Hero({ loaded }: { loaded: boolean }) {
  const heroY = useHeroParallax()
  return (
    <motion.section className="hero" style={{ y: heroY }}>
      <motion.p className="small" initial="hidden" animate={loaded ? 'show' : 'hidden'} variants={rise}>
        Cairo, Egypt. Open to remote or on-site work anywhere.
      </motion.p>
      <h1>
        {headlineLines.map((l, i) => (
          <span className="mask" key={l}>
            <motion.span initial={{ y: '115%', rotate: 4 }} animate={loaded ? { y: 0, rotate: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}>
              {i === 1 ? <em>{l}</em> : l}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.p className="intro" initial="hidden" animate={loaded ? 'show' : 'hidden'} variants={rise} transition={{ delay: 0.8 }}>
        I'm Metwaly. I have about a year and a half of experience shipping front ends and the APIs behind them,
        and I teach C++ and Python to university students on the side.
      </motion.p>
      <motion.a href="#work" className="arrow" initial="hidden" animate={loaded ? 'show' : 'hidden'} variants={rise} transition={{ delay: 1.0 }}>
        See what I've built <span>↓</span>
      </motion.a>
    </motion.section>
  )
}

