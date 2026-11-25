export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/tTHGngbU'

/** crakt's App Store page. */
export const APP_STORE_URL = 'https://apps.apple.com/us/app/crakt/id6762691472'

/**
 * True since 1.1 shipped (2026-11-25). Every call to action (banner, nav,
 * hero, closing CTA) points at the App Store. Set false to fall back to
 * TestFlight.
 */
export const APP_STORE_LIVE = true

export const primaryCta = APP_STORE_LIVE
  ? { href: APP_STORE_URL, label: 'Download on the App Store' }
  : { href: TESTFLIGHT_URL, label: 'Join the beta' }
