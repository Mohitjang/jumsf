import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src="/assets/images/footer-logo.svg" alt="logo" />
                    </div>
                </div>
                <div className="footer-inner">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-about">
                                <h4>Address</h4>
                                <p>
                                    Zymera Ventures Private Limited
                                    <br />
                                    1/510 Vidhyadhar Nagar,
                                    <br />
                                    Jaipur 302039
                                    <br />
                                    +91 89550 63572
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-nav">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li>
                                        <NavLink  to="/index">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/how-it-works">
                                            How it Works
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-nav">
                                <h4>Other Links</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/contact-us">Contact Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/terms-of-use">
                                            Terms &amp; Conditions
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privacy-policy">
                                            Privacy Policy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/grievance_mechanism">
                                            Grievance Mechanism
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-social">
                                <h4>Social Media</h4>
                                <div className="social-links">
                                    <NavLink
                                        to="https://www.instagram.com/flikmoney?igsh=MWhyN3FjbTc2ZjEw"
                                        target="_blank"
                                    >
                                        <img src="/assets/images/instagram.png" />
                                    </NavLink>
                                    <NavLink
                                        to="https://www.linkedin.com/company/flikmoney/"
                                        target="_blank"
                                    >
                                        <img src="/assets/images/linkedin.png" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Zymera Ventures Private Limited</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer