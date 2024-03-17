/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Projects from './Routes/Projects';
import Skills from './Routes/Skills';
import Contact from './Routes/Contact';

function App() {
 

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
