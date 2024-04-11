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



function TA1() {
    return (
        <div>
            <body>
                
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
                                            
                                                <img src={Analyse} style={{ width: '100%', height: '150px' }} alt="" />
                                           
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA
                                                        </a> <a href="/S11">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Analyse">Analyse Pour L'ingénieur
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Proba} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S11">S1</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Probabilité">Probabilités
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={C} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S11">S1</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Algo">Algorithmique et Programmation
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Fluides} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S11">S1</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/MecaniqueFluides">Mécanique des fluides
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Mecaniques} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S11">S1</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/SystemesMecaniques">Systèmes mécaniques pour la Robotique
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Quantique} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S11">S1</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Physique">Physique pour l'ingénieur
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Stat} style={{ width: '100%', height: '150px' }} alt="" />

                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title"> <a href="Statistiques"> Statistiques pour l'ingénieur </a> </h2>


                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            <img src={Java} style={{ width: '100%', height: '150px' }} alt="" />
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Java"> Programmation orientée objet
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            
                                                <img src={Optimisation} style={{ width: '100%', height: '150px' }} alt="" />
                                            
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Optimisation">Optimisation
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            
                                                <img src={Thermo} style={{ width: '100%', height: '150px' }} alt="" />
                                            
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>
                                                    </li>
                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="/Thermoqynamique">Thermodynamique pour l'ingénieur</a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            
                                                <img src={Asservi} style={{ width: '100%', height: '150px' }}  alt="" />
                                            
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>
                                                    </li>

                                                </ol>
                                                <h2 class="post-title">
                                                    <a href="Asservissement">Asservissement et Régulation Industrielle
                                                    </a>
                                                </h2>
                                            </figcaption>
                                        </figure>
                                    </article>
                                </li>
                                <li class="post" data-category="1TA">
                                    <article>
                                        <figure>
                                            
                                            <img src={Catia} style={{ width: '100%', height: '150px' }} alt="" />
                                            
                                            <figcaption>
                                                <ol class="post-categories">
                                                    <li>
                                                        <a href="/TA1">1TA</a> <a href="/S12">S2</a>
                                                    </li>

                                                </ol>
                                                <h2 class="post-title" >
                                                    <a href="/Catia">Catia  
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
