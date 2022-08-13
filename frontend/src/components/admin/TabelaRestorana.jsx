import React from 'react';
import TabelaHeader from "./tabele/TabelaHeader";
import TabelaRestoraniRow from "./tabele/TabelaRestoraniRow";

function TabelaRestorana({restorani}) {
    return (
        <table className="aTabele table table-striped table-light table-hover">
            <TabelaHeader header={
                ["Naziv restorana", "Adresa", "Radno vreme",
                    "Telefon", "Email", "Broj zvezdica", ""]
            }/>
            <tbody>
            {restorani == null ? <></> : restorani.map(restoran => (
                <TabelaRestoraniRow key={restoran.id} restoran={restoran}/>
            ))}
            </tbody>

        </table>
    );
}

export default TabelaRestorana;