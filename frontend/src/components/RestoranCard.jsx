import React from 'react';
import DugmeLink from "./DugmeLink";

function RestoranCard({restoran}) {
    const stil2 = {width: '85%', paddingLeft: '10px', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto'}
    return (
        <div className="restoranCard" style={stil2}>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body p-3">
                    <h5 className="card-title">{restoran.naziv}</h5>
                    <p className="card-text">{restoran.opis}</p>
                    <DugmeLink tekst={"Pogledaj restoran"} putanja={"/restoran/".concat(restoran.id)}/>
                </div>
            </div>
        </div>
    );
}

export default RestoranCard;