import React from "react"
import "./ProjectDetail.css"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { IPhoneX } from "react-device-frames";


    const ProjectDetail = ({title, description, mainImage, secondImage, stack, projectLink, projectGithub}) => {
        const navigate = useNavigate()

        const handleBackClick = () => {
            navigate("/")
        }

        return (
            <div className="project-detail">
                <div className="button-and-title">
                    <Button onClick={handleBackClick} variant="contained" sx={{width:"60px", height:"50px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px"}}><ArrowBackIosNewOutlinedIcon/></Button>
                    <h1>{title}</h1>
                    <div></div>
                </div>
                <img src={mainImage} alt={`&{title} main`} className="projectpage-img"/>
                <div className="s-container">
                    {/* <div className="project-display-s">
                        <img src="/IPhone_SE.svg" alt="" className="device-img"/>
                        <img src={secondImage} alt={`${title} secondary`} className="mobile-img"/>
                    </div> */}
                    <IPhoneX className="iphone-container">
                        <img src={secondImage} alt={`${title} secondary`} className="mobile-img"/>
                    </IPhoneX>
                    <div className="s-text">
                        <p>{description}</p>
                        <p>Made with:</p>
                        <div className="stacks-used">
                            {stack.map((tech, index) => (
                                <div key={index} className="chip">{tech}</div>
                            ))}
                        </div>
                        <div className="project-links">
                            <Button href={projectLink} variant="contained" target="_blank" sx={{width:"110px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px", display:"flex", justifyContent:"space-between"}}>Try it<i class="fa fa-external-link" aria-hidden="true"></i></Button>
                            <Button href={projectGithub} variant="contained" target="_blank" sx={{width:"120px", backgroundColor:"#E2F1E7", color:"black", borderRadius:"10px", display:"flex", justifyContent:"space-between"}}>Github<i class="fa fa-external-link" aria-hidden="true"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default ProjectDetail