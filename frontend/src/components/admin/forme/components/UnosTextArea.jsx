import React from 'react';

function UnosTextArea({nameUnos,nameLabel}) {
    return (
        <div className="mb-3">
            <label htmlFor={nameUnos.concat("ID")} className="form-label">{nameLabel}</label>
            <textarea className="form-control" id={nameUnos.concat("ID")} name={nameUnos} />
        </div>
    );
}

export default UnosTextArea;