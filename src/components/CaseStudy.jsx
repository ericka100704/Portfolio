import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'

function displayUrl(url) {
  if (!url) return ''
  try {
    const parsed = new URL(url)
    return `${parsed.host}${parsed.pathname}`.replace(/\/$/, '')
  } catch {
    return url
  }
}

export default function CaseStudy({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] overflow-y-auto bg-[#0a0a0a] text-[#f9f4f5]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0a0a0a]/90 px-5 py-4 backdrop-blur-md sm:px-8">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#c8b8db]">Case Study</p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-[#f9f4f5] transition hover:bg-white/10"
            >
              Close
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#c8b8db] text-[#0a0a0a]">
                <X size={14} />
              </span>
            </button>
          </div>

          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[#c8b8db]">
              {String(project.id).padStart(2, '0')} {project.type} {project.year}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight break-words">
              {project.title}
            </h2>
            <p className="mt-3 text-lg md:text-xl text-[#c8b8db]">{project.subtitle}</p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#161016]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#502f4c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#70587c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c8b8db]" />
                <p className="ml-3 truncate text-xs text-[#c8b8db]">{displayUrl(project.demo)}</p>
              </div>
              <div className="relative aspect-[16/10] sm:aspect-[16/8] bg-[#0a0a0a]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90"
                  />
                ) : null}
              </div>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-[0.32fr_0.68fr]">
              <dl className="space-y-6">
                <div>
                  <dt className="text-[11px] tracking-[0.18em] uppercase text-[#70587c]">Role</dt>
                  <dd className="mt-1 text-lg">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.18em] uppercase text-[#70587c]">Type</dt>
                  <dd className="mt-1 text-lg">{project.type}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-[0.18em] uppercase text-[#70587c]">Status</dt>
                  <dd className="mt-1 text-lg">{project.status}</dd>
                </div>
              </dl>

              <div className="space-y-10">
                <section>
                  <h3 className="font-display text-2xl font-bold">01 Concept</h3>
                  <p className="mt-3 leading-relaxed text-[#c8b8db]">{project.concept}</p>
                </section>
                <section>
                  <h3 className="font-display text-2xl font-bold">02 Features</h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#c8b8db]">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="font-display text-2xl font-bold">03 Target</h3>
                  <p className="mt-3 leading-relaxed text-[#c8b8db]">{project.target}</p>
                </section>
                <section>
                  <h3 className="font-display text-xl font-bold">Built with</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-[#f9f4f5]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[#f9f4f5] px-5 py-4 text-[#0a0a0a] transition hover:brightness-95"
                  >
                    <span className="font-semibold">Visit Live Website</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0a] text-[#f9f4f5]">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
