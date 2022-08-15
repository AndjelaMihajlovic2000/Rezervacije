import React from 'react';
import Unos from "./components/Unos";
import UnosTextArea from "./components/UnosTextArea";
import Dugme from "../../Dugme";
import DugmeLink from "../../DugmeLink";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RestoranForm() {

    const navigate = useNavigate();

    const [restoranInput, setRestoranInput] = useState({
        naziv: "",
        adresa: "",
        radnoVreme: "",
        telefon: "",
        email: "",
        brojZvezdica: "",
        opis: "",
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRestoranInput({
            ...restoranInput,
            [e.target.name]: e.target.value,
        });
        console.log(restoranInput)
    };


    function dodajRestoran() {

        axios.post('http://localhost:8000/api/restoran', restoranInput, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
            }
        })
            .then((res) => {
                console.log((res.data))

                alert((res.data.message))
                console.log((res.data.message))
                if (res.data.success) {
                    navigate('/admin/restorani')
                }
            }).catch((e) => {
        })

    }

    return (
        <div className="forma restoranForm">
            <Unos nameUnos={"naziv"} nameLabel={"Naziv restorana"} handleInput={handleInput}/>
            <Unos nameUnos={"adresa"} nameLabel={"Adresa"} handleInput={handleInput}/>
            <Unos nameUnos={"radnoVreme"} nameLabel={"Radno vreme"} handleInput={handleInput}/>
            <Unos nameUnos={"telefon"} nameLabel={"Telefon"} handleInput={handleInput}/>
            <Unos nameUnos={"email"} nameLabel={"Email"} handleInput={handleInput}/>
            <Unos nameUnos={"brojZvezdica"} nameLabel={"Broj zvezdica"} handleInput={handleInput}/>
            <UnosTextArea nameUnos={"opis"} nameLabel={"Opis"} handleInput={handleInput}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/restorani"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj restoran"} funkcija={dodajRestoran}/>
            </div>
        </div>
    );
}

export default RestoranForm;