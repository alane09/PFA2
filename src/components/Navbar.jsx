import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="imageBox">
                <a href="index.html"><img src="logo.png" alt="image-box" className="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} /></a>
            </div>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#nav"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="nav">
                <ul className="navbar-nav">
                    <li className="item"><Link to='/' className="link"><strong>ACCEUIL</strong> </Link> </li>
                    <li className="item"><Link to='/coursesexams' className="link"><strong>COURS & EXAMENS</strong></Link> </li>
                    <li className="item"><Link to='/about' className="link"><strong>A PROPOS</strong></Link> </li>
                    <li className="item"><Link to='/contact' className="link"><strong>CONTACT</strong></Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
