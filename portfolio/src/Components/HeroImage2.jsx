/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./HeroImage2.css";
import React from 'react';


const HeroImage2 = (props) => {
  return (
    <div className="heroImg">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default HeroImage2
