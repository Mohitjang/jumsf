import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <div className="header-inner">
                        <div className="row align-items-center">
                            <div className="col-4 col-md-3">
                                <NavLink
                                    className="navbar-brand"
                                    to="/index"
                                >
                                    <img src="/assets/images/logo.svg" alt="logo" />
                                </NavLink>
                            </div>
                            <div className="col-12 col-md-6 order-2 order-md-1">
                                <div
                                    className="collapse navbar-collapse"
                                    id="collapsibleNavbar"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                to="/index"
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                to="/about"
                                            >
                                                About Us
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className="nav-link"
                                                to="/how-it-works"
                                            >
                                                How it Works
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-8 col-md-3 order-1 order-md-2">
                                <div className="header-contact">
                                    <NavLink
                                        to="/contact-us"
                                        className="theme-button white-outline-btn"
                                    >
                                        Contact Us
                                    </NavLink>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapsibleNavbar"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header