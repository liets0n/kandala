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
      <Footer />
    </main>
  )
}

export default Home
