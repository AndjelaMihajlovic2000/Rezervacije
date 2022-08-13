import React from 'react';
import {Navigate} from "react-router-dom";

function UnosP({naslovStrane,forma}) {
    if (window.sessionStorage.getItem('userName') == null
        || window.sessionStorage.getItem('userRole') != 'admin'
        || window.sessionStorage.getItem('userRole') != 'zaposleni') {
        return <Navigate to='/login'/>
    }
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