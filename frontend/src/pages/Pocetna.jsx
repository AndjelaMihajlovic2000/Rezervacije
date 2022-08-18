import React, {useEffect, useState} from 'react';
import "../styles/page.css";
import "../styles/restoranCard.css"
import axios from "axios";
import RestoranCard from "../components/RestoranCard";
import {Navigate} from "react-router-dom";

function Pocetna() {


    const [restorani, setRestorani] = useState(null);
    useEffect(() => {
        console.log("All posts" + 123)
        if (restorani === null) {
            axios.get('http://localhost:8000/api/restoran')
                .then((res) => {
                    setRestorani(res.data.restorani)
                }).catch((e) => {
            })
        }
    }, [restorani])

    if (window.sessionStorage.getItem('userName') == null) {
        return <Navigate to='/login'/>
    }

    return (
        <div className="page">
            <div className="pageContainer">

                <div className="pageContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Pronadji omiljeni restoran</h2>
                        </div>
                        <div className="pageHeadDivs col-10 d-flex justify-content-evenly">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Unesi naziv restorana"
                                       aria-label="Unesi naziv restorana" aria-describedby="basic-addon2"/>
                            </div>
                            <div>
                                <button className="btn-96"><span>Sortiraj</span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pageContainerBody container">
                    <div className="row g-2 pageBodyContent">

                        {restorani === null ? <></> : restorani.map((restoran) => (
                            <RestoranCard key={restoran.id} restoran={restoran}/>
                        ))}



                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pocetna;