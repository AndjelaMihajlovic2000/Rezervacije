import React, {useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

function LoginForm() {

    const [loginInput, setLogin] = useState({
        username: "",
        password: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({
            ...loginInput,
            [e.target.name]: e.target.value,
        });


    };

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(loginInput)
        axios.post('http://localhost:8000/api/login', loginInput)
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    console.log(res.data)
                    window.sessionStorage.setItem('auth_token', res.data.access_token);
                    window.sessionStorage.setItem('userRole', res.data.user_type[0].slug);
                    window.sessionStorage.setItem('userID', res.data.user_id);
                    window.sessionStorage.setItem('userName', res.data.user_name);
                    window.location.href='/';
                }
            }).catch((e) => {
            window.alert('Problem sa prijavom')
            console.log(e)
        })
    };

    return (
        <form onSubmit={handleLogin} className="loginForm">
            <h2>Prijavite se</h2>
            <div className="mb-3">
                <label htmlFor="loginUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="loginUsername" name="username"
                       placeholder="pera99"
                onChange={handleInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword" name="password"
                       placeholder="*******"
                       onChange={handleInput}/>
            </div>
            <div className="mb-3 d-flex justify-content-between">
                <div>
                    <Link to="/register">Nemas nalog?</Link>
                </div>
                <div>
                    <button type={"submit"} className="loginBtn">Prijavi se</button>
                </div>
            </div>

        </form>
    );
}

export default LoginForm;