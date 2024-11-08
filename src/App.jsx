import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import FeatureProduct from './Components/FeatureProduct'
import Discount from './Components/Discount'
import Blog from './Components/Blog'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProduct />
      <Discount />
      <Blog />
      <Footer />
    </main>
  )
}

export default App