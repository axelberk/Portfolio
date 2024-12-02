import "./Homepage.css";
import { useEffect, useState } from "react";
import { Button, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import TechStack from "../Components/TechStack/TechStack";
import projects from "../projectData";
import { buttonStyle, useNavigationHandlers } from "../utils";
import { useModal } from "../useModal";
import MyTimeline from "../Components/Timeline/MyTimeline";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
          <h2 className="hero-name">Axel Bergquist</h2>
          <h2 className="hero-profession">Web Developer</h2>
          <h3 className="hero-desc">
            Keen to get stuck into all things
            code.
          </h3>
          <div className="buttons">
            <Button
              className="intro-button"
              onClick={() => handleNavClick("about")}
              variant="contained"
              sx={{
                backgroundColor: "#0a192f",
                color: "#ccd6f6",
                font: "inherit",
                border: "1px solid #ccd6f6",
                borderRadius: "10px",
              }}
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

      <h1 style={{ margin: "0" }}>The journey so far</h1>

      <MyTimeline />

      <div className="about-container" id="about">
        <h1>Who am I?</h1>
        <p className="about-description">
          I am a junior web developer based in Stockholm, Sweden. I have used
          computers all my life - from struggling to get on the internet via
          dial-up in the late 90's, to now being able to build websites of my
          own. In the last year I have gotten into web development and delved into the MERN stack, and have since
          been using it to build all kinds of{" "}
          <Link onClick={() => handleNavClick("projects")} className="link">
            projects
          </Link>
          , from simple one-page generators to fully responsive multi-route websites.
        </p>
      </div>
      <div className="tech-stack-divider">
        <ArrowDownwardIcon fontSize="large" />
        <h2>Some technologies I've worked with</h2>
        <ArrowDownwardIcon fontSize="large" />
      </div>
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
          <img src="html-logo.png" alt="" className="stack-logo" />
          <span className="tooltip-text">HTML</span>
        </div>

        <div className="tooltip-container">
          <img src="css-logo.png" alt="" className="stack-logo" />
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
      <h2>
        I am eager to expand my horizons and learn all kinds of new techs!
      </h2>
      <hr className="divider" />

      <div className="projects-container" id="projects">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <article
            className={index % 2 === 0 ? "project-left" : "project-right"}
          >
            <div className="img-container">
              <img src={project.image} alt="" className="project-img" />
              <div className="img-overlay"></div>
              <div
                className={
                  index % 2 === 0 ? "project-left-text" : "project-right-text"
                }
              >
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-description-l">{project.description}</h3>
                <TechStack stack={project.stack} />
                <Button
                  className="project-link-button"
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
