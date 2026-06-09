import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Plan from '@/components/Plan'
import Process from '@/components/Process'
import Transformations from '@/components/Transformations'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Plan />
      <Process />
      <Transformations />
      <FAQ />
      <Footer />
    </main>
  )
}
