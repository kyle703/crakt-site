import { APP_STORE_LIVE, TESTFLIGHT_URL, primaryCta } from '../constants'
import Phone from './Phone'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24 px-5 md:px-12">
      {/* The App Store header art: a gym wall at night with one route lit up. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{ backgroundImage: 'url(/brand/wall.jpg)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(15,20,46,0.96) 0%, rgba(15,20,46,0.8) 45%, rgba(15,20,46,0.35) 100%), linear-gradient(0deg, #0f142e 0%, transparent 30%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-[2] max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-8 items-center">
        <div>
          <p className="animate-fadeUp fadeUp-delay-1 eyebrow text-accent mb-5">The climber's journal</p>
          <h1 className="animate-fadeUp fadeUp-delay-2 font-head font-black text-[clamp(3.2rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] mb-6">
            Track the send.
          </h1>
          <p className="animate-fadeUp fadeUp-delay-3 text-[1.15rem] leading-[1.7] text-muted max-w-[520px] mb-9">
            Log every attempt at the wall, see exactly where your climbing is going, and keep
            your logbook on your phone. All stats. No feed. No ads.
          </p>
          <div className="animate-fadeUp fadeUp-delay-4 flex flex-wrap items-center gap-3">
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="font-head font-extrabold text-white bg-accent hover:bg-accent-light no-underline py-3.5 px-7 rounded-full text-base shadow-[0_10px_30px_-8px_rgba(247,105,32,0.7)] transition-all duration-200 hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </a>
            <a
              href="#features"
              className="font-head font-bold text-cream glass hover:bg-white/10 no-underline py-3.5 px-7 rounded-full text-base transition-colors duration-200"
            >
              See what it does
            </a>
          </div>
          {APP_STORE_LIVE ? (
            <p className="animate-fadeUp fadeUp-delay-4 mt-5 text-sm text-muted">
              Free on the App Store, for iPhone with iOS 17 or later.
            </p>
          ) : (
            <p className="animate-fadeUp fadeUp-delay-4 mt-5 text-sm text-muted">
              Coming soon to the App Store. Free on{' '}
              <a href={TESTFLIGHT_URL} target="_blank" rel="noreferrer" className="text-accent-light hover:underline">
                TestFlight
              </a>{' '}
              today, for iPhone with iOS 17 or later.
            </p>
          )}
        </div>

        <div className="relative h-[540px] sm:h-[600px] max-w-[520px] w-full mx-auto">
          <Phone
            name="active-session"
            alt="An active session: route grade, attempt log, and the session timer"
            className="absolute left-0 top-10 w-[54%] -rotate-[5deg] opacity-90"
          />
          <Phone
            name="home"
            alt="crakt Home with a live session in the header, lifetime stats, and gym passes"
            className="absolute right-0 top-0 w-[58%] rotate-[3deg] animate-floatY"
            eager
          />
        </div>
      </div>
    </section>
  )
}
