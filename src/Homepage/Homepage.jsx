import "./HomePage.css";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleReadMore = (route) => {
    navigate(route);
  };

  return (
    <div className="Homepage" id="home">
      <div className="intro-section">
        <img className="pfp" src="me.jpg" alt="" />
        <div className="intro-text">
          <h1>Web Developer</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis repellendus, illum eius explicabo nemo nobis ipsam
            eligendi odio temporibus veritatis mollitia illo perferendis
            voluptate ab sint, id distinctio. Aspernatur, labore.
          </h2>
          <h3> </h3>
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
      </div>

      <div className="about-container" id="about">
        <h1>Who am I?</h1>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          dolores tempore impedit veritatis eligendi natus ipsam quibusdam
          similique, porro rem, culpa nemo blanditiis beatae facilis dicta
          voluptates aut quis quidem voluptatem ex facere distinctio molestias
          qui. Nam asperiores quidem ipsum corporis, ex dolorem at, aliquam
          ratione in velit, doloremque animi?
        </h2>
        <Button
          href=""
          variant="contained"
          target="_blank"
          sx={{ width: "100px", backgroundColor: "#E2F1E7", color: "black" }}
        >
          CV
        </Button>
      </div>
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
                  width: "200px",
                  backgroundColor: "#E2F1E7",
                  color: "black",
                  borderRadius: "10px",
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
                  width: "200px",
                  backgroundColor: "#E2F1E7",
                  color: "black",
                  borderRadius: "10px",
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
                  width: "200px",
                  backgroundColor: "#E2F1E7",
                  color: "black",
                  borderRadius: "10px",
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
                  width: "200px",
                  backgroundColor: "#E2F1E7",
                  color: "black",
                  borderRadius: "10px",
                }}
              >
                Read more
              </Button>
            </div>
          </article>
        </div>
      </div>

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
            <img src="github-mark.png" alt="" />
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
