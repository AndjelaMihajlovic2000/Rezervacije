import React from 'react';

function StatsCard({naslov,opis,vrednost}) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h5 className="card-title">{naslov}</h5>
            </div>
            <div className="card-body">
                <p className="card-text vrednostStatCard">{vrednost}</p>
            </div>
            <div className="card-footer">
                {opis}
            </div>
        </div>
    );
}

export default StatsCard;