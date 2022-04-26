import React from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = () =>{
    const navigate = useNavigate();
    return(
        <div>login
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>

    )
}

export default Login