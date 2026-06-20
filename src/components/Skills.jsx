import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const groups = [
  { label: 'Programming', items: ['Java', 'Python', 'JavaScript', 'C'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React.js'] },
  { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'] },
  { label: 'Database', items: ['MongoDB', 'SQL', 'DBMS Concepts'] },
  { label: 'Machine Learning', items: ['NumPy', 'Pandas', 'Scikit-learn', 'Prompt Engineering'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'PyCharm'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 max-w-5xl mx-auto">
      <SectionHeading eyebrow="// skills" title="What I build with" />

      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-surface border border-line rounded-xl p-5"
          >
            <p className="font-mono text-xs text-amber mb-3">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-md bg-surface2 border border-line text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
