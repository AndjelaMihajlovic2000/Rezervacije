import React, {useState} from 'react';
import "../styles/page.css";
import "../styles/restoran.css";
import MestoCard from "../components/MestoCard";
import RezervacijaModal from "../components/RezervacijaModal";
import {Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function Restoran() {

    const [modalShow, setModalShow] = useState(false);

    let params = useParams();

    const [restoran, setRestoran] = useState(null);
    const [mesta, setMesta] = useState(null);
    const [mesto, setMesto] = useState(null);
    useEffect(() => {
        if (restoran === null && mesta === null) {
            axios.get('http://localhost:8000/api/restoran/'.concat(params.id))
                .then((res) => {
                    console.log(res.data)
                    setRestoran(res.data.restoran)
                    setMesta(res.data.mesta)
                    console.log(res.data.mesta)
                }).catch((e) => {
                console.log(e)
            })
        }
    }, [restoran, mesta, params.id])

    function prikaziModal(mesto) {
        setModalShow(true);
        setMesto(mesto);
    }

    if (window.sessionStorage.getItem('userName') == null) {
        return <Navigate to='/login'/>
    }

    return (
        <>
            <div className="page">
                <div className="pageContainer">

                    <div className="restoranHead container">
                        <div className={"restoranInfoWrapper"}>
                            <div className={"restoranInfoDiv"}>
                                <div className={"restoranInfoNaslov"}>
                                    <h2>{restoran != null ? restoran.naziv : ""}</h2>
                                </div>
                                <div className={"restoranInfoBody"}>
                                    <div className="">Radno
                                        vreme: {restoran != null ? restoran.radnoVreme : ""}</div>
                                    <div className="">
                                        Adresa restorana: {restoran != null ? restoran.adresa : ""}
                                    </div>
                                    <div className="">
                                        Email: {restoran != null ? restoran.email : ""}
                                    </div>
                                    <div className="">
                                        Kontakt telefon: {restoran != null ? restoran.adresa : ""}
                                    </div>
                                    <div className="">
                                        Broj zvezdica: {restoran != null ? restoran.brojZvezdica : ""}
                                    </div>
                                    <div>
                                        Opis: {restoran != null ? restoran.opis : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="restoranPageContainerBody">
                        <div className="restoranPageHeaderContent">
                            <h3>Odaberite svoje mesto</h3>
                        </div>
                        <div className="restoranPageBodyContent">
                            {mesta === null ? <></> : Object.keys(mesta).map(( index) => (
                                <MestoCard key={index} mesto={mesta[index]} prikaziModal={prikaziModal}/>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <RezervacijaModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                    setMesto(null);
                }}
                mesto={mesto}
            />
        </>
    );
}

export default Restoran;