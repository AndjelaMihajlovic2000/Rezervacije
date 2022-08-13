import React from 'react';
import "../styles/admin.css";
import StatsCard from "../components/admin/StatsCard";
import AdminChart from "../components/admin/AdminChart";
import {Link, Navigate} from "react-router-dom";

function Admin(props) {

    if (window.sessionStorage.getItem('userName') == null
        || window.sessionStorage.getItem('userRole') === 'gost') {
        return <Navigate to='/'/>
    }

    return (
        <div className="adminPage">
            <div className="adminPageContainer">

                <div className="adminPageContainerBody ">
                    <div className="adminPageContainerBodyHeader">
                        <h3>Admin panel</h3>
                    </div>
                    <div className="adminPageContainerBodyContent">
                        <StatsCard/>
                        <StatsCard/>
                        <StatsCard/>
                        <StatsCard/>
                        <StatsCard/>
                        <StatsCard/>
                    </div>
                    <div className="adminPageContainerBodyGraphWrapper">
                        <AdminChart className="adminGraph"/>
                        <h4> Broj rezervacija na dnevnom nivou</h4>
                    </div>
                </div>

                <div className="adminPageContainerMenu container">
                    <div className="row">
                        <div className="col">
                            <h4>Menu</h4>
                        </div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/restorani">Restorani</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/mesta">Mesta</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/rezervacije">Rezervacije</Link></div>
                    </div>
                    <div className="row adminMenuCard">
                        <div className="col"><Link style={{textDecoration: 'none', color: 'black'}}
                                                   to="/admin/korisnici">Korisnici</Link></div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Admin;