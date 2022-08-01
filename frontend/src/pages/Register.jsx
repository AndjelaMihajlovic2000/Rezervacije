import React from 'react';
import "../styles/register.css";
import RegisterForm from "../components/RegisterForm";

function Register({}) {
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