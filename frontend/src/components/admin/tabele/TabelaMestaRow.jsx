import React from 'react';

function TabelaMestaRow({mesto}) {
    return (
        <tr>
            <th scope="row">{mesto.naziv}</th>
            <td>{mesto.brojStolica}</td>
            <td>{mesto.opis}</td>
            <td>{mesto.dostupno}</td>
            <td>{mesto.restoranID.naziv}</td>
            <td>{mesto.restoranID.adresa}</td>
            <td>
                <button className="btn btn-danger">Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaMestaRow;