import React from 'react';
import "../styles/register.css";
import RegisterForm from "../components/RegisterForm";
import {Navigate} from "react-router-dom";

function Register() {

    if (window.sessionStorage.getItem('userName') != null) {
        return <Navigate to='/'/>
    }

    return (
        <div className="registerPage container">
            <div className="registerPageContainer row">
                <div className="loginFormContainer col-7">
                    <RegisterForm/>
                </div>
                <div className="registerImgContainer col-4">
                    <div className="registerImg"/>
                </div>
            </div>
        </div>
    );
}

export default Register;