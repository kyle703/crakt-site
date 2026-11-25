import type { ReactNode } from 'react'
import Phone from './Phone'

/*
  Copy is written from crakt/docs/app-store/FEATURES.md in the app repo.
  Only advertise features marked Live there.
*/

const stats = [
  { value: '1,449', label: 'Indoor gyms across the U.S.' },
  { value: '5', label: 'Grade systems, plus color circuits' },
  { value: '1 tap', label: 'To log an attempt' },
  { value: '0', label: 'Ads, accounts, or feeds' },
]

export function StatStrip() {
  return (
    <section className="relative z-[1] px-5 md:px-12 -mt-4 md:-mt-8">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="glass rounded-2xl px-5 py-5">
            <div className="font-head font-black text-[2rem] leading-none text-cream tabular-nums">{s.value}</div>
            <div className="text-sm text-muted mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Chip({ children, tone = 'accent' }: { children: ReactNode; tone?: 'accent' | 'send' | 'fall' | 'high' | 'plain' }) {
  const tones = {
    accent: 'text-accent-light border-accent/35 bg-accent/10',
    send: 'text-send border-send/35 bg-send/10',
    fall: 'text-fall border-fall/35 bg-fall/10',
    high: 'text-high border-high/35 bg-high/10',
    plain: 'text-cream/85 border-white/15 bg-white/[0.04]',
  }
  return (
    <span className={`font-head font-extrabold text-[0.72rem] tracking-[0.08em] uppercase border rounded-full py-1 px-2.5 ${tones[tone]}`}>
      {children}
    </span>
  )
}

function Section({
  id,
  eyebrow,
  title,
  body,
  points,
  chips,
  media,
  flip = false,
}: {
  id?: string
  eyebrow: string
  title: string
  body: string
  points: string[]
  chips?: ReactNode
  media: ReactNode
  flip?: boolean
}) {
  return (
    <section id={id} className="relative z-[1] px-5 md:px-12 py-16 md:py-24 scroll-mt-28">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={flip ? 'lg:order-2' : ''}>
          <p className="eyebrow text-accent mb-4">{eyebrow}</p>
          <h2 className="font-head font-black text-[clamp(2.1rem,4.5vw,3.3rem)] leading-[1.02] tracking-[-0.015em] mb-5">
            {title}
          </h2>
          <p className="text-[1.08rem] leading-[1.7] text-muted mb-6 max-w-[540px]">{body}</p>
          <ul className="list-none m-0 p-0 grid gap-3 max-w-[540px]">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[0.98rem] leading-[1.6] text-cream/90">
                <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-accent shadow-[0_0_8px_rgba(247,105,32,0.8)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {chips && <div className="flex flex-wrap gap-2 mt-6">{chips}</div>}
        </div>
        <div className={flip ? 'lg:order-1' : ''}>{media}</div>
      </div>
    </section>
  )
}

/** Two or three phones fanned out; the middle one sits on top. */
function PhoneTrio({ shots }: { shots: { name: string; alt: string }[] }) {
  if (shots.length === 2) {
    return (
      <div className="relative mx-auto max-w-[480px] h-[520px] sm:h-[600px]">
        <Phone {...shots[0]} className="absolute left-0 top-12 w-[56%] -rotate-[4deg]" />
        <Phone {...shots[1]} className="absolute right-0 top-0 w-[56%] rotate-[3deg]" />
      </div>
    )
  }
  return (
    <div className="relative mx-auto max-w-[560px] h-[480px] sm:h-[600px]">
      <Phone {...shots[0]} className="absolute left-0 top-16 w-[40%] -rotate-[6deg] opacity-90" />
      <Phone {...shots[2]} className="absolute right-0 top-16 w-[40%] rotate-[6deg] opacity-90" />
      <Phone {...shots[1]} className="absolute left-1/2 top-0 w-[46%] -translate-x-1/2 z-[2]" />
    </div>
  )
}

export default function Features() {
  return (
    <div id="features" className="scroll-mt-24">
      <Section
        eyebrow="At the wall"
        title="One tap per attempt."
        body="Spin the grade dial, then log each go as it happens. crakt keeps time, counts your tries, and starts a rest timer between attempts, so you can stay in your head and out of your phone."
        points={[
          'Send, Fall, or High point. Send it first try and it’s logged as a flash.',
          'Track downclimbs, clean or partial, on any attempt.',
          'Review a route in seconds: effort, how the grade felt, stars, wall angle, holds, and movement style.',
          'Finish with a 1–10 effort rating, anything you tweaked, and the projects you’re still working.',
          'Optional guided warm-up before you pull hard.',
        ]}
        chips={
          <>
            <Chip tone="send">Send</Chip>
            <Chip tone="fall">Fall</Chip>
            <Chip tone="high">High point</Chip>
            <Chip>Flash</Chip>
            <Chip tone="plain">Downclimb</Chip>
          </>
        }
        media={
          <PhoneTrio
            shots={[
              { name: 'active-session', alt: 'Active route card with the grade, timer, and attempt log' },
              { name: 'finish-session', alt: 'Finish session: effort, tweaked areas, and projects for next time' },
            ]}
          />
        }
      />

      <div className="divider" />

      <Section
        flip
        eyebrow="Every session, reviewed"
        title="Know what actually happened."
        body="The moment you finish, crakt lays the session out: what you sent, how long it took, and how it stacks up against your usual."
        points={[
          'Compared to usual: sends, send rate, hardest send, and working grade against your recent sessions.',
          'Each route in the order you tried it, where your attempts went by grade, and how many tries each send took.',
          'Highlights call out new personal bests and big volume days.',
          'Add notes and photos or video to any session.',
        ]}
        media={
          <PhoneTrio
            shots={[
              { name: 'session-detail-2', alt: 'Session timeline and grade breakdown' },
              { name: 'session-detail', alt: 'Session detail: sends, hardest grade, send rate, and compared to usual' },
              { name: 'session-detail-3', alt: 'Efficiency stats and the route log' },
            ]}
          />
        }
      />

      <div className="divider" />

      <Section
        eyebrow="Analytics"
        title="See where your climbing is going."
        body="Not just totals. crakt tracks the numbers that tell you whether you’re getting stronger, and lets you dig into any of them."
        points={[
          'Your form: Momentum, Consistency, and weekly Streak.',
          'Working grade: your median send each session, charted over time.',
          'Trends for grade, volume, send rate, and tries per send.',
          'History for every grade you’ve climbed, for boulders or ropes.',
          'Look back 4 weeks, 12 weeks, a year, or all time.',
        ]}
        media={
          <PhoneTrio
            shots={[
              { name: 'analytics-trends', alt: 'Trends: grade progression, volume, send rate, tries per send' },
              { name: 'analytics', alt: 'Analytics: your form scores and working grade chart' },
              { name: 'analytics-grade-trend', alt: 'Grade progression detail chart' },
            ]}
          />
        }
      />

      <div className="divider" />

      <Section
        flip
        eyebrow="Share the send"
        title="A card worth posting."
        body="Turn any session into a card that looks like it came from the gym, not a spreadsheet."
        points={[
          'Four styles: Poster, Grades, Bold, and Ticket.',
          'Sized for Stories or square posts.',
          'Save it, copy it, share it anywhere, or send it to Strava.',
        ]}
        chips={
          <>
            <Chip tone="plain">Poster</Chip>
            <Chip tone="plain">Grades</Chip>
            <Chip tone="plain">Bold</Chip>
            <Chip tone="plain">Ticket</Chip>
            <Chip>Strava</Chip>
          </>
        }
        media={
          <div className="mx-auto max-w-[300px]">
            <Phone name="share-studio" alt="Share studio with a Poster-style session card" />
          </div>
        }
      />

      <div className="divider" />

      <Section
        eyebrow="Gyms & passes"
        title="Your gym, in your pocket."
        body="Find a gym, keep your membership barcode ready, and see your history at every wall you’ve climbed."
        points={[
          'Search and map 1,449 indoor climbing gyms across the U.S., with hours and directions.',
          'Gym profiles with your personal bests and every session you’ve logged there.',
          'Scan your membership barcode once. Show it at the front desk or add it to Apple Wallet.',
          'Home shows your closest gym, or your pass when you walk in.',
        ]}
        media={
          <PhoneTrio
            shots={[
              { name: 'gym-finder', alt: 'Gym finder map around Richmond, Virginia' },
              { name: 'gym-pass', alt: 'Gym pass with barcode and Add to Apple Wallet' },
              { name: 'gym-profile', alt: 'Gym profile: sessions, sends, time, and personal bests' },
            ]}
          />
        }
      />

      <div className="divider" />

      <Section
        flip
        eyebrow="Every grade system"
        title="Speaks your gym’s language."
        body="Log in whatever your gym uses. crakt remembers each gym’s system, so the right grades are ready when you walk in."
        points={[
          'Build circuits that map each tape color to a grade range.',
          'Separate grade systems for boulders and ropes at every gym.',
          'Convert any grade across YDS, French, Australian, British Tech, V-Scale, and Font.',
        ]}
        chips={
          <>
            <Chip tone="plain">V-Scale</Chip>
            <Chip tone="plain">Font</Chip>
            <Chip tone="plain">YDS</Chip>
            <Chip tone="plain">YDS +/-</Chip>
            <Chip tone="plain">French</Chip>
            <Chip>Color circuits</Chip>
          </>
        }
        media={
          <PhoneTrio
            shots={[
              { name: 'settings', alt: 'Settings: default grade system and custom circuits' },
              { name: 'grade-comparison', alt: 'Grade comparison across systems' },
            ]}
          />
        }
      />

      <div className="divider" />

      {/* Lock Screen: a supporting detail, so a slim band rather than a full section. */}
      <section className="relative z-[1] px-5 md:px-12 py-12 md:py-16">
        <div className="max-w-[1180px] mx-auto glass rounded-[1.75rem] p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_minmax(0,420px)] gap-6 md:gap-10 items-center">
          <div>
            <p className="eyebrow text-accent mb-3">Lock Screen</p>
            <h3 className="font-head font-black text-[1.7rem] leading-tight mb-2">Log without unlocking.</h3>
            <p className="text-muted leading-[1.7] max-w-[520px]">
              Your route, timer, and sends stay on the Lock Screen. Tap Send, Fall, High point, or Next
              without opening the app. The Dynamic Island keeps Send, Fall, and Next a long-press away.
            </p>
          </div>
          <img
            src="/screens/live-lock.webp"
            alt="Lock Screen Live Activity with Send, Fall, High Point, and Next buttons"
            width={900}
            height={343}
            loading="lazy"
            className="w-full h-auto rounded-[1.4rem] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]"
          />
        </div>
      </section>

      <section className="relative z-[1] px-5 md:px-12 py-16 md:py-24">
        <div className="max-w-[1180px] mx-auto ink-surface rounded-[2rem] border border-white/10 p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <p className="eyebrow text-accent mb-4">Private by default</p>
            <h2 className="font-head font-black text-[clamp(2.1rem,4.5vw,3.3rem)] leading-[1.02] tracking-[-0.015em] mb-5">
              Your logbook stays yours.
            </h2>
            <p className="text-[1.08rem] leading-[1.7] text-muted max-w-[520px]">
              crakt keeps your climbing on your iPhone. There’s no account to make, no feed to keep
              up with, and nothing to sell.
            </p>
          </div>
          <ul className="list-none m-0 p-0 grid gap-3">
            {[
              ['On your device', 'Sessions, grades, and passes are stored on your iPhone.'],
              ['No account', 'Open the app and start climbing.'],
              ['Backups you own', 'Export a full .crakt backup anytime and restore it on a new phone.'],
            ].map(([title, text]) => (
              <li key={title} className="glass rounded-2xl p-5">
                <div className="font-head font-extrabold text-lg text-cream">{title}</div>
                <div className="text-muted text-[0.95rem] mt-1">{text}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
