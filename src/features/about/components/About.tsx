import { motion } from 'framer-motion'
import { rise, view } from '../../../shared/animations'
import { stack } from '../data/stack'
import { timeline } from '../data/timeline'

export function About() {
  return (
    <section id="about">
      <motion.h2 {...view} variants={rise}>About</motion.h2>
      <motion.div className="two" {...view} variants={rise}>
        <div>
          <p>
            I started with the Front-end track at Route Academy, then went deeper into React and Next.js at Elevate.
            Since 2023 I've been freelancing and shipping projects.
          </p>
          <p>
            I care about code that other people can read, input that gets validated, and APIs that are safe by default.
            Teaching has helped with that, because you can't explain a messy design for long.
          </p>
        </div>
        <dl>
          {stack.map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </motion.div>

      <motion.ol className="tl" {...view} variants={rise}>
        {timeline.map(([w, t, s]) => (
          <li key={t}><span>{w}</span><div><b>{t}</b><p>{s}</p></div></li>
        ))}
      </motion.ol>
    </section>
  )
}
