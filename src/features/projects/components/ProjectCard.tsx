import { motion } from 'framer-motion'
import type { Project } from '../types/project'

export function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article className="project" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
      <span className="fill" />
      <span className="go">↗</span>
      <span className="num">{p.n}</span>
      <div className="body">
        <h3>{p.title}</h3>
        <p className="kind">{p.kind}</p>
        <p>{p.story}</p>
        <p className="stack">{p.stack}</p>
        <p className="links">
          {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live site</a>}
          <a href={p.code} target="_blank" rel="noreferrer">Code on GitHub</a>
        </p>
      </div>
    </motion.article>
  )
}
