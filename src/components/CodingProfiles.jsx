import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const profiles = [
  { label: 'GitHub', handle: 'github.com/Srilakshmi-Bathula', detail: 'ML projects, backend APIs, React portfolio.', href: 'https://github.com/Srilakshmi-Bathula' },
  { label: 'LeetCode', handle: 'Practicing DSA daily', detail: 'Solving problems in Java and Python.', href: '#' },
  { label: 'GeeksforGeeks', handle: 'Problem archive', detail: 'Solved problems in Java.', href: '#' },
  { label: 'LinkedIn', handle: 'Sri Lakshmi Bathula', detail: 'Career updates and professional network.', href: '#' },
]

export default function CodingProfiles() {
  return (
    <section className="relative py-28 px-6 max-w-5xl mx-auto">
      <SectionHeading eyebrow="// coding profiles" title="Where I keep the receipts" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {profiles.map((p, i) => (
          <motion.a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="block bg-surface border border-line rounded-xl p-5 hover:border-cyan/40 transition"
          >
            <p className="font-display text-base mb-1">{p.label}</p>
            <p className="font-mono text-[11px] text-cyan mb-2 truncate">{p.handle}</p>
            <p className="text-xs text-mutedtxt leading-relaxed">{p.detail}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
