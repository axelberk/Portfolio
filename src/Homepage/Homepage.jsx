import "./HomePage.css"
import { Button } from "@mui/material"

const Homepage = () => {
    return (
        <div className="Homepage">
            <div className='intro-section'>
                <img className='pfp' src="me.jpg" alt="" />
                <div className="intro-text">
                    <h1>Axel Bergquist - Web Developer</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, a reprehenderit omnis dolores temporibus tenetur? Nam ducimus aspernatur, quam cumque alias reiciendis ea, rem nisi dicta quasi iusto itaque consequuntur!.</h2>
                    <h3>Stacks: </h3>
                    <div className="chips-container">
                        <img src="react-logo.png" alt="" className="stack-logo"/>
                        <img src="JavaScript-logo.png" alt="" className="stack-logo"/>
                        <img src="HTML5_logo.svg" alt="" className="stack-logo"/>
                        <img src="CSS3_logo.svg" alt="" className="stack-logo"/>
                        <img src="Npm-logo.svg" alt="" className="stack-logo"/>
                        <img src="MongoDB_Logo.svg" alt="" className="stack-logo"/>
                        {/* <div class="chip">Typescript</div> */}
                        {/* <div class="chip">Firebase</div> */}
                    </div>
                    {/* <div></div> */}
                    {/* <Button variant="contained" className="projects-button" sx={{backgroundColor:"#E2F1E7", color:"black"}}>
                        <a href="/">See my projects!</a>
                    </ Button> */}
                </div>
            </div>
        </div>
    )
}

export default Homepage