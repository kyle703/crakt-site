import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] px-5 md:px-12 py-16 md:py-20 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-6">
          <p className="eyebrow text-accent mb-3">Get in touch</p>
          <p className="text-muted leading-[1.7] mb-3">General questions, partnerships, or press.</p>
          <a href="mailto:hb@thoky.net" className="font-head font-bold text-cream hover:text-accent-light">
            hb@thoky.net
          </a>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="eyebrow text-accent mb-3">Need help?</p>
          <p className="text-muted leading-[1.7] mb-3">Questions about the app, backups, or your data.</p>
          <Link to="/support" className="font-head font-bold text-cream hover:text-accent-light no-underline">
            Visit support
          </Link>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="eyebrow text-accent mb-3">Highball Beta LLC</p>
          <address className="not-italic text-muted leading-[1.7]">
            Richmond, Virginia
            <br />
            United States
          </address>
        </div>
      </div>
    </section>
  )
}
