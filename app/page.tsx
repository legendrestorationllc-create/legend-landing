import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Stats } from '@/components/sections/Stats'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Simulator } from '@/components/sections/Simulator'
import { WhyLegend } from '@/components/sections/WhyLegend'
import { Testimonials } from '@/components/sections/Testimonials'
import { Guarantee } from '@/components/sections/Guarantee'
import { DanielSection } from '@/components/sections/DanielSection'
import { TeamProjects } from '@/components/sections/TeamProjects'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <HowItWorks />
        <Simulator />
        <WhyLegend />
        <Testimonials />
        <Guarantee />
        <DanielSection />
        <TeamProjects />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
