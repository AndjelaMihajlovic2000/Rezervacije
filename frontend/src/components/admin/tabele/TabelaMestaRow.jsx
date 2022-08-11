import React from 'react';

function TabelaMestaRow({mesto}) {
    return (
        <tr>
            <td>{mesto.naziv}</td>
            <td>{mesto.brojStolica}</td>
            <td>{mesto.opis}</td>
            <td>{mesto.dostupno}</td>
            <td>{mesto.restoranID.naziv}</td>
            <td>{mesto.restoranID.adresa}</td>
            <td>
                <button>Izmeni</button>
                <button>Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaMestaRow;