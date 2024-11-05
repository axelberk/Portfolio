import "./Projects.css"
import { Button, Link    } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()

    const handleReadMore = (route) => {
        navigate(route)
    }

    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <div className="projects-container">
                
                <article className="project">
                    <div className="img-container">
                        <img src="flagproject1.png" alt="" className="project-img"/>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="project-text">
                        <h2>Country Facts</h2>
                        <p>An app that displays all the worlds countries with basic facts.</p>
                        <Button onClick={() => handleReadMore("/projects/countryfacts")} variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>Read more</Button>
                    </div>
                </article>
                <article className="project">
                    <div className="img-container">
                        <img src="spotifyclone1.png" alt="" className="project-img"/>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="project-text">
                        <h2>Spotify Clone</h2>
                        <p>With basic functionality.</p>
                        <Button onClick={() => handleReadMore("/projects/spotifyclone")} variant="contained" sx={{width: "200px", backgroundColor:"#E2F1E7", color:"black"}}>Read more</Button>
                    </div>
                </article>
                <article className="project">
                    <div className="img-container">
                        <img src="pw-gen1.png" alt="" className="project-img"/>
                        <div className="img-overlay"></div>
                    </div>
                    <div className="project-text">
                        <h2>Password Generator</h2>
                        <p>A random password generator.</p>
                        <Button onClick={() => handleReadMore("/projects/pwgen")} variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>Read more</Button>
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
                        <Button onClick={() => handleReadMore("/projects/advicegen")} variant="contained" sx={{width:"200px", backgroundColor:"#E2F1E7", color:"black"}}>Read more</Button>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Projects