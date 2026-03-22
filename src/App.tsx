import { useState, useCallback } from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

type Page = 'main' | 'privacy' | 'terms'

export default function App() {
  const [page, setPage] = useState<Page>('main')

  const showPage = useCallback((p: Page) => {
    setPage(p)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <Banner />
      <Navbar onLogoClick={() => showPage('main')} />
      {page === 'main' && <Home />}
      {page === 'privacy' && <Privacy onBack={() => showPage('main')} />}
      {page === 'terms' && <Terms onBack={() => showPage('main')} />}
      <Footer
        onPrivacy={() => showPage('privacy')}
        onTerms={() => showPage('terms')}
        onContact={() => showPage('main')}
      />
    </>
  )
}
