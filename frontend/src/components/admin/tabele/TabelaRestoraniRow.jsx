import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function TabelaRestoraniRow({restoran}) {
    const navigate = useNavigate();

    function pogledaj(id){
     navigate('/admin/unos/restoran/'+id)
    }

    function obrisiRezervaciju(id) {
        let url = 'http://localhost:8000/api/restoran/' + id;
        let token = 'Bearer ' + window.sessionStorage.getItem('auth_token');
        axios.delete(url, {
            headers: {
                'Authorization': token
            }
        })
            .then((res) => {
                alert(res.data.message)
                if (res.data.success) {
                    window.location.reload()
                }
            }).catch((e) => {
            alert('Nije moguce obrisati restoran')
        })
    }

    return (
        <tr>
            <th scope="row">{restoran.naziv}</th>
            <td>{restoran.adresa}</td>
            <td>{restoran.radnoVreme}</td>
            <td>{restoran.telefon}</td>
            <td>{restoran.email}</td>
            <td>{restoran.brojZvezdica}</td>
            <td>
                <button className="btn  btn-primary" onClick={() => pogledaj(restoran.id)}>Pogledaj</button>
            </td>
            <td>
                <button className="btn  btn-danger" onClick={() => obrisiRezervaciju(restoran.id)}>Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaRestoraniRow;