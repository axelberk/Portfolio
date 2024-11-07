import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
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
                <section id="about">
                  <About />
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
            element={
              <ProjectDetail
                title="Country Facts"
                description="Something about this project"
                mainImage="/flagproject2.png"
                secondImage="/flagproject3.png"
                stack={["React", "JavaScript", "HTML", "CSS", "Rest API"]}
                projectLink="https://countryfactbase.netlify.app/"
                projectGithub="https://github.com/axelberk/flagproject"
              />
            }
          />
          <Route
            path="/projects/spotifyclone"
            element={
              <ProjectDetail
                title="Spotify Clone"
                description="A clone with basic functionality. Can use on phone etc etc."
                mainImage="/spotifyclone1.png"
                secondImage="/spotifyclone2.png"
                stack={["React", "Spotify API", "JavaScript"]}
                projectLink="https://axelspotify.netlify.app/"
                projectGithub="https://github.com/axelberk/spotifyclone"
              />
            }
          />
          <Route
            path="/projects/pwgen"
            element={
              <ProjectDetail
                title="Password Generator"
                description="Password generator with several criteria."
                mainImage="/pw-gen1.png"
                secondImage="/pwgen3.png"
                stack={["JavaScript", "HTML", "CSS"]}
                projectLink="https://randompw-gen.netlify.app/"
                projectGithub="https://github.com/axelberk/pwgen"
                
              />
            }
          />
          <Route
            path="/projects/advicegen"
            element={
              <ProjectDetail
                title="Advice Generator"
                description="Random advice generated from an API."
                mainImage="/advicegen2.png"
                secondImage="/advicegen3.png"
                stack={["JavaScript", "HTML", "CSS"]}
                projectLink="https://randomadvice-gen.netlify.app/"
                projectGithub="https://github.com/axelberk/advicegen"
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
