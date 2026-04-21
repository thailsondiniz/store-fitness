import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import News from '../components/News'
import WomenProducts from '../components/WomenProducts'
import MenProducts from '../components/MenProducts'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
        <Header />
        <Hero />
        <FeaturedProducts />
        <News />
        <WomenProducts />
        <MenProducts />
        <Footer />
    </div>
  )
}

export default HomePage