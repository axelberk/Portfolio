import React from "react"
import { Component, Link } from "react"
import { Route, Router, Routes } from "react-router-dom"
import "./Navbar.css"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Homepage from "../../Homepage/Homepage"

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href="">
                A.B</a>
            <div className="page-routes">
                <a href="/">Home</a>|
                <a href="/">Projects</a>|
                <a href="/">Contact</a>
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