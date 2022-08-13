import React from 'react';

function TabelaRestoraniRow({restoran}) {
    return (
        <tr>
            <th scope="row">{restoran.naziv}</th>
            <td>{restoran.adresa}</td>
            <td>{restoran.radnoVreme}</td>
            <td>{restoran.telefon}</td>
            <td>{restoran.email}</td>
            <td>{restoran.brojZvezdica}</td>
            <td>
                <button className="btn  btn-danger">Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaRestoraniRow;