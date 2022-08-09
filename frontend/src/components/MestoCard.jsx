import React from 'react';

function MestoCard(props) {
    const stil2 = {width: '85%',paddingLeft: '10px', marginTop :'30px', marginLeft:'auto',marginRight:'auto'}

    return (
        <div className="mestoCard">
            <div className="card" style={stil2}>
                <div className="card-body p-3">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make
                        up the bulk of the card's content.</p>
                    <button className="btn-96 "><span>Rezervisi!</span></button>
                </div>
            </div>
        </div>
    );
}

export default MestoCard;