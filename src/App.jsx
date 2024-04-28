import React from 'react'
import Form from './component/Form'
import { SignIntripti } from './component/SignIn'
import { CardOne } from './component/Card'
import { FeatureOne } from './component/Feature'
import { Navbar } from './component/NavBar'
import { HeroOne } from './component/HeroSection'
import { Product } from './component/Products'
import { Footer } from './component/Footer'

const App = () => {
  return (
    <div>
      
      <Navbar/>
      <HeroOne/>
      <FeatureOne/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
