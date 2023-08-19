import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faMarker, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import Button from "../../button/Button";
import axios from "axios";
import Modal from "../../components-modal/modal";

const BodyTable = (props) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const TicketDelete = (id) => {
        axios
            .delete(`${process.env.REACT_APP_API_URL || "http://localhost:8080"}/tickets/${id}`)
            .then((response) => {
                console.log("Ticket supprimé avec succès !", response.data);
                setIsOpen(false);
                props.refresh()
            })
            .catch((error) => {
                console.log('Erreur lors de la suppression des données', error);
            });
    };
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


    return (<tbody>
        {props.data && props.data.map((ticket) => (<tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>{ticket.author}</td>
                <td>{ticket.description}</td>
                <td>{ticket.priority}</td>
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
                                <FontAwesomeIcon icon={faMarker} style={{color: "#001e57",}}/>
                                Update
                                   </span>}
                            color="none"
                            action={() => {
                                handleAction("update", ticket)
                            }}
                        />
                        <Button
                            label={
                            <span>
                                <FontAwesomeIcon icon={faTrash} style={{color: "#b51a00",}} />
                                Delete
                            </span>
                            }
                            color="none"
                            action={() => setIsOpen(true)}
                        />
                        {isOpen && <Modal method={()=>(handleAction('delete',ticket))} setIsOpen={setIsOpen} />}
                    </div>
                </td>
            </tr>))}
        </tbody>);
};

export default BodyTable;
