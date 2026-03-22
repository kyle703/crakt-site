interface NavbarProps {
  onLogoClick: () => void
}

export default function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <nav className="fixed top-8 md:top-[2.25rem] left-0 right-0 z-[100] flex items-center justify-between py-4 px-6 md:py-5 md:px-12 bg-navy/85 backdrop-blur-[12px] border-b border-accent/15">
      <a
        href="#"
        className="font-head font-black text-[1.6rem] tracking-[0.08em] text-cream no-underline"
        onClick={(e) => {
          e.preventDefault()
          onLogoClick()
        }}
      >
        CRAKT<span className="text-accent">.</span>
      </a>
      <ul className="list-none flex gap-5 md:gap-10">
        <li>
          <a
            href="#features"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-muted no-underline text-[0.85rem] font-medium tracking-[0.1em] uppercase transition-colors duration-200 hover:text-accent"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
