import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const HeaderPage = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};
export default HeaderPage;