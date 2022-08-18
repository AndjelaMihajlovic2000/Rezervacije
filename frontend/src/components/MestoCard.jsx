import React from 'react';


function MestoCard({mesto,prikaziModal}) {
    const stil2 = {width: '85%',paddingLeft: '10px',height:'fit-content' ,marginTop :'30px', marginLeft:'auto',marginRight:'auto'}

    return (
        <div className="mestoCard">
            <div className="card mestoBackgroudCard" style={stil2}>
                <div className="card-body p-3">
                    <h5 className="card-title mestoNaslov">{mesto.naziv}</h5>
                    <p className="card-text mestoText">{mesto.opis}</p>
                    {mesto.dostupno===1
                        ?<button className="btn-96"  onClick={() => prikaziModal(mesto)}><span>Rezervisi!</span></button>:
                        <p className="btn-96"><span>Mesto je rezervisano</span></p>
                    }
                </div>
            </div>
        </div>
    );
}

export default MestoCard;