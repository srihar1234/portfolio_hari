/* eslint-disable no-unused-vars */
import "./WorkCard.css"
import React from 'react';
import pro1 from "../assets/pro1.jpg"


const WorkCard = () => {
  return (
    <div className="WorkContainer">
      <h1 className="projectHead">PROJECTS</h1>
        <div className="projectContainer">
          
            <div className="projectCard">
                <img src={pro1} alt="image"/>
                <h2 className="title">FLIGHT TICKET BOOKING WEBSITE</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,SASS,Mongodb,Nodejs.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/flight-ticket-booking-frontEnd.git" target="_blank" className="btn">Frontend</a>
                    <a href="https://fly-airlines.netlify.app/" target="_blank"  className="btn">Livesite</a>
                    <a href="https://github.com/srihar1234/flight-ticket-booking-backend.git" target="_blank" className="btn">Backend</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro1} alt="image"/>
                <h2 className="title">FLIGHT TICKET BOOKING WEBSITE</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,SASS,Mongodb,Nodejs.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/flight-ticket-booking-frontEnd.git" target="_blank" className="btn">Frontend</a>
                    <a href="https://fly-airlines.netlify.app/" target="_blank"  className="btn">Livesite</a>
                    <a href="https://github.com/srihar1234/flight-ticket-booking-backend.git" target="_blank" className="btn">Backend</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro1} alt="image"/>
                <h2 className="title">FLIGHT TICKET BOOKING WEBSITE</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,SASS,Mongodb,Nodejs.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/flight-ticket-booking-frontEnd.git" target="_blank" className="btn">Frontend</a>
                    <a href="https://fly-airlines.netlify.app/" target="_blank"  className="btn">Livesite</a>
                    <a href="https://github.com/srihar1234/flight-ticket-booking-backend.git" target="_blank" className="btn">Backend</a>
                  </div>
                </div>
            </div>

            <div className="projectCard">
                <img src={pro1} alt="image"/>
                <h2 className="title">FLIGHT TICKET BOOKING WEBSITE</h2>
                <div className="details">
                  <p>Tech stack used in this project are React,SASS,Mongodb,Nodejs.</p>
                  <div className="proBtns">
                    <a href="https://github.com/srihar1234/flight-ticket-booking-frontEnd.git" target="_blank" className="btn">Frontend</a>
                    <a href="https://fly-airlines.netlify.app/" target="_blank"  className="btn">Livesite</a>
                    <a href="https://github.com/srihar1234/flight-ticket-booking-backend.git" target="_blank" className="btn">Backend</a>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard
