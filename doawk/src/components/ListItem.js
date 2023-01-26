import React from "react";


const ListItem = ({note}) => {
    return (
        <div>
            <h1>{note.body}</h1>
        </div>
    )
}

export default ListItem;

