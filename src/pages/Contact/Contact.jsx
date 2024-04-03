import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import team from './team.png';
import enst from './enstab.jpg';
function Contact() {
   
    
    return (
        <div className='about-page'>
            
            <main>
                <section class=" container contact">
                    <div class="row icons-container">
                        <div class="col-lg icons">
                            <FaPhoneAlt size={30} />
                            <h3>NUMÉRO</h3>
                            <p>+216 24640 536</p>
                            <p>+216 96029 283</p>
                        </div>
                        <div class="col-lg icons">
                            <MdEmail size={30} />
                            <h3>EMAIL</h3>
                            <p>aymen.sahbani@enstab.ucar.tn</p> 
                            <p>alaa.neji@enstab.ucar.tn</p>
                        </div>
                        <div class="col-lg icons">
                            <FaLocationDot size={30} />

                            <h3>LOCALISATION</h3>
                            <p>Borj Cedria Tunisia </p>
                        </div>
                    </div>
                </section>
                
                <div class="container2">
                    <div class="content">
                        <div className="image-box">
                            <img src={team} alt="Contact Us" />
                        </div>
                        <form action="send_message.php" method="POST">
                            <div class="topic">NOUS CONTACTER</div>
                            <div class="input-box">
                                <input style={{ borderRadius: '1.4rem' }} type="text" name="name" required />
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre nom</strong></label>
                            </div>
                            <div class="input-box">
                                <input style={{ borderRadius: '1.4rem' }} type="email" name="email" required />
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre adresse e-mail</strong></label>
                            </div>
                            <div class="message-box">
                                <textarea style={{ borderRadius: '1.4rem' }} name="message"></textarea>
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre message</strong></label>
                            </div>
                            <div class="input-box">
                                <input style={{ borderRadius: '1.5rem', color: '#0C0C0C', background:'#18ADD0' }} type="submit" value="Envoyer le message" />
                            </div>
                        </form>
                    </div>
                </div>

                <div class="image-box">
                    <div class="text-center">
                        <div class="image-box">
                            <div class="text-center">
                                <img src={enst} alt="contact with to the top"/>
                                <a
                                    
                                    href="http://www.enstab.rnu.tn/"
                                    style={{ display: 'block', textAlign: 'center' }}
                                >
                                    
                                    <strong style={{ fontSize: '30px' }}>Ecole Nationale des Sciences et Technologies Avancées de Borj Cedria</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

        export default Contact;
