import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function S12() {
    const matieres = [
        { name: "Analyse numérique", link: "/Courses/S12/analyse2" },
        { name: "Optimisation ", link: "/Courses/S12/optimisation " },
        { name: "Statistiques pour l'ingénieur ", link: "/Courses/S12/stat" },
        { name: "Introduction à l'ERP ", link: "/Courses/S12/erp" },
        { name: "Programmation orientée objet ", link: "/Courses/S12/java" },
        { name: "Outils numériques pour l'ingénieur 2 : CATIA ", link: "/Courses/S12/catia" },
        { name: "Thermodynamique pour l'ingénieur", link: "/Courses/S12/thermo" },
        { name: "Electronique des composants", link: "/Courses/S12/electcomposants" },
        { name: "Asservissement et Régulation Industrielle", link: "/Courses/S12/asservi " },
        { name: "Anglais 2", link: "/Courses/S12/anglais-2" },
        { name: "Droit ", link: "/Courses/S12/droit " },
        { name: "Philo pour l'ingénieur ", link: "/Courses/S12/philo" },
        { name: "Economie et économie verte", link: "/Courses/S12/ecoverte" },
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
