import React from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox';
import Button from '../funcComponent/button/Button';
import ChangeLeng from "./changeLeng/ChangeLeng";
import LinkCustom from "../funcComponent/link/LinkCustom";

// paths 
import paths from '../../routes/paths'

import "../../i18n"
// import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router";



const Login = () => {
 const navigate = useNavigate();

    const userNameOnChange = (e) => {
        console.log(e)
    }
    const { t, i18n } = useTranslation();

    const loginBtn = (params)=> (e) => {
        console.log('clicked')
        navigate(params)
    }
    return (
        <div className="login">
            <h1>Login</h1>

            <InputBox
                labelName={t("Username")}
                content={<i className="far fa-user"></i>}
                cssCustomLabel={'label_custom_login'}
                type={'text'}
                cssCustonInput={'Input_custom_login'}
                placeholder={t("labelU")}
                callback={userNameOnChange}
            />

            <InputBox
                box_inputCustom={'box_inputCustom_password'}
                labelName={t('Password')}
                content={<i className="fa fa-lock"></i>}
                cssCustomLabel={'label_custom_login'}
                type={'password'}
                cssCustonInput={'Input_custom_login'}
                placeholder={t('labelP')}
                // focusSpan={'focusSpan'}
                callback={userNameOnChange}
            />
            <div className="forgot_psw_link">
                <LinkCustom
                    cssCustom="a_custom"
                    paths={paths.NOTFOUND}
                    nameLink={t("pd")}
                />
                {/* <a href="#">{t("pd")}?</a> */}
            </div>
            <Button
                callback={loginBtn(paths.HOMEPAGE)}
                nameBtn={t("login")}
                cssCustom={'btn_custom'}

            />
            <div style={{ paddingTop: 54, paddingBottom: 20, textAlign: "center" }}>
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
            <div style={{ paddingTop: 155, textAlign: "center" }}>
                {t("signUp")}
            </div>
            <div className="forgot_psw_link2" style={{ textAlign: "center" }}>
                <LinkCustom
                paths={paths.REGISTRATION}
                nameLink={t("sign")}
                />
            </div>

            <ChangeLeng />
        </div>

    )
}

export default Login

