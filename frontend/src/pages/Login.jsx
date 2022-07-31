import React from 'react';
import "../styles/login.css";
import LoginForm from "../components/LoginForm";


function Login() {
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