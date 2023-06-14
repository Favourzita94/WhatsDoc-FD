import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services'
import Aboutus from './Aboutus'
import Footer from '../components/Footer/Footer'
import Navbar from './Navbar'

const Landing = ({id}) => {
  return (
    <div style={{padding: '30px'}}>
    
      <Navbar/>
    <Hero id='hero'/>
    <Services id='services'/>
    <Aboutus id='aboutus'/>
    <Footer id='contactus'/>

    </div>
  )
}

export default Landing