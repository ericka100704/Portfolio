import { motion } from 'framer-motion'
import { education, techStack } from '../data/portfolio'
import { blurUp, blurUpChild, staggerContainer, viewportOnce } from '../lib/motion'

const skillGroups = [...new Set(techStack.map((item) => item.category))].map((category) => ({
  category,
  items: techStack.filter((item) => item.category === category),
}))

export default function EducationSkills() {
  const item = education[0]

  return (
    <section id="education" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow grid gap-14 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
        <motion.div
          custom={0}
          variants={blurUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.18em] uppercase text-[var(--color-accent-soft)]">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-brand)]">
            {item.shortDegree}
          </h2>
          <p className="mt-3 text-lg font-medium text-[var(--color-brand)]">{item.school}</p>
          <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{item.formerly}</p>

          <div className="mt-6 grid grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-5">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[var(--color-accent-soft)]">
                Campus
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-brand)]">{item.campus}</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[var(--color-accent-soft)]">
                Years
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--color-brand)]">{item.years}</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          id="tech-stack"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            variants={blurUpChild}
            className="mb-4 text-sm font-medium tracking-[0.18em] uppercase text-[var(--color-accent-soft)]"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={blurUpChild}
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-brand)]"
          >
            Tools I use to ship, support, and create.
          </motion.h2>

          <div className="mt-8 space-y-7">
            {skillGroups.map((group) => (
              <motion.div key={group.category} variants={blurUpChild}>
                <p className="mb-3 text-xs font-medium tracking-[0.16em] uppercase text-[var(--color-accent-soft)]">
                  {group.category}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-1 text-xs text-[var(--color-brand)]"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
