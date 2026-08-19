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
            className="rounded-2xl glass-strong p-4 md:p-6"
          >
            <p className="font-display text-xl font-bold text-[var(--color-brand)]">
              {profile.name}
            </p>
            <p className="mt-2 text-[var(--color-ink-muted)]">{profile.role}</p>
            <dl className="mt-5 space-y-3 text-sm">
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
                className="rounded-2xl glass p-4 md:p-5"
              >
                <h3 className="font-display text-base font-semibold text-[var(--color-brand)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
