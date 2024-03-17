/* eslint-disable no-unused-vars */
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>4/A,Kalappakkadu,NGGO colony,Aranthangi</p>
                    <p>Tamil Nadu,India</p>
                </div>
            </div>

            <div className="phone">
              <h4>
              <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              9443942957
              </h4>
            </div>

            <div className="mail">
            <h4>
              <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              hari21kannan@gmail.com
              </h4>
            </div>

        </div>

        <div className="right">
            <h4>Connect with me in</h4>
            <div className="social">
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
