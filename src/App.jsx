import { useState, useEffect } from 'react'
import { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage/Homepage'  
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import '@mui/material'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      
      <div className='App'>
        <section id='home'>
          <Homepage />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='contact'>
          <Contact />
        </section>
          
      </div>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
