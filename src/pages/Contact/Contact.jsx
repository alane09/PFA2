import React, { useEffect, useRef } from 'react';
import './Contact.css';
import L from 'leaflet';

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import 'leaflet/dist/leaflet.css';

import team from './team.png';
import enst from './enstab.jpg';
import markerIcon from './location.png'; // Import your custom marker icon

function Contact() {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = L.map('map').setView([36.707224, 10.42665], 13);

        // Add tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        }).addTo(map);

        // Define custom icon for the marker
        const customIcon = L.icon({
            iconUrl: markerIcon,
            iconSize: [25, 41], // size of the icon
            iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
            popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
        });

        // Add marker to the map using custom icon
        L.marker([36.707224, 10.42665], { icon: customIcon }).addTo(map)
            .bindPopup('ENSTA location')
            .openPopup();

        mapRef.current = map;

        // Add event listener for zoomend event
        map.on('zoomend', () => {
            const currentZoom = mapRef.current.getZoom();
            const center = mapRef.current.getCenter();
            mapRef.current.setView(center, currentZoom);
        });
    }, []);

    return (
        <div className='about-page'>
            <main>
                <section className=" container contact">
                    <div className="row icons-container">
                        <div className="col-lg icons">
                            <FaPhoneAlt size={30} />
                            <h3>NUMÉRO</h3>
                            <p>+216 24640 536</p>
                            <p>+216 96029 283</p>
                        </div>
                        <div className="col-lg icons">
                            <MdEmail size={30} />
                            <h3>EMAIL</h3>
                            <p>aymen.sahbani@enstab.ucar.tn</p>
                            <p>alaa.neji@enstab.ucar.tn</p>
                        </div>
                        <div className="col-lg icons">
                            <FaLocationDot size={30} />
                            <h3>LOCALISATION</h3>
                            <p>Borj Cedria Tunisia </p>
                        </div>
                    </div>
                </section>

                <div className="container2">
                    <div className="content">
                        <div className="image-box">
                            <img src={team} alt="Contact Us" />
                        </div>
                        <form action="send_message.php" method="POST">
                            <div className="topic">NOUS CONTACTER</div>
                            <div className="input-box">
                                <input style={{ borderRadius: '1.4rem' }} type="text" name="name" required />
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre nom</strong></label>
                            </div>
                            <div className="input-box">
                                <input style={{ borderRadius: '1.4rem' }} type="email" name="email" required />
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre adresse e-mail</strong></label>
                            </div>
                            <div className="message-box">
                                <textarea style={{ borderRadius: '1.4rem' }} name="message"></textarea>
                                <label style={{ borderRadius: '0.5rem', color: '#607d8b' }}><strong>Entrer votre message</strong></label>
                            </div>
                            <div className="input-box">
                                <input style={{ borderRadius: '1.5rem', color: '#0C0C0C', background: '#18ADD0' }} type="submit" value="Envoyer le message" />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="image-box">
                    <div className="text-center">
                        <div className="image-box">
                            <div className="text-center">
                                <img src={enst} alt="contact with to the top" />
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

                <div className='container'>
                    <h1 style={{ textAlign: 'center ' }}>LOCALISATION ENSTAB </h1>
                    {/* Map container */}
                    <div id="map" style={{ width: '100%', height: '400px' }}></div>
                </div>
            </main>
        </div>
    )
}

export default Contact;
