import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function Sem21() {
    const matieres = [
        { name: "Recherche Opérationnelle 1", link: "/RO" },
        { name: "Processus Stochastiques", link: "/Courses/TA2/s1/stochastiques" },
        { name: "Calcul Scientifique", link: "/CS" },
        { name: "Intelligence Artificielle", link: "/Courses/TA2/s1/ai" },
        { name: "Outils numériques pour l'ingénieur 3 : Linux", link: "/Courses/TA2/s1/linux" },
        { name: "Résistance des matériaux", link: "/Courses/TA2/s1/rdm" },
        { name: "Transferts thermiques", link: "/Courses/TA2/s1/transferts" },
        { name: "Physique des Matériaux", link: "/Courses/TA2/s1/pdm" },
        { name: "Techniques de Traitement d'images", link: "/Traitement" },
        { name: "Fonctions de l’électronique", link: "/Courses/TA2/s1/electronique" },
        { name: "Anglais 3", link: "/Courses/TA2/s1/anglais" },
        { name: "Gestion des projets", link: "/Courses/TA2/s1/ges-proj" },
        { name: "Management des équipes", link: "/Courses/TA2/s1/manag-equip" },
        { name: "Langue :Allemand ou  Japonais ", link: "/Courses/TA2/s1/langue" }
    ];
    const columns = [
        {
            'label': 'Matieres',
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