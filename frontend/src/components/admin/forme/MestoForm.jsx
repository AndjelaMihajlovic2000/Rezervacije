import React from 'react';
import Unos from "./components/Unos";
import UnosTextArea from "./components/UnosTextArea";
import DugmeLink from "../../DugmeLink";
import Dugme from "../../Dugme";
import UnosSelect from "./components/UnosSelect";
import {useEffect, useState} from "react";
import axios from "axios";

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
    return (
        <div className="forma mestoForm">
            <Unos nameUnos={"naziv"} nameLabel={"Naziv mesta"}/>
            <Unos nameUnos={"brojStolica"} nameLabel={"Broj stolica"}/>
            <UnosSelect nameUnos={"restoranID"} nameLabel={"Restoran"} opcije={restorani}/>
            <UnosTextArea nameUnos={"opis"} nameLabel={"Opis"}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/mesta"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj mesto"}/>
            </div>
        </div>
    );
}

export default MestoForm;