// TA1.jsx
import React from 'react';
import './TA1.css'; // Path to your CSS file
import { Link } from 'react-router-dom';
import IT from './IT.jpg';
import Analyse from './images/analyse.jpeg';
import  Proba  from './images/proba.jpeg'
import  C  from './images/c&c++.jpeg'
import  Fluides  from './images/fluides.jpeg'
import  Mecaniques  from './images/mecaniques.jpeg'
import  Quantique  from './images/quantique.png'
import  Stat from './images/stat.png'
import  Java  from './images/java.png'
import  Optimisation  from './images/optimisation.png'
import  Thermo  from './images/thermo.jpeg'
import Asservi from './images/images.png'
import Catia from './images/catia.jpeg'
import  Recherche from './images/ro.png'
import  AI  from './images/ai.jpeg'
import  Modelis  from './images/download.jpeg'
import API  from './images/api.jpeg'
import Capteurs  from './images/capteurs.jpeg'


function TA1() {
    return (
        <div>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light stick</nav></nav>y-top">
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
                            <li class="item "><Link to='/coursesexams' class="link"><strong>COURS & EXAMENS</strong></Link> </li>
                            <li class="item"><Link to='/about' class="link"><strong>A PROPOS</strong></Link> </li>
                            <li class="item"><Link to='/contact' class="link"><strong>CONTACT</strong></Link> </li>
                        </ul>
                    </div>
                </nav>
                <main>
                    <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong>1ère année TA</strong> </h1>

                        <div class="cards-container d-flex justify-content-center">
                            <div class="card-1 flip-card mr-5">                                
                                    <div class="flip-card-front">
                                        <img src={IT} style={{ height: '90%' }}  alt="" /> 
                                    <Link to='/S11' className="inside-page__btn " style={{ color: 'white' }}>
                                        <strong>Semestre 1 </strong>
                                    </Link> 
                                    </div>
                            </div>
                            <div class="card-1 flip-card ml-5">
                                <div class="flip-card-front">
                                    <img src={IT} style={{ height: '90%' }} alt="" />
                                    <Link to='/S12' className="inside-page__btn " style={{ color: 'white' }}>
                                        <strong>Semestre 2 </strong>
                                    </Link>
                                </div>
                            
                               
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <h1 style={{ textAlign: 'center' }}><strong>Exemples </strong> </h1>
                        <section class="section">
                            <ol class="posts">
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Analyse} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA
                                                        </a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Analyse Pour L'ingénieur
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Proba} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Probabilités
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={C} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Algorithmique et Programmation
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Fluides} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Mécanique des fluides
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Mecaniques} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Systèmes mécaniques pour la Robotique
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Quantique} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Physique pour l'ingénieur
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Stat} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title"> <a href="#"> Statistiques pour l'ingénieur </a> </h2>


                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Java} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#"> Programmation orientée objet
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Optimisation} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Optimisation
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Thermo} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Thermodynamique pour l'ingénieur</a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Asservi} style={{ width: '100%', height: '150px' }}  alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>

                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="#">Asservissement et Régulation Industrielle
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <a href="#">
                                                <img src={Catia} style={{ width: '100%', height: '150px' }} alt="" />
                                            </a>
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="">1TA</a> <a href="">S2</a>
                                                    </li>

                                                </ol>
                                                <h2 class="post-title" >
                                                    <a href="#">Catia  
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                

                            </ol>
                        </section>

                        

                    </div>

                </main>
            </body>
        </div>
    );
}

export default TA1;
