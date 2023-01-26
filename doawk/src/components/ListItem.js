import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
    const title = note.body.split('\n')[0]
    return title.length > 20 ? title.substring(0, 20) + '...' : title
}

let getDate = (note) => {
    const date = new Date(note.updated)
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'})
}

let getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.substring(title.length, note.body.length)
    return content.length > 45 ? content.substring(0, 45) + '...' : content
}





const ListItem = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
            <h2>{getTitle(note)}</h2>
            <p><span>{getDate(note)}</span>{getContent(note)}</p>
            </div>
        </Link>
    )
}

export default ListItem;

