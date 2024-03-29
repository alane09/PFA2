import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SETP3() {
    const Industrie4 = [
        { name: "Big data : General overview", link: "/Courses/3TA/commun/bigdata" },
        { name: "Management de l'innovation", link: "/Courses/3TA/commun/innovation" },
        { name: "IoT&Cloud Computing ", link: "/Courses/3TA/commun/iot" },
        { name: "Outils numériques pour l'ingénieur 5 ", link: "/Courses/3TA/commun/retscreen" },
    ]
    const SOCIO = [
        { name: "Analyse Financière", link: "/Courses/3TA/commun/analysefinanciere" },
        { name: "Projet Professionnel Personnalisé ", link: "/Courses/3TA/commun/PPP" },
        { name: "Anglais des Affaires", link: "/Courses/3TA/commun/anglais" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Courses/3TA/commun/langue" },
    ]
    const MdSETP2 = [
        { name: "Système élecrtique des énergies renouvelables", link: "/Courses/3TA/setp/renewable-energy" },
        { name: "Réseaux électriques intelligents (smart grid)", link: "/Courses/3TA/setp/reseau" },
        { name: "Audit énergétique et maitrise de l'énergie", link: "/Courses/3TA/setp/audit" },
        { name: "SME", link: "/Courses/3TA/setp/sme" },
        { name: "Energétique Thermique des bâtiments et bâtiments HQE", link: "/Courses/3TA/setp/HQE" },
    
    ]
    const MdSETP3 = [
        { name: "Centrales solaires", link: "/Courses/3TA/setp/c.solaires" },
        { name: "Energie éolienne", link: "/Courses/3TA/setp/éolienne" },
        { name: "Biocarburants Avancés", link: "/Courses/3TA/setp/biocarburants" },
        { name: "Valorisation énergétique de la biomasse", link: "/Courses/3TA/setp/biomasse "},
        { name: "Techniques nucléaires", link: "/Courses/3TA/setp/technucleaires" },
    ]
    const columns = [
        {
            'label': 'Industrie4',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'SOCIO',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'MdSETP3',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'MdSETP2',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'Accéder au cours',
            'field': 'link',
            'sort': 'asc',
            fontSize: '30'
        }

    ];
    const headerCellStyle = {
        textAlign: 'center',
        border: '0.5px solid black',
        fontSize: '1.3rem',
        padding: '0.5cm',
    };
    const rowCellStyle = {
        textAlign: 'left',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
    };
    const rowCellStylebutton = {
        textAlign: 'center',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
    };

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
                        <h1 style={{ textAlign: 'center' }}><strong> 3 Systèmes énergétiques et technologies propres</strong> </h1>
                        <br />
                        <br />


                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong>Module SETP 2 : Gestion des énergies propres </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {MdSETP2.map((MdSETP2, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{MdSETP2.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={MdSETP2.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Module SETP 3:Production des énergies propres </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {MdSETP3.map((MdSETP3, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{MdSETP3.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={MdSETP3.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Module Commun : Industrie 4.0 </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {Industrie4.map((Industrie4, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{Industrie4.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={Industrie4.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Module Commun :Langues & Socio-économique 5  </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {SOCIO.map((SOCIO, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{SOCIO.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={SOCIO.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>

                    </div>

                </main>
            </body>
        </div>
    );
}
export default SETP3;