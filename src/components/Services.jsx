import { motion } from 'framer-motion'
import { services } from '../data/portfolio'
import { blurUp, blurUpChild, staggerContainer, viewportOnce } from '../lib/motion'

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow">
        <motion.div
          custom={0}
          variants={blurUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-brand)]">
            What I can build for you.
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-ink-muted)]">
            Practical full-stack development and IT solutions for local and online businesses.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="border-t border-[var(--color-line)]"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={blurUpChild}
              className="group grid gap-3 border-b border-[var(--color-line)] py-7 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-10 md:py-9"
            >
              <h3 className="font-display text-lg md:text-xl font-semibold text-[var(--color-brand)] transition group-hover:text-[var(--color-accent-soft)]">
                {service.title}
              </h3>
              <p className="text-base md:text-[1.05rem] leading-relaxed text-[var(--color-ink-muted)]">
                {service.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
