import { motion } from 'framer-motion'

const orbs = [
  { size: 'w-[560px] h-[560px]', color: 'var(--color-glow-1)', top: '-12%', left: '-8%', duration: 18, x: [0, 70, -40, 0], y: [0, -50, 36, 0] },
  { size: 'w-[460px] h-[460px]', color: 'var(--color-glow-2)', top: '28%', right: '-14%', duration: 22, x: [0, -60, 48, 0], y: [0, 56, -28, 0] },
  { size: 'w-[400px] h-[400px]', color: 'var(--color-glow-3)', bottom: '0%', left: '12%', duration: 20, x: [0, 48, -70, 0], y: [0, -36, 48, 0] },
  { size: 'w-[300px] h-[300px]', color: 'var(--color-glow-2)', top: '58%', left: '52%', duration: 16, x: [0, -36, 24, 0], y: [0, 48, -36, 0] },
]

export default function BackgroundMesh() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block rounded-full blur-3xl opacity-70 ${orb.size}`}
          style={{ background: orb.color, top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom }}
          animate={{ x: orb.x, y: orb.y, scale: [1, 1.14, 0.92, 1] }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="noise-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-canvas)_55%,transparent)_90%)]" />
    </div>
  )
}
