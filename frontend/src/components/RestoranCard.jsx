import React from 'react';

function RestoranCard(props) {
    const stil2 = {width: '85%',paddingLeft: '10px;', marginTop :'30px', marginLeft:'auto',marginRight:'auto'}
    return (
        <div className="restoranCard" style={stil2}>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body p-3">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make
                        up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default RestoranCard;