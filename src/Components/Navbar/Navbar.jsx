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
                Axel Bergquist</a>
            <div className="page-routes">
                <Link to="top" smooth={true} duration={500} className="link" onClick={() => window.scrollTo({top: 0, behavior:"smooth"})}>Home</Link>|
                <Link to="projects" smooth={true} duration={500} className="link">Projects</Link>|
                <Link to="contact" smooth={true} duration={500} className="link">Contact</Link>
            </div>
        
        </div>
        
    )
    
}

export default Navbar