import React, {useEffect, useState} from 'react';
import {Navigate, useParams} from "react-router-dom";
import Unos from "../components/admin/forme/components/Unos";
import DugmeLink from "../components/DugmeLink";
import Dugme from "../components/Dugme";
import axios from "axios";

function Profil(props) {


    const [user, setUser] = useState(null);
    const handleInput = (e) => {
        console.log(user)
        e.persist();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    let id = useParams();
    useEffect(() => {
        if (user === null && id.id !== undefined) {
            axios.get('http://localhost:8000/api/user/' + id.id, {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
                }
            })
                .then((res) => {
                    console.log(res.data)
                    if (res.data.success) {
                        setUser(res.data.user)
                    } else {
                        window.alert(res.data.message)
                        return window.location.href = '/';
                    }
                }).catch((e) => {
            })
        }
    })

    function sacuvaj() {
        axios.put('http://localhost:8000/api/user/'.concat(user.id), user, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token')
            }
        })
            .then((res) => {
                console.log(res.data)
                    alert(res.data.message)
                if (res.data.success) {
                    return window.location.href = '/';
                }
            }).catch((e) => {
        })
    }

    if (window.sessionStorage.getItem('userName') == null) {
        return <Navigate to='/login'/>
    }
    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Moj nalog</h2>
                        </div>
                    </div>
                </div>

                <div className="aFormPageContainerBody">
                    <div className="forma korisnikForm">
                        <Unos nameUnos={"username"} nameLabel={"Username"} handleInput={handleInput}
                              vrednost={user == null ? '' : user.username}/>
                        <Unos nameUnos={"password"} nameLabel={"Password"}
                              tip={"password"} handleInput={handleInput}/>
                        <Unos nameUnos={"ime"} nameLabel={"Ime"} handleInput={handleInput}
                              vrednost={user == null ? '' : user.ime}/>
                        <Unos nameUnos={"prezime"} nameLabel={"Prezime"} handleInput={handleInput}
                              vrednost={user == null ? '' : user.prezime}/>
                        <Unos nameUnos={"datumRodjenja"} nameLabel={"Datum rodjenja"} handleInput={handleInput}
                              vrednost={user == null ? '' : user.datumRodjenja} tip="date"/>
                        <Unos nameUnos={"adresa"} nameLabel={"Adresa"}
                              vrednost={user == null ? '' : user.adresa} handleInput={handleInput}/>
                        <div className="form-btn-group">
                            <DugmeLink putanja={"/"} tekst={"Otkazi"}/>
                            <Dugme tekst={"Sacuvaj"} funkcija={sacuvaj}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Profil;