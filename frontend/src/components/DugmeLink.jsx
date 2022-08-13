import React from 'react';
import {Link} from "react-router-dom";

function DugmeLink({tekst,putanja}) {
    return (
        <button className="btn-96">
        <span>
            <Link style={{textDecoration: 'none', color: 'black'}}
                  to={putanja}>{tekst}</Link>
            </span>
        </button>
    );
}

export default DugmeLink;