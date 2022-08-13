import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";
import TabelaKorisnika from "../components/admin/TabelaKorisnika";
import DugmeLink from "../components/DugmeLink";

function AKorisnici(props) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (users == null) {
            axios.get('http://localhost:8000/api/user')
                .then((res) => {
                    setUsers(res.data.users)
                    console.log((res.data.users))
                }).catch((e) => {

            })
        }
    }, [users])

    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>Svi korisnici</h2>
                        </div>
                        <div className="col-2">
                            <DugmeLink tekst={"Kreiraj nalog novom korisniku"} putanja={"/admin/unos/korisnik"}/>
                        </div>
                    </div>
                </div>

                <div className="aRestoraniPageContainerBody">
                    <TabelaKorisnika  users={users}/>
                </div>

            </div>
        </div>
    );
}

export default AKorisnici;