const screenshots = [
  {
    src: '/screenshots/iPhone 16 Plus-01-Home_framed.png',
    alt: 'Crakt home screen',
  },
  {
    src: '/screenshots/iPhone 16 Plus-02-ActiveSession_framed.png',
    alt: 'Active climbing session screen',
  },
  {
    src: '/screenshots/iPhone 16 Plus-03-SessionReview_framed.png',
    alt: 'Session review details',
  },
  {
    src: '/screenshots/iPhone 16 Plus-04-Analytics_framed.png',
    alt: 'Progress analytics dashboard',
  },
  {
    src: '/screenshots/iPhone 16 Plus-05-Gyms_framed.png',
    alt: 'Gym discovery screen',
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="relative z-[1] bg-navy-mid/20">
      <div className="max-w-[1200px] mx-auto py-16 px-6 md:py-24 md:px-12">
        <p className="font-head text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
          In The App
        </p>
        <h2 className="font-head text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold uppercase leading-none mb-10">
          Real Screens.
          <br />
          Real Sessions.
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {screenshots.map((shot) => (
            <figure
              key={shot.src}
              className="flex-none w-[220px] sm:w-[240px] md:w-[260px] snap-start"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="block w-full h-auto"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
