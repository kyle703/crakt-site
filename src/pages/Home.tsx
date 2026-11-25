import Hero from '../components/Hero'
import Divider from '../components/Divider'
import Features, { StatStrip } from '../components/Features'
import Screenshots from '../components/Screenshots'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <StatStrip />
      <Features />
      <Divider />
      <Screenshots />
      <Divider />
      <About />
      <Contact />
    </>
  )
}
