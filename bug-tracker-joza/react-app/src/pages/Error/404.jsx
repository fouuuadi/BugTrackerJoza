import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button";


const NotFound = () => {

    const navigate = useNavigate();
    return(
        <div>
            <h2>The page you’re looking for doesn’t exist.</h2>
            <div className="btn">
            <Button
                    label="Error 404"
                    action={() =>{
                        navigate('/')
                    }}
                    color="red"/>
            </div>
        </div>
    )

}

export default NotFound;