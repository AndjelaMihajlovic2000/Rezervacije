import React from 'react';
import Unos from "./components/Unos";
import UnosTextArea from "./components/UnosTextArea";
import Dugme from "../../Dugme";
import DugmeLink from "../../DugmeLink";

function RestoranForm() {
    return (
        <div className="forma restoranForm">
            <Unos nameUnos={"naziv"} nameLabel={"Naziv restorana"}/>
            <Unos nameUnos={"adresa"} nameLabel={"Adresa"}/>
            <Unos nameUnos={"radnoVreme"} nameLabel={"Radno vreme"}/>
            <Unos nameUnos={"telefon"} nameLabel={"Telefon"}/>
            <Unos nameUnos={"email"} nameLabel={"Email"}/>
            <Unos nameUnos={"brojZvezdica"} nameLabel={"Broj zvezdica"}/>
            <UnosTextArea nameUnos={"opis"} nameLabel={"Opis"}/>
            <div className="form-btn-group">
                <DugmeLink putanja={"/admin/restorani"} tekst={"Otkazi"}/>
                <Dugme tekst={"Sacuvaj restoran"}/>
            </div>
        </div>
    );
}

export default RestoranForm;