import { APP_STORE_LIVE, APP_STORE_URL, TESTFLIGHT_URL } from '../constants'

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-accent text-white text-center py-2 px-4 font-head text-[0.85rem] font-bold tracking-[0.04em]">
      {APP_STORE_LIVE ? (
        <>
          crakt 1.1 is out now on the App Store.
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 font-semibold underline underline-offset-2 hover:opacity-90"
          >
            Download
          </a>
        </>
      ) : (
        <>
          <span className="hidden sm:inline">crakt 1.1 is in App Store review. </span>
          Try it now on TestFlight.
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-2 font-semibold underline underline-offset-2 hover:opacity-90"
          >
            Join the beta
          </a>
        </>
      )}
    </div>
  )
}
