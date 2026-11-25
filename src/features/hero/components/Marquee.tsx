import { words } from '../data/words'

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div className="marquee" aria-hidden>
      <div className="track">{row.map((w, i) => <span key={i}>{w}<i>✱</i></span>)}</div>
    </div>
  )
}
