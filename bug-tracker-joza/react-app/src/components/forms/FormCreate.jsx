import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Forms.scss';
import axios from "axios";
import Button from "../button/Button";

const FormCreate = ({id}) => {

    const navigate = useNavigate()

    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [priority, setPriority] = useState('NONE');
    const [isCreation, setIsCreating] = useState(true);


    const fetchTicketById = (id) => {
        axios.get(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then(response => {
                setName(response.data.content.name);
                setAuthor(response.data.content.author);
                setDescription(response.data.content.description);
                setPriority(response.data.content.priority);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });
    }

    useEffect(() => {
        if (id === undefined) {
            // on est dans le cas d'une création
            setIsCreating(true);
        } else {
            setIsCreating(false);
            fetchTicketById(parseInt(id));

            // on est dans le cas d'un update
        }
    }, [id])


// Comportement
    const handleSubmitCreate = (e) => {
        e.preventDefault();
        const formCreate = {id, name, author, description, priority};

        if (priority === 'NONE') {
            alert("Veuillez choisir une priorité")
            return;
        }

        // fetchData('url', 'get', setTickets);
        //envoyer les données du formulaire a la base de données
        axios
            .post(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/`, formCreate)
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
        <form onSubmit={handleSubmitCreate}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={name}
                   onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="author">Author</label>
            <input type="text" id="author"
                   className={isCreation ? '' : 'disabled'}
                   name="author" required value={author} readOnly={!isCreation}
                   onChange={(e) => setAuthor(e.target.value)}></input>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter your description..."
                      required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" required value={priority}
                    onChange={(e) => setPriority(e.target.value)}>

                <option value="NONE">Choisir une prio</option>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
                <option value="CRITICAL">CRITICAL</option>
            </select>
            <div className="btn-create">
                <Button label="Validate your ticket"
                        color="blue"/>
            </div>
        </form>
    )
}

export default FormCreate;
