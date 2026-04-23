import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-accent/15 py-8 px-6 md:py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between flex-wrap gap-4">
      <div className="font-head font-black text-[1.2rem] tracking-[0.08em] text-cream">
        CRAKT<span className="text-accent">.</span>
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <Link
            to="/privacy"
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="/terms"
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Terms of Service
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Contact
          </Link>
        </li>
      </ul>
      <p className="text-[0.8rem] text-muted w-full mt-2 text-left md:text-center">
        © 2026 Highball Beta LLC. All rights reserved. Crakt is a product of
        Highball Beta LLC.
      </p>
    </footer>
  )
}
