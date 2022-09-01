import React, {useEffect} from 'react';
import Unos from "./components/Unos";
import UnosTextArea from "./components/UnosTextArea";
import Dugme from "../../Dugme";
import DugmeLink from "../../DugmeLink";
import {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function RestoranForm() {

    const navigate = useNavigate();

    let parametri = useParams();
    useEffect(() => {
        console.log(parametri.id)
        if (restoranInput === null && parametri.id !== undefined) {
            axios.get('http://localhost:8000/api/restoran/' + parametri.id)
                .then((res) => {
                    console.log(res.data)
                    setRestoranInput(res.data.restoran)
                }).catch((e) => {
            })
        }
    })

    const [restoranInput, setRestoranInput] = useState(null);

    const handleInput = (e) => {
        e.persist();
        setRestoranInput({
            ...restoranInput,
            [e.target.name]: e.target.value,
        });
        console.log(restoranInput)
    };


    function dodajRestoran() {

        if (parametri.id!==null && parametri.id!==undefined) {
            axios.put('http://localhost:8000/api/restoran/'+parametri.id, restoranInput, {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                }
            })
                .then((res) => {
                    console.log((res.data))

                    console.log((res.data.message))
                    if (res.data.success) {
                        alert((res.data.message))
                        navigate('/admin/restorani')
                    } else {
                        alert((res.data.error))

                    }
                }).catch((e) => {
            })
        } else {
            axios.post('http://localhost:8000/api/restoran', restoranInput, {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                }
            })
                .then((res) => {
                    console.log((res.data))

                    console.log((res.data.message))
                    if (res.data.success) {
                        alert((res.data.message))
                        navigate('/admin/restorani')
                    } else {
                        alert((res.data.error))

                    }
                }).catch((e) => {
            })
        }
    }

    return (
        <div className="forma restoranForm">
            <Unos nameUnos={"naziv"} nameLabel={"Naziv restorana"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.naziv : ""}/>
            <Unos nameUnos={"adresa"} nameLabel={"Adresa"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.adresa : ""}/>
            <Unos nameUnos={"radnoVreme"} nameLabel={"Radno vreme"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.radnoVreme : ""}/>
            <Unos nameUnos={"telefon"} nameLabel={"Telefon"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.telefon : ""}/>
            <Unos nameUnos={"email"} nameLabel={"Email"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.email : ""}/>
            <Unos nameUnos={"brojZvezdica"} nameLabel={"Broj zvezdica"} handleInput={handleInput}
                  vrednost={restoranInput !== null ? restoranInput.brojZvezdica : ""}/>
            <UnosTextArea nameUnos={"opis"} nameLabel={"Opis"} handleInput={handleInput}
                          vrednost={restoranInput !== null ? restoranInput.opis : ""}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/restorani"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj restoran"} funkcija={dodajRestoran}/>
            </div>
        </div>
    );
}

export default RestoranForm;