import React from 'react';
import TabelaHeader from "./tabele/TabelaHeader";
import TabelaRezervacijeRow from "./tabele/TabelaRezervacijeRow";

function TabelaRezervacija({rezervacije}) {
    return (
        <table className="aTabele table table-striped table-light table-hover">
            {window.sessionStorage.getItem('userRole') === 'gost' ?
                <TabelaHeader header={
                    ["Naziv mesta", "Naziv restorana", "Adresa restorana",
                         "Datum i vreme", ""]
                }/> : <TabelaHeader header={
                    ["Naziv mesta", "Naziv restorana", "Adresa restorana",
                        "Gost", "Datum i vreme", "Uspesno", ""]
                }/>}

            <tbody>
            {rezervacije == null ? <></> : rezervacije.map(rezervacija => (
                <TabelaRezervacijeRow key={rezervacija.id} rezervacija={rezervacija}/>
            ))}
            </tbody>

        </table>
    );
}

export default TabelaRezervacija;