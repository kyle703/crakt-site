import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-8 md:top-[2.25rem] left-0 right-0 z-[100] flex items-center justify-between py-4 px-6 md:py-5 md:px-12 bg-navy/85 backdrop-blur-[12px] border-b border-accent/15">
      <Link
        to="/"
        className="font-head font-black text-[1.6rem] tracking-[0.08em] text-cream no-underline"
      >
        CRAKT<span className="text-accent">.</span>
      </Link>
      <ul className="list-none flex gap-5 md:gap-10">
        <li>
          <Link
            to="/#features"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="/#about"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
