import React from 'react';

function Unos({nameUnos,nameLabel}) {
    return (
        <div className="mb-3">
            <label htmlFor={nameUnos.concat("ID")} className="form-label">{nameLabel}</label>
            <input className="form-control" type="text" id={nameUnos.concat("ID")} name={nameUnos}/>
        </div>
    );
}

export default Unos;