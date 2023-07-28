import React from "react";
import {Link} from "react-router-dom";
import './404.scss';

const NotFound = () => {
    return(
        <div className="error404">
            <h1>404</h1>
            <h2>The page you’re looking for doesn’t exist.</h2>
            <button><Link to="/">Go to Home</Link></button>
        </div>
    )

}

export default NotFound;