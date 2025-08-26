import React from 'react'
import InfluencerHeroSection from '../component/Hero'
import Service from '../component/Service'
import InfluencersPage from '../component/Influencers'
import OurClients from '../component/OurClient'
import Testimonials from '../component/Testimonial'


const Home = () => {
  return (
    <>
    <InfluencerHeroSection />
    <InfluencersPage />
    <Service />
    <OurClients />
    <Testimonials />
    </>
  )
}

export default Home
