import "./Homepage.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import TechStack from "../Components/TechStack/TechStack";
import projects from "../projectData";
import { buttonStyle, useNavigationHandlers } from "../utils";
import { useModal } from "../useModal";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MyTimeline from "../Components/Timeline/MyTimeline";


const Homepage = () => {

  const location = useLocation();
  const { handleNavClick, handleReadMore } = useNavigationHandlers(location);
  const { isModalOpen, openModal, closeModal } = useModal();

  const [hasAnimated, setHasAnimated] = useState(
    sessionStorage.getItem("hasAnimated") === "true"
  );

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      sessionStorage.setItem("hasAnimated", "true");
    }
  }, [hasAnimated]);

  return (
    <div className={`Homepage ${hasAnimated ? "no-animations" : ""}`} id="home">
      <div className="intro-section">
        <img className="pfp" src="me-no-bg1.png" alt="" />
        <div className="intro-text">
          <h1 className="hero-head">Welcome! My name is</h1>
          <h2 className="hero-name">
            Axel Bergquist
          </h2>
          <h3 className="hero-desc">An up-and-coming web developer keen to get stuck into all things
          code.</h3>
          <div className="buttons">
            <Button
              className="intro-button"
              onClick={() => handleNavClick("about")}
              variant="contained"
              sx={{backgroundColor:"#01003b", color:"#ccd6f6", font:"inherit", border:"1px solid #ccd6f6", borderRadius:"10px"}}
            >
              About me
            </Button>
            <Button
              className="project-button"
              onClick={() => handleNavClick("projects")}
              variant="contained"
              sx={buttonStyle}
            >
              Projects
            </Button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="about-container" id="about">
        <h1>The journey so far...</h1>
        <MyTimeline/> 
        
        {/* <h2>
          Based in Stockholm, for a long time I was lost in the jungle of life
          until I found my calling in code. Helped along by my friends over at{" "}
          <a href="#" onClick={openModal}>
            Techover Academy
          </a>
          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation}>
                <img src="techover-cert.png" alt="" />
                <Button
                  className="close-button"
                  variant="outlined"
                  onClick={closeModal}
                  sx={{backgroundColor:"aquamarine", color:"#01003b", fontFamily:"inherit", fontSize:"18px"}}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
          , I recently completed their course in Web Development and am now
          looking for my first position in the field. I'm eager to delve deeper
          into all kinds of stacks and technologies, and below are a few I am
          already familiar with.
        </h2> */}
        <div className="chips-container">
          <div className="tooltip-container">
            <img src="react-logo.png" alt="" className="stack-logo" />
            <span className="tooltip-text">React</span>
          </div>

          <div className="tooltip-container">
            <img src="JS-logo2.png" alt="" className="stack-logo" />
            <span className="tooltip-text">JavaScript</span>
          </div>

          <div className="tooltip-container">
            <img src="HTML5_logo.svg" alt="" className="stack-logo" />
            <span className="tooltip-text">HTML</span>
          </div>

          <div className="tooltip-container">
            <img src="CSS3_logo.svg" alt="" className="stack-logo" />
            <span className="tooltip-text">CSS</span>
          </div>

          <div className="tooltip-container">
            <img src="Git-Icon.png" alt="" className="stack-logo" />
            <span className="tooltip-text">Git</span>
          </div>

          <div className="tooltip-container">
            <img src="Npm-logo.svg" alt="" className="stack-logo" />
            <span className="tooltip-text">NPM</span>
          </div>

          <div className="tooltip-container">
            <img src="MongoDB_Logo.svg" alt="" className="stack-logo" />
            <span className="tooltip-text">MongoDB</span>
          </div>

          <div className="tooltip-container">
            <img src="mui-logo.png" alt="" className="stack-logo" />
            <span className="tooltip-text">Material UI</span>
          </div>
        </div>
      </div>
      <hr className="divider" />

      <div className="projects-container" id="projects">
        <h1>Projects</h1>
  {projects.map((project, index) => (
   <article className={index % 2 === 0 ? "project-left" : "project-right"}>
   <div className="img-container">
     <img src={project.image} alt="" className="project-img" />
     <div className="img-overlay"></div>
     <div className={index % 2 === 0 ? "project-left-text" : "project-right-text"}>
       <h2 className="project-title">{project.title}</h2>
       <h3 className="project-description-l">{project.description}</h3>
       <TechStack stack={project.stack} />
       <Button
         className="project-button"
         onClick={() => handleReadMore(project.route)}
         variant="contained"
         sx={buttonStyle}
       >
         Read more
       </Button>
     </div>
   </div>
 </article>
  ))}
</div>

      <hr className="divider" />
      <div className="Contact" id="contact">
        <h3>Contact & Links</h3>
        <div className="ext-links">
          <a
            href="https://www.linkedin.com/in/axel-bergquist-360940114/"
            target="_blank"
          >
            <img src="LI-In-Bug.png" alt="" />
          </a>
          <a href="https://github.com/axelberk" target="_blank">
            <img src="github-mark-white.png" alt="" />
          </a>
          <a href="mailto:axel.bergquist94@gmail.com">
            <img src="icon-gmail.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
