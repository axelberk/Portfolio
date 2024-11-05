import React from "react"
import "./CountryFacts.css"
import { Button } from "@mui/material"

    const CountryFacts = () => {
        return (
            <div className="countryfacts">
                <h1>Country Facts</h1>
                <Button to="/">Back</Button>
                <img src="/flagproject2.png" alt="" className="projectpage-img"/>
                <div className="s-container">
                    <img src="/flagproject3.png" alt="" className="projectpage-s"/>
                    <div className="s-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam repellendus fuga accusantium! Unde, id. Dolorem adipisci blanditiis, rem ab fugiat dolore. Laudantium, asperiores hic! Doloribus vel impedit minus delectus repellat natus reiciendis dolor, tenetur veritatis exercitationem nulla cupiditate quasi rem aspernatur magnam eum officia, pariatur odit ipsa. Facilis, aperiam minus?</p>
                        <p>Made with:</p>
                        <div className="stacks-used">
                            <div className="chip">React</div>
                            <div className="chip">JavaScript</div>
                            <div className="chip">HTML</div>
                            <div className="chip">CSS</div>
                            <div className="chip">Rest API</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default CountryFacts