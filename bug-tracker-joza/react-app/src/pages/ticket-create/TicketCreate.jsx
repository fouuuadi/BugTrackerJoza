import React, {useEffect, useState} from "react";
import axios from "axios";
import FormCreate from "../../components/forms/FormCreate";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterPage from "../../components/layout/footer/FooterPage";


const TicketCreate = () => {

    const [tickets, setTickets] = useState([]);

    // Comportement
    useEffect( () => {

        // fetchData('url', 'get', setTickets);
        //axios.post('http://localhost:8080/tickets/')
        axios.post(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets`)
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

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