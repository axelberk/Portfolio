import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage/Homepage'  
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import CountryFacts from './Components/CountryFacts/CountryFacts'
import SpotifyClone from './Components/SpotifyClone/SpotifyClone'
import PasswordGen from './Components/PasswordGen/PasswordGen'
import AdviceGen from './Components/AdviceGen/AdviceGen'
import '@mui/material'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <>
              <section id='home'>
                <Homepage />
              </section>
              <section id='projects'>
                <Projects />
              </section>
              <section id='contact'>
                <Contact />
              </section>
            </>
          } />
          <Route path="/projects" element={<Projects/>}/>
          <Route path='/projects/countryfacts' element={<CountryFacts />} />
          <Route path='/projects/spotifyclone' element={<SpotifyClone />} />
          <Route path='/projects/pwgen' element={<PasswordGen />} />
          <Route path='/projects/advicegen' element={<AdviceGen />} />
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App
