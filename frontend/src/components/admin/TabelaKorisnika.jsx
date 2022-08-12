import React from 'react';
import TabelaHeader from "./tabele/TabelaHeader";
import TabelaKorisniciRow from "./tabele/TabelaKorisniciRow";

function TabelaKorisnika({users}) {
    return (
        <table className="aTabele">
            <TabelaHeader header={
                ["Korisnicko ime", "Ime", "Prezime",
                    "Datum rodjenja", "Korisnicka uloga", "Adresa", ""]
            }/>
            <tbody>
            {users == null ? <></> : users.map(user => (
                <TabelaKorisniciRow key={user.id} user={user}/>
            ))}
            </tbody>

        </table>
    );
}

export default TabelaKorisnika;