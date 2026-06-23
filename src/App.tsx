import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Styles from './sections/Styles'
import Artist from './sections/Artist'
import Booking from './sections/Booking'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] noise-bg">
      <Nav />
      <Hero />
      <Gallery />
      <Styles />
      <Artist />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  )
}
