import {React, useState} from 'react'
import Header from '../Header/Header'
import DealsSection from './DealSection/DealSection'
import HeroSection from './HeroSection/HeroSection'
import NewsSection from './NewsSection/NewsSection'
import SeriesSection from './SeriesSection/SeriesSection'
import SocialSection from './SocialSection/SocialSection'
import Testimonial from './Testimonial/Testimonial'
import Footer from '../Footer/Footer'
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <DealsSection/>
      <NewsSection />
      <SeriesSection />
      <Testimonial />
      <SocialSection />
      <Footer/>
    </div>
  )
}

export default LandingPage
