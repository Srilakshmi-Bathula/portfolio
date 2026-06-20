import { useRef, useEffect } from 'react'

// Lightweight canvas "particle" field styled as drifting terminal characters/dots —
// nods to the backend/CLI world this portfolio lives in, without being a generic starfield.
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let raf
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const glyphs = ['0', '1', '{', '}', '<', '>', '/', ';']
    const count = Math.min(60, Math.floor(window.innerWidth / 22))

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: 0.15 + Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.12,
      size: 10 + Math.random() * 8,
      glyph: glyphs[Math.floor(Math.random() * glyphs.length)],
      opacity: 0.06 + Math.random() * 0.14,
      hue: Math.random() > 0.5 ? '255,180,84' : '92,207,230',
    }))

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.font = `${p.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = `rgba(${p.hue},${p.opacity})`
        ctx.fillText(p.glyph, p.x, p.y)
        p.y -= p.vy
        p.x += p.vx
        if (p.y < -20) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
        }
      })
      raf = requestAnimationFrame(draw)
    }

    if (!prefersReduced) {
      draw()
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
