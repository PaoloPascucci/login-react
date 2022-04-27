import React from "react";

// import { useTranslation } from "react-i18next";

// css 
import './LoginBox.scss'
// components 
import Login from "../components/hooksComponent/Login";
import i18n from "../i18n";
const LoginBox = () => {

    const changeLanguage = (ln) => {
        return () => { 
            i18n.changeLanguage(ln)
            console.log(`lingua cambiata in ${ln}`);
         };
    };
    return (
        <div className="loginBox">
            <div>
                <button onClick={changeLanguage("en")}>ENG</button>
                <button onClick={changeLanguage("it")}>ITA</button>
            </div>
            <Login />
        </div>

    )
}

export default LoginBox