export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mutedtxt">
          © {new Date().getFullYear()} Sri Lakshmi Bathula. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5 font-mono text-xs text-mutedtxt">
          <a href="https://github.com/Srilakshmi-Bathula" target="_blank" rel="noreferrer" className="hover:text-cyan">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:text-cyan">
            LinkedIn
          </a>
          <a href="mailto:bathulasrilakshmi80088@gmail.com" className="hover:text-cyan">
            Email
          </a>
          <a href="#top" className="px-3 py-1.5 rounded border border-line hover:border-amber hover:text-amber transition">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  )
}
