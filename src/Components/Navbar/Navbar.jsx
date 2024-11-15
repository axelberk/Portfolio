import React from "react"
import { Link, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavClick = (sectionId) => {
        
        if (location.pathname === "/") {
            scroller.scrollTo(sectionId, { 
                smooth: true,
                duration: 500,
                offset: -70,
             })

        } else {
            navigate("/")
            setTimeout(() => {
                scroller.scrollTo(sectionId, {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                })
            }, 200)
        }
    }

    return (
        <nav className="Navbar">
            <a href="#">Axel Bergquist</a>
            <div className="page-routes">
                <span onClick={() => handleNavClick("home")} className="link">Home</span>|
                <span onClick={() => handleNavClick("about")} className="link">About</span>|
                <span onClick={() => handleNavClick("projects")} className="link">Projects</span>|
                <span onClick={() => handleNavClick("contact")} className="link">Contact</span>
            </div>
        </nav>  
    )

}

export default Navbar
