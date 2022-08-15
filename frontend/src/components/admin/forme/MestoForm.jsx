import React from 'react';
import Unos from "./components/Unos";
import UnosTextArea from "./components/UnosTextArea";
import DugmeLink from "../../DugmeLink";
import Dugme from "../../Dugme";
import UnosSelect from "./components/UnosSelect";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function MestoForm() {
    const [restorani, setRestorani] = useState(null);

    useEffect(() => {
        if (restorani == null) {
            axios.get('http://localhost:8000/api/restoran')
                .then((res) => {
                    setRestorani(res.data.restorani)
                    console.log((res.data.restorani))
                }).catch((e) => {
            })
        }
    }, [restorani])

    const navigate = useNavigate();

    const [mestoInput, setMestoInput] = useState({
        naziv: "",
        brojStolica: "",
        restoranID: "",
        opis: ""
    });

    const handleInput = (e) => {
        e.persist();
        setMestoInput({
            ...mestoInput,
            [e.target.name]: e.target.value,
        });
        console.log(mestoInput)
    };


    function dodajMesto() {

        axios.post('http://localhost:8000/api/mesto', mestoInput, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
            }
        })
            .then((res) => {
                console.log((res.data))

                alert((res.data.message))
                console.log((res.data.message))
                if (res.data.success) {
                    navigate('/admin/mesta')
                }
            }).catch((e) => {
        })

    }

    return (
        <div className="forma mestoForm">
            <Unos nameUnos={"naziv"} nameLabel={"Naziv mesta"} handleInput={handleInput}/>
            <Unos nameUnos={"brojStolica"} nameLabel={"Broj stolica"} handleInput={handleInput}/>
            <UnosSelect nameUnos={"restoranID"} nameLabel={"Restoran"} opcije={restorani} handleInput={handleInput}/>
            <UnosTextArea nameUnos={"opis"} nameLabel={"Opis"} handleInput={handleInput}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/mesta"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj mesto"} funkcija={dodajMesto}/>
            </div>
        </div>
    );
}

export default MestoForm;