import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <img src='../Images/Leo.jpg' className='logo' alt="Logo" />
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
                <ul className="nav-links">
                    <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                    <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
                    <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
                    <li><NavLink to="/audition-form" activeclassname="active">Audition Form</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
