import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { blurUp, blurUpChild, fadeUp, staggerContainer } from '../lib/motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#1a1320]"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/hero-sm.jpg" />
        <img
          src="/hero.jpg"
          alt=""
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <div aria-hidden className="absolute inset-0 bg-[#1a1320]/55 md:bg-[#502f4c] md:mix-blend-multiply md:opacity-80" />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#1a1320]/80 via-[#502f4c]/35 to-[#70587c]/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#1a1320]/50 via-transparent to-[#1a1320]/30"
      />

      <div className="container-narrow relative w-full px-5 pt-24 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:px-12">
        <div className="max-w-2xl">
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="font-display text-[clamp(2.15rem,11vw,5.6rem)] leading-[1.05] font-extrabold tracking-tight text-[#f9f4f5] break-words"
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
            className="mt-4 text-base sm:text-lg md:text-2xl font-semibold text-[#f9f4f5] text-pretty"
          >
            {profile.role}
          </motion.h2>

          <motion.p
            custom={0.3}
            variants={blurUp}
            initial="hidden"
            animate="show"
            className="mt-4 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-[#c8b8db] text-pretty"
          >
            {profile.tagline} {profile.bio}
          </motion.p>

          <motion.div
            custom={0.42}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href={profile.socials.email}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#502f4c] px-5 py-3 text-sm font-semibold text-[#f9f4f5] shadow-lg shadow-black/30"
            >
              <Mail size={16} />
              Email Ericka
            </motion.a>
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c8b8db]/50 bg-white/5 px-5 py-3 text-sm font-semibold text-[#f9f4f5] backdrop-blur-md"
            >
              View Projects
              <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c8b8db]/50 bg-white/5 px-5 py-3 text-sm font-semibold text-[#f9f4f5] backdrop-blur-md"
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
