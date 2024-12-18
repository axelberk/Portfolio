import React from "react";
import "./TechStack.css"

const TechStack = ({stack}) => {
    return (
        <div className="stacks-used">
            {stack.map((tech, index) => (
                <div key={index} className="chip">{tech}</div>
            ))}
        </div>
    )
}

export default TechStack