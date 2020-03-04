import React, { Fragment } from "react";
import "./cards.css";
import image from "../image/imagen.png";

const Cards = () => {
    return (
        <>
            <div className="cards">
                <img src={image} alt="imagen" />
            </div>
            {/* <div>
                <img src={imagen2} alt="imagen dos" />
                <img src={imagen3} alt="imagen tres" />
                <img src={imagen4} alt="imagen cuatro" />
            </div> */}
        </>
    );
};

export default Cards;
