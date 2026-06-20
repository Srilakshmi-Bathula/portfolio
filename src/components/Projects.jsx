import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const projects = [
  {
    name: 'Contact Manager Backend API',
    year: '2025',
    overview:
      'A secure REST API for managing personal contacts, built from scratch with full authentication rather than a tutorial clone.',
    features: [
      'JWT-based registration and login from scratch',
      'Protected-route middleware scoped to each user',
      'Full CRUD for contacts following REST conventions',
      'MVC structure separating controllers, models, routes',
    ],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT'],
    github: 'https://github.com/Srilakshmi-Bathula',
    demo: null,
  },
  {
    name: 'AI Campus Coach',
    year: '2025',
    overview:
      'An NLP-powered interview practice tool that generates domain-specific questions and scores responses automatically.',
    features: [
      'Generates 5 domain-specific interview questions',
      'Automated scoring + knowledge-gap detection',
      'Personalized improvement plans via OpenAI API',
      'Prompt engineering tuned for difficulty and feedback quality',
    ],
    stack: ['Python', 'HTML', 'CSS', 'OpenAI API', 'Prompt Engineering'],
    github: 'https://github.com/Srilakshmi-Bathula',
    demo: null,
  },
  {
    name: 'Iris Flower Classification',
    year: '2026',
    overview:
      'A supervised learning pipeline on the classic UCI Iris dataset, reaching 100% test accuracy with a clean evaluation process.',
    features: [
      '80/20 train-test split, Random Forest (100 estimators)',
      '100% accuracy across 3 flower species',
      'Evaluated via precision, recall, and F1-score',
      'Preprocessing + feature analysis with NumPy/Pandas',
    ],
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Google Colab'],
    github: 'https://github.com/Srilakshmi-Bathula',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 max-w-6xl mx-auto">
      <SectionHeading eyebrow="// projects" title="Featured work" />

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-surface border border-line rounded-2xl p-6 hover:border-amber/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display text-lg leading-snug">{p.name}</h3>
              <span className="font-mono text-[11px] text-mutedtxt">{p.year}</span>
            </div>
            <p className="text-sm text-mutedtxt mb-4 leading-relaxed">{p.overview}</p>

            <p className="font-mono text-[11px] text-cyan mb-2">key features</p>
            <ul className="text-sm text-white/85 space-y-1.5 mb-4">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-amber">›</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {p.stack.map((s) => (
                <span key={s} className="text-[11px] font-mono px-2 py-1 bg-surface2 border border-line rounded">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-xs font-mono py-2 rounded-md border border-line hover:border-cyan hover:text-cyan transition focus-ring"
              >
                GitHub ↗
              </a>
              <button
                disabled
                title="Live demo coming soon"
                className="flex-1 text-center text-xs font-mono py-2 rounded-md border border-line text-mutedtxt/50 cursor-not-allowed"
              >
                Live Demo
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
