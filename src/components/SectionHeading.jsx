import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="section-eyebrow text-cyan text-xs mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-700">{title}</h2>
    </motion.div>
  )
}
