import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../button/Button";
import "./HeaderHome.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquarePlus} from "@fortawesome/free-solid-svg-icons";

const HeaderHomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header className="header-nav">
                    <h1 className="title">BugTrackerJoza</h1>
                        <div className="btn-create">
                            <Button label={
                                <span className="span-create">
                                    <FontAwesomeIcon
                                        icon={faSquarePlus}
                                        style={{color: "#02f740",}} />
                                     Create Ticket
                                  </span>}
                                    action={() => {
                                        navigate('/ticket/create')
                                    }}
                                    color="none"
                            />
                        </div>
            </header>
        </div>
    )
}
export default HeaderHomePage;
