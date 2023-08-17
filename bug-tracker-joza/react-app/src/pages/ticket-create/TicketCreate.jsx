import React from "react";

import FormCreate from "../../components/forms/FormCreate";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterPage from "../../components/layout/footer/FooterPage";
import {useParams} from "react-router-dom";


const TicketCreate = () => {

    const {id} = useParams(); // peut être undefined dans le cas de la création


    return (
        <div>
            <HeaderPage/>
            {id === undefined ?
                <h2>Incident ticket creation form</h2> :
                <h2>Incident ticket update form</h2>
            }
            <FormCreate id={id}/>
            <FooterPage/>
        </div>
    );
}

export default TicketCreate;
