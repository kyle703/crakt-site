import { APP_STORE_LIVE, primaryCta } from '../constants'

export default function About() {
  return (
    <section id="about" className="relative z-[1] px-5 md:px-12 py-16 md:py-24 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="eyebrow text-accent mb-4">The company</p>
          <h2 className="font-head font-black text-[clamp(2.1rem,4.5vw,3.3rem)] leading-[1.02] tracking-[-0.015em] mb-6">
            Highball Beta LLC
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-muted mb-5">
            Highball Beta is an independent software company in Richmond, Virginia, building tools
            for the climbing community. crakt is our flagship product.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-muted">
            We climb, and we built crakt for the session: big tap targets for chalky hands, numbers
            you can read pumped, and nothing between you and the next attempt.
          </p>
        </div>

        <div className="ink-surface rounded-[2rem] border border-white/10 p-8 md:p-10 text-center">
          <img src="/brand/app-icon.webp" alt="crakt app icon" width={112} height={112} className="mx-auto rounded-[26px] shadow-[0_20px_40px_-10px_rgba(247,105,32,0.5)]" />
          <h3 className="font-head font-black text-[1.9rem] mt-6 mb-2">Ready to climb?</h3>
          <p className="text-muted mb-7">
            {APP_STORE_LIVE
              ? 'Free on the App Store for iPhone.'
              : 'In App Store review now. Get it today on TestFlight.'}
          </p>
          <a
            href={primaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-head font-extrabold text-white bg-accent hover:bg-accent-light no-underline py-3.5 px-8 rounded-full shadow-[0_10px_30px_-8px_rgba(247,105,32,0.7)] transition-colors duration-200"
          >
            {primaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
