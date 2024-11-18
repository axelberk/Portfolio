import React from "react"
import { Link, Button, scroller } from "react-scroll"
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
            <a href="/">Axel Bergquist</a>
            <div className="page-routes">
                <Link to="home" smooth={true} duration={500} offset={-110} activeClass="active-link" onClick={() => handleNavClick("home")} className="link">Home</Link>|
                <Link onClick={() => handleNavClick("about")} className="link">About</Link>|
                <Link onClick={() => handleNavClick("projects")} className="link">Projects</Link>|
                <Link onClick={() => handleNavClick("contact")} className="link">Contact</Link>
                <Button
              className="cv-button"
              href=""
              variant="contained"
              target="_blank"
            style={{fontSize:"20px"}}
            >
              CV
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </Button>
            </div>
        </nav>  
    )

}

export default Navbar
