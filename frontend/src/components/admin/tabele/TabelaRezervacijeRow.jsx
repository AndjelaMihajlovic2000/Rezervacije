import React from 'react';

function TabelaRezervacijeRow({rezervacija}) {
    return (
        <tr>
            <td>{rezervacija.mestoID.naziv}</td>
            <td>{rezervacija.mestoID.restoranID.naziv}</td>
            <td>{rezervacija.mestoID.restoranID.adresa}</td>
            <td>{rezervacija.userID.ime} {rezervacija.userID.prezime}</td>
            <td>{rezervacija.datumIVreme}</td>
            <td>{rezervacija.uspesno}</td>
            <td>{rezervacija.restoranID.adresa}</td>
            <td>
                <button>Obrisi</button>
            </td>
        </tr>

    );
}

export default TabelaRezervacijeRow;