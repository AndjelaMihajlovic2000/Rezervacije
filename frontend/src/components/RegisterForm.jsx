import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function RegisterForm() {

    const [registerInput, setRegister] = useState({
        username: "",
        password: "",
        ime: "",
        prezime: "",
        datumRodjenja: "",
        adresa: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({
            ...registerInput,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(registerInput)
        axios.post('http://localhost:8000/api/register',registerInput)
            .then((res)=>{
                console.log(res.data)
                if(res.data.success){
                    window.sessionStorage.setItem('auth_token', res.data.access_token);
                    window.sessionStorage.setItem('userRole', res.data.user_type);
                    window.sessionStorage.setItem('userID', res.data.user_id);
                    window.sessionStorage.setItem('userName', res.data.user_name);
                    window.location.href='/';
                }else{
                    alert('Greska !')
                }
            }).catch((e)=>{
            console.log(e)
        })
    };

    return (
        <form onSubmit={handleRegister} className="registerForm">
            <h2>Napravite nalog</h2>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" name="username"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="ime" className="form-label">Ime</label>
                <input type="text" className="form-control" id="ime" name="ime"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="prezime" className="form-label">Prezime</label>
                <input type="text" className="form-control" id="prezime" name="prezime"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="datumRodjenja" className="form-label">Datum rodjenja</label>
                <input type="date" className="form-control" id="datumRodjenja" name="datumRodjenja"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="adresa" className="form-label">Adresa</label>
                <input type="text" className="form-control" id="adresa" name="adresa"
                       placeholder=""
                       onChange={handleInput}/>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <Link to="/login">Vec imas nalog?</Link>
                </div>
                <div>
                    <button type="submit" className="loginBtn">Registruj se</button>
                </div>
            </div>

        </form>
    );
}

export default RegisterForm;