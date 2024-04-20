import React, { useEffect,useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Home.css';
import './footer.css';
import logo from './LOGO ENSTAB.jpg';
//import enstab from './enstab.jpg';
import markerIcon from './location.png'; // Import your custom marker icon

function Home() {
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
      .bindPopup('ENSTAB location')
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
    <div>
      <main>
        
        <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={logo} alt="Logo" className="logo" style={{ height: '50%', width: '50%' }} />
          <br />
          <h1 style={{ textAlign: 'center' }}><strong> Bienvenue sur ENSTA LEARN </strong></h1>
          <br />
          <h2 style={{ textAlign: 'left' }}> Votre destination unique pour les ressources d'apprentissage en ligne. </h2>
          <h2 style={{ textAlign: 'left' }}> L’Ecole Nationale des Sciences et Technologies Avancées de Borj Cédria, créée en 2014,  est  la première grande école spécialisée en Technologies Avancées en Tunisie. </h2>
          <br />
          <h1 style={{ textAlign: 'center ' }}>LOCALISATION ENSTAB </h1>
          {/* Map container */}
          <div id="map" style={{ width: '100%', height: '400px' }}></div>
          <br />
         
        </div>

        
      </main>
    </div>
  )
}

export default Home;
