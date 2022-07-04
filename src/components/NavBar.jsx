import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
    return (
        <>
            <div className="container-fluid nav_bg bg-light">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
                            <NavLink className="navbar-brand" to="/">Thapa14</NavLink>
                            <button className="navbar-toggler" type="button" >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav" style={{ marginLeft: "auto" }} >
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service">services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">about</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">contact</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>

                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar;