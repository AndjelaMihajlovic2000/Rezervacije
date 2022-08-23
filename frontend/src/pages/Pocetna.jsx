import React, {useEffect, useState} from 'react';
import "../styles/page.css";
import "../styles/restoranCard.css"
import axios from "axios";
import RestoranCard from "../components/RestoranCard";
import {Navigate} from "react-router-dom";
import {FcSearch} from "react-icons/fc"

function Pocetna() {


    const [restorani, setRestorani] = useState(null);
    const [restoraniView, setRestoraniView] = useState(null);
    useEffect(() => {
        console.log("All posts" + 123)
        if (restorani === null) {
            axios.get('http://localhost:8000/api/restoran')
                .then((res) => {
                    setRestorani(res.data.restorani)
                    setRestoraniView(res.data.restorani)
                }).catch((e) => {
            })
        }
    }, [restorani])

    const [vreme, setVreme] = useState(null);
    useEffect(() => {
        console.log("Weather")
        if (vreme === null) {
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&appid=1117016046b7aabe079a554097370528')
                .then((res) => {
                    console.log(res.data)
                    setVreme(res.data)
                }).catch((e) => {
            })
        }
    }, [vreme])

    const [grad, setGrad] = useState({
        nazivGrada: ""
    })

    if (window.sessionStorage.getItem('userName') == null) {
        return <Navigate to='/login'/>
    }

    function pretraga(e) {
        let temp = [];
        restorani.forEach((restoran) => {
            if (restoran.naziv.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                temp.push(restoran)
            }
        })
        setRestoraniView(temp);
    }

    function hanleInputGrad(e) {
        e.persist();
        setGrad({
            ...grad,
            [e.target.name]: e.target.value,
        });
    }

    function getVremenskaProgonza() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + grad.nazivGrada + '&units=metric&appid=1117016046b7aabe079a554097370528')
            .then((res) => {
                // console.log(res.data)
                setVreme(res.data)
            }).catch((e) => {
            alert('Ne mozemo dobiti podatke za trazeni grad!')
        })
    }

    return (
        <div className="page">
            <div className="pageContainer">

                <div className="pageContainerHead container">
                    <div className="row d-flex justify-content-around">
                        <div className="col-5">
                            <h2>Pronadji omiljeni restoran</h2>
                        </div>
                        <div className="pageHeadDivs col-10">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Unesi naziv restorana"
                                       aria-label="Unesi naziv restorana" aria-describedby="basic-addon2"
                                       onChange={pretraga}/>
                            </div>
                        </div>
                        <div className="pageHeadDivs col-5">
                            <div className={"weatherDivInput"}>
                                <input type="text" className="form-control weatherInputField"
                                       placeholder="Unesi naziv grada"
                                       aria-label="Unesi naziv grada" aria-describedby="basic-addon2"
                                       onChange={hanleInputGrad} name={"nazivGrada"}/>
                                <button onClick={getVremenskaProgonza}><FcSearch/></button>
                            </div>
                            <div className="weatherDiv">
                                Grad: {vreme == null ? "" : vreme.name},
                                temperatura:{vreme == null ? "" : vreme.main.temp}C
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pageContainerBody container">
                    <div className="row g-3 pageBodyContent">

                        {restoraniView === null ? <></> : restoraniView.map((restoran) => (
                            <RestoranCard key={restoran.id} restoran={restoran}/>
                        ))}


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pocetna;