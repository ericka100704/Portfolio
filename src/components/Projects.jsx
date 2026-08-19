import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import CaseStudy from './CaseStudy'
import { projects } from '../data/portfolio'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

function Preview({ project }) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(project.image) && !broken

  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${project.tone} aspect-[16/7]`}>
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="absolute inset-4 rounded-xl border border-white/10 bg-black/25">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8b8db]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#70587c]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#502f4c]" />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3 opacity-80">
            <div className="col-span-2 h-16 rounded-lg bg-white/10" />
            <div className="h-16 rounded-lg bg-white/5" />
            <div className="h-8 rounded-md bg-white/10" />
            <div className="h-8 rounded-md bg-white/5" />
            <div className="h-8 rounded-md bg-white/10" />
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
      <p className="absolute left-3 top-3 text-[9px] font-semibold tracking-[0.16em] uppercase text-[#c8b8db]">
        {project.tag}
      </p>
      <h3 className="absolute bottom-2 left-2 right-8 font-display text-sm md:text-base font-bold text-[#f9f4f5]">
        {project.title}
      </h3>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((project) => project.category === active)
  }, [active])

  return (
    <section id="projects" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Projects"
          title="Selected systems, platforms, and products."
          description="Full-stack work across fintech, clinic operations, community tools, POS, and institutional project management."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {categories.map((category) => {
            const isActive = active === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(category)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'text-[#f9f4f5]'
                    : 'border border-[var(--color-line)] text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-[#502f4c]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{category}</span>
              </button>
            )
          })}
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => {
              const number = String(project.id).padStart(2, '0')
              return (
                <article
                  key={project.id}
                  className="relative flex flex-col rounded-xl bg-[#0a0a0a] p-2.5 text-[#f9f4f5]"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    className="w-full text-left"
                  >
                    <div className="mb-1.5 flex items-center justify-between text-[10px] tracking-[0.16em] text-[#c8b8db]">
                      <span>{number}</span>
                      <span>{project.year}</span>
                    </div>
                    <Preview project={project} />
                    <div className="mt-2 pr-10">
                      <h3 className="font-display text-sm md:text-base font-bold">{project.title}</h3>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#c8b8db]">{project.blurb}</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    aria-label={`Open ${project.title} case study`}
                    className="absolute bottom-2.5 right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f9f4f5] text-[#0a0a0a]"
                  >
                    <ArrowUpRight size={13} />
                  </button>
                </article>
              )
            })}
        </div>
      </div>
      <CaseStudy project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
