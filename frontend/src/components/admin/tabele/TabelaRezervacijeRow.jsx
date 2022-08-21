import React from 'react';
import RezervacijaViewModal from "../../RezervacijaViewModal";
import {useState} from "react";
import axios from "axios";

function TabelaRezervacijeRow({rezervacija}) {

    const [modalShow, setModalShow] = useState(false);

    function prikaziRezervaciju() {
            setModalShow(true);
    }

    function obrisiRezervaciju(){
        axios.delete('http://localhost:8000/api/rezervacija/' + rezervacija.id, {
            headers: {
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('auth_token'),
            }
        })
            .then((res) => {
                alert(res.data.message)
                if (res.data.success) {
                    window.location.reload()
                }

            }).catch((e) => {
            alert('Nije moguce obrisati rezervaciju')
        })
    }

    function downloadRezervaciju(){
        axios.get('http://localhost:8000/api/printRezervacija/'+rezervacija.id, {
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
                link.setAttribute('download', 'Rezervacija -'+rezervacija.userID.ime+' '+rezervacija.userID.prezime+'.docx');
                document.body.appendChild(link);
                link.click();

            }).catch((e) => {
        })
    }

    return (
        <>
            <tr>
                <th scope="row" onClick={prikaziRezervaciju}>{rezervacija.mestoID.naziv}</th>
                <td onClick={prikaziRezervaciju}>{rezervacija.mestoID.restoranID.naziv}</td>
                <td onClick={prikaziRezervaciju}>{rezervacija.mestoID.restoranID.adresa}</td>
                {window.sessionStorage.getItem('userRole') === 'gost' ? <></> :
                    <td onClick={prikaziRezervaciju}>{rezervacija.userID.ime} {rezervacija.userID.prezime}</td>}
                <td onClick={prikaziRezervaciju}>{rezervacija.datumIVreme}</td>
                <td>
                    <button className="btn  btn-success" onClick={downloadRezervaciju}>Download</button>
                </td>
                <td>
                    <button className="btn  btn-danger" onClick={obrisiRezervaciju}>Obrisi</button>
                </td>
            </tr>
            <RezervacijaViewModal
                show={modalShow}
                onHide={() => {
                    setModalShow(false);
                }}
                rezervacija={rezervacija}
            />
        </>
    );
}

export default TabelaRezervacijeRow;