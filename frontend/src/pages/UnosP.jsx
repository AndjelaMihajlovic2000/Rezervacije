import React from 'react';

function UnosP({naslovStrane,forma}) {
    return (
        <div className="aPages">
            <div className="aPagesContainer">

                <div className="aPagesContainerHead container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-4">
                            <h2>{naslovStrane}</h2>
                        </div>
                    </div>
                </div>

                <div className="aFormPageContainerBody">
                    {forma}
                </div>

            </div>
        </div>


    );
}

export default UnosP;