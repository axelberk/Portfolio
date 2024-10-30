import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage/Homepage'  
import Projects from './Components/Projects/Projects'
import '@mui/material'


function App() {

  return (
    <BrowserRouter>
      <div className='App'>
          <Navbar/>
          <Homepage />
          <Projects />
          
         
            
      </div>
    </BrowserRouter>
    
  )
}

export default App
