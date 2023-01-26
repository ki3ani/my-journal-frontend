import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
    const title = note.body.split('\n')[0]
    return title.length > 20 ? title.substring(0, 20) + '...' : title
}




const ListItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
            <h2>{getTitle(note)}</h2>
            </div>
        </Link>
    )
}

export default ListItem;

