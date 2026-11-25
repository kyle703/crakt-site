import Phone from './Phone'

const screens = [
  { name: 'home', caption: 'Home' },
  { name: 'active-session', caption: 'Active session' },
  { name: 'finish-session', caption: 'Finish a session' },
  { name: 'session-detail', caption: 'Session review' },
  { name: 'share-studio', caption: 'Share studio' },
  { name: 'activity', caption: 'Activity' },
  { name: 'analytics', caption: 'Your form' },
  { name: 'analytics-trends', caption: 'Trends' },
  { name: 'analytics-grades', caption: 'Grade history' },
  { name: 'gyms', caption: 'Gyms & passes' },
  { name: 'gym-pass', caption: 'Gym pass' },
  { name: 'gym-finder', caption: 'Find a gym' },
  { name: 'gym-profile', caption: 'Gym profile' },
  { name: 'grade-comparison', caption: 'Grade comparison' },
]

export default function Screenshots() {
  return (
    <section id="screens" className="relative z-[1] py-16 md:py-24 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto px-5 md:px-12">
        <p className="eyebrow text-accent mb-4">In the app</p>
        <h2 className="font-head font-black text-[clamp(2.1rem,4.5vw,3.3rem)] leading-[1.02] tracking-[-0.015em] mb-3">
          Every screen, real data.
        </h2>
        <p className="text-muted text-[1.05rem] mb-10">Captured from the app with a sample climber’s logbook.</p>
      </div>
      <div className="scroll-row flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 px-5 md:px-12">
        {screens.map((s) => (
          <figure key={s.name} className="flex-none w-[200px] sm:w-[230px] snap-start m-0">
            <Phone name={s.name} alt={`crakt ${s.caption} screen`} />
            <figcaption className="font-head font-bold text-sm text-muted text-center mt-4">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
