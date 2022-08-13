import React from 'react';
import "../styles/aPages.css";
import TabelaMesta from "../components/admin/TabelaMesta";
import {useEffect, useState} from "react";
import axios from "axios";
import DugmeLink from "../components/DugmeLink";

function AMesta(props) {


    const [mesta, setMesta] = useState(null);

    useEffect(() => {
        if (mesta == null) {
            axios.get('http://localhost:8000/api/mesto')
                .then((res) => {
                    setMesta(res.data.mesta)
                    console.log((res.data.mesta))
                }).catch((e) => {
            })
        }
    }, [mesta])

    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Sva mesta</h2>
                        </div>
                        <div className="col-2">
                            <DugmeLink tekst={"Dodaj novo mesto"} putanja={"/admin/unos/mesto"}/>
                        </div>
                    </div>
                </div>

                <div className="aRestoraniPageContainerBody">
                <TabelaMesta  mesta={mesta}/>
                </div>

            </div>
        </div>

    );
}

export default AMesta;