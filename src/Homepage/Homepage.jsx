import "./HomePage.css"

const Homepage = () => {
    return (
        <div className="Homepage">
            <div className='intro-section'>
                <img className='pfp' src="me.jpg" alt="" />
                <div className="intro-text">
                    <h1>Web Developer</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellendus, illum eius explicabo nemo nobis ipsam eligendi odio temporibus veritatis mollitia illo perferendis voluptate ab sint, id distinctio. Aspernatur, labore.</h2>
                    <h3> </h3>
                    <div className="chips-container">
                        <div className="tooltip-container">
                            <img src="react-logo.png" alt="" className="stack-logo"/>
                            <span className="tooltip-text">React</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="JS-logo2.png" alt="" className="stack-logo"/>
                            <span className="tooltip-text">JavaScript</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="HTML5_logo.svg" alt="" className="stack-logo"/>
                            <span className="tooltip-text">HTML</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="CSS3_logo.svg" alt="" className="stack-logo"/>
                            <span className="tooltip-text">CSS</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="Git-Icon.png" alt="" className="stack-logo"/>
                            <span className="tooltip-text">Git</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="Npm-logo.svg" alt="" className="stack-logo"/>
                            <span className="tooltip-text">NPM</span>
                        </div>
                        
                        <div className="tooltip-container">
                            <img src="MongoDB_Logo.svg" alt="" className="stack-logo"/>
                            <span className="tooltip-text">MongoDB</span>  
                        </div>
                        
                        
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