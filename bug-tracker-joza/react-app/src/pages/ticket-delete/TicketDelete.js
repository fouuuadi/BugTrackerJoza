import React from "react";
import axios from "axios";


const TicketDelete = (id) => {

    alert(id)
    // Créez l'objet de données pour la requête DELETE

    // Envoyez la requête DELETE au backend pour supprimer le ticket
    axios
        .delete(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
        .then((response) => {
            console.log("Ticket supprimé avec succès !", response.data);

        })
        .catch((error) => {
            console.log('Erreur lors de la suppression des données', error);
        });


};


export default TicketDelete;