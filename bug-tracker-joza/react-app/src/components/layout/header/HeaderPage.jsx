import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Button from "../../button/Button";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse, faSquarePlus} from "@fortawesome/free-solid-svg-icons";

const HeaderPage = () => {

    const navigate = useNavigate();
    return (
        <div>
            <header className="header-nav">
                <h1 className="title">BugTrackerJoza</h1>
                <div className="btn-forms">
                    <Button label={
                        <span className="span-forms">
                                    <FontAwesomeIcon
                                        icon={faHouse}
                                        style={{color: "#9900ff",}} />
                                     Home
                                  </span>}
                            action={() => {
                                navigate('/')
                            }}
                            color="none"
                    />
                </div>
            </header>
        </div>
    );
};
export default HeaderPage;