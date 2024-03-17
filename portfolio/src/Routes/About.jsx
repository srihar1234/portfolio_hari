/* eslint-disable no-unused-vars */
import Footer from "../Components/Footer"
import HeroImage2 from "../Components/HeroImage2"
import Navbar from "../Components/Navbar"
import React from 'react';


function About() {
  return (
    <div>
      <Navbar/>
      <HeroImage2
      heading="ABOUT"
      text="Some informations about me"/>
      <Footer/>
    </div>
  )
}

export default About
