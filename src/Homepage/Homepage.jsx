import "./HomePage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";


const Homepage = () => {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
        
    if (location.pathname === "/") {
        scroller.scrollTo(sectionId, { 
            smooth: true,
            duration: 500,
            offset: -70,
         })

    } else {
        navigate("/")
        setTimeout(() => {
            scroller.scrollTo(sectionId, {
                smooth: true,
                duration: 500,
                offset: -70,
            })
        }, 200)
    }
}

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <div className="Homepage" id="home">
      <div className="intro-section">
        <img className="pfp" src="me-no-bg1.png" alt="" />
        <div className="intro-text">
          <h1>Web Developer</h1>
          <h2>
            An aspiring web developer keen and eager to get stuck into all
            things code.
          </h2>
          <div className="buttons">
            <Button
              onClick={() => handleNavClick("projects")}
              variant="contained"
              sx={{
                width: "100px",
                backgroundColor: "#94f877",
                color: "black",
                font: "inherit",
              }}
            >
              Projects
            </Button>
            <Button
              href=""
              variant="contained"
              target="_blank"
              sx={{
                width: "100px",
                backgroundColor: "#94f877",
                color: "black",
                font: "inherit",
              }}
            >
              CV
            </Button>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="about-container" id="about">
        <h1>Who am I?</h1>
        <h2>
          Based in Stockholm, I was recently lost in the jungle of life until I
          found my calling nested in VS Code. Helped along by my friends over at
          Techover Academy, I have recently completed their course in Web Development and am now looking for my first position in the field.
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
                onClick={() => handleReadMore("/projects/countryfacts")}
                variant="contained"
                sx={{
                  width: "160px",
                  backgroundColor: "#94f877",
                  color: "black",
                  borderRadius: "10px",
                  font: "inherit",
                }}
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
                onClick={() => handleReadMore("/projects/spotifyclone")}
                variant="contained"
                sx={{
                  width: "160px",
                  backgroundColor: "#94f877",
                  color: "black",
                  borderRadius: "10px",
                  font: "inherit",
                }}
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
                onClick={() => handleReadMore("/projects/pwgen")}
                variant="contained"
                sx={{
                  width: "160px",
                  backgroundColor: "#94f877",
                  color: "black",
                  borderRadius: "10px",
                  font: "inherit",
                }}
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
                onClick={() => handleReadMore("/projects/advicegen")}
                variant="contained"
                sx={{
                  width: "160px",
                  backgroundColor: "#94f877",
                  color: "black",
                  borderRadius: "10px",
                  font: "inherit",
                }}
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
