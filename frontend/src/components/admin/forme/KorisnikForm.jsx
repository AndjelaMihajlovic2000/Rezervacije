import React from 'react';
import Unos from "./components/Unos";
import UnosSelect from "./components/UnosSelect";
import UnosTextArea from "./components/UnosTextArea";
import DugmeLink from "../../DugmeLink";
import Dugme from "../../Dugme";
import {useEffect, useState} from "react";
import axios from "axios";

function KorisnikForm(props) {
    const [uloge, setUloge] = useState(null);

    useEffect(() => {
        if (uloge == null) {
            axios.get('http://localhost:8000/api/user-role')
                .then((res) => {
                    setUloge(res.data.user_roles)
                    console.log((res.data.user_roles))
                }).catch((e) => {
            })
        }
    }, [uloge])
    return (
        <div className="forma korisnikForm">
            <Unos nameUnos={"username"} nameLabel={"Username"}/>
            <Unos nameUnos={"password"} nameLabel={"Password"}/>
            <Unos nameUnos={"ime"} nameLabel={"Ime"}/>
            <Unos nameUnos={"prezime"} nameLabel={"Prezime"}/>
            <Unos nameUnos={"datumRodjenja"} nameLabel={"Datum rodjenja"}/>
            <Unos nameUnos={"adresa"} nameLabel={"Adresa"}/>
            <UnosSelect nameUnos={"userRole"} nameLabel={"Korisnicka uloga"} opcije={uloge}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/korisnici"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj"}/>
            </div>
        </div>
    );
}

export default KorisnikForm;