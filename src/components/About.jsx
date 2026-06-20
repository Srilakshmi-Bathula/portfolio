import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const beats = [
  {
    tag: '2022',
    title: 'Started a Diploma, not a B.Tech',
    body: "Most of my CS peers went straight to a 4-year degree. I started with a Diploma in Computer Engineering at Bapatla Engineering College — a path that forced me to get hands-on with fundamentals earlier than most. I closed it with a 91.67 CGPA.",
  },
  {
    tag: '2025',
    title: 'Transferred the head start into B.Tech',
    body: 'I moved into B.Tech CSE at Vishnu Institute of Technology and kept the same intensity — currently holding a 9.41 CGPA while layering on DSA, DBMS, and systems coursework.',
  },
  {
    tag: 'Apr 2026',
    title: 'Took the leap into production code',
    body: 'While most 2nd-years are still doing toy projects, I was writing backend services for an actual platform — Healthletic Lifestyle — designing MongoDB schemas and shipping Express.js endpoints used in production.',
  },
  {
    tag: '2026',
    title: 'Started contributing upstream',
    body: "I'm now a GSSoC 2026 contributor, working inside real codebases under mentorship instead of only my own repos — and leading teams through two hackathons along the way.",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-5xl mx-auto">
      <SectionHeading eyebrow="// about" title="From diploma to production code" />

      <div className="relative pl-6 border-l border-line">
        {beats.map((b, i) => (
          <motion.div
            key={b.tag}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-amber shadow-[0_0_0_4px_rgba(10,14,20,1)]" />
            <p className="font-mono text-xs text-cyan mb-1">{b.tag}</p>
            <h3 className="font-display text-xl mb-2">{b.title}</h3>
            <p className="text-mutedtxt leading-relaxed max-w-2xl">{b.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-mono text-sm text-mutedtxt mt-14 border-t border-line pt-6"
      >
        <span className="text-amber">// next:</span> finishing B.Tech, deepening backend systems
        and ML fundamentals, and becoming the engineer who gets handed the hard problems first.
      </motion.p>
    </section>
  )
}
