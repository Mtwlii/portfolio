import { useScroll, useTransform } from 'framer-motion'

export function useHeroParallax() {
  return useTransform(useScroll().scrollY, [0, 600], [0, -90])
}
