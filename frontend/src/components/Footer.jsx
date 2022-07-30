import React from 'react';
import LinkKartica from "./LinkKartica";

function Footer(props) {
    return (
        <footer className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm d-flex justify-content-between">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <LinkKartica putanja="/o-nama" tekst="O nama"/>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <LinkKartica putanja="/" tekst="Linkovi drustene mreze"/>
                        </li>
                        <li className="nav-item">
                            <LinkKartica putanja="/" tekst="Linkovi drustene mreze"/>
                        </li>
                        <li className="nav-item">
                            <LinkKartica putanja="/" tekst="Linkovi drustene mreze"/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;