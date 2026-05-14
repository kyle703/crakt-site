import { TESTFLIGHT_URL } from '../constants'

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-accent text-cream text-center py-2 px-4 font-head text-[0.85rem] font-bold tracking-[0.1em] uppercase">
      <span className="hidden sm:inline">🔔 </span>
      Crakt Beta Is Live On TestFlight
      <a
        href={TESTFLIGHT_URL}
        target="_blank"
        rel="noreferrer"
        className="ml-2 font-normal tracking-[0.08em] normal-case underline underline-offset-2 hover:opacity-90"
      >
        Join now
      </a>
    </div>
  )
}
