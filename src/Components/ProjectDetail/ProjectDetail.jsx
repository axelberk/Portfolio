import React from "react"
import "./ProjectDetail.css"
import { Button, Link } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import LinkIcon from '@mui/icons-material/Link';


    const ProjectDetail = ({title, description, mainImage, secondImage, stack, projectLink, projectGithub}) => {
        const navigate = useNavigate()

        const handleBackClick = () => {
            navigate("/")
        }

        return (
            <div className="project-detail">
                <h1>{title}</h1>
                <Button onClick={handleBackClick} variant="contained" sx={{width:"70px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px"}}><ArrowBackIosNewOutlinedIcon/></Button>
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
                        <div className="project-links">
                            <Button href={projectLink} variant="contained" target="_blank" sx={{width:"110px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px", display:"flex", justifyContent:"space-between"}}>Try it<LinkIcon/></Button>
                            <Button href={projectGithub} variant="contained" target="_blank" sx={{width:"120px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px", display:"flex", justifyContent:"space-between"}}>Github<LinkIcon/></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ProjectDetail