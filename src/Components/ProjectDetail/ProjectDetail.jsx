import React from "react"
import "./ProjectDetail.css"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import TechStack from "../TechStack/TechStack";

    const ProjectDetail = ({title, description, mainImage, secondImage, stack, projectLink, projectGithub}) => {
        const buttonStyle = { width: {
            xs: "100px",
            sm: "120px",
            md: "130px"
        }, 
            backgroundColor:"aquamarine", color:"black", borderRadius:"10px", display:"flex", justifyContent:"space-between", font:"inherit", transition: "all 0.4s ease", border:"1px solid transparent" };

        const navigate = useNavigate()

        const handleBackClick = () => {
            navigate("/")
        }

        return (
            <div className="project-detail">
                <div className="button-and-title">
                    <Button onClick={handleBackClick} className="back-button" variant="contained" sx={{height:"40px", backgroundColor:"aquamarine", color:"black", borderRadius:"10px"}}><ArrowBackIosNewOutlinedIcon/></Button>
                    <h1>{title}</h1>
                    <div></div>
                </div>
                <div className="top-section">
                    <img src={mainImage} alt={`&{title} main`} className="projectpage-img"/>
                </div>
                <div className="s-container">
                       <img src={secondImage} alt="" className="mobile-img"/>
                        <div className="s-text">
                        <p>{description}</p>
                        
                        
                        <div className="made-with">
                            <p>Made with:</p>
                            <TechStack stack={stack}/>
                        </div>
                        <div className="project-links">
                            <Button className="project-link-button" href={projectLink} variant="contained" target="_blank" sx={buttonStyle}>Try it<i class="fa fa-external-link" aria-hidden="true"></i></Button>
                            <Button className="project-link-button" href={projectGithub} variant="contained" target="_blank" sx={buttonStyle}>Github<i class="fa fa-external-link" aria-hidden="true"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ProjectDetail