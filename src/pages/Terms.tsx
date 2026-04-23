import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <div className="max-w-[800px] mx-auto pt-32 px-6 md:px-12 pb-16">
      <h1 className="font-head text-[3rem] font-black uppercase text-accent mb-2">
        Terms of Service
      </h1>
      <p className="text-[0.8rem] text-muted mb-12 tracking-[0.08em] uppercase">
        Last updated: March 2026
      </p>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
        Crakt mobile application operated by Highball Beta LLC (&ldquo;we,&rdquo;
        &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By using Crakt, you agree to
        these Terms.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Use of the App
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        You must be at least 13 years old to use Crakt. You agree to use the app
        only for lawful purposes and in accordance with these Terms. You are
        responsible for maintaining the confidentiality of your account
        credentials.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        User Content
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        You retain ownership of the climbing data and content you submit to
        Crakt. By submitting content, you grant Highball Beta LLC a limited,
        non-exclusive license to store and display that content solely for the
        purpose of operating the app. You agree not to submit content that is
        unlawful, harmful, or infringes on the rights of others.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Intellectual Property
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        The Crakt app, including its design, code, and branding, is owned by
        Highball Beta LLC and protected by applicable intellectual property laws.
        You may not copy, modify, distribute, or reverse-engineer any part of
        the app without our written consent.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Disclaimers
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Crakt is provided &ldquo;as is&rdquo; without warranties of any kind.
        We do not warrant that the app will be uninterrupted or error-free.
      </p>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        <strong>Climbing is an inherently dangerous activity.</strong> Crakt is
        an informational tool only. Nothing in the app constitutes safety advice.
        Always exercise your own judgment and follow your gym&apos;s rules and
        safety guidelines.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Limitation of Liability
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        To the maximum extent permitted by law, Highball Beta LLC shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising from your use of Crakt.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Termination
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We reserve the right to suspend or terminate your account if you violate
        these Terms. You may delete your account at any time by contacting us.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Governing Law
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        These Terms are governed by the laws of the Commonwealth of Virginia,
        United States, without regard to conflict of law principles.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Changes to Terms
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We may update these Terms from time to time. Continued use of Crakt
        after changes constitutes acceptance of the updated Terms.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Contact Us
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Highball Beta LLC
        <br />
        Richmond, Virginia, United States
        <br />
        <a href="mailto:hb@thoky.net" className="text-accent">
          hb@thoky.net
        </a>
      </p>
      <br />
      <Link
        to="/"
        className="inline-flex items-center gap-[0.6rem] bg-accent text-cream font-head text-base font-bold tracking-[0.12em] uppercase py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 cursor-pointer border-none no-underline"
      >
        ← Back to Site
      </Link>
    </div>
  )
}
