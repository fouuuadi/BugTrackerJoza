import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";

const HeaderPage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <header className="header-nav">
                <h1 className="title">BuhTrackerJoza</h1>
                <nav>
                    <Button label="Homepage"
                            action={() =>{
                                navigate(`/`)
                            }}
                            color="brown"/>
                </nav>
            </header>
        </div>
    );
};
export default HeaderPage;