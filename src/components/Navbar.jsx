import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    const state = useSelector((state) => state.amount);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        My counter App
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    ></div>
                    <button className="btn-primary" disabled={true}>
                        My Count: {state}
                    </button>
                </div>
            </nav>
        </>
    );
}
