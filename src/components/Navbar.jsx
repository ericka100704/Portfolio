import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#tech-stack', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const limit = Math.max(window.innerHeight * 0.72, 420)
      setOverHero(window.scrollY < limit)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const lightOnDark = overHero && !open

  const themeButton = (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08, rotate: 12 }}
      whileTap={{ scale: 0.94 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
        lightOnDark
          ? 'border-white/20 bg-white/10 text-[#f9f4f5]'
          : 'glass text-[var(--color-brand)]'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.22 }}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.5rem,env(safe-area-inset-top))]">
      <motion.nav
        className={`flex h-14 sm:h-16 md:h-20 items-center justify-between gap-2 px-3 sm:px-5 lg:px-8 transition-all duration-500 max-w-6xl mx-auto ${
          lightOnDark
            ? 'bg-transparent'
            : 'rounded-full glass-strong'
        }`}
      >
        <a
          href="#home"
          className={`shrink-0 font-display text-sm md:text-base font-bold tracking-tight whitespace-nowrap ${
            lightOnDark ? 'text-[#f9f4f5]' : 'text-[var(--color-brand)]'
          }`}
        >
          {profile.name}
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                lightOnDark
                  ? 'text-[#c8b8db] hover:text-[#f9f4f5]'
                  : 'text-[var(--color-ink-muted)] hover:text-[var(--color-brand)]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase ${
              lightOnDark ? 'text-[#c8b8db]' : 'text-[var(--color-ink-muted)]'
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8b8db] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8b8db]" />
            </span>
            Available
          </span>
          {themeButton}
          <a
            href="#contact"
            className="rounded-full bg-[#502f4c] px-4 py-2 text-sm font-semibold text-[#f9f4f5] shadow-lg shadow-black/20 transition hover:brightness-110"
          >
            Hire me
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2 shrink-0">
          {themeButton}
          <motion.button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
              lightOnDark
                ? 'border-white/20 bg-white/10 text-[#f9f4f5]'
                : 'glass text-[var(--color-brand)]'
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto mt-2 overflow-hidden rounded-3xl glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-[var(--color-brand)] hover:bg-white/10"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
