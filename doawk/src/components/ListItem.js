import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
            <h2>{note.body}</h2>
            </div>
        </Link>
    )
}

export default ListItem;

