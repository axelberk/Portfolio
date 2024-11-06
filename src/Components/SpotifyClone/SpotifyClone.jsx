import React from "react"
import "./SpotifyClone.css"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
    
    const SpotifyClone = () => {
        const navigate = useNavigate()

        const handleBackClick = () => {
            navigate("/")
        }

        return (
            <div className="countryfacts">
                <h1>Spotify Clone</h1>
                <Button onClick={handleBackClick} variant="contained" sx={{width:"100px", backgroundColor:"#E2F1E7", color:"black"}}>Back</Button>
                <img src="/spotifyclone1.png" alt="" className="projectpage-img"/>
                <div className="s-container">
                    <img src="/spotifyclone2.png" alt="" className="projectpage-s"/>
                    <div className="s-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus fuga accusantium! Unde, id. Dolorem adipisci blanditiis, rem ab fugiat dolore. Laudantium, asperiores hic! Doloribus vel impedit minus delectus repellat natus reiciendis dolor, tenetur veritatis exercitationem nulla cupiditate quasi rem aspernatur magnam eum officia, pariatur odit ipsa. Facilis, aperiam minus?</p>
                        <p>Made with:</p>
                        <div className="stacks-used">
                            <div className="chip">React</div>
                            <div className="chip">JavaScript</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Spotify API</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default SpotifyClone