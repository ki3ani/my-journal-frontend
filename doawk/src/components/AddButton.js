import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddIcon } from "../assets/add.svg";

const AddButton = () => {
    return (
        <Link to="/note/new" className="floating-button">
        <div className="add-button">
            <AddIcon />
        </div>
        </Link>
    );
    };

export default AddButton;

