export const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } },
}

export const view = { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-60px' } } as const
