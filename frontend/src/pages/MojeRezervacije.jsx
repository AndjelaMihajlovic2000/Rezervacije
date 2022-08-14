import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import TabelaRezervacija from "../components/admin/TabelaRezervacija";

function MojeRezervacije(props) {

    const [rezervacije, setRezervacije] = useState(null);

    useEffect(() => {
        if (rezervacije == null) {
            axios.get('http://localhost:8000/api/moje-rezervacije',{
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                }
            })
                .then((res) => {
                    setRezervacije(res.data.rezervacije)
                    console.log((res.data.rezervacije))
                }).catch((e) => {
            })
        }
    }, [rezervacije])


    if (window.sessionStorage.getItem('userName') == null) {
        return <Navigate to='/login'/>
    }

    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Moje rezervacije</h2>
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

export default MojeRezervacije;