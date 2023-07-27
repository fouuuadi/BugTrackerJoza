import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterPage from "../../components/layout/footer/FooterPage";

const TicketSingle = () => {

    const {id} = useParams();

    const [ticket, setTicket] = useState();

    // Comportement
    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        //axios.get(`http://localhost:8080/tickets/${id}`)
        axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then(response => {
                setTicket(response.data.content);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

    return (<table>
        <HeaderPage/>
        <caption><h2>Ticket {id}</h2></caption>
        {ticket && <div>
            <div>{ticket.id}</div>
            <div>{ticket.description}</div>
            <div>{ticket.name}</div>
            <div>{ticket.priority}</div>
        </div>}
    </table>
    )

}

export default TicketSingle;