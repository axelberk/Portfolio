import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      
      <div className='App'>
        <Navbar/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
