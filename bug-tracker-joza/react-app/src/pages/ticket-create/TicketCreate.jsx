import React, {useEffect, useState} from "react";

import FormCreate from "../../components/forms/FormCreate";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterPage from "../../components/layout/footer/FooterPage";


const TicketCreate = () => {

    const [tickets, setTickets] = useState([]);


    return (
        <div>
            <HeaderPage/>
            <h2>Incident ticket creation form</h2>
            <FormCreate/>
            <FooterPage/>
        </div>
    );
}

export default TicketCreate;