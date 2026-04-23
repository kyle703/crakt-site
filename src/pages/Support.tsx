import { Link } from 'react-router-dom'

const SUPPORT_EMAIL = 'crakt+support@thoky.net'

export default function Support() {
  return (
    <div className="max-w-[800px] mx-auto pt-32 px-6 md:px-12 pb-16">
      <h1 className="font-head text-[3rem] font-black uppercase text-accent mb-2">
        Support
      </h1>
      <p className="text-[0.8rem] text-muted mb-12 tracking-[0.08em] uppercase">
        We&apos;re here to help
      </p>

      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Need help with Crakt? Have a bug to report, a feature request, or a
        question about your account? Our team reads every message and will get
        back to you as soon as possible.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Contact Support
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-6">
        Email us directly at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent">
          {SUPPORT_EMAIL}
        </a>
        . We typically respond within 1&ndash;2 business days.
      </p>
      <a
        href={`mailto:${SUPPORT_EMAIL}?subject=Crakt%20Support%20Request`}
        className="inline-flex items-center gap-[0.6rem] bg-accent text-cream font-head text-base font-bold tracking-[0.12em] uppercase py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 cursor-pointer border-none no-underline"
      >
        Email Support
      </a>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        What to Include
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        To help us resolve your issue quickly, please include the following
        when you write in:
      </p>
      <ul className="pl-6 list-disc">
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          A clear description of the issue or question.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          Your device model and operating system version (e.g. iPhone 15, iOS
          18.2).
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          The version of Crakt you&apos;re running (found in the app&apos;s
          settings).
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          Steps to reproduce the issue, if applicable.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          Screenshots or screen recordings, if they help illustrate the
          problem.
        </li>
      </ul>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Account & Data Requests
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        To request account deletion, data export, or to exercise any other
        privacy rights, email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent">
          {SUPPORT_EMAIL}
        </a>{' '}
        with &ldquo;Account Request&rdquo; in the subject line.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Mailing Address
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-8">
        Highball Beta LLC
        <br />
        Richmond, Virginia, United States
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-[0.6rem] bg-accent text-cream font-head text-base font-bold tracking-[0.12em] uppercase py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 cursor-pointer border-none no-underline"
      >
        ← Back to Site
      </Link>
    </div>
  )
}
