import React from 'react';
import axios from "axios"
function TabelaKorisniciRow({user}) {
    function obrisiKorisnika(id) {
        let url = 'http://localhost:8000/api/user/' + id;
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
            alert('Nije moguce obrisati korisnika')
        })
    }
    return (
        <tr>
            <th scope="row">{user.username}</th>
            <td>{user.ime}</td>
            <td>{user.prezime}</td>
            <td>{user.datumRodjenja}</td>
            <td>{user.userRole.role_name}</td>
            <td>{user.adresa}</td>
            <td>
                <button className="btn  btn-danger" onClick={()=>obrisiKorisnika(user.id)}>Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaKorisniciRow;