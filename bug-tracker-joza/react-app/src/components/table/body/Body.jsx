import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../button/Button";

const BodyTable = (props) => {
    useEffect(() => {
        console.log(props);
    },[])

    const handleAction = (action, ticket) => {
        if (action === "view") {
            navigate(`/ticket/${ticket.id}`);
        } else if (action === "update") {
            navigate(`/ticket/${ticket.id}/update`);
        } else if (action === "delete") {
            navigate()
        }
        // Ajoutez ici d'autres conditions pour les autres actions si nécessaire
    };
const navigate =useNavigate();
    return (<tbody>
    {props.data.map(ticket => (
        <tr key={ticket.id}>
            <td><Button label={ticket.id}
                        action={() =>{
                            navigate(`/ticket/${ticket.id}`)
                        }}
                        color = 'grey'>
                </Button>
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
                <select defaultValue="choose"
                        onChange={(e) => handleAction(e.target.value, ticket)}
                >
                    <option value="choose" disabled>
                        Choose an action
                    </option>
                    <option value="view">Display</option>
                    <option value="update">Update</option>
                    <option value="">Delete</option>
                </select>
            </td>
        </tr>
    ))}
    </tbody>)
}

export default BodyTable;