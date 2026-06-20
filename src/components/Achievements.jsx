import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const items = [
  {
    title: 'GSSoC 2026 Contributor',
    org: 'GirlScript Summer of Code',
    body: 'Selected as an open-source contributor, actively shipping into real-world projects under mentorship.',
  },
  {
    title: 'Team Lead, Hack-A-Tron 3.3',
    org: 'GDG On Campus — 2026',
    body: 'Led a team to design and build GramRide inside a 24-hour hackathon window.',
  },
  {
    title: 'Team Lead, Smart India Hackathon',
    org: 'SIH Internal Round',
    body: 'Proposed and led a Civic Issues Reporting & Resolution System through the internal round.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6 max-w-5xl mx-auto">
      <SectionHeading eyebrow="// achievements" title="Leadership, beyond coursework" />
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass rounded-xl p-6"
          >
            <p className="font-mono text-xs text-amber mb-2">{it.org}</p>
            <h3 className="font-display text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-mutedtxt leading-relaxed">{it.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
