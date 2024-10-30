import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage/Homepage'  
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import '@mui/material'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      
      <div className='App'>
          
          <Homepage />
          <Projects />
        
      </div>
      
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
