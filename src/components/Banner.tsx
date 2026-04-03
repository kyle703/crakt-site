export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-accent text-cream text-center py-2 px-4 font-head text-[0.85rem] font-bold tracking-[0.1em] uppercase">
      <span className="hidden sm:inline">🔔 </span>
      Coming Soon
      <span className="hidden sm:inline font-normal tracking-[0.06em] normal-case opacity-90">
        {' '}— Crakt is in pre-release. Sign up to be notified at launch.
      </span>
    </div>
  )
}
