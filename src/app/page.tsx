import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import InvestmentSimulation from '@/components/InvestmentSimulation'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Security from '@/components/Security'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <InvestmentSimulation />
        <div id="features">
          <Features />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="security">
          <Security />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}