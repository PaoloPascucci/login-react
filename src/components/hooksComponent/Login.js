import React from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox';
import Button from '../funcComponent/button/Button'


import { useNavigate } from "react-router";



const Login = () => {
    const navigate = useNavigate();
    const userNameOnChange = (e) => {
        console.log(e)
    }
    const loginBtn = () =>{
        console.log('clicked')
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <InputBox
                box_inputCustom={'box_inputCustom'}
                labelName={'Username'}
                cssCustomLabel={'label_custom_login'}
                type={'text'}
                cssCustonInput={'Input_custom_login'}
                placeholder={'Type your username'}
                focusSpan={'focusSpan'}
                callback={userNameOnChange}
            />

            <InputBox
                box_inputCustom={'box_inputCustom_password'}
                labelName={'Password'}
                cssCustomLabel={'label_custom_login'}
                type={'password'}
                cssCustonInput={'Input_custom_login'}
                placeholder={'Type your username'}
                focusSpan={'focusSpan'}
                callback={userNameOnChange}
            />
            <div className="forgot_psw_link">
                <a href="#">Forgot password?</a>
            </div>
            <Button 
                callback={loginBtn}
                nameBtn={'LOGIN'}
                cssCustom={'btn_custom'}
            
            />
            <div>
                Or vsdjkvndsjkvn
            </div>
            <div>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <div>
                Or vsdjkvndsjkvn
            </div>
            <div>
                <a href="#"></a>
            </div>
        </div>

    )
}

export default Login