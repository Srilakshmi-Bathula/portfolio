import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Backend Developer', 'Open Source Contributor', 'ML Enthusiast', 'Problem Solver']

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export default function Hero() {
  const roleText = useTypewriter(ROLES)

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10"
      >
        <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber to-cyan blur-md opacity-40 animate-pulse" />
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Sri Lakshmi Bathula"
            className="relative w-full h-full object-cover rounded-full border-2 border-line shadow-2xl"
          />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-ink border-2 border-surface flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
          </span>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="section-eyebrow text-cyan text-xs md:text-sm mb-3 z-10"
      >
        // 2nd Year B.Tech CSE · CGPA 9.41 · Vishnu Institute of Technology
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.6 }}
        className="font-display text-4xl md:text-6xl font-700 text-center leading-tight z-10"
      >
        Hi, I'm <span className="text-gradient">Sri Lakshmi Bathula</span>
      </motion.h1>

      <div className="h-10 mt-4 font-mono text-lg md:text-xl text-mutedtxt z-10 flex items-center">
        <span className="text-amber mr-2">$</span>
        <span>{roleText}</span>
        <span className="inline-block w-[2px] h-5 bg-cyan ml-1 animate-pulse" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="max-w-xl text-center text-mutedtxt mt-6 z-10 leading-relaxed"
      >
        I build backend systems that hold up under real use — REST APIs, MongoDB-backed
        services, and the occasional machine learning model. Three months into my first
        internship, I'm already shipping production endpoints and contributing to open source.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-9 z-10"
      >
        <a
          href="https://github.com/Srilakshmi-Bathula"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-md border border-line text-white font-mono text-sm hover:border-cyan hover:text-cyan transition focus-ring"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/srilakshmi-bathula"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-md border border-line text-white font-mono text-sm hover:border-cyan hover:text-cyan transition focus-ring"
        >
          LinkedIn ↗
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 text-mutedtxt font-mono text-xs flex flex-col items-center gap-2 z-10"
      >
        scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="block"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  )
}
