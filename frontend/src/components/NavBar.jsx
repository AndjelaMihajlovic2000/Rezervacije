import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import LinkKartica from "./LinkKartica";

function NavBar() {

    function logout(e) {
        e.preventDefault()
        axios.post('http://localhost:8000/api/logout', {}, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
            }
        })
            .then((res) => {
                console.log(res.data)
                if (res.data.success) {
                    alert(res.data.message)
                    window.sessionStorage.clear()
                    window.location.href = '/'
                }
            }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand" to="/">Rezervacija mesta</Link>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkKartica putanja="/" tekst="Početna"/>
                            </li>
                            {window.sessionStorage.getItem('userRole') === 'admin' ?
                                <li className="nav-item">
                                    <LinkKartica putanja="/admin" tekst="Admin"/>
                                </li> :
                                <></>}
                            <li className="nav-item">
                                <LinkKartica putanja="/moje-rezervacije" tekst="Moje rezervacije"/>
                            </li>
                            {window.sessionStorage.getItem('userID') == null ?
                                <>
                                    <li className="nav-item">
                                        <LinkKartica putanja="/register" tekst="Napravi nalog"/>
                                    </li>
                                    <li className="nav-item">
                                        <LinkKartica putanja="/login" tekst="Uloguj se"/>
                                    </li>
                                </> : <>
                                    <li className="nav-item">
                                        <LinkKartica
                                            putanja={"/profil/".concat(window.sessionStorage.getItem('userID'))}
                                            tekst={"Moj nalog"}/>
                                    </li>
                                    <li className="nav-item">
                                        <div>
                                            <p style={{cursor: "pointer"}} onClick={logout}
                                               className="nav-link active">Odjavi se</p>
                                        </div>
                                    </li>
                                </>}

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
