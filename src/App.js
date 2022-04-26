import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Shop />
        </div>
    );
}

export default App;
