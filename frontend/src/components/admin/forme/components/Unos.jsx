import React from 'react';

function Unos({nameUnos,nameLabel,handleInput}) {
    return (
        <div className="mb-3">
            <label htmlFor={nameUnos.concat("ID")} className="form-label">{nameLabel}</label>
            <input className="form-control" type="text" id={nameUnos.concat("ID")} name={nameUnos} onChange={handleInput}/>
        </div>
    );
}

export default Unos;