import React from 'react';
import TabelaRezervacija from "../components/admin/TabelaRezervacija";
import {useEffect, useState} from "react";
import axios from "axios";

function ARezervacije(props) {


    const [rezervacije, setRezervacije] = useState(null);

    useEffect(() => {
        if (rezervacije == null) {
            axios.get('http://localhost:8000/api/rezervacija')
                .then((res) => {
                    setRezervacije(res.data.rezervacije)
                    console.log((res.data.rezervacije))
                }).catch((e) => {
            })
        }
    }, [rezervacije])

    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Sve rezervacije</h2>
                        </div>
                        <div className="col-2">
                            <button className="btn-96">
                                <span>Dodaj novu rezervaciju?</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="aRestoraniPageContainerBody">
                    <TabelaRezervacija  rezervacije={rezervacije}/>
                </div>

            </div>
        </div>
    );
}

export default ARezervacije;