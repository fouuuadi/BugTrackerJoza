import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import HeaderPage from "../../components/layout/header/HeaderPage";
import FooterForms from "../../components/layout/footer-forms/FooterForms";
import Button from "../../components/button/Button";

const TicketSingle = () => {

    const navigate = useNavigate();

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

    return (
        <div>
            <HeaderPage/>
            <div className="container">
            <div className="ticket-card">
                <h2 className="titre-page">Ticket {id}</h2>
                {ticket && (
                    <div className="ticket-details">
                        <div className="ticket-info">
                            <div className="ticket-property">ID:</div>
                            <div className="ticket-value">{ticket.id}</div>
                        </div>
                        <div className="ticket-info">
                            <div className="ticket-property">Description:</div>
                            <div className="ticket-value overflow-description">{ticket.description}</div>
                        </div>
                        <div className="ticket-info">
                            <div className="ticket-property">Name:</div>
                            <div className="ticket-value">{ticket.name}</div>
                        </div>
                        <div className="ticket-info">
                            <div className="ticket-property">Priority:</div>
                            <div className="ticket-value">{ticket.priority}</div>
                        </div>
                    </div>
                )}
            </div>
            </div>
            <FooterForms/>
        </div>
    );
};

export default TicketSingle;