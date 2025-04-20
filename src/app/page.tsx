import React from 'react'

import {
  HeroSection,
  Brands,
  WhoWeAre,
  OurServices,
  HowItWorks,
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
      <Footer />
    </main>
  )
}

export default Home
