import React from "react"
import { Link, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavClick = (section) => {
        if (location.pathname === "/") {
            scroller.scrollTo(section, { 
                smooth: true,
                duration: 500,
                offset: -70,
             })

        } else {
            navigate("/")
            setTimeout(() => {
                scroller.scrollTo(section, {
                    smooth: true,
                    duration: 500,
                    offset: -70,
                })
            }, 200)
        }
    }

    return (
        <div className="Navbar">
            <a href="#">Axel Bergquist</a>
            <div className="page-routes">
                <span onClick={() => handleNavClick("home")} className="link">Home</span>|
                <span onClick={() => handleNavClick("about")} className="link">About</span>|
                <span onClick={() => handleNavClick("projects")} className="link">Projects</span>|
                <span onClick={() => handleNavClick("contact")} className="link">Contact</span>
            </div>
        </div>
    )

}

export default Navbar
