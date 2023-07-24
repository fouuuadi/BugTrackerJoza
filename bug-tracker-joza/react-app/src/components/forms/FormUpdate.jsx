import React from "react";

const FormUpdate = () => {
    return (
        <form>
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

            <button className="submit-button"type="submit">Update your ticket</button>
        </form>
    )
}

export default FormUpdate;