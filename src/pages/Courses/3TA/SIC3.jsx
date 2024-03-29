import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SIC3() {
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
    const MdSIC2 = [
        { name: "Lean Management", link: "/Courses/3TA/sic/" },
        { name: "Big data : gestion et analyse des données massives (BGD)", link: "/Courses/3TA/sic/BGD" },
        { name: "Management Qualité Sécurité Environnement (QSE)", link: "/Courses/3TA/sic/QSE" },
        { name: "Gestion des effluents industriels", link: "/Courses/3TA/sic/effluents " },
        { name: "Gestion des risques industriels", link: "/Courses/3TA/sic/risques " },

    ]
    const MdSIC3 = [
        { name: "Supply Chain Management (SCM)", link: "/Courses/3TA/sic/SCM" },
        { name: "Management des opérations 2", link: "/Courses/3TA/sic/MO2" },
        { name: "Conception de Produits et de Processus", link: "/Courses/3TA/sic/ProduitsetProcessus " },
        { name: "ERP3", link: "/Courses/3TA/sic/ERP3 " },
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
            'label': 'MdSIC3',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'MdSIc2',
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
                        <h1 style={{ textAlign: 'center' }}><strong> 3 Systèmes industriels et compétitivité</strong> </h1>
                        <br />
                        <br />


                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong>Module SIC 2 :Performance des SystèmesIndustriels </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {MdSIC2.map((MdSIC2, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{MdSIC2.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={MdSIC2.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong>Module SIC 3 : Organisation de la chaine logistique </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {MdSIC3.map((MdSIC3, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{MdSIC3.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={MdSIC3.link} className="inside-page__btn1">Accéder</Link></td>
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
                                    <th scope="col" style={headerCellStyle}><strong>Accéder au cours</strong></th>


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
export default SIC3;