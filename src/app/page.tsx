import React from 'react'

import {
  HeroSection,
  Brands,
  WhoWeAre,
  OurServices,
  HowItWorks,
  DownloadSection,
  OurTeam,
  Metrics,
  Testimonials,
  Faqs,
  Contact,
  Footer
} from './../components'

function Home() {
  return (
    <main>
      <HeroSection />
      <Brands />
      <WhoWeAre />
      <OurServices />
      <HowItWorks />
      <DownloadSection />
      <OurTeam />
      <Metrics />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
