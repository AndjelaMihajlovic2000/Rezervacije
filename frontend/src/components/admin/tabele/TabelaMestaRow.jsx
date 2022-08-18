import React from 'react';
import axios from "axios";

function TabelaMestaRow({mesto}) {

    function obrisiMesto() {
        axios.delete('http://localhost:8000/api/mesto/' + mesto.id, {
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
                alert('Nije moguce obrisati mesto')
        })
    }

    return (
        <tr>
            <th scope="row">{mesto.naziv}</th>
            <td>{mesto.brojStolica}</td>
            <td>{mesto.opis}</td>
            <td>{mesto.dostupno}</td>
            <td>{mesto.restoranID.naziv}</td>
            <td>{mesto.restoranID.adresa}</td>
            <td>
                <button className="btn btn-danger" onClick={obrisiMesto}>Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaMestaRow;