/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from "../Components/Footer"
import HeroImage from "../Components/HeroImage"
import Navbar from "../Components/Navbar"
import WorkCard from '../Components/WorkCard';
import Form from  "../Components/Form"

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <WorkCard/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
