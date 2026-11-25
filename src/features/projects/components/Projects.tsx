import { motion } from 'framer-motion'
import { rise, view } from '../../../shared/animations'
import { Count } from '../../../shared/components/Count'
import { projects } from '../data/projects'
import { stats } from '../data/stats'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="work">
      <motion.div className="stats" {...view} variants={rise}>
        {stats.map(s => (
          <div key={s.label}><b><Count to={s.to} decimals={s.decimals} suffix={s.suffix} /></b><span>{s.label}</span></div>
        ))}
      </motion.div>
      <motion.h2 {...view} variants={rise}>Selected work</motion.h2>
      {projects.map(p => <ProjectCard key={p.title} p={p} />)}
    </section>
  )
}
