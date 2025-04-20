import React from 'react'

import {
  HeroSection,
  Brands,
  WhoWeAre,
  OurServices,
  HowItWorks,
  DownloadSection,
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
      <Footer />
    </main>
  )
}

export default Home
