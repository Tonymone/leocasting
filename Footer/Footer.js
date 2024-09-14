import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* 1st Row: Quick Links and Follow Us */}
                <div className="footer-row">
                    <div className="footer-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                            <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Follow Us</h3>
                        <ul className="footer-social">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="footer-contact">
                            <li>Email: leocasting@gmail.com</li>
                            <li>Phone: +91 9344454544</li>
                            <li>Address: Kapur Bevdi Road, Mumbai</li>
                        </ul>
                    </div>
                </div>

                {/* 2nd Row: Contact Us
        <div className="footer-row">
          <div className="footer-section contact-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>Email: info@yourcompany.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Legal Street, Law City</li>
            </ul>
          </div>
        </div> */}

                {/* 3rd Row: Logo and Description */}
                <div className="footer-row">
                    <div className="footer-section1 logo-section">
                        <div>
                            <img src='../Images/Leo.jpg' className='footer-logo' alt="Logo" />
                            <p className="footer-logo-text">LeoCasting</p>
                        </div>
                        <div>
                            <p className="footer-description">
                                Your trusted partner for legal services and expert advice. We provide comprehensive solutions tailored to your needs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© 2024 LeoCasting. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
