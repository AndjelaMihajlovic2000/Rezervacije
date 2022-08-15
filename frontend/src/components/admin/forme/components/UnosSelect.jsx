import React from 'react';

function UnosSelect({nameUnos, nameLabel, opcije, handleInput}) {
    return (
        <div className="mb-3">
            <label htmlFor={nameUnos.concat("ID")} className="form-label">{nameLabel}</label>
            <select className="form-select" id={nameUnos.concat("ID")} name={nameUnos} onChange={handleInput}>
                <option>Odaberi</option>
                {opcije == null ? <></> : opcije.map((opcija) => (
                    <option key={opcija.id} value={opcija.id}>
                        {opcija.naziv != null ? opcija.naziv : opcija.role_name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default UnosSelect;