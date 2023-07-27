import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h2>The page you’re looking for doesn’t exist.</h2>
            <button><Link to="/">Go to Home</Link></button>
        </div>
    )

}

export default NotFound;