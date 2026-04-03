export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-36 px-6 pb-12 md:pt-40 md:px-12 md:pb-16 overflow-hidden">
      <div className="hero-gradient" />
      <img
        className="absolute right-16 top-1/2 -translate-y-1/2 w-[min(420px,40vw)] opacity-[0.22] z-[1] animate-float rounded-[22%] hidden md:block"
        src="/hero-logo.jpg"
        alt="Crakt logo"
      />
      <div className="relative z-[2] max-w-[640px]">
        <p className="animate-fadeUp fadeUp-delay-1 font-head text-[0.8rem] font-semibold tracking-[0.25em] uppercase text-accent mb-5">
          By Highball Beta LLC
        </p>
        <h1 className="animate-fadeUp fadeUp-delay-2 font-head text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-[-0.01em] uppercase mb-6">
          Climb<em className="not-italic text-accent block">Smarter.</em>
        </h1>
        <p className="animate-fadeUp fadeUp-delay-3 text-[1.15rem] leading-[1.7] text-muted max-w-[480px] mb-10">
          Crakt is the gym climbing companion built for the wall. Log routes,
          track progress, store your passes — all without sharing your data with
          the world.
        </p>
        <div className="animate-fadeUp fadeUp-delay-4 flex flex-wrap gap-3">
          <a
            href="#features"
            className="inline-flex items-center gap-[0.6rem] bg-accent text-cream font-head text-base font-bold tracking-[0.12em] uppercase no-underline py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 cursor-pointer border-none"
          >
            See Features
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-[0.6rem] bg-transparent border border-accent/40 text-accent font-head text-base font-bold tracking-[0.12em] uppercase no-underline py-[0.9rem] px-8 rounded-[3px] transition-all duration-200 hover:bg-accent/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Get Notified
          </a>
        </div>
      </div>
    </section>
  )
}
