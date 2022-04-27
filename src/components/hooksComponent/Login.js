import React from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox'

import "../../i18n"
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";



const Login = () => {
    // const navigate = useNavigate();
    
    const userNameOnChange = (e) => {
        console.log(e)
    }
    const { t, i18n } = useTranslation();

    return (
        <div className="login">
            <h1>Login</h1>

            <InputBox
                labelName={t("Username")}
                cssCustomLabel={'label_custom_login'}
                type={'text'}
                cssCustonInput={'Input_custom_login'}
                placeholder={t("labelU")}
                callback={userNameOnChange}
            />
        </div>

    )
}

export default Login