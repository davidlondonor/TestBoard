import React from "react";
import "./searchbar.css";

const SearchBar = () => {
    return (
        <>
            {/* <button className="bar">hola</button> */}
            <input
                className="bar"
                type="text"
                placeholder="Ingrese su búsqueda"
                name="search"
            ></input>
            <button type="submit"></button>
        </>
    );
};

export default SearchBar;
