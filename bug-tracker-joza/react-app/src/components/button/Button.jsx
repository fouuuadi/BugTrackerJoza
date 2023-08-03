import React from "react";

const Button = ({label, action, color}) => {
    return (<button
            style={{backgroundColor: color}}
            onClick={() => {
                action && action()
            }}
        >{label}</button>)
}

export default Button;