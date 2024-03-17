/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from "../Components/Footer"
import HeroImage2 from "../Components/HeroImage2"
import Navbar from "../Components/Navbar"
import Form from "../Components/Form"


function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImage2
      heading="CONTACT"
      text="Let's have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact

