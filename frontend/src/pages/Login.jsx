import React from 'react';
import "../styles/login.css";
import LoginForm from "../components/LoginForm";
import {Navigate} from "react-router-dom";


function Login() {

    if (window.sessionStorage.getItem('userName') != null) {
        return <Navigate to='/'/>
    }

    return (
        <div className="loginPage container">
            <div className="loginPageContainer row">
                <div className="loginImgContainer col-4">
                    <div className="loginImg" />
                </div>
                <div className="loginFormContainer col-7">
                    <LoginForm />
                </div>
            </div>

        </div>
    );
}

export default Login;