/* eslint-disable no-unused-vars */
import "./Navbar.css";
import {Link} from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa"
import { useState } from "react";
import React from 'react';

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick = ()=> setClick(!click);

  const [color,setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);

  return (

    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 className="logo">PORTFOLIO</h1>
      </Link>

      <ul className={click ? "listMenu active" : "listMenu"}>
        <li><Link to="/">Home</Link></li>   
        <li><Link to="/skills">Skills</Link></li>     
        <li><Link to="/projects">Projects</Link></li>     
        <li><Link to="/contact">Contact</Link></li>     
      </ul>

      <div className="hamBurger" onClick={handleClick}>
        {click ? 
         <FaTimes size={30} style={{color:"#fff"}}/> 
         :
         <FaBars size={30} style={{color:"#fff"}}/>
         }       
      </div>

    </div>
  )
}

export default Navbar

