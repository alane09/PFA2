import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function Sem21() {
    const matieres = [
        { name: "Recherche Opérationnelle 1", link: "/RO" },
        { name: "Processus Stochastiques", link: "/Stoch" },
        { name: "Calcul Scientifique", link: "/CS" },
        { name: "Intelligence Artificielle", link: "/Ai" },
        { name: "Outils numériques pour l'ingénieur 3 : Linux", link: "/Linux" },
        { name: "Résistance des matériaux", link: "/RDM" },
        { name: "Transferts thermiques", link: "/Transfert" },
        { name: "Physique des Matériaux", link: "/PDM" },
        { name: "Techniques de Traitement d'images", link: "/Traitement" },
        { name: "Fonctions de l’électronique", link: "/FctELect" },
        { name: "Anglais 3", link: "/Anglais3" },
        { name: "Gestion des projets", link: "/GestProj" },
        { name: "Management des équipes", link: "/ManagEquip" },
        { name: "Langue :Allemand ou  Japonais ", link: "/Langue" }
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
                        <h1 style={{ textAlign: 'center' }}><strong> Matières de  2ème année :Semestre 1</strong> </h1>
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
export default Sem21;