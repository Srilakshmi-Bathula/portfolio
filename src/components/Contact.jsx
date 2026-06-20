import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const channels = [
  { label: 'Email', value: 'bathulasrilakshmi80088@gmail.com', href: 'mailto:bathulasrilakshmi80088@gmail.com' },
  { label: 'LinkedIn', value: 'Sri Lakshmi Bathula', href: '#' },
  { label: 'GitHub', value: 'Srilakshmi-Bathula', href: 'https://github.com/Srilakshmi-Bathula' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 max-w-3xl mx-auto text-center">
      <SectionHeading eyebrow="// contact" title="Let's talk shop" align="center" />
      <p className="text-mutedtxt mb-10 max-w-md mx-auto">
        Open to backend, full-stack, and ML-adjacent opportunities — internships, collaborations,
        or just a good technical conversation.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="px-6 py-3 rounded-md border border-line font-mono text-sm hover:border-amber hover:text-amber transition focus-ring"
          >
            {c.label} <span className="text-mutedtxt">· {c.value}</span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
