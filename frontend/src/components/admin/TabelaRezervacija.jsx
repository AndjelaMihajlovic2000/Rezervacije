import React from 'react';
import TabelaHeader from "./tabele/TabelaHeader";
import TabelaRezervacijeRow from "./tabele/TabelaRezervacijeRow";

function TabelaRezervacija({rezervacije}) {
    return (
        <table className="aTabele table table-striped table-light table-hover">

            <TabelaHeader header={
                ["Naziv mesta", "Naziv restorana", "Adresa restorana","Gost",
                    "Datum i vreme", "",""]
            }/>

            <tbody>
            {rezervacije == null ? <></> : rezervacije.map(rezervacija => (
                <TabelaRezervacijeRow key={rezervacija.id} rezervacija={rezervacija}/>
            ))}
            </tbody>

        </table>
    );
}

export default TabelaRezervacija;