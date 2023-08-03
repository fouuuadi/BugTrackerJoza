/*
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const handleSubmitUpdate = (e) => {
    e.preventDefault();


    const formUpdate = { name, author, description, priority };

    const navigate = useNavigate();

    // Récupérer l'ID du ticket à partir du champ caché
    const ticketId = e.target.ticketId.value;

    // Envoi de la requête PUT ou PATCH au serveur pour mettre à jour le ticket
    axios
        .put(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${ticketId}`)
        .then((response) => {
            console.log("Ticket mis à jour avec succès !", response.data);

            // Rediriger l'utilisateur vers la page d'accueil après la mise à jour réussie
            navigate(`/`);
        })
        .catch((error) => {
            console.log("Erreur lors de la mise à jour du ticket :", error);
        });
};

export default handleSubmitUpdate()*/