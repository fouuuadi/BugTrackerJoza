import React, {useEffect, useState} from "react";
import axios from "axios";
import FormCreate from "../../components/forms/FormCreate";

const TicketCreate = () => {

    const [tickets, setTickets] = useState([]);

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        axios.post('http://localhost:8080/tickets/')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

    return (
        <div>
            <h2>Incident ticket creation form</h2>
            <FormCreate/>

        </div>
    );
}

export default TicketCreate;