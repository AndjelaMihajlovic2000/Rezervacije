import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../styles/footer.css"

function Footer(props) {

    const [currency, setCurrency] = useState(null);
    useEffect(() => {
        if (currency == null) {
            axios.get('https://v6.exchangerate-api.com/v6/fe3d64f104d8af9b37c31de4/latest/RSD')
                .then((res) => {
                    console.log(res)
                    setCurrency(res.data)
                })
        }
    }, [currency]);

    return (
        <footer className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm d-flex justify-content-between">
                <div className="collapse navbar-collapse nav-kurs" id="navbarSupportedContent">
                    <div>
                        Kursna lista
                    </div>
                    <div>
                        {currency == null ? "" : "1 EUR = ".concat((1 / currency.conversion_rates.EUR).toFixed(2)).concat(" RSD")}
                    </div>
                    <div>
                        {currency == null ? "" : "1 USD = ".concat((1 / currency.conversion_rates.USD).toFixed(2)).concat(" RSD")}
                    </div>
                </div>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item socialNetworkLink">
                            <a href="https://www.facebook.com">Facebook</a>
                        </li>
                        <li className="nav-item socialNetworkLink">
                            <a href="https://twitter.com">Twitter</a>
                        </li>
                        <li className="nav-item socialNetworkLink">
                            <a href="https://www.instagram.com">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;