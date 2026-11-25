import { Link } from 'react-router-dom'
import { primaryCta } from '../constants'

const links = [
  { to: '/#features', label: 'Features' },
  { to: '/#screens', label: 'Screens' },
  { to: '/#about', label: 'About' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-9 left-0 right-0 z-[100] flex items-center justify-between gap-4 py-3 px-5 md:px-12 bg-ink/80 backdrop-blur-[14px] border-b border-white/[0.07]">
      <Link to="/" className="flex items-center gap-2.5 no-underline" aria-label="crakt home">
        <img src="/brand/mark.png" alt="" width={30} height={30} className="drop-shadow-[0_0_10px_rgba(247,105,32,0.55)]" />
        <span className="font-head font-black text-[1.45rem] tracking-[-0.01em] text-cream">crakt</span>
      </Link>
      <div className="flex items-center gap-5 md:gap-9">
        <ul className="hidden sm:flex list-none gap-7 m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted no-underline text-[0.9rem] font-medium transition-colors duration-200 hover:text-cream"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={primaryCta.href}
          target="_blank"
          rel="noreferrer"
          className="font-head font-extrabold text-[0.85rem] text-white bg-accent hover:bg-accent-light no-underline py-2 px-4 rounded-full transition-colors duration-200"
        >
          {primaryCta.label}
        </a>
      </div>
    </nav>
  )
}
