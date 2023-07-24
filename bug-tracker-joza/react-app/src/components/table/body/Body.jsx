import React, {useEffect} from "react";

const BodyTable = (props) => {
    useEffect(() => {
        console.log(props);
    },[])

    return (<tbody>
    {props.data.map(ticket => (
        <tr key={ticket.id}>
            <td>{ticket.id}</td>
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
        </tr>
    ))}
    </tbody>)
}

export default BodyTable;