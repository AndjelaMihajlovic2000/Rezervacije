import React, {useEffect, useState} from 'react';
import "../styles/aPages.css";
import TabelaRestorana from "../components/admin/TabelaRestorana";
import axios from "axios";
import {Link, Navigate} from "react-router-dom";
import DugmeLink from "../components/DugmeLink";

function ARestorani(props) {

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

    if (window.sessionStorage.getItem('userName') == null
        || window.sessionStorage.getItem('userRole') != 'admin'
        || window.sessionStorage.getItem('userRole') != 'zaposleni') {
        return <Navigate to='/login'/>
    }

    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Restorani</h2>
                        </div>
                        <div className="col-2">
                            <DugmeLink putanja={"/admin/unos/restoran"} tekst={"Dodaj novi restoran"}/>
                        </div>
                    </div>
                </div>

                <div className="aRestoraniPageContainerBody">
                    <TabelaRestorana restorani={restorani}/>
                </div>

            </div>
        </div>


    );
}

export default ARestorani;