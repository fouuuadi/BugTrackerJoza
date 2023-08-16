import React, { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";

const FormUpdate = () => {

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
    const {id} = useParams();

    const [name, setName] = useState();
        const [author, setAuthor] = useState();
        const [description, setDescription] = useState();
        const [priority, setPriority] = useState('Choise it');


// Comportement
        const handleSubmitUpdate = (e) => {
            e.preventDefault();
            const formUpdate = {name, author, description, priority};


            // fetchData('url', 'get', setTickets);
            //envoyer les données du formulaire a la base de données
            axios
                .put(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`, formUpdate)
                .then((response) => {
                    console.log("Ticket ajouté avec succès !", response.data);

                    //rediriger avec la function refresh pour retourner sur le ('/') = home
                    refresh();
                })

                .catch((error) => {
                    console.log('Erreur lors de la récupération des données:', error);
                });
        };

        return (

            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Enter your description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="HIGH">HIGH</option>
                    <option value="MEDIUM">MEDIUM</option>
                    <option value="LOW">LOW</option>
                    <option value="CRITICAL">CRITICAL</option>
                </select>

                <Button
                    label={
                        <span>
        <FontAwesomeIcon
            icon={faFilePen}
            style={{ color: "#0056d6" }}
        />
        Confirm Update
      </span>
                    }
                    action={handleSubmitUpdate}
                    color="none"
                />
            </form>)
    }

export default FormUpdate;
