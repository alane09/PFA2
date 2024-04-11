import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <img src="logo.png" alt="" className="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
                <p className="footer-links">
                    <li className="item"><Link to='/' className="link"><strong style={{ color: '#555555' }}>ACCEUIL</strong> </Link> </li>
                    <li className="item"><Link to='/coursesexams' className="link"><strong style={{ color: '#555555' }}>COURS & EXAMENS</strong></Link> </li>
                    <li className="item"><Link to='/file' className="link"><strong style={{ color: '#555555' }}>UPLOAD</strong></Link> </li>
                    <li className="item"><Link to='/about' className="link"><strong style={{ color: '#555555' }}>A PROPOS</strong></Link> </li>
                    <li className="item"><Link to='/contact' className="link"><strong style={{ color: '#555555' }}>CONTACT</strong></Link> </li>
                </p>
                <p className="footer-company-name"><strong> Droits d'auteur © 2024 </strong> <strong style={{ color: 'rgb(10, 10, 232)' }}>  ENSTA</strong> <strong style={{ color: 'rgb(10, 10, 232)' }}>LEARN</strong> <strong>Tous droits réservés</strong></p>
            </div>
            <div className="footer-center">
                <div className="center-link">
                    <i className="fa fa-phone"></i>
                    <p><strong style={{ color: 'rgb(9, 9, 10)' }}>ENSTA LEARN TEAM  </strong>
                        <a href="tel:+21624640536" style={{ color: 'rgb(14, 111, 223)' }}>+21624640536</a>
                    </p>
                </div>
                <div className="center-link">
                    <a href="mailto:enstalearn@enstab.ucar.tn"><i className="fa fa-envelope"></i></a>
                    <p><a style={{ color: 'black' }} href="mailto:enstalearn@enstab.ucar.tn">enstalearn@enstab.ucar.tn</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>À propos de nous</span>
                    <strong style={{ color: 'black' }}>ENSTALEARN est un site Web destiné à aider les étudiants de l'ENSTAB à trouver facilement les cours et les examens.</strong>
                </p>
                <br />
                <br />
                <br />
                <div className="footer-icons">
                    <p>ENSTA LEARN |
                        <SocialIcon
                            url="https://www.facebook.com/alaane09"
                            style={{ height: 25, width: 25 }}
                        />
                        <SocialIcon
                            url="https://www.instagram.com/ala.ne/"
                            style={{ height: 25, width: 25 }}
                        />
                        <SocialIcon
                            url="https://github.com/alane09"
                            style={{ height: 25, width: 25 }}
                        />
                    </p>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
