/* eslint-disable no-unused-vars */
import Footer from "../Components/Footer"
import HeroImage2 from "../Components/HeroImage2"
import Navbar from "../Components/Navbar"
import WorkCard from "../Components/WorkCard"
import React from 'react';


function Projects() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 
       heading="PROJECTS"
       text="Some of my most recent works"
       />
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Projects

