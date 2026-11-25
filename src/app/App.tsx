import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Intro } from '../features/intro'
import { Header, ScrollProgress } from '../features/navigation'
import { Hero, Marquee } from '../features/hero'
import { Projects } from '../features/projects'
import { About } from '../features/about'
import { Contact } from '../features/contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>{!loaded && <Intro done={() => setLoaded(true)} />}</AnimatePresence>
      <ScrollProgress />
      <Header />
      <main id="top">
        <Hero loaded={loaded} />
        <Marquee />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>Metwaly Mohamed, 2026</footer>
    </>
  )
}
