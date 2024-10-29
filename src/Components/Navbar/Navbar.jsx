import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="">A.B</a>
            <div className="page-routes">
                <a href="/">Home</a>|
                <a href="/">Projects</a>|
                <a href="/">Contact</a>
            </div>
            
            <div className="ext-links">
                <a href="https://github.com/axelberk" target="_blank"><img src="github-mark.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/axel-bergquist-360940114/" target="_blank"><img src="LI-In-Bug.png" alt="" /></a>
            </div>
        </div>
        
    )
    
}

export default Navbar