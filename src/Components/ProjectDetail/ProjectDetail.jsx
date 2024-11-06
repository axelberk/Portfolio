import React from "react"
import "./ProjectDetail.css"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

    const ProjectDetail = ({title, description, mainImage, secondImage, stack}) => {
        const navigate = useNavigate()

        const handleBackClick = () => {
            navigate("/")
        }

        return (
            <div className="project-detail">
                <h1>{title}</h1>
                <Button onClick={handleBackClick} variant="contained" sx={{width:"100px", backgroundColor:"#E2F1E7", color:"black"}}>Back</Button>
                <img src={mainImage} alt={`&{title} main`} className="projectpage-img"/>
                <div className="s-container">
                    <img src={secondImage} alt={`${title} secondary`} className="projectpage-s"/>
                    <div className="s-text">
                        <p>{description}</p>
                        <p>Made with:</p>
                        <div className="stacks-used">
                            {stack.map((tech, index) => {
                                <div key={index} className="chip">{tech}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ProjectDetail