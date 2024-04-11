import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function S12() {
    const matieres = [
        { name: "Analyse numérique", link: "/AN" },
        { name: "Optimisation ", link: "/Optimisation " },
        { name: "Statistiques pour l'ingénieur ", link: "/Stat" },
        { name: "Introduction à l'ERP ", link: "/Courses/S12/erp" },
        { name: "Programmation orientée objet ", link: "/Java" },
        { name: "Outils numériques pour l'ingénieur 2 : CATIA ", link: "/Courses/S12/catia" },
        { name: "Thermodynamique pour l'ingénieur", link: "/Thermodynamique" },
        { name: "Electronique des composants", link: "/Electcomposants" },
        { name: "Asservissement et Régulation Industrielle", link: "/Asservissement" },
        { name: "Anglais 2", link: "/Anglais2" },
        { name: "Droit ", link: "/Droit " },
        { name: "Philo pour l'ingénieur ", link: "/Philo" },
        { name: "Economie et économie verte", link: "/Ecoverte" },
    ];
  
    const headerCellStyle = {
        textAlign: 'center',
        border: '0.5px solid black',
        fontSize: '1.5rem',
        padding: '1cm'
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
                        <h1 style={{ textAlign: 'center' }}><strong> Matières de  1ère année :Semestre 2</strong> </h1>
                        <br />
                        <br />
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Matières </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens</strong></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody >
                                {matieres.map((matiere, index) => (
                                    <tr key={index}>
                                        <td style={rowCellStyle}><strong>{matiere.name}</strong></td>
                                        <td style={rowCellStylebutton}><Link to={matiere.link} className="inside-page__btn1">Accéder</Link></td>
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
export default S12;
