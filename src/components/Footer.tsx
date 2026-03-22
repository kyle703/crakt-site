interface FooterProps {
  onPrivacy: () => void
  onTerms: () => void
  onContact: () => void
}

export default function Footer({ onPrivacy, onTerms, onContact }: FooterProps) {
  return (
    <footer className="border-t border-accent/15 py-8 px-6 md:py-10 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between flex-wrap gap-4">
      <div className="font-head font-black text-[1.2rem] tracking-[0.08em] text-cream">
        CRAKT<span className="text-accent">.</span>
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <a
            onClick={onPrivacy}
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            onClick={onTerms}
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={onContact}
            className="text-muted no-underline text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-200 cursor-pointer hover:text-accent"
          >
            Contact
          </a>
        </li>
      </ul>
      <p className="text-[0.8rem] text-muted w-full mt-2 text-center">
        © 2026 Highball Beta LLC. All rights reserved. Crakt is a product of
        Highball Beta LLC.
      </p>
    </footer>
  )
}
