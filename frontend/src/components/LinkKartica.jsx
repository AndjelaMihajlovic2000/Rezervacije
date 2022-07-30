import React from 'react';
import {Link} from "react-router-dom";

function LinkKartica({putanja,tekst}) {
    return (
        <div>
            <Link className="nav-link active" aria-current="page" to={putanja}>{tekst}</Link>
        </div>
    );
}

export default LinkKartica;