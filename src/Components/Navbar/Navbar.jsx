import React from "react"
import { Link } from "react-scroll"
import { Route, Router, Routes } from "react-router-dom"
import "./Navbar.css"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Homepage from "../../Homepage/Homepage"

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="#">
                A.B</a>
            <div className="page-routes">
                <Link to="home" smooth={true} duration={500} className="link">Home</Link>|
                <Link to="projects" smooth={true} duration={500} className="link">Projects</Link>|
                <Link to="contact" smooth={true} duration={500} className="link">Contact</Link>
            </div>
            
            <div className="ext-links">
                <a href="https://github.com/axelberk" target="_blank"><img src="github-mark.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/axel-bergquist-360940114/" target="_blank"><img src="LI-In-Bug.png" alt="" /></a>
            </div>
            <Routes>
                <Route path="/" element=""/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        
    )
    
}

export default Navbar