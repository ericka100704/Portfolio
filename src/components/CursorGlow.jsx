import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 })

  useEffect(() => {
    const onMove = (event) => {
      setPos({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block mix-blend-screen"
    >
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl transition-transform duration-150 ease-out"
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
