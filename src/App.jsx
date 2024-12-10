import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import "@mui/material";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      

      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Homepage />
                </section>
                <section id="about">{/* <About /> */}</section>
                <section id="projects">{/* <Projects /> */}</section>
                <section id="contact">{/* <Contact /> */}</section>
              </>
            }
          />

          <Route
            path="/projects/countryfacts"
            element={
              <ProjectDetail
                title="Country Facts"
                description="A full database of the worlds countries. Integrated with a Rest API, this website comes with full search and filter functionality along with a more detailed page of each country, as well as dark mode and light mode functionality. Works well on smaller screens!"
                mainImage="/laptop.png"
                secondImage="/countryphone1.png"
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
                description="Fully responsive with basic functionality. Includes player controls such as play, pause, next and previous, as well as volume control, duration played and remaining, scrub through songs and more. Requires a Spotify Premium account to transfer the playback from."
                mainImage="/spotifylaptop.png"
                secondImage="/spotifyphone.png"
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
                description="A password generator with up to four different criteria to choose from, as well as desired length. Comes with strength indicator based on the criteria chosen, as well as a button that copies the generated password to your clipboard for easy transfer."
                mainImage="/passwordlaptop.png"
                secondImage="/passwordphone.png"
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
                description="Random advice generated from the Advice Slip Rest API. Comes with a button to copy the quote to your clipboard and send to friends, family or colleagues to help motivate or inspire them."
                mainImage="/advicelaptop.png"
                secondImage="/advicephone.png"
                stack={["JavaScript", "HTML", "CSS", "Rest API"]}
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
