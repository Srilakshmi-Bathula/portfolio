import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

// NOTE FOR SRI LAKSHMI:
// Replace FORM_ENDPOINT below with your own Formspree endpoint.
// 1. Go to https://formspree.io and sign up free.
// 2. Create a new form, it gives you a URL like:
//    https://formspree.io/f/xxxxxxxx
// 3. Paste that URL into FORM_ENDPOINT below.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Feedback() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        setStatus('success')
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="feedback" className="relative py-28 px-6 max-w-2xl mx-auto">
      <SectionHeading eyebrow="// feedback" title="Leave a note" align="center" />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="glass rounded-2xl p-7 md:p-9 space-y-5"
        noValidate
      >
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-mutedtxt mb-1.5">
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="w-full bg-surface2 border border-line rounded-md px-4 py-2.5 text-sm text-white focus-ring focus:border-cyan outline-none"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-mono text-xs text-mutedtxt mb-1.5">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="w-full bg-surface2 border border-line rounded-md px-4 py-2.5 text-sm text-white focus-ring focus:border-cyan outline-none"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-mono text-xs text-mutedtxt mb-1.5">
            message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className="w-full bg-surface2 border border-line rounded-md px-4 py-2.5 text-sm text-white focus-ring focus:border-cyan outline-none resize-none"
            placeholder="Say hello, or share feedback on this portfolio..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-red-400 mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 rounded-md bg-amber text-ink font-mono text-sm font-medium hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed focus-ring"
        >
          {status === 'loading' ? 'Sending…' : 'Send Message'}
        </button>

        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-cyan font-mono text-center"
          >
            ✓ Message sent. Thank you — I'll get back to you soon.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-400 font-mono text-center"
          >
            ✕ Something went wrong. Please try again, or email me directly.
          </motion.p>
        )}
      </motion.form>
    </section>
  )
}
