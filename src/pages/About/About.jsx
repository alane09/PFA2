import React from 'react';
import './About.css';
import './footer.css';
import './style.css' 

import Aboutimg from './about.jpg';
function About() {
    const heroStyle = {
        backgroundImage: `url(${Aboutimg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
            <div className='about-page'>
                    
                <section id="hero" className="d-flex align-items-center" style={heroStyle}>
                    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                                    <h1>Découvrez  tous les outils et ressources
                                            nécessaires pour réussir et exceller dans
                                            votre parcours à l'ENSTAB </h1>
                            </div>
                    </section>   
                   
            </div>
    )
}

export default About;;