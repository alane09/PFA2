import React from 'react';
import './Home.css';
import './footer.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home-page'>
      <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="imageBox">
          <a href="index.html">
            <img src="logo.png" alt="image-box" class="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
          </a>
        </div>
        <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#nav"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon bg-light"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="nav">
          <ul class="navbar-nav">
            
          
            <li class="item current "><Link to='/' class="link"><strong>ACCEUIL</strong> </Link> </li>
            <li class="item "><Link to='coursesexams' class="link"><strong>COURS & EXAMENS</strong></Link> </li>
            <li class="item"><Link to='/about' class="link"><strong>A PROPOS</strong></Link> </li>
            <li class="item"><Link to='/contact' class="link"><strong>CONTACT</strong></Link> </li>

            
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home;