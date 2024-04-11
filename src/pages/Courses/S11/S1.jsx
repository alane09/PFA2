import React from "react";
import { Link } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
function S11() {
    const matieres = [
        { name: "Analyse pour l’ingénieur", link: "/Analyse" },
        { name: "Probabilités", link: "/Probabilité" },
        { name: "Outils numériques pour l'ingénieur 1 :Matlab ", link: "/Matlab" },
        { name: "Algorithmique et Programmation ", link: "/Algo" },
        { name: "Physique pour l'ingénieur", link: "/Physique" },
        { name: "Mécanique des fluides", link: "/MecaniqueFluides" },
        { name: "Circuits et systèmes électriques", link: "/CircuitsElectriques" },
        { name: "Métrologie pour l'ingénieur", link: "/Metrologie" },
        { name: "Semi-conducteurs", link: "/SemiConducteurs" },
        { name: "Systèmes mécaniques pour la Robotique", link: "/SystemesMecaniques" },
        { name: "Anglais 1", link: "/Anglais1" },
        { name: "Comptabilité et Gestion d’entreprise", link: "/ComptaGest" },
        { name: "Techniques de communication", link: "/Communication " },
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
                        <h1 style={{ textAlign: 'center' }}><strong> Matières de  1ère année :Semestre 1</strong> </h1>
                      <br />
                        <br />
                        
                        
                        <MDBTable bordered borderColor="blue" style={{ margin: 'auto' }}>
                            <MDBTableHead>
                                <tr>
                                    <th scope="col" style={headerCellStyle}><strong> Matières </strong></th>
                                    <th scope="col" style={headerCellStyle}><strong>Accéder aux Cours & Examens  </strong></th>
                                    

                                    
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
export default S11;