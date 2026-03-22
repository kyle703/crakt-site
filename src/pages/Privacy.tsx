interface PrivacyProps {
  onBack: () => void
}

export default function Privacy({ onBack }: PrivacyProps) {
  return (
    <div className="max-w-[800px] mx-auto pt-32 px-6 md:px-12 pb-16">
      <h1 className="font-head text-[3rem] font-black uppercase text-accent mb-2">
        Privacy Policy
      </h1>
      <p className="text-[0.8rem] text-muted mb-12 tracking-[0.08em] uppercase">
        Last updated: March 2026
      </p>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Highball Beta LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
        &ldquo;us&rdquo;) operates the Crakt mobile application. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you use Crakt.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Information We Collect
      </h2>
      <ul className="pl-6 list-disc">
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          <strong>Account information:</strong> name and email address if you
          choose to create an account.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          <strong>Climbing data:</strong> routes logged, grades, session notes,
          climb status, and performance metrics you enter into the app.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          <strong>Gym pass data:</strong> pass information you store locally on
          your device.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          <strong>Device information:</strong> device type, operating system
          version, and crash diagnostics.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          <strong>Usage data:</strong> anonymized, aggregated data about how
          features are used to improve the app.
        </li>
      </ul>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Local-First Design
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Crakt is designed with a local-first approach. Your climbing data and
        gym passes are stored on your device by default. No account or network
        connection is required to use core features of the app.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        How We Use Your Information
      </h2>
      <ul className="pl-6 list-disc">
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          To provide, operate, and improve the Crakt app and its features.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          To personalize your climbing experience.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          To communicate with you about updates, support, and account matters.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          To analyze anonymized usage patterns and fix bugs.
        </li>
      </ul>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Data Sharing
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We do not sell your personal data. We do not share your information with
        third parties except:
      </p>
      <ul className="pl-6 list-disc">
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          With service providers who assist in operating the app, under strict
          data processing agreements.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          If required by law or valid legal process.
        </li>
        <li className="text-muted leading-[1.8] text-[0.95rem] mb-3">
          In connection with a merger, acquisition, or sale of company assets,
          with prior notice to users.
        </li>
      </ul>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Data Retention
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We retain your data for as long as your account is active or as
        necessary to provide services. You may request deletion of your account
        and associated data at any time by contacting us at{' '}
        <a href="mailto:hb@thoky.net" className="text-accent">
          hb@thoky.net
        </a>
        .
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Your Rights
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Depending on your location, you may have rights to access, correct, or
        delete your personal data. To exercise these rights, contact us at{' '}
        <a href="mailto:hb@thoky.net" className="text-accent">
          hb@thoky.net
        </a>
        .
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Children&apos;s Privacy
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        Crakt is not directed to children under the age of 13. We do not
        knowingly collect personal information from children under 13. If we
        learn we have collected such information, we will delete it promptly.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Security
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We implement reasonable technical and organizational measures to protect
        your data. However, no transmission over the internet is completely
        secure.
      </p>

      <h2 className="font-head text-[1.4rem] font-bold uppercase tracking-[0.08em] text-cream mt-8 mb-3 border-l-[3px] border-accent pl-3">
        Changes to This Policy
      </h2>
      <p className="text-muted leading-[1.8] text-[0.95rem] mb-3">
        We may update this Privacy Policy from time to time. We will notify you
        of material changes via the app or email.
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
      <button
        onClick={onBack}
        className="inline-flex items-center gap-[0.6rem] bg-accent text-cream font-head text-base font-bold tracking-[0.12em] uppercase py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 cursor-pointer border-none"
      >
        ← Back to Site
      </button>
    </div>
  )
}
