import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { links, projects, stack, timeline } from './data'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
}

const view = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-60px' } } as const


function Count({ to, suffix = '', decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
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

function Intro({ done }: { done: () => void }) {
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

const words = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Stripe', 'Framer Motion', 'TanStack Query', 'Zod']

function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden>
      <div className="track">{row.map((w, i) => <span key={i}>{w}<i>✱</i></span>)}</div>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const heroY = useTransform(useScroll().scrollY, [0, 600], [0, -90])
  const { scrollYProgress } = useScroll()
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  return (
    <>
      <AnimatePresence>{!loaded && <Intro done={() => setLoaded(true)} />}</AnimatePresence>
      <motion.div className="rule" style={{ scaleX: line }} />
      <header className="top">
        <a href="#top" className="mark">Metwaly Mohamed</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <motion.section className="hero" style={{ y: heroY }}>
          <motion.p className="small" initial="hidden" animate={loaded ? 'show' : 'hidden'} variants={rise}>
            Cairo, Egypt. Available for remote work.
          </motion.p>
          <h1>
            {['I build web apps', 'with React, Next.js', 'and Node.'].map((l, i) => (
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

        <Marquee />

        <section id="work">
          <motion.div className="stats" {...view} variants={rise}>
            <div><b><Count to={1.5} decimals={1} /></b><span>years building web apps</span></div>
            <div><b><Count to={4} /></b><span>projects below</span></div>
            <div><b><Count to={15} suffix="+" /></b><span>menu categories on the café site</span></div>
          </motion.div>
          <motion.h2 {...view} variants={rise}>Selected work</motion.h2>
          {projects.map(p => (
            <motion.article key={p.title} className="project" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>
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
          ))}
        </section>

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

        <section id="contact" className="contact">
          <motion.h2 {...view} variants={rise}>Want to work together?</motion.h2>
          <motion.p {...view} variants={rise} className="intro">
            I'm looking for front-end or full-stack work, remote or in Cairo. Email is the fastest way to reach me.
          </motion.p>
          <motion.a {...view} variants={rise} href={links.email} className="big">metwlii.dev@gmail.com</motion.a>
          <p className="links">
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </section>
      </main>
      <footer>Metwaly Mohamed, 2026</footer>
    </>
  )
}
