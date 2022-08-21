import React from 'react';
import DugmeLink from "./DugmeLink";
import "../styles/restoranCard.css"

function RestoranCard({restoran}) {

    return (
        <div className="col big restoranCard">
            <article className="recipe">
                <div className="pizza-box">

                </div>
                <div className="recipe-content">

                    <h1 className="recipe-title"><p>{restoran.naziv}</p></h1>

                    <p className="recipe-metadata">
                        <span className="recipe-rating">Broj zvezdica :{restoran.brojZvezdica}★</span>
                    </p>

                    <p className="recipe-desc">Radno vreme: {restoran.radnoVreme}</p>
                    <p className="recipe-desc">Adresa: {restoran.adresa}</p>

                    <DugmeLink tekst={"Pogledaj restoran"} putanja={"/restoran/".concat(restoran.id)}/>

                </div>
            </article>
        </div>

    );
}

export default RestoranCard;