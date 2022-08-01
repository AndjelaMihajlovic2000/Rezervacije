import React from 'react';
import {Link} from "react-router-dom";

function LoginForm({}) {
    return (
        <div className="loginForm">
            <h2>Prijavite se</h2>
            <div className="mb-3">
                <label htmlFor="loginUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="loginUsername"
                       placeholder="pera99"/>
            </div>
            <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword"
                       placeholder="*******"/>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <Link to="/register">Nemas nalog?</Link>
                </div>
                <div>
                    <button className="loginBtn">Prijavi se</button>
                </div>
            </div>

        </div>
    );
}

export default LoginForm;