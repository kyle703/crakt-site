import { Link } from 'react-router-dom'

const links = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/support', label: 'Support' },
  { to: '/#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.07] py-10 px-5 md:px-12">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src="/brand/mark.png" alt="" width={26} height={26} />
          <span className="font-head font-black text-[1.25rem] text-cream">crakt</span>
          <span className="text-muted text-sm ml-2">Track the send.</span>
        </div>
        <ul className="list-none flex flex-wrap gap-x-7 gap-y-2 m-0 p-0">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted no-underline text-sm transition-colors duration-200 hover:text-cream">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1180px] mx-auto text-[0.8rem] text-muted/80 mt-8">
        © 2026 Highball Beta LLC. crakt is a product of Highball Beta LLC. Apple, iPhone, Apple
        Wallet, and Dynamic Island are trademarks of Apple Inc.
      </p>
    </footer>
  )
}
