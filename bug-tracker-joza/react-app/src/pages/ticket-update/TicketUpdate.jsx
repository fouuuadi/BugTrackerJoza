import React, {useEffect, useState} from "react";
import axios from "axios";
import FormUpdate from "../../components/forms/FormUpdate";
import {useParams} from "react-router-dom";

const TicketUpdate = () => {

    const {id} = useParams();

    const [ticket, setTicket] = useState();

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        axios.get(`http://localhost:8080/tickets/${id}`)
            .then(response => {
                setTicket(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);
    return (
        <table>
            <h2>Change on ticket {id}</h2>
            <FormUpdate/>

        </table>
    );
}

export default TicketUpdate;