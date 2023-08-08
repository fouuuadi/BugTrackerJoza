import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faMarker, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Button from "../../button/Button";
import axios from "axios";
import modal from "../../components-modal/modal";
import Modal from "../../components-modal/modal";

const BodyTable = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);

    const navigate = useNavigate();

    const TicketDelete = (id) => {

        axios
            .delete(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then((response) => {
                console.log("Ticket supprimé avec succès !", response.data);
                props.refresh()
            })
            .catch((error) => {
                console.log('Erreur lors de la suppression des données', error);
            });


    };

    const confirmationModalHandler = () => {

    }
    const handleAction = (action, ticket) => {
        if (action === "view") {
            navigate(`/ticket/${ticket.id}`);
        } else if (action === "update") {
            navigate(`/ticket/${ticket.id}/update`);
        } else if (action === "delete") {
            // Code pour la suppression d'un ticket
            TicketDelete(ticket.id);
        } else if (action === "create") {
            navigate('/ticket/create');
        }
        // Ajoutez ici d'autres conditions pour les autres actions si nécessaire
    };

    const [isOpen, setIsOpen] = useState(false);

    return (<tbody>
        {props.data.map((ticket) => (<tr key={ticket.id}>
                <td>
                    <Button
                        label={ticket.id}
                        action={() => {
                            navigate(`/ticket/${ticket.id}`);
                        }}
                        color="grey"
                    />
                </td>
                <td>{ticket.name}</td>
                <td>{ticket.author}</td>
                <td>{ticket.description}</td>
                <td>
                    <select value={ticket.priority}>
                        <option value={"CRITICAL"}>CRITICAL</option>
                        <option value={"HIGH"}>HIGH</option>
                        <option value={"MEDIUM"}>MEDIUM</option>
                        <option value={"LOW"}>LOW</option>
                    </select>
                </td>
                <td>
                    <div
                        onChange={(e) => handleAction(e.target.value, ticket)}
                        defaultValue="choose"
                    >
                        <Button
                            label={<span>
                    <FontAwesomeIcon icon={faEye} style={{color: "#4f7a28",}}/>
                                    Display
                                </span>}
                            color="none"
                            action={() => {
                                handleAction("view", ticket)
                            }}
                        />
                        <Button
                            label={<span>
                    <FontAwesomeIcon icon={faMarker} style={{color: "#001e57",}}/>{" "}
                                Update
                                   </span>}
                            color="none"
                            action={() => {
                                handleAction("update", ticket)
                            }}
                        />
                        <Button
                    </div>
                </td>
            </tr>))}
        </tbody>);
};

export default BodyTable;
