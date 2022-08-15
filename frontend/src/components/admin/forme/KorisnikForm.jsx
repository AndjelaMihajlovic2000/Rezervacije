import React from 'react';
import Unos from "./components/Unos";
import UnosSelect from "./components/UnosSelect";
import DugmeLink from "../../DugmeLink";
import Dugme from "../../Dugme";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function KorisnikForm() {
    const [uloge, setUloge] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (uloge == null) {
            axios.get('http://localhost:8000/api/user-role',{
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                }
            })
                .then((res) => {
                    setUloge(res.data.user_roles)
                    console.log((res.data.user_roles))
                }).catch((e) => {
            })
        }
    }, [uloge]);

    const [korisnikInput, setKorisnikInput] = useState({
        username: "",
        password: "",
        ime: "",
        prezime: "",
        datumRodjenja: "",
        adresa: "",
        userRole: ""
    });

    const handleInput = (e) => {
        e.persist();
        setKorisnikInput({
            ...korisnikInput,
            [e.target.name]: e.target.value,
        });
        console.log(korisnikInput)
    };

    function dodajKorisnika() {

        axios.post('http://localhost:8000/api/kreirajNalog', korisnikInput, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
            }
        })
            .then((res) => {
                console.log((res.data))

                alert((res.data.message))
                console.log((res.data.message))
                if (res.data.success) {
                    navigate('/admin/korisnici')
                }
            }).catch((e) => {
        })

    }

    return (
        <div className="forma korisnikForm">
            <Unos nameUnos={"username"} nameLabel={"Username"} handleInput={handleInput}/>
            <Unos nameUnos={"password"} nameLabel={"Password"} tip={"password"} handleInput={handleInput}/>
            <Unos nameUnos={"ime"} nameLabel={"Ime"} handleInput={handleInput}/>
            <Unos nameUnos={"prezime"} nameLabel={"Prezime"} handleInput={handleInput}/>
            <Unos nameUnos={"datumRodjenja"} tip={"date"} nameLabel={"Datum rodjenja"} handleInput={handleInput}/>
            <Unos nameUnos={"adresa"} nameLabel={"Adresa"} handleInput={handleInput}/>
            {window.sessionStorage.getItem('userRole') === 'admin'
                ? <>
                    <UnosSelect nameUnos={"userRole"} nameLabel={"Korisnicka uloga"} opcije={uloge} handleInput={handleInput}/>
                </> :
                <></>}
            <div className="form-btn-group">
                {window.sessionStorage.getItem('userRole') === 'admin' ?
                    <DugmeLink putanja={"/admin/korisnici"} tekst={"Otkazi"}/>
                    :
                    <DugmeLink putanja={"/"} tekst={"Otkazi"}/>
                }
                <Dugme tekst={"Sacuvaj"} funkcija={dodajKorisnika}/>
            </div>
        </div>
    );
}

export default KorisnikForm;