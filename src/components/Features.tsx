const features = [
  {
    icon: '🧗',
    title: 'Route Logging',
    description:
      'Log every attempt with full status tracking. Did you send it clean, take a fall, hit a high point, or downclimb? Crakt captures it all.',
    tags: ['Send', 'Fall', 'High Point', 'Downclimbed'],
  },
  {
    icon: '📊',
    title: 'All Grade Systems',
    description:
      "Whether your gym uses V-scale, Fontainebleau, French sport, UIAA, or color circuits — Crakt speaks your gym's language. Custom circuit support included.",
    tags: ['V-Scale', 'Font', 'French', 'UIAA', 'Circuits'],
  },
  {
    icon: '🪢',
    title: 'Climb Type Tracking',
    description:
      'Log boulders, top-rope sessions, and lead climbs separately. Each discipline gets its own stats, history, and progression curve.',
    tags: ['Boulder', 'Top Rope', 'Lead'],
  },
  {
    icon: '🎟️',
    title: 'Gym Pass Storage',
    description:
      'Store your membership passes and day passes right in the app. No more digging through emails at the front desk — just tap and go.',
  },
  {
    icon: '🏟️',
    title: 'Gym Discovery',
    description:
      'Find climbing gyms wherever you are. Browse facilities, check grade systems, and add them to your home gym rotation.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description:
      'Your climbing data stays on your device. No cloud sync required, no account needed to get started, no selling your data to advertisers. Ever.',
    tags: ['Offline', '0 Ads', 'Your Data'],
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-[1] bg-navy-mid/30">
      <div className="max-w-[1100px] mx-auto py-16 px-6 md:py-24 md:px-12">
        <p className="font-head text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
          What Crakt Does
        </p>
        <h2 className="font-head text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold uppercase leading-none mb-6">
          Built for how
          <br />
          gym climbers actually climb
        </h2>
        <div className="features-grid">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/[0.03] border border-accent/[0.12] rounded-md p-8 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="text-[2rem] mb-4">{f.icon}</div>
              <h3 className="font-head text-[1.3rem] font-bold tracking-[0.05em] uppercase mb-3 text-cream">
                {f.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.65] text-muted">
                {f.description}
              </p>
              {f.tags && (
                <div className="flex flex-wrap gap-[0.4rem] mt-3">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-head text-[0.7rem] font-semibold tracking-[0.1em] uppercase bg-accent/[0.12] border border-accent/25 text-accent py-[0.2rem] px-2 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
