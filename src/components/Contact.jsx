import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'
import { viewportOnce } from '../lib/motion'

const initialForm = { name: '', email: '', message: '' }

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93Z" />
    </svg>
  )
}

function TelegramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.95 2.46a1.2 1.2 0 0 0-1.23-.17L2.6 9.7c-1.13.44-1.12 1.5-.2 1.88l4.6 1.44 1.77 5.45c.22.67.11 1.15.64 1.32.32.1.7 0 1-.3l2.54-2.46 4.86 3.58c.9.5 1.55.24 1.78-.84l3.22-15.17a1.18 1.18 0 0 0-.86-1.14ZM9.4 13.7l8.3-5.22c.41-.26.79-.12.48.18l-6.9 6.23-.27 3.05-1.61-4.24Z" />
    </svg>
  )
}

const socialLinks = [
  { href: profile.phoneHref, icon: Phone, label: profile.phone },
  { href: profile.socials.email, icon: Mail, label: profile.email },
  { href: profile.socials.facebook, icon: FacebookIcon, label: 'Facebook', external: true },
  { href: profile.socials.telegram, icon: TelegramIcon, label: 'Telegram', external: true },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) {
      next.message = 'Message is required.'
    } else if (form.message.trim().length < 10) {
      next.message = 'Message should be at least 10 characters.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email client…')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section-pad border-t border-[var(--color-line)]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build the next system together."
          description="Open to local, Clark Freeport Zone, and remote roles. Reach out by email, phone, or the form."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  className="flex items-center gap-3 rounded-xl glass px-3 py-3 text-[var(--color-brand)]"
                >
                  <span className="text-[var(--color-accent)]">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl glass-strong p-4 md:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-[var(--color-brand)]">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full rounded-xl glass-subtle px-3.5 py-3 text-[var(--color-brand)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
                  placeholder="Your name"
                />
                {errors.name ? <span className="mt-1 block text-xs text-[var(--color-accent)]">{errors.name}</span> : null}
              </label>

              <label className="block sm:col-span-1">
                <span className="mb-2 block text-sm font-medium text-[var(--color-brand)]">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full rounded-xl glass-subtle px-3.5 py-3 text-[var(--color-brand)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
                  placeholder="you@email.com"
                />
                {errors.email ? <span className="mt-1 block text-xs text-[var(--color-accent)]">{errors.email}</span> : null}
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-[var(--color-brand)]">Message</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-y rounded-xl glass-subtle px-3.5 py-3 text-[var(--color-brand)] outline-none transition focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[color-mix(in_oklab,var(--color-accent)_25%,transparent)]"
                placeholder="Tell me about your project or idea…"
              />
              {errors.message ? (
                <span className="mt-1 block text-xs text-[var(--color-accent)]">{errors.message}</span>
              ) : null}
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-[var(--color-canvas)] shadow-lg shadow-[color-mix(in_oklab,var(--color-brand)_25%,transparent)] transition hover:opacity-90"
              >
                Send Message
                <Send size={16} />
              </motion.button>
              <AnimatePresence>
                {status ? (
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-[var(--color-ink-muted)]"
                  >
                    {status}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-accent)]"
          >
            Back to top
          </motion.a>
        </motion.footer>
      </div>
    </section>
  )
}
