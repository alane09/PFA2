import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SETP3() {
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

    const MdSETP2 = [
        { name: "Système élecrtique des énergies renouvelables", link: "/SystRE" },
        { name: "Réseaux électriques intelligents (smart grid)", link: "/REI" },
        { name: "Audit énergétique et maitrise de l'énergie", link: "/Audit" },
        { name: "SME", link: "/SME" },
        { name: "Energétique Thermique des bâtiments et bâtiments HQE", link: "/Batiments" },
    ];

    const MdSETP3 = [
        { name: "Centrales solaires", link: "/Centrales" },
        { name: "Energie éolienne", link: "/Eolienne" },
        { name: "Biocarburants Avancés", link: "/Bio" },
        { name: "Valorisation énergétique de la biomasse", link: "/Biomasse" },
        { name: "Techniques nucléaires", link: "/Nucleaires" },
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