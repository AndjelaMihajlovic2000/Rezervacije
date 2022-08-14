import React from 'react';

function TabelaRezervacijeRow({rezervacija}) {
    return (
        <tr>
            <th scope="row">{rezervacija.mestoID.naziv}</th>
            <td>{rezervacija.mestoID.restoranID.naziv}</td>
            <td>{rezervacija.mestoID.restoranID.adresa}</td>
            {window.sessionStorage.getItem('userRole') === 'gost' ? <></> :<td>{rezervacija.userID.ime} {rezervacija.userID.prezime}</td>}
            <td>{rezervacija.datumIVreme}</td>
            {window.sessionStorage.getItem('userRole') === 'gost' ? <></> : <td>{rezervacija.uspesno}</td>}
            <td>
                <button className="btn  btn-danger">Obrisi</button>
            </td>
        </tr>

    );
}

export default TabelaRezervacijeRow;