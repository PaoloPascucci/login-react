import React, { useState,useEffect } from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox';
import Button from '../funcComponent/button/Button';
import ChangeLeng from "./changeLeng/ChangeLeng";
import LinkCustom from "../funcComponent/link/LinkCustom";

// paths 
import paths from '../../routes/paths'

// utils 
import { checkPassword } from '../../utils/utils'

import "../../i18n"
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";

let nameUser = null;
let password = null;

const Login = () => {

    const navigate = useNavigate();

    const [state, setState] = useState({
        errorUser: false,
        errorPassword: false,
        errorMessagePassword: "password is required",
    })

    useEffect(()=>{
        return ()=>{
            // console.log('distrutto')
            // password = null;
            // nameUser = null;
        }
    })

    const userNameOnChange = (e) => {
        nameUser = e;
    }
    const passwordOnChange = (e) => {
        let obj = { ...state }
        if (checkPassword(e)) {
            obj.errorPassword = false;
            obj.errorMessagePassword = null;
            password = e;
        } else {
            obj.errorPassword = true;
            obj.errorMessagePassword = "la password deve contenere un carattere speciale e almeno 8 caratteri"
        }
        setState(obj)


    }
    const { t, i18n } = useTranslation();

    const loginBtn = (params) => () => {
        console.log(nameUser, '   ', password)
        let obj = { ...state }
        if (!nameUser && !password) {
            obj.errorUser = true;
            obj.errorPassword = true;
        } else if (!nameUser || !password) {
            if (!nameUser) {
                obj.errorUser = true;
            } else if (!password) {
                obj.errorPassword = true;
            }
        } else {
            obj.errorUser = false;
            obj.errorPassword = false;
            navigate(params)
        }
        setState(obj)



    }
    const checkErrorMessageUsername = () => {
        if (state.errorUser) {
            return (<div className="error"><span className="advice_error">Username is required</span> <span><i className="fas fa-exclamation-circle"></i></span></div>)
        }
    }
    const checkErrorMessagePassword = () => {
        if (state.errorPassword) {
            return (<div className="error"><span className="advice_error">{state.errorMessagePassword}</span> <span><i className="fas fa-exclamation-circle"></i></span></div>)
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>

            <InputBox
                box_inputCustom={'box_inputCustom_user'}
                labelName={t("Username")}
                content={<i className="far fa-user"></i>}
                cssCustomLabel={'label_custom_login'}
                type={'text'}
                cssCustomInput={'Input_custom_login'}
                placeholder={t("labelU")}
                callback={userNameOnChange}
                children={checkErrorMessageUsername()}
            />

            <InputBox
                box_inputCustom={'box_inputCustom_password'}
                labelName={t('Password')}
                content={<i className="fa fa-lock"></i>}
                cssCustomLabel={'label_custom_login'}
                type={'password'}
                cssCustomInput={'Input_custom_login'}
                placeholder={t('labelP')}
                callback={passwordOnChange}
                children={checkErrorMessagePassword()}
            />
            <div className="forgot_psw_link">
                <LinkCustom
                    cssCustom="a_custom"
                    paths={paths.NOTFOUND}
                    nameLink={t("pd")}
                />
            </div>
            <Button
                callback={loginBtn(paths.HOMEPAGE)}
                nameBtn={t("login")}
                cssCustom={'btn_custom'}

            />
            <div className="sign_advice usingSocial">
                {t("signUp")}
            </div>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <LinkCustom
                    cssCustom="color bg1"
                    paths={paths.NOTFOUND}
                    nameLink={<i className="fa fa-facebook"></i>}
                />
                <LinkCustom
                    cssCustom="color bg2"
                    paths={paths.NOTFOUND}
                    nameLink={<i className="fab fa-twitter"></i>}
                />
                <LinkCustom
                    cssCustom="color bg3"
                    paths={paths.NOTFOUND}
                    nameLink={<i className="fab fa-google"></i>}
                />
            </div>
            <div className="sign_advice new">
                {t("signUp")}
            </div>
            <div className="forgot_psw_link2" style={{ textAlign: "center" }}>
                <LinkCustom
                    cssCustom={'sign_up_bottom'}
                    paths={paths.REGISTRATION}
                    nameLink={t("sign")}
                />
            </div>

            <ChangeLeng />
        </div>

    )
}

export default Login

