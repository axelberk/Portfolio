import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import SpotifyClone from "./Components/SpotifyClone/SpotifyClone";
import PasswordGen from "./Components/PasswordGen/PasswordGen";
import AdviceGen from "./Components/AdviceGen/AdviceGen";
import "@mui/material";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Homepage />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route 
          path="/projects/countryfacts" 
          element={<ProjectDetail
            title="Country Facts"
            description="Something about this project"
            mainImage="/flagproject2.png"
            secondImage="/flagproject3.png"
            stack={["React", "JavaScript", "HTML", "CSS", "Rest API"]}
          
          />}
           />
          <Route 
          path='/projects/spotifyclone' 
          element={<ProjectDetail 
            title="Spotify Clone" 
            description="A clone with basic functionality. Can use on phone etc etc."
            mainImage="/spotifyclone1.png"
            secondImage="/spotifyclone2.png"
            stack={["React", "Spotify API", "JavaScript"]}
        />} 
    />
          <Route path="/projects/pwgen" element={<PasswordGen />} />
          <Route path="/projects/advicegen" element={<AdviceGen />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
