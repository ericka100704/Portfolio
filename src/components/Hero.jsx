import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { blurUp, blurUpChild, fadeUp, staggerContainer } from '../lib/motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden hero-photo">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(80,47,76,0.35),transparent_55%)]"
      />

      <div className="container-narrow relative w-full px-5 sm:px-8 lg:px-12 py-28 md:py-32">
        <div className="max-w-2xl">
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2.8rem,8vw,5.6rem)] leading-[0.95] font-extrabold tracking-tight text-[#f9f4f5]"
          >
            {profile.name.split(' ').map((word) => (
              <motion.span key={word} variants={blurUpChild} className="inline-block mr-[0.18em]">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            custom={0.18}
            variants={blurUp}
            initial="hidden"
            animate="show"
            className="mt-4 text-lg md:text-2xl font-semibold text-[#f9f4f5]"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            custom={0.3}
            variants={blurUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#c8b8db]"
          >
            {profile.tagline} {profile.bio}
          </motion.p>

          <motion.div
            custom={0.42}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href={profile.socials.email}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#502f4c] px-5 py-3 text-sm font-semibold text-[#f9f4f5] shadow-lg shadow-black/30"
            >
              <Mail size={16} />
              Email Ericka
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#c8b8db]/50 bg-white/5 px-5 py-3 text-sm font-semibold text-[#f9f4f5] backdrop-blur-md"
            >
              View Projects
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#c8b8db]/50 bg-white/5 px-5 py-3 text-sm font-semibold text-[#f9f4f5] backdrop-blur-md"
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
