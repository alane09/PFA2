import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function Setp2() {
    const commun = [
        { name: "Modélisation mathématique pour l'industrie 4.0", link: "/Modelisation"},
        { name: "Matériaux avancés et nanocomposite", link: "/Nano" },
        { name: "Capteurs et instrumentation", link: "/Capteurs"},
        { name: "Electronique pour les systèmes embarqués", link: "/ElectroniqueEmbarquee"},
        { name: "Automate programmable industriel", link: "/API" },
        { name: "Outils numériques pour l'ingénieur 4", link: "/Outils" },
        { name: "Anglais 4  ", link: "/Anglais"},
        { name: "Culture entrepreneuriale", link:"/Culture" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Langue"},
    ]
    const setp = [
        { name: "Conversion de l'énergie thermique", link: "/Conversion" },
        { name: "Machines électriques et convertisseurs statiques", link: "/MEconvert" },
        { name: "Mécanique des fluides et machines hydrauliques", link: "/MFMH" },
        { name: "Bilan et dimensionnement des systèmes énergétiques", link: "/BDSE" },
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
                        <h1 style={{ textAlign: 'center' }}><strong> 2ème année  Systèmes Energétiques et Technologies Propres </strong> </h1>
                        <br />
                        <br />


                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Matières : Option  </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>


                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {setp.map((setp, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{setp.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={setp.link} className="inside-page__btn1">Accéder</Link></td>
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
export default Setp2;