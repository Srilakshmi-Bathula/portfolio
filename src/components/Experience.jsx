import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const highlights = [
  { label: 'REST API Development', detail: 'Designed and built scalable, production-bound API endpoints.' },
  { label: 'Node.js', detail: 'Server-side logic and runtime for all backend services.' },
  { label: 'Express.js', detail: 'Routing and middleware layer powering the platform APIs.' },
  { label: 'MongoDB', detail: 'Schema design and querying via MongoShell and Mongoose Compass.' },
  { label: 'Team Collaboration', detail: 'Joined architecture discussions, not just ticket execution.' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 max-w-5xl mx-auto">
      <SectionHeading eyebrow="// experience" title="Backend Developer Intern" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 md:p-10"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
          <div>
            <h3 className="font-display text-2xl">Healthletic Lifestyle</h3>
            <p className="text-mutedtxt text-sm mt-1">Backend Developer Intern · 3-Month Internship</p>
          </div>
          <span className="font-mono text-xs text-cyan border border-cyan/30 rounded-full px-3 py-1 self-start md:self-auto">
            Apr 2026 – Jun 2026
          </span>
        </div>

        <ul className="space-y-3 text-mutedtxt leading-relaxed mb-8">
          <li>· Developed and maintained RESTful backend services for a health &amp; lifestyle platform.</li>
          <li>· Designed and queried MongoDB databases using MongoShell and Mongoose Compass.</li>
          <li>· Built scalable API endpoints using Node.js and Express.js for production use.</li>
          <li>· Collaborated on backend architecture decisions and server-side logic implementation.</li>
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="group relative bg-surface2 rounded-lg p-3 text-center border border-line hover:border-amber/40 transition"
            >
              <p className="font-mono text-[11px] text-white">{h.label}</p>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-44 bg-ink border border-line rounded-md p-2 text-[11px] text-mutedtxt opacity-0 group-hover:opacity-100 transition pointer-events-none z-20">
                {h.detail}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
