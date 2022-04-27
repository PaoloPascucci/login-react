import React from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox';
import Button from '../funcComponent/button/Button';
import ChangeLeng from "./changeLeng/ChangeLeng";


import "../../i18n"
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";




const Login = () => {
    // const navigate = useNavigate();
    
    const userNameOnChange = (e) => {
        console.log(e)
    }
    const { t, i18n } = useTranslation();

    const loginBtn = () =>{
        console.log('clicked')
    }
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

            <InputBox
                box_inputCustom={'box_inputCustom_password'}
                labelName={t('Password')}
                cssCustomLabel={'label_custom_login'}
                type={'password'}
                cssCustonInput={'Input_custom_login'}
                placeholder={t('labelP')}
                focusSpan={'focusSpan'}
                callback={userNameOnChange}
            />
            <div className="forgot_psw_link">
                <a href="#">{t("pd")}?</a>
            </div>
            <Button 
                callback={loginBtn}
                nameBtn={t("login")}
                cssCustom={'btn_custom'}
            
            />
            <div style={{paddingTop:54,paddingBottom:20, textAlign:"center"}}>
            {t("signUp")}
            </div>
            <div style={{display: 'flex',justifyContent:"center", alignItems:"center"}}>
                <a href="#">F</a>
                <a style={{margin:"0 1rem"}} href="#">T</a>
                <a href="#">G</a>
            </div>
            <div style={{paddingTop : 155,textAlign:"center"}}>
            {t("signUp")}
            </div>
            <div className="forgot_psw_link2" style={{textAlign:"center"}}>
                <a href="#">{t("sign")}</a>
            </div>

            <ChangeLeng />
        </div>

    )
}

export default Login