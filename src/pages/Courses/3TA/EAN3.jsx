import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function EAN3() {
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
    const Elect = [
        { name: "Architecture des systèmes reconfigurables (FPGA et SOC …)", link: "/FPGA" },
        { name: "Traitement de vidéo (Codec)**", link: "/Video" },
        { name: "Interfaçage et communication des systèmes embarqués temps réel", link: "/Interfacage" },
        { name: "Méthodologies de conception des circuits numériques embarqués", link: "/ConceptionEmbarque" },
        { name: "Programmation Graphique", link: "/Graph" },
    ];

    const Nanotech = [
        { name: "Modélisation des microsystèmes", link: "/Micro" },
        { name: "Nanotechnologie appliquée aux composants", link: "/NanoComp" },
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
                    <div className="container">
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
                            <MDBTableBody>
                                {Elect.map((Elect, index) => (
                                    <tr key={Elect.name + index}>
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
                            <MDBTableBody>
                                {Nanotech.map((Nanotech, index) => (
                                    <tr key={Nanotech.name + index}>
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
                            <MDBTableBody>
                                {Industrie4.map((Industrie4, index) => (
                                    <tr key={Industrie4.name + index}>
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
                            <MDBTableBody>
                                {SOCIO.map((SOCIO, index) => (
                                    <tr key={`${SOCIO.name}-${index}`}>
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