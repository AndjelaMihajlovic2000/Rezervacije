import React from 'react';
import "../styles/page.css";
import RestoranCard from "../components/RestoranCard";

function Pocetna() {
    return (
        <div className="pocetnaPage">
            <div className="pocetnaContainer">

                <div className="pocetnaContainerHead container">
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
                                <button className="btn-96">
                                    <span>Pretraga</span>
                                </button>
                            </div>
                            <div>
                                <button className="btn-96"><span>Sortiraj</span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pocetnaContainerBody container">
                    <div className="row g-2 pageBodyContent">

                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>
                        <RestoranCard/>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pocetna;