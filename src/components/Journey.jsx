import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  { label: 'Diploma', detail: 'Bapatla Engineering College · 91.67 CGPA' },
  { label: 'B.Tech CSE', detail: 'Vishnu Institute of Technology · 9.41 CGPA' },
  { label: 'Backend Internship', detail: 'Healthletic Lifestyle · Node.js, Express, MongoDB' },
  { label: 'Open Source', detail: 'GSSoC 2026 Contributor' },
  { label: 'Software Engineer', detail: 'In progress →' },
]

export default function Journey() {
  return (
    <section id="journey" className="relative py-28 px-6 max-w-4xl mx-auto">
      <SectionHeading eyebrow="// roadmap" title="My journey, mapped like a pipeline" align="center" />

      <div className="relative flex flex-col items-center">
        {steps.map((s, i) => {
          const isLast = i === steps.length - 1
          return (
            <div key={s.label} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`w-full max-w-sm text-center rounded-xl border px-6 py-4 ${
                  isLast
                    ? 'border-amber/50 bg-amber/5'
                    : 'border-line bg-surface'
                }`}
              >
                <p className={`font-display text-base ${isLast ? 'text-amber' : ''}`}>{s.label}</p>
                <p className="font-mono text-[11px] text-mutedtxt mt-1">{s.detail}</p>
              </motion.div>
              {!isLast && (
                <motion.span
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 32, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                  className="w-px bg-line my-1"
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
