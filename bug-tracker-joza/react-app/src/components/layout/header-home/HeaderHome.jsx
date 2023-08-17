import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../button/Button";
import "./HeaderHome.scss";

const HeaderHomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header className="header-nav">
                <nav>
                    <h1 className="title">BugTrackerJoza - test</h1>
                    <ul>
                        <li className="btn">
                            <Button label="Create Ticket"
                                    action={() => {
                                        navigate('/ticket/create')
                                    }}
                                    color="blue"
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default HeaderHomePage;
