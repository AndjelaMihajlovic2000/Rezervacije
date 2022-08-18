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

    return (
        <>
            <tr onClick={prikaziRezervaciju}>
                <th scope="row">{rezervacija.mestoID.naziv}</th>
                <td>{rezervacija.mestoID.restoranID.naziv}</td>
                <td>{rezervacija.mestoID.restoranID.adresa}</td>
                {window.sessionStorage.getItem('userRole') === 'gost' ? <></> :
                    <td>{rezervacija.userID.ime} {rezervacija.userID.prezime}</td>}
                <td>{rezervacija.datumIVreme}</td>
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