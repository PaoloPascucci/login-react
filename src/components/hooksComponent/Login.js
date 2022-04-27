import React from "react";

// css 
import './Login.scss';

// import components 
import InputBox from '../funcComponent/inputBox/InputBox'


import { useNavigate } from "react-router";



const Login = () => {
    const navigate = useNavigate();
    const userNameOnChange = (e) => {
        console.log(e)
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <InputBox
                labelName={'Username'}
                cssCustomLabel={'label_custom_login'}
                type={'text'}
                cssCustonInput={'Input_custom_login'}
                placeholder={'Type your username'}
                callback={userNameOnChange}
            />
        </div>

    )
}

export default Login