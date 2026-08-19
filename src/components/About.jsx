import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { about, profile } from '../data/portfolio'
import { slideInLeft, slideInRightChild, staggerContainer, viewportOnce } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Builder, operator, and creative problem-solver."
          description={about.summary}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside
            custom={0}
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            whileHover={{ y: -8, scale: 1.02, rotate: -0.5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="rounded-3xl glass-strong glass-hover glass-shine gradient-border p-7 md:p-8"
          >
            <p className="font-display text-2xl font-bold text-[var(--color-brand)]">
              {profile.name}
            </p>
            <p className="mt-2 text-[var(--color-ink-muted)]">{profile.role}</p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="tracking-wide uppercase text-[var(--color-ink-muted)]">Location</dt>
                <dd className="mt-1 font-medium text-[var(--color-brand)]">{profile.location}</dd>
              </div>
              <div>
                <dt className="tracking-wide uppercase text-[var(--color-ink-muted)]">Phone</dt>
                <dd className="mt-1 font-medium text-[var(--color-brand)]">
                  <a href={profile.phoneHref} className="transition hover:text-[var(--color-accent)]">
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-wide uppercase text-[var(--color-ink-muted)]">Email</dt>
                <dd className="mt-1 font-medium text-[var(--color-brand)]">
                  <a href={profile.socials.email} className="transition hover:text-[var(--color-accent)]">
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.aside>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-1"
          >
            {about.highlights.map((item) => (
              <motion.article
                key={item.title}
                variants={slideInRightChild}
                whileHover={{ y: -8, scale: 1.02, rotate: 0.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-3xl glass glass-hover glass-shine p-6 md:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--color-brand)]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
