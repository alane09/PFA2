import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Exams from './pages/Exams/Exams';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons'
function App() {
  return (
    <div>
     
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      
      <footer class="footer-distributed">

        <div class="footer-left">
          <img src="logo.png" alt="image-box" class="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
          <p className="footer-links">
            <li class="item  "><Link to='/' class="link"><strong style={{ color:'#555555'}}>ACCEUIL</strong> </Link> </li>
            <li class="item "><Link to='/courses' class="link"><strong style={{ color: '#555555' }}>COURS</strong></Link> </li>
            <li class="item "><Link to='/exams' class="link"><strong style={{ color: '#555555' }}>EXAMENS</strong></Link> </li>
            <li class="item"><Link to='/about' class="link"><strong style={{ color: '#555555' }}>A PROPOS</strong></Link> </li>
            <li class="item"><Link to='/contact' class="link"><strong style={{ color: '#555555' }}>CONTACT</strong></Link> </li>
            
            
            
            
          </p>
          <p className="footer-company-name"><strong> Copyright © 2024 </strong> <strong style={{ color: 'rgb(10, 10, 232)' }}>  ENSTA</strong> <strong style={{ color: 'rgb(10, 10, 232)' }}>LEARN</strong> <strong>All rights reserved</strong></p>
        </div>
        <div class="footer-center">
          <div class="center-link">
            <a href="#"><i class="fa fa-phone"></i></a>
            <p><strong style={{ color: 'rgb(9, 9, 10)' }}>Aymen Sahbani  </strong>
              <a href="tel:+21696029283" style={{ color: 'rgb(14, 111, 223)' }}>+21696029283</a>
            </p>
            <div class="center-link">
              <a href="#"><i class="fa fa-phone"></i></a>
              <p><strong style={{ color: 'rgb(9, 9, 10)' }}>Ala Neji </strong>
                <a href="tel:+21624640536" style={{ color: 'rgb(14, 111, 223)' }}> +21624640536 </a>
                </p>

            </div>
            <div class="center-link">
              <a href="mailto:aymen.sahbani@enstab.ucar.tn"><i class="fa fa-envelope"></i></a>
              <p><a style={{ color: 'black' }} href="mailto:aymen.sahbani@enstab.ucar.tn ">aymen.sahbani@enstab.ucar.tn</a></p>
            </div>
            <div class="center-link">
              <a href="mailto:alaa.neji@enstab.ucar.tn"><i class="fa fa-envelope"></i></a>
              <p><a style={{ color: 'black' }} href="mailto:alaa.neji@enstab.ucar.tn ">alaa.neji@enstab.ucar.tn</a></p>
            </div>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About Us</span>
            <strong style={{ color: 'black' }}>ENSTALEARN is a website aim to help students from ENSTAB to find easily the courses and
              exams </strong>

          </p>
          <div class="footer-icons">
            <p>Ala Neji |
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
          <div class="footer-icons">
            <p>Aymen Sahbani | <SocialIcon
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
    </div>
  
  );
}

export default App;
