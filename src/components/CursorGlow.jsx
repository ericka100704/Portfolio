import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [pos, setPos] = useState({ x: -400, y: -400 })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (pointer: fine)')
    const sync = () => setEnabled(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const onMove = (event) => setPos({ x: event.clientX, y: event.clientY })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [enabled])

  if (!enabled) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 mix-blend-screen">
      <div
        className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            'radial-gradient(circle, color-mix(in oklab, var(--color-accent) 45%, transparent) 0%, transparent 68%)',
        }}
      />
    </div>
  )
}
