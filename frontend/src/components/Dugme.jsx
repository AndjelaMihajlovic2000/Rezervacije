import React from 'react';

function Dugme({tekst,funkcija}) {
    return (
        <button className="btn-96" onClick={funkcija}>
            <span>{tekst}</span>
        </button>
    );
}

export default Dugme;