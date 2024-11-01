import "./Contact.css"

const Contact = () => {
    function copyEmailToClipboard(event) {
        event.preventDefault();
        const email = "axel.bergquist94@gmail.com"

        const tempInput = document.createElement("textarea")
        tempInput.value = email;
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand("copy")
        document.body.removeChild(tempInput)

        alert("E-mail adress copied to clipboard!")
    }
    
    return (
        <div className="Contact">
            <h3>Contact & Links</h3>
            <div className="ext-links">
                <a href="https://github.com/axelberk" target="_blank"><img src="github-mark.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/axel-bergquist-360940114/" target="_blank"><img src="LI-In-Bug.png" alt="" /></a>
                <a href="" onClick={copyEmailToClipboard}><img src="icon-gmail.png" alt="" /></a>
            </div>
        </div>
    )
}

export default Contact