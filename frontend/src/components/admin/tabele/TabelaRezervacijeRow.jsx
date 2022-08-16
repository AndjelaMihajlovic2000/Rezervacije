import React from 'react';
import RezervacijaViewModal from "../../RezervacijaViewModal";
import {useState} from "react";

function TabelaRezervacijeRow({rezervacija}) {

    const [modalShow, setModalShow] = useState(false);

    function prikaziRezervaciju() {
            setModalShow(true);
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
                {window.sessionStorage.getItem('userRole') === 'gost' ? <></> : <td>{rezervacija.uspesno}</td>}
                <td>
                    <button className="btn  btn-danger">Obrisi</button>
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