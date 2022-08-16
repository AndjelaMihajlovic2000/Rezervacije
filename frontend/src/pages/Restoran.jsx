import React, {useState} from 'react';
import "../styles/page.css";
import "../styles/restoran.css";
import MestoCard from "../components/MestoCard";
import RezervacijaModal from "../components/RezervacijaModal";
import {Navigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

function Restoran() {

    const stil = {width: "30%"};
    const [modalShow, setModalShow] = useState(false);

    let params = useParams();

    const [restoran, setRestoran] = useState(null);
    const [mesta, setMesta] = useState(null);
    const [mesto, setMesto] = useState(null);
    useEffect(() => {
        if (restoran === null && mesta ===null) {
            axios.get('http://localhost:8000/api/restoran/'.concat(params.id))
                .then((res) => {
                    console.log(res.data)
                    setRestoran(res.data.restoran)
                    setMesta(res.data.mesta)
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

                    <div className="pageContainerHead container">
                        <div className="row d-flex justify-content-evenly">
                            <div className="col-4">
                                <h2>Restoran ime</h2>
                            </div>
                            <div className="card" style={stil}>
                                <div className="card-body">
                                    <h5 className="card-title">Light card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up
                                        the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="restoranPageContainerBody">
                        <div className="restoranPageHeaderContent">
                            <h3>Rezervisite mesto</h3>
                        </div>
                        <div className="restoranPageBodyContent">
                            {mesta !== null ? mesta.map((e,index) => (
                                <MestoCard key={index} mesto={e} prikaziModal={prikaziModal}/>
                            )):<></>}
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