import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SIC2() {
    const commun = [
        { name: "Modélisation mathématique pour l'industrie 4.0", link: "/Modelisation" },
        { name: "Matériaux avancés et nanocomposite", link: "/Nano" },
        { name: "Capteurs et instrumentation", link: "/Capteurs" },
        { name: "Electronique pour les systèmes embarqués", link: "/ElectroniqueEmbarquee" },
        { name: "Automate programmable industriel", link: "/API" },
        { name: "Outils numériques pour l'ingénieur 4", link: "/Outils" },
        { name: "Anglais 4  ", link: "/Anglais" },
        { name: "Culture entrepreneuriale", link: "/Culture" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Langue" },
    ]
    const sic= [
        { name: "Manufacturing Execution System", link: "/Manufacturing" },
        { name: "Management des opérations 1", link: "/MO1" },
        { name: "Recherche Opérationnelle 2", link: "/RO2" },
        { name: "Six Sigma  ", link: "/Sixsigma" },
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
                        <h1 style={{ textAlign: 'center' }}><strong>  2ème année  Systèmes industriels et compétitivité</strong> </h1>
                        <br />
                        <br />


                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Matières : Option </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {sic.map((sic, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{sic.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={sic.link} className="inside-page__btn1">Accéder</Link></td>
                                    </tr>
                                ))}
                            </MDBTableBody>
                        </MDBTable>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Modules  Communs</strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder au cours</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {commun.map((commun, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{commun.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={commun.link} className="inside-page__btn1">Accéder</Link></td>
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
export default SIC2;