import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SIC3() {
    const Industrie4 = [
        { name: "Big data : General overview", link: "/BigData" },
        { name: "Management de l'innovation", link: "/Innovation" },
        { name: "IoT&Cloud Computing ", link: "/IOT" },
        { name: "Outils numériques pour l'ingénieur 5 ", link: "/Outils5" },
    ];

    const SOCIO = [
        { name: "Analyse Financière", link: "/AnFin" },
        { name: "Projet Professionnel Personnalisé ", link: "/PPP" },
        { name: "Anglais des Affaires", link: "/Anglais5" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Langue3" },
    ];
    const MdSIC2 = [
        { name: "Lean Management", link: "/Lean" },
        { name: "Big data : gestion et analyse des données massives (BGD)", link: "/BGD" },
        { name: "Management Qualité Sécurité Environnement (QSE)", link: "/QSE" },
        { name: "Gestion des effluents industriels", link: "/GEI " },
        { name: "Gestion des risques industriels", link: "/GRI " },

    ]
    const MdSIC3 = [
        { name: "Supply Chain Management (SCM)", link: "/SCM" },
        { name: "Management des opérations 2", link: "/MO2" },
        { name: "Conception de Produits et de Processus", link: "/CPP " },
        { name: "ERP3", link: "/ERP3 " },
    ]
   
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