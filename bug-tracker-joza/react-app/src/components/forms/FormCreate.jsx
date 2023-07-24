import React, {useEffect, useState} from "react";
import './Forms.scss';
import body from "../table/body/Body";
import axios from "axios";

const FormCreate = () => {

    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [priority, setPriority] = useState('Choise it');

    useEffect(() => {

        // fetchData('url', 'get', setTickets);
        axios.post()
            .then(response => {
                console.log(response);
                // setName, setAuthor, setDescription, setPriority(response.data);
            })
            .catch(error => {
                console.log('Erreur lors de la récupération des données:', error);
            });

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formCreate = {name, author, description, priority};
        // Comportement

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required value={name}
                   onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="author">Author</label>
            <input type="text" id="author" name="author" required value={author}
                   onChange={(e) => setAuthor(e.target.value)}></input>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter your description..."
                      required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

            <label htmlFor="priority">Priority</label>
            <select id="priority" name="priority" required value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                <option value="HIGH">HIGH</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LOW">LOW</option>
                <option value="CRITICAL">CRITICAL</option>
            </select>

            <button className="submit-button" type="submit">Validate your ticket</button>
        </form>
    )
}

export default FormCreate;