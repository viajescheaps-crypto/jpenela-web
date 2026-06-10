import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Philosophy from '@/components/Philosophy'
import Plan from '@/components/Plan'
import Process from '@/components/Process'
import Transformations from '@/components/Transformations'
import InstagramFeed from '@/components/InstagramFeed'
import LifeProBanner from '@/components/LifeProBanner'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Philosophy />
      <Plan />
      <Process />
      <Transformations />
      <InstagramFeed />
      <LifeProBanner />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
