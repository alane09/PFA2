import React from 'react';
import './Courses.css';
import './TA1.jsx'
import { Link, Routes, Route } from 'react-router-dom';
import IT from './IT.jpg';
import setp from './setp2.gif';
import ean  from './ean.gif';
import sic from './sic.gif';
import { textAlign } from '@mui/system';
function Courses() {
    return (
        <div>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light stick</nav>y-top">
                    <div class="imageBox">
                        <a href="index.html"><img src="logo.png" alt="image-box" class="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} /></a>
                    </div>
                    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#nav"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="nav">
                        <ul class="navbar-nav">
                            <li class="item  "><Link to='/' class="link"><strong>ACCEUIL</strong> </Link> </li>
                            <li class="item current"><Link to='/courses' class="link"><strong>COURS & EXAMENS</strong></Link> </li>
                            <li class="item"><Link to='/about' class="link"><strong>A PROPOS</strong></Link> </li>
                            <li class="item"><Link to='/contact' class="link"><strong>CONTACT</strong></Link> </li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong>Tronc Commun</strong> </h1>

                        <div class="cards-container d-flex justify-content-center">
                            <div class="card-1 flip-card mr-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={IT} style={{ height: '90%' }} alt="" />
                                        <h2><strong>1 TA</strong></h2>
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    1 TA
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong>1ère année Technologies Avancées S1&S2</strong>
                                                </p>
                                                <Link to="/TA1" className="inside-page__btn " style={{ color: 'white' }}>
                                                    <strong>Accès </strong>
                                                </Link>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={IT} style={{ height: '90%' }} alt="" />
                                        <h2><strong>2 TA</strong></h2>

                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    2 TA
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong> 2ème année Technologies Avancées S1</strong>
                                                </p>
                                                <a href="/Sem1" class="inside-page__btn  " style={{ color: 'white' }}>Accès  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong>2ème année S2</strong> </h1>

                        <div class="cards-container d-flex justify-content-center">
                            <div class="card-1 flip-card mr-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={setp} style={{ height: '90%' }} alt="" />
                                        <h2><strong>2 SETP</strong></h2>
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    2 SETP
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong>2ème année Systèmes énergétiques et technologies propres</strong>
                                                </p>
                                                <a href="/SETP2" class="inside-page__btn  " style={{ color: 'white' }}>Accès  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={sic} style={{ height: '90%' }} alt="" />
                                        <h2><strong>2 SIC</strong></h2>

                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    2 SIC
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong> 2ème année Systèmes industriels et compétitivité</strong>
                                                </p>
                                                <a href="/SIC2" class="inside-page__btn  " style={{ color: 'white' }}>Acces </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={ean} style={{ height: '90%' }} alt="" />
                                        <h2><strong>2 EAN</strong></h2>

                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    2 EAN
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong> 2ème année Electronique avancée et Nanotechnologie</strong>
                                                </p>
                                                <a href="/EAN2" class="inside-page__btn  " style={{ color: 'white' }}>Acces  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong>3ème année S1</strong> </h1>

                        <div class="cards-container d-flex justify-content-center">
                            <div class="card-1 flip-card mr-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={setp} style={{ height: '100%' }} alt="" />
                                        <h2><strong>3 SETP</strong></h2>
                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    3 SETP
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong>3ème année Systèmes énergétiques et technologies propres</strong>
                                                </p>
                                                <a href="SETP3" class="inside-page__btn  " style={{ color: 'white' ,textAlign:'center' }}>Acces  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={sic} style={{ height: '90%' }} alt="" />
                                        <h2><strong>3 SIC</strong></h2>

                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    3 SIC
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong> 3 ème année Systèmes industriels et compétitivité</strong>
                                                </p>
                                                <a href="/SIC3" class="inside-page__btn  " style={{ color: 'white' }}>Acces  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src={ean} style={{ height: '90%' }} alt="" />
                                        <h2><strong>3 EAN</strong></h2>

                                    </div>
                                    <div class="flip-card-back">
                                        <div class="inside-page" style={{ textAlign: 'center' }}>
                                            <div class="inside-page__container">
                                                <h3 class="inside-page__heading ">
                                                    3 EAN
                                                </h3>
                                                <p class="inside-page__text" style={{ color: 'black' }}>
                                                    <strong> 3ème année Electronique avancée et Nanotechnologie</strong>
                                                </p>
                                                <a href="/EAN3" class="inside-page__btn  " style={{ color: 'white' }}>Acces  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </main>
                
</body>
        </div>
    );
}

export default Courses;
