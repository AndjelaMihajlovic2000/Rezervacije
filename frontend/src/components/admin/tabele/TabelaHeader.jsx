import React from 'react';

function TabelaHeader({header}) {
    let i=0;
    return (
        <thead>
        <tr>
            {header.map(element => (
                <th scope="col" key={i++}>{element}</th>
            ))}
        </tr>
        </thead>
    );
}

export default TabelaHeader;