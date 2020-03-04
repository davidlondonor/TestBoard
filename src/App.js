import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import CardsDos from "./components/CardsDos/CardsDos";
import CardsTres from "./components/CardsTres/CardsTres";
import CardsCuatro from "./components/CardsCuatro/CardsCuatro";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <div>
            <SearchBar />
            <Cards />
            <CardsDos />
            <CardsTres />
            <CardsCuatro />
        </div>
    );
}

export default App;
