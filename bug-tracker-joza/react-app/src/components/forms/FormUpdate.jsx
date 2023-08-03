import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Button from "../button/Button";

const FormUpdate = () => {

    const FormCreate = () => {

        const navigate = useNavigate()

        const [name, setName] = useState();
        const [author, setAuthor] = useState();
        const [description, setDescription] = useState();
        const [priority, setPriority] = useState('Choise it');


// Comportement
        const handleSubmitUpdate = (e) => {
            e.preventDefault();
            const formCreate = {name, author, description, priority};


            // fetchData('url', 'get', setTickets);
            //envoyer les données du formulaire a la base de données
            axios
                .post(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/`)
                .then((response) => {
                    console.log("Ticket ajouté avec succès !", response.data);

                    //rediriger l'utilisateur vers la page d'accueil aprés l'ajout réussi
                    navigate(`/`)
                })

                .catch((error) => {
                    console.log('Erreur lors de la récupération des données:', error);
                });
        };

        return (

            <form onSubmit={handleSubmitUpdate}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"></input>

            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author"></input>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter your description..."></textarea>

            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority">
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
                <option value="CRITICAL">CRITICAL</option>
            </select>


        </form>)
    }
}

export default FormUpdate;