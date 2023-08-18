import React, {useEffect, useState} from "react";
import axios from "axios";
import FormUpdate from "../../components/forms/FormUpdate";
import {useParams} from "react-router-dom";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterForms from "../../components/layout/footer-forms/FooterForms";

const TicketUpdate = () => {

    const {id} = useParams();

    const [ticket, setTicket] = useState();

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        //axios.get(`http://localhost:8080/tickets/${id}`)
        id && axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then(response => {
                console.log(response);
                setTicket(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);
    return (
        <div>
            <HeaderPage/>
                <h2>Change on ticket {id}</h2>
                <FormUpdate/>
            <FooterForms/>
        </div>

    );
}

export default TicketUpdate;