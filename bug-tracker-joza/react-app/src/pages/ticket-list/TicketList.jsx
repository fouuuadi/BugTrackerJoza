import React, {useEffect, useState} from "react";
import axios from "axios";
import HeaderTable from "../../components/table/header/Header";
import BodyTable from "../../components/table/body/Body";
import HeaderHomePage from "../../components/layout/header-home/HeaderHome";
import FooterHome from "../../components/layout/footer-home/FooterHome";


const TicketList = () => {

    const [tickets, setTickets] = useState([]);


    const refresh = () => {
        axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/all`)
            //axios.get('http://localhost:8080/tickets/all')
            .then(response => {
                setTickets(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }

    // Comportement
    useEffect(() => {
        refresh()
    }, []);

    return (
        <>
            <HeaderHomePage/>
            <table>

                <caption><h2>All tickets</h2></caption>
                <HeaderTable/>
                <BodyTable data={tickets} refresh={refresh}/>

            </table>
            <FooterHome/>
        </>
    );
}

export default TicketList;
