import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'
import { popInChild, slideInLeftChild, staggerContainer, viewportOnce } from '../lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Roles that shaped how I ship work."
          description="From financial BPO and virtual assistance to freelance systems builds and a self-run studio — operations, clients, and product."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative space-y-5 before:absolute before:left-[1.15rem] before:top-4 before:bottom-4 before:w-px before:bg-[var(--color-line)] md:before:left-6"
        >
          {experience.map((job, index) => (
            <motion.article
              key={job.id}
              variants={slideInLeftChild}
              whileHover={{ y: -8, scale: 1.01, x: 6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="relative ml-14 md:ml-16 rounded-3xl glass glass-hover glass-shine gradient-border p-6 md:p-8"
            >
              <motion.div
                variants={popInChild}
                className="absolute -left-[2.65rem] md:-left-[3.15rem] top-7 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-[var(--color-accent)] shadow-lg shadow-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
              >
                <Briefcase size={18} />
              </motion.div>

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--color-brand)]">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-medium text-[var(--color-ink-muted)]">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ''}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-lg glass-subtle px-2.5 py-1 text-xs font-medium text-[var(--color-accent)]">
                    {job.years}
                  </span>
                  {job.type ? (
                    <span className="rounded-lg glass-subtle px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)]">
                      {job.type}
                    </span>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-[var(--color-ink-muted)]">{job.summary}</p>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {job.highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: index * 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-2"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ delay: index * 0.15 + i * 0.08 + 0.2, type: 'spring', stiffness: 400 }}
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
