import { motion, useReducedMotion } from 'framer-motion'
import { rise } from '../../../shared/animations'
import { headlineLines } from '../data/words'
import { useHeroParallax } from '../hooks/useHeroParallax'

export function Hero({ loaded }: { loaded: boolean }) {
  const reduceMotion = useReducedMotion()
  const heroY = useHeroParallax()
  const still = { y: 0, rotate: 0 }
  return (
    <motion.section className="hero" style={{ y: reduceMotion ? 0 : heroY }}>
      <motion.p className="small" initial={reduceMotion ? false : 'hidden'} animate={loaded ? 'show' : 'hidden'} variants={rise}>
        Cairo, Egypt. Open to remote or on-site work anywhere.
      </motion.p>
      <h1>
        {headlineLines.map((line, i) => (
          <span className="mask" key={line}>
            <motion.span initial={reduceMotion ? still : { y: '115%', rotate: 4 }}
              animate={loaded ? still : {}}
              transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.1 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}>
              {i === 1 ? <em>{line}</em> : line}
            </motion.span>
          </span>
        ))}
      </h1>
      <motion.p className="intro" initial={reduceMotion ? false : 'hidden'} animate={loaded ? 'show' : 'hidden'} variants={rise} transition={{ delay: reduceMotion ? 0 : 0.8 }}>
        I'm Metwaly, a Software Engineer with more than 2 years of experience building front ends and APIs. I also teach C++ and Python to university students.
      </motion.p>
      <motion.a href="#work" className="arrow" initial={reduceMotion ? false : 'hidden'} animate={loaded ? 'show' : 'hidden'} variants={rise} transition={{ delay: reduceMotion ? 0 : 1.0 }}>
        See what I've built <span aria-hidden="true">↓</span>
      </motion.a>
    </motion.section>
  )
}
