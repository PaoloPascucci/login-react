import React from "react";
import { useNavigate } from "react-router";

import './NotFound.scss'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="error_page">
            <div>PAGE NOT FOUND</div>
        </div>
    )
}

export default NotFound