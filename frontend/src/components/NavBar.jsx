import React from 'react';
import {Link} from "react-router-dom";
import LinkKartica from "./LinkKartica";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand" to="/">Rezervacija mesta</Link>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkKartica putanja="/register" tekst="Napravi nalog"/>
                            </li>
                            <li className="nav-item">
                                <LinkKartica putanja="/login" tekst="Uloguj se"/>
                            </li>
                            <li className="nav-item">
                                <LinkKartica putanja="/o-nama" tekst="O nama"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
