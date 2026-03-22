const stats = [
  { num: 'V / Font / French / UIAA', label: 'All major grade systems' },
  { num: 'Boulder + Rope', label: 'All climb disciplines' },
  { num: '100%', label: 'Offline capable' },
  { num: '0', label: 'Ads. Ever.' },
]

export default function About() {
  return (
    <section id="about" className="relative z-[1]">
      <div className="max-w-[1100px] mx-auto py-16 px-6 md:py-24 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <p className="font-head text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            The Company
          </p>
          <h2 className="font-head text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold uppercase leading-none mb-6">
            Highball
            <br />
            Beta LLC
          </h2>
          <p className="text-base leading-[1.8] text-muted mb-5">
            Highball Beta LLC is an independent software company based in
            Virginia, building tools for the climbing community. Crakt is our
            flagship product.
          </p>
          <p className="text-base leading-[1.8] text-muted mb-5">
            We're climbers building for climbers — obsessing over the details
            that matter when you're pumped at the crux and need your app to just
            work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border-l-[3px] border-accent pl-4">
              <div className="font-head text-[2rem] font-black text-cream leading-none">
                {s.num}
              </div>
              <div className="text-[0.8rem] text-muted uppercase tracking-[0.1em] mt-[0.3rem]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
