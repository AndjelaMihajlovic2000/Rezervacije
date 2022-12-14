import React, {useState} from 'react';
import "../styles/admin.css";
import StatsCard from "../components/admin/StatsCard";
import AdminChart from "../components/admin/AdminChart";
import {Link, Navigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Dugme from "../components/Dugme";

function Admin() {

    const [panelData, setPanelData] = useState(null);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (panelData == null) {
            axios.get('http://localhost:8000/api/adminData', {
                headers: {
                    'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
                    'Content-Type': 'application/json'

                }
            })
                .then((res) => {
                    setPanelData(res.data)
                    setChartData(res.data.grafikData[0])
                    console.log((res.data))
                }).catch((e) => {
            })
        }
    }, [panelData])

    if (window.sessionStorage.getItem('userName') == null
        || window.sessionStorage.getItem('userRole') === 'gost') {
        return <Navigate to='/'/>
    }

    function downloadReport() {
        axios.get('http://localhost:8000/api/getReport', {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),

            },
            responseType: 'blob'
        })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Izvestaj o radu.docx');
                document.body.appendChild(link);
                link.click();

            }).catch((e) => {
        })
    }

    return (
        <div className="adminPage">
            <div className="adminPageContainer">

                <div className="adminPageContainerBody ">
                    <div className="adminPageContainerBodyHeader row d-flex justify-content-around">
                        <div className="col-4">
                            <h3>Admin panel</h3>
                        </div>
                        <div className="col-2">
                            <Dugme tekst={"Download izvestaj"} funkcija={downloadReport}/>
                        </div>
                    </div>

                    <div className="container pt-5">
                        <div className="row align-items-stretch">
                            <StatsCard naslov={"Ukupan broj restorana"} opis={"Restoran"}
                                       vrednost={panelData === null ? "" : panelData.brojRestorana}/>
                            <StatsCard naslov={"Trenutno slobodna mesta"} opis={"Mesta"}
                                       vrednost={panelData === null ? "" : panelData.brojSlobodnihMesta}/>
                            <StatsCard naslov={"Trenutno zauzeta mesta"} opis={"Mesta"}
                                       vrednost={panelData === null ? "" : panelData.brojZauzetihMesta}/>
                            <StatsCard naslov={"Ukupan broj rezevacija"} opis={"Rezevacije"}
                                       vrednost={panelData === null ? "" : panelData.brojRezervacija}/>
                            <StatsCard naslov={"Registrovani korisnici"} opis={"Korisnici"}
                                       vrednost={panelData === null ? "" : panelData.brojKorisnika}/>
                            <StatsCard naslov={"Trenutno aktivni korisnici"} opis={"Korisnici"}
                                       vrednost={panelData === null ? "" : panelData.aktivniKorisnici}/>
                        </div>
                    </div>
                    <div className="adminPageContainerBodyGraphWrapper">
                        <AdminChart className="adminGraph" data={chartData}/>
                        <h4> Broj rezervacija na dnevnom nivou</h4>
                    </div>
                </div>

                <div className="adminPageContainerMenu container">
                    <div className="row">
                        <div className="col">
                            <h3>Menu</h3>
                        </div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col "><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/restorani">Restorani</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/mesta">Mesta</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/rezervacije">Rezervacije</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/korisnici">Korisnici</Link></div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Admin;