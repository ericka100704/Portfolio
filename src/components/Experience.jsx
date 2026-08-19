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
          {experience.map((job) => (
            <motion.article
              key={job.id}
              variants={slideInLeftChild}
              className="relative ml-12 md:ml-16 rounded-2xl glass p-4 md:p-6"
            >
              <motion.div
                variants={popInChild}
                className="absolute -left-[2.65rem] md:-left-[3.15rem] top-7 flex h-10 w-10 items-center justify-center rounded-full glass-strong text-[var(--color-accent)] shadow-lg shadow-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
              >
                <Briefcase size={18} />
              </motion.div>

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-[var(--color-brand)]">
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

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{job.summary}</p>

              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
