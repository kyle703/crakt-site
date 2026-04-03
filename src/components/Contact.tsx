export default function Contact() {
  return (
    <section id="contact" className="relative z-[1] bg-navy-mid/30">
      <div className="max-w-[1100px] mx-auto py-16 px-6 md:py-24 md:px-12">
        <p className="font-head text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
          Get In Touch
        </p>
        <h2 className="font-head text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold uppercase leading-none mb-6">
          Questions?
          <br />
          Let's Talk.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-12">
          <div>
            <p className="text-muted leading-[1.8] mb-4">
              For general inquiries, partnership opportunities, or press
              contact, reach out directly.
            </p>
            <p className="text-muted leading-[1.8] mb-4">
              Email:{' '}
              <a
                href="mailto:hb@thoky.net"
                className="text-accent no-underline hover:underline"
              >
                hb@thoky.net
              </a>
            </p>
            <p className="text-muted leading-[1.8] mb-4">
              Want to be notified when Crakt launches on the App Store? Drop us
              an email with &ldquo;Notify Me&rdquo; in the subject line.
            </p>
          </div>
          <div>
            <address className="not-italic text-muted leading-[1.8] text-[0.95rem]">
              <strong className="text-cream font-head tracking-[0.05em]">
                HIGHBALL BETA LLC
              </strong>
              <br />
              Richmond, Virginia
              <br />
              United States
              <br />
              <br />
              <a
                href="mailto:hb@thoky.net"
                className="text-accent no-underline hover:underline"
              >
                hb@thoky.net
              </a>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
