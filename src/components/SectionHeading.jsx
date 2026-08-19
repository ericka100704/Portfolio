import { motion } from 'framer-motion'
import { blurUpChild, staggerContainer, viewportOnce } from '../lib/motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mb-12 md:mb-16 max-w-2xl"
    >
      {eyebrow ? (
        <motion.p
          variants={blurUpChild}
          className="mb-3 text-sm font-medium tracking-[0.18em] uppercase text-[var(--color-accent)]"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={blurUpChild}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-brand)]"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={blurUpChild}
          className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-ink-muted)]"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
