import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function SIC2() {
    const commun = [
        { name: "Modélisation mathématique pour l'industrie 4.0", link: "/Courses/TA2/S2/commun/modelisation" },
        { name: "Matériaux avancés et nanocomposite", link: "/Courses/TA2/S2/commun/nano" },
        { name: "Capteurs et instrumentation", link: "/Courses/TA2/S2/commun/cap&inst" },
        { name: "Electronique pour les systèmes embarqués", link: "/Courses/TA2/S2/commun/electronique" },
        { name: "Automate programmable industriel", link: "/Courses/TA2/S2/commun/API" },
        { name: "Outils numériques pour l'ingénieur 4", link: "/Courses/TA2/S2/commun/outils" },
        { name: "Anglais 4  ", link: "/Courses/TA2/S2/commun/anglais" },
        { name: "Culture entrepreneuriale", link: "/Courses/TA2/S2/commun/culture" },
        { name: "Langue: Allemand ou  Jappnais ", link: "/Courses/TA2/S2/commun/langue" },
    ]
    const sic= [
        { name: "Manufacturing Execution System", link: "/Courses/TA2/S2/sic/manufacturing" },
        { name: "Management des opérations 1", link: "/Courses/TA2/S2/sic/MO1" },
        { name: "Recherche Opérationnelle 2", link: "/Courses/TA2/S2/sic/ro2" },
        { name: "Six Sigma  ", link: "/Courses/TA2/S2/sic/6sigma" },
    ]
    const columns = [
        {
            'label': 'commun',
            'field': 'name',
            'sort': 'asc'
        },
        {
            'label': 'sic',
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