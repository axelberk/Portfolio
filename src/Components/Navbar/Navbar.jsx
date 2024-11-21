import React from "react"
import { Link, Button, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    const buttonStyle = { backgroundColor: "aquamarine", color: "#01003b", font: "inherit", borderRadius:"10px" };
    
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
            }, 300)
        }
    }

    return (
        <nav className="Navbar">
            <a href="/">A.B</a>
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
            >
              CV
              <i class="fa fa-external-link" aria-hidden="true"></i>
            </Button>
            </div>
        </nav>  
    )

}

export default Navbar
