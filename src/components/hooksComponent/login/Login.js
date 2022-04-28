import React, { useState, useEffect } from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../../funcComponent/inputBox/InputBox';
import Button from '../../funcComponent/button/Button';
import ChangeLeng from "../changeLeng/ChangeLeng";
import LinkCustom from "../../funcComponent/link/LinkCustom";

// paths 
import paths from '../../../routes/paths'

// utils 
import { checkPassword } from '../../../utils/utils'

// per le traduzioni 
import "../../../i18n"
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";

let nameUser = null;
// let password = null;

const Login = () => {

    const navigate = useNavigate();
    const { t, i18n } = useTranslation();


    const [state, setState] = useState({
        errorUser: false,
        errorPassword: false,
        password : null

    })

    // rivalorizziamo password e nameUser a null quando si ditrugge il componente 
    useEffect(() => {
        return () => {
            nameUser = null;
            setState({
                password : null
            })
        }
    }, [])

    // funzione valorizza nameUser al change input Username 
    const userNameOnChange = (e) => {
        let obj = {...state}
        nameUser = e;
        if (nameUser!== null || nameUser !== ""){
            obj.errorUser = false
        }
        setState(obj)

    }
    // funzione valorizza password + controllo se la password è corretta (il controllo è su utils)
    const passwordOnChange = (e) => {
        let obj = { ...state }
        obj.password = e;
        if (checkPassword(e)) {
            obj.errorPassword = false;
        }
        setState(obj)
    }

    // funzione check data invio 
    const loginBtn = (params) => () => {
        console.log(state.password)
        let obj = { ...state }

        // se user e pass sono null 
        if (!nameUser && !state.password && !checkPassword(state.password))  {
            obj.errorUser = true;
            obj.errorPassword = true;
        } else if (!nameUser) {
            obj.errorUser = true;
        } else if (!checkPassword(state.password)) {
            obj.errorPassword = true;
        } else {
            obj.errorUser = false;
            obj.errorPassword = false;
            navigate(params)
        }
        setState(obj)
    }
    // messaggio di errore se utente null 
    const checkErrorMessageUsername = () => {
        if (state.errorUser) {
            return (
                <div className="error">
                    <span className="advice_error">
                        {t("errorU")}
                    </span>
                    <span>
                        <i className="fas fa-exclamation-circle">
                        </i>
                    </span>
                </div>)
        }
    }
    // messaggio di errore se password non corretta
    const checkErrorMessagePassword = () => {

        if (state.errorPassword) {
            return (
                <div className="error">
                    {(state.password === null) &&
                        <span className="advice_error">
                            {t("errorP")}
                        </span>
                    }
                    {
                        (state.password !== null) &&
                        <span className="advice_error">
                            {t("errorPCar")}
                        </span>
                    }

                    <span>
                        <i className="fas fa-exclamation-circle">
                        </i>
                    </span>
                </div>)
        }
    }
    return (
        <div className="login">
            <h1>Login</h1>

            {/* input username  */}
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
            {/* input password  */}
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
            {/* password dimenticata ?  */}
            <div className="forgot_psw_link">
                <LinkCustom
                    cssCustom="a_custom"
                    paths={paths.NOTFOUND}
                    nameLink={t("pd")}
                />
            </div>
            {/* bottone login  */}
            <div className="box_button">
                <Button
                    callback={loginBtn(paths.HOMEPAGE)}
                    nameBtn={<span className="name_btn">{t("login")}</span>}
                    cssCustom={'btn_custom'}

                />
            </div>

            {/* avviso oppure iscriviti con social */}
            <div className="sign_advice usingSocial">
                {t("signUp")}
            </div>
            {/* social  */}
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
            {/* avviso oppure iscriviti  */}
            <div className="sign_advice new">
                {t("signUp")}
            </div>
            {/* link che porta alla pagina di registrazione  */}
            <div className="forgot_psw_link2" style={{ textAlign: "center" }}>
                <LinkCustom
                    cssCustom={'sign_up_bottom'}
                    paths={paths.REGISTRATION}
                    nameLink={t("sign")}
                />
            </div>

            {/* componente per cambiare lingua  */}
            <ChangeLeng />
        </div>

    )
}

export default Login

