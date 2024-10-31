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
                    <Button variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
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
                    <Button variant="contained" sx={{width: "200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
            <article className="project">
                <div className="img-container">
                    <img src="flagproject1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Project 3</h2>
                    <p>Dunno what this is yet.</p>
                    <Button variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
            <article className="project">
                <div className="img-container">
                    <img src="flagproject1.png" alt="" className="project-img"/>
                    <div className="img-overlay"></div>
                </div>
                <div className="project-text">
                    <h2>Project 4</h2>
                    <p>Not sure what to put here yet.</p>
                    <Button variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>View app</Button>
                </div>
            </article>
        </div>
    )
}

export default Projects