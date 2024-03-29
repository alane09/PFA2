import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function EAN3() {
    const Industrie4 = [
        { name: "Big data : General overview", link: "/Courses/3TA/commun/bigdata" },
        { name: "Management de l'innovation", link: "/Courses/3TA/commun/innovation" },
        { name: "IoT&Cloud Computing ", link: "/Courses/3TA/commun/iot" },
        { name: "Outils numériques pour l'ingénieur 5 ", link: "/Courses/3TA/commun/retscreen" },
    ]
    const SOCIO=[
        { name: "Analyse Financière", link: "/Courses/3TA/commun/analysefinanciere" },
        { name: "Projet Professionnel Personnalisé ", link: "/Courses/3TA/commun/PPP" },
        { name: "Anglais des Affaires", link: "/Courses/3TA/commun/anglais" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Courses/3TA/commun/langue" },
    ]
    const Elect= [
        { name: "Architecture des systèmes reconfigurables (FPGA et SOC …)", link: "/Courses/3TA/ean/systreconfigurable" },
        { name: "Traitement de vidéo (Codec)**", link: "/Courses/3TA/ean/codec" },
        { name: "Interfaçage et communication des systèmes embarqués temps réel", link: "/Courses/3TA/ean/interfaçage" },
        { name: "Méthodologies de conception des circuits numériques embarqués", link: "/Courses/3TA/ean/conceptioncircuits" },
        { name: "Programmation Graphique", link: "/Courses/3TA/ean/proggraphique" },

    ]
    const Nanotech = [
        { name: "Modélisation des microsystèmes", link: "/Courses/3TA/ean/microsystemes" },
        { name: "Nanotechnolgie appliquée aux composants", link: "/Courses/3TA/ean/nanocomposants" },
        { name: "Mécanique des fluides et machines hydrauliques", link: "/Courses/3TA/ean/MFMH" },
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
            'label': 'Elect',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'Nanotech',
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
                        <h1 style={{ textAlign: 'center' }}><strong> 3 Electronique Avancée et Nanotechnologies</strong> </h1>
                        <br />
                        <br />


                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong>Elec. Av. Appliquée à l'embarqué </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {Elect.map((Elect, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{Elect.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={Elect.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Module :Nanotech </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {Nanotech.map((Nanotech, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{Nanotech.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={Nanotech.link} className="inside-page__btn1">Accéder</Link></td>
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
export default EAN3;