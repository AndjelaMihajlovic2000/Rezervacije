import React from 'react';
import "../styles/admin.css";

function Admin(props) {
    return (
        <div className="adminPage">
            <div className="adminPageContainer">

                <div className="adminPageContainerBody ">
                    <div className="adminPageContainerBodyHeader">
                        <h3>Admin panel</h3>
                    </div>
                    <div className="adminPageContainerBodyContent">

                    </div>
                </div>

                <div className="adminPageContainerMenu container">
                    <div className="row">
                        <div className="col">
                            <h4>Menu</h4>
                        </div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col">Restorani</div>
                    </div>

                    <div className="row adminMenuCard">
                        <div className="col">Mesta</div>
                    </div>

                    <div className="row adminMenuCard">
                        <div className="col">Rezervacije</div>
                    </div>

                    <div className="row adminMenuCard">
                        <div className="col">Korisnici</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Admin;