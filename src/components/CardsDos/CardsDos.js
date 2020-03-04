import React, { Fragment } from "react";
import "./cards.css";
import imagen2 from "../image/imagen2.png";

const CardsDos = () => {
    return (
        <>
            <div className="cards">
                <img src={imagen2} alt="imagen dos" />
            </div>
            {/* <div>
                <img src={imagen2} alt="imagen dos" />
                <img src={imagen3} alt="imagen tres" />
                <img src={imagen4} alt="imagen cuatro" />
            </div> */}
        </>
    );
};

export default CardsDos;
