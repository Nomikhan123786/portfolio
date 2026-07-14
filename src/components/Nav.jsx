import { useState } from 'react'
import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme.js'

const LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/72 backdrop-blur-md border-b border-border">
      <div className="max-w-[1140px] mx-auto px-7 py-[18px] flex items-center justify-between relative">
        <Link to="/#home" className="font-display font-bold text-[1.15rem] flex items-center gap-2">
          <span className="w-[30px] h-[30px] rounded-lg bg-linear-to-br from-cyan to-violet flex items-center justify-center font-mono text-[0.8rem] font-bold text-[#04110f]">
            NN
          </span>
          Noman Nawaz
        </Link>

        <div
          className={`${open ? 'flex' : 'hidden'} nav:flex flex-col nav:flex-row gap-[18px] nav:gap-8
             text-[0.92rem] text-ink-muted absolute nav:static top-full left-0 right-0 bg-panel nav:bg-transparent
             px-7 nav:px-0 py-6 nav:py-0 border-b nav:border-none border-border items-start nav:items-center`}
        >
          {LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="transition-colors duration-200 hover:text-cyan"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="px-[18px] py-[9px] rounded-lg border border-cyan text-cyan text-[0.88rem] font-semibold
               transition-all duration-200 hover:bg-cyan hover:text-[#04110f]
               inline-flex justify-center mt-2 nav:mt-0"
          >
            Let&apos;s talk
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-ink-muted transition-colors duration-200 hover:border-cyan hover:text-cyan"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="nav:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none"
          >
            <span className="w-[22px] h-[2px] bg-ink"></span>
            <span className="w-[22px] h-[2px] bg-ink"></span>
            <span className="w-[22px] h-[2px] bg-ink"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
