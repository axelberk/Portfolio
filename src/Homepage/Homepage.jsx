import "./HomePage.css"
import { Button } from "@mui/material"

const Homepage = () => {
    return (
        <div className="Homepage">
            <div className='intro-section'>
                <img className='pfp' src="me.jpg" alt="" />
                <div className="intro-text">
                    <h1>Axel Bergquist, Web Developer</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, a reprehenderit omnis dolores temporibus tenetur? Nam ducimus aspernatur, quam cumque alias reiciendis ea, rem nisi dicta quasi iusto itaque consequuntur!.</h2>
                    <h3>Stacks: </h3>
                    <div className="chips-container">
                        <img src="react-logo.png" alt="" className="stack-logo"/>
                        <i class="fa-brands fa-js"></i>
                        <i class="fa-brands fa-html5"></i>
                        <i class="fa-brands fa-css3-alt"></i>
                        <div className="chip" style={{borderColor:"red"}}>NPM</div>
                        <div className="chip" style={{borderColor:"green"}}>Mongo DB</div>
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