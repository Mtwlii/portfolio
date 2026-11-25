import { motion } from 'framer-motion'
import { rise, view } from '../../../shared/animations'
import { links } from '../data/links'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2 {...view} variants={rise}>Want to work together?</motion.h2>
      <motion.p {...view} variants={rise} className="intro">
        I'm looking for front-end or full-stack work, remote or on-site, anywhere. I'm happy to relocate. Email is the fastest way to reach me.
      </motion.p>
      <motion.a {...view} variants={rise} href={links.email} className="big">metwlii.dev@gmail.com</motion.a>
      <p className="links">
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </section>
  )
}

