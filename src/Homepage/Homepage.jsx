import "./Homepage.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(
    sessionStorage.getItem("hasAnimated") === "true"
  )

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true)
      sessionStorage.setItem("hasAnimated", "true")
    }
  }, [hasAnimated])

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = ""
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   }
  // }, [isModalOpen])

  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          smooth: true,
          duration: 500,
          offset: -70,
        });
      }, 200);
    }
  };

  const handleReadMore = (route) => {
    navigate(route);
  };

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
              sx={{backgroundColor:"aquamarine", color:"black"}}
            >
              About me
            </Button>
            <Button
              className="project-button"
              onClick={() => handleNavClick("projects")}
              variant="contained"
            >
              Projects
            </Button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="about-container" id="about">
        <h1>Who am I?</h1>
        <h2>
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
        </h2>
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
      <div className="projects-page" id="projects">
        <h1>Projects</h1>
        <div className="projects-container">
          <article className="project">
            <div className="img-container">
              <img src="flagproject1.png" alt="" className="project-img" />
              <div className="img-overlay"></div>
            </div>
            <div className="project-text">
              <h2>Country Facts</h2>
              <Button
                className="intro-button"
                onClick={() => handleReadMore("/projects/countryfacts")}
                variant="contained"
              >
                Read more
              </Button>
            </div>
          </article>
          <article className="project">
            <div className="img-container">
              <img src="spotifyclone1.png" alt="" className="project-img" />
              <div className="img-overlay"></div>
            </div>
            <div className="project-text">
              <h2>Spotify Clone</h2>
              <Button
                className="intro-button"
                onClick={() => handleReadMore("/projects/spotifyclone")}
                variant="contained"
              >
                Read more
              </Button>
            </div>
          </article>
          <article className="project">
            <div className="img-container">
              <img src="pw-gen1.png" alt="" className="project-img" />
              <div className="img-overlay"></div>
            </div>
            <div className="project-text">
              <h2>Password Generator</h2>
              <Button
                className="intro-button"
                onClick={() => handleReadMore("/projects/pwgen")}
                variant="contained"
              >
                Read more
              </Button>
            </div>
          </article>
          <article className="project">
            <div className="img-container">
              <img src="advicegen1.png" alt="" className="project-img" />
              <div className="img-overlay"></div>
            </div>
            <div className="project-text">
              <h2>Advice Generator</h2>
              <Button
                className="intro-button"
                onClick={() => handleReadMore("/projects/advicegen")}
                variant="contained"
              >
                Read more
              </Button>
            </div>
          </article>
        </div>
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
