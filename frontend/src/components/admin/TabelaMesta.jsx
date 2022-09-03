import React from 'react';
import TabelaHeader from "./tabele/TabelaHeader";
import TabelaMestaRow from "./tabele/TabelaMestaRow";

function TabelaMesta({mesta}) {
    return (
        <table className="aTabele table table-striped table-light table-hover">
            <TabelaHeader header={
                ["Naziv mesta", "Broj stolica", "Opis",
                    "Dostupno", "Restoran", "Adresa restorana", "",""]
            }/>
            <tbody>
            {mesta == null ? <></> : mesta.map(mesto => (
                <TabelaMestaRow key={mesto.id} mesto={mesto}/>
            ))}
            </tbody>

        </table>
    );
}

export default TabelaMesta;