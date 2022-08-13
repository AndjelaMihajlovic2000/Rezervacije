import React from 'react';
import {Navigate} from "react-router-dom";
import Unos from "../components/admin/forme/components/Unos";
import DugmeLink from "../components/DugmeLink";
import Dugme from "../components/Dugme";

function Profil(props) {
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
                        <Unos nameUnos={"username"} nameLabel={"Username"}/>
                        <Unos nameUnos={"password"} nameLabel={"Password"}/>
                        <Unos nameUnos={"ime"} nameLabel={"Ime"}/>
                        <Unos nameUnos={"prezime"} nameLabel={"Prezime"}/>
                        <Unos nameUnos={"datumRodjenja"} nameLabel={"Datum rodjenja"}/>
                        <Unos nameUnos={"adresa"} nameLabel={"Adresa"}/>
                        <div className="form-btn-group">
                            <DugmeLink putanja={"/"} tekst={"Otkazi"}/>
                            <Dugme tekst={"Sacuvaj"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Profil;