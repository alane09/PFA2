import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function Sem21() {
    const matieres = [
        { name: "Recherche Opérationnelle 1", link: "/Courses/TA2/s1/ro" },
        { name: "Processus Stochastiques", link: "/Courses/TA2/s1/stochastiques" },
        { name: "Calcul Scientifique", link: "/Courses/TA2/s1/calculsc" },
        { name: "Intelligence Artificielle", link: "/Courses/TA2/s1/ai" },
        { name: "Outils numériques pour l'ingénieur 3 : Linux", link: "/Courses/TA2/s1/linux" },
        { name: "Résistance des matériaux", link: "/Courses/TA2/s1/rdm" },
        { name: "Transferts thermiques", link: "/Courses/TA2/s1/transferts" },
        { name: "Physique des Matériaux", link: "/Courses/TA2/s1/pdm" },
        { name: "Techniques de Traitement d'images", link: "/Courses/TA2/s1/trait" },
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