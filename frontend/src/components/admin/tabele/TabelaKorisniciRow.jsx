import React from 'react';

function TabelaKorisniciRow({user}) {
    return (
        <tr>
            <td>{user.username}</td>
            <td>{user.ime}</td>
            <td>{user.prezime}</td>
            <td>{user.datumRodjenja}</td>
            <td>{user.userRole.role_name}</td>
            <td>{user.adresa}</td>
            <td>
                <button>Obrisi</button>
            </td>
        </tr>
    );
}

export default TabelaKorisniciRow;