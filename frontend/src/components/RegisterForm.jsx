import React from 'react';
import {Link} from "react-router-dom";

function RegisterForm() {
    return (
        <div className="registerForm">
            <h2>Napravite nalog</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"
                       placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"
                       placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="ime" className="form-label">Ime</label>
                <input type="text" className="form-control" id="ime"
                       placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="prezime" className="form-label">Prezime</label>
                <input type="text" className="form-control" id="prezime"
                       placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="datumRodjenja" className="form-label">Datum rodjenja</label>
                <input type="date" className="form-control" id="datumRodjenja"
                       placeholder=""/>
            </div>
            <div className="mb-3">
                <label htmlFor="adresa" className="form-label">Adresa</label>
                <input type="text" className="form-control" id="adresa"
                       placeholder=""/>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <Link to="/login">Vec imas nalog?</Link>
                </div>
                <div>
                    <button className="loginBtn">Registruj se</button>
                </div>
            </div>

        </div>
    );
}

export default RegisterForm;