import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#journey', label: 'journey' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-amber tracking-tight">
          sri<span className="text-mutedtxt">@</span>portfolio<span className="text-cyan">:~$</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-mutedtxt">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-cyan transition-colors focus-ring">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-mutedtxt"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className="font-mono text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm text-mutedtxt">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-cyan">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.header>
  )
}
