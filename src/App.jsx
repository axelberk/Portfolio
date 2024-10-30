import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage/Homepage'  
import '@mui/material'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <div className='App'>
          <Homepage />
          
         
            
        </div>
    </BrowserRouter>
    
  )
}

export default App
