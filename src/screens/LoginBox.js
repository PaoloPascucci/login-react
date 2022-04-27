import React, { useState } from "react";

// import { useTranslation } from "react-i18next";

// css 
import './LoginBox.scss'
// components 
import Login from "../components/hooksComponent/Login";
import i18n from "../i18n";
const LoginBox = () => {
    const [state, setState] = useState({
        len: 'it'
    })
    const changeLanguage = (ln) => {
        const obj = { ...state }
        return () => {
            if (obj.len === 'en') {
                obj.len = 'it'
            }else {
                obj.len = 'en'
            }
            setState(obj)
            i18n.changeLanguage(ln)
            console.log(`lingua cambiata in ${ln}`);
        };
    };
    
    return (
        <div className="loginBox">
            <div className="box_language">
                <img className="flag_img" src={state.len === 'en' ? 'https://www.citypng.com/public/uploads/preview/hd-round-uk-united-kingdom-flag-icon-png-141630249476icrrix8inj.png' : 'https://image.shutterstock.com/image-vector/italy-national-circle-button-flag-260nw-761977876.jpg'} onClick={changeLanguage(state.len)}/>
            </div>
            <Login />
        </div>

    )
}

export default LoginBox