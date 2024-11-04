import "./Projects.css"
import { Button, Link    } from "@mui/material"

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <article className="project">
                <div className="img-container">
                    <img src="flagproject1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Country Facts</h2>
                    <p>An app that displays all the worlds countries with basic facts.</p>
                    <Button href="https://countryfactbase.netlify.app/" target="_blank" variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
            <article className="project">
                <div className="img-container">
                    <img src="flagproject1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Spotify Clone</h2>
                    <p>Made with the Spotify API, this app has basic functionality displaying your playlists etc.</p>
                    <Button variant="contained" target="_blank" sx={{width: "200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
            <article className="project">
                <div className="img-container">
                    <img src="pw-gen1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Password Generator</h2>
                    <p>A random password generator. Select up to four different criteria with correlating password strength indicator.</p>
                    <Button href="https://randompw-gen.netlify.app/" variant="contained" target="_blank" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
            <article className="project">
                <div className="img-container">
                    <img src="advicegen1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Advice Generator</h2>
                    <p>Not sure what to put here yet.</p>
                    <Button variant="contained" href="https://randomadvice-gen.netlify.app/" target="_blank" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
        </div>
    )
}

export default Projects