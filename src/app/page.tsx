import React from 'react'

import {
  HeroSection,
  Brands,
  WhoWeAre,
  OurServices,
  HowItWorks,
  DownloadSection,
  OurTeam,
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
      <Footer />
    </main>
  )
}

export default Home
