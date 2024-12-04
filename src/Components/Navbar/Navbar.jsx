import {React, useState} from "react"
import { Link, Button, scroller } from "react-scroll"
import { useNavigate, useLocation } from "react-router-dom"
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material"
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
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

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open)
    }

    const links = [
        {text: "Home", id:"home"},
        {text: "About", id:"about"},
        {text: "Projects", id:"projects"},
        {text: "Contact", id:"contact"}
    ]

    const linksLarge = [
        {text: "Home", id:"home"},
        {text: "About", id:"about"},
        {text: "Projects", id:"projects"},
        {text: "Contact", id:"contact"}
    ]

    return (
        <nav className="Navbar">
            <a href="/" className="page-name">A.B</a>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className="menu-icon">
                <MenuIcon/>
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <List className="drawer-list">
                <div className="drawer-header">
                    <IconButton onClick={toggleDrawer(false)} className="close-icon">
                    <CloseIcon sx={{color:"#ccd6f6"}}/>
                    </IconButton>
                </div>
                    {links.map((link) => (
                        <ListItem button key={link.id} onClick={() => {handleNavClick(link.id); setDrawerOpen(false)}}>
                            <ListItemText primary={link.text}/>
                        </ListItem>
                    ))}
                    <ListItem>
                        <Button
                        href=""
                        variant="contained"
                        target="_blank"
                        style={{ backgroundColor: "aquamarine", color: "#01003b", font: "inherit", borderRadius: "10px" }}
                        >
                            CV <i className="fa fa-external-link" aria-hidden="true"></i>
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
            <div className="page-routes">
                {linksLarge.map((link) => (
                    <Link 
                        key={link.id}
                        to={link.id}
                        smooth={true}
                        duration={500}
                        offset={-110}
                        activeClass="active-link"
                        onClick={() => handleNavClick(link.id)}
                        className="link"
                    >
                        {link.text}
                    </Link>
                ))}
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
