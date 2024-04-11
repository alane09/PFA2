import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './File.css';

function File() {
    const [selectedFiles, setSelectedFiles] = useState([]); // Change state to hold an array of files
    const [niveau, setNiveau] = useState(null);
    const [specialite, setSpecialite] = useState(null);
    const [matiere, setMatiere] = useState(null);
    const [type, setType] = useState('cours'); // Initialize with 'cours'
    const [semestre, setSemestre] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFiles([...event.target.files]); // Set the selected files directly
    };

    const handleNiveauChange = (event) => {
        setNiveau(event.target.value);
    };

    const handlespecialiteChange = (event) => {
        setSpecialite(event.target.value);
    };

    const handleMatiereChange = (event) => {
        setMatiere(event.target.value);
    };

    const handleTypeChange = (event) => {
        setType(event.target.value); // Update type based on selected option
    };

    const handlesemestreChange = (event) => {
        setSemestre(event.target.value);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            selectedFiles.forEach((file) => formData.append('exam', file)); // Append all files to form data

            formData.append('niveau', niveau);
            formData.append('specialite', specialite);
            formData.append('matiere', matiere);
            formData.append('semestre', semestre);
            formData.append('examen', type === 'cours' ? 0 : 1); // Set examen based on type selection
            formData.append('cours', type === 'cours' ? 1 : 0); // Set cours based on type selection

            const response = await axios.post('http://localhost:8080/api/exams', formData);

            console.log(response.data);

            // Show success notification
            toast.success('Files uploaded successfully');
        } catch (error) {
            console.error('Error uploading files:', error.message);

            // Show error notification
            toast.error('Error uploading files');
        }
    };

    return (
        <body>
            <main>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong> File Upload </strong></h1>
                </div>
                <div className='container'>
                    <h1 className='header'><strong>Ajouter un Cours ou Examens</strong></h1>

                    <br />
                    <br />
                    <label className='label' htmlFor="file"><strong>Choisir les fichiers:</strong></label>
                    <input className='input' type="file" id="file" onChange={handleFileChange} multiple />
                    <br />
                    <label className='label' htmlFor="niveau"><strong>Niveau:</strong></label>
                    <input className='input' type="text" id="niveau" placeholder='Niveau' onChange={handleNiveauChange} />
                    <br />
                    <label className='label' htmlFor="semestre"><strong>Semestre:</strong></label>
                    <input className='input' type="text" id="semestre" placeholder='Semestre' onChange={handlesemestreChange} />
                    <br />
                    <label className='label' htmlFor="specialite"><strong>Choisir spécialité:</strong></label>
                    <select className='select' name="specialite" id="specialite" onChange={handlespecialiteChange}>
                        <option value="1TA S1">1 TA S1 </option>
                        <option value="1TA S2">1 TA S2 </option>
                        <option value="2TA">2 TA S1</option>
                        <option value="2SIC">2 SIC</option>
                        <option value="2EAN">2 EAN</option>
                        <option value="2SETP">2 SETP</option>
                        <option value="3SIC">3 SIC</option>
                        <option value="3EAN">3 EAN</option>
                        <option value="3SETP">3 SETP</option>
                    </select>
                    <br />
                    {specialite === "1TA S1" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="Analyse">Analyse pour l’ingénieur</option>
                                <option value="matlab">Outils numériques pour l'ingénieur 1 :Matlab</option>
                                <option value="proba">Probabilités</option>
                                <option value="Algo">Algorithmique et Programmation</option>
                                <option value="phy">Physique pour l'ingénieur</option>
                                <option value="meca fluid">Mécanique des fluides</option>
                                <option value="circuits">Circuits et systèmes électriques</option>
                                <option value="metrologie">Métrologie pour l'ingénieur</option>
                                <option value="semi">Semi-conducteurs</option>
                                <option value="robotique">Systèmes mécaniques pour la Robotique</option>
                                <option value="anglais1">Anglais 1</option>
                                <option value="compta">Comptabilité et Gestion d’entreprise</option>
                                <option value="techcomm">Techniques de communication</option>
                            </select>
                        </div>
                    )}
                    {specialite === "1TA S2" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="annum">Analyse numérique</option>
                                <option value="optimisation ">Optimisation </option>
                                <option value="ERP">Introduction à l'ERP</option>
                                <option value="stat">Statistiques pour l'ingénieur</option>
                                <option value="POO">Programmation orientée objet</option>
                                <option value="CATIA">Outils numériques pour l'ingénieur 2 : CATIA </option>
                                <option value="thermo">Thermodynamique pour l'ingénieur</option>
                                <option value="composants ">Electronique Des Composants</option>
                                <option value="asservi">Asservissement et Régulation Industrielle</option>
                                <option value="Anglais2">Anglais 2</option>
                                <option value="droit">Droit </option>
                                <option value="Philo">Philo pour l'ingénieur</option>
                                <option value="Eco">Economie et économie verte</option>
                            </select>
                        </div>
                    )}
                    {specialite === "2TA" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="ro">Recherche Opérationnelle 1</option>
                                <option value="stoch">Processus Stochastiques</option>
                                <option value="Ai">Intelligence Artificielle </option>
                                <option value="Calcul Scientifique">Calcul Scientifique</option>
                                <option value="linux">Outils numériques pour l'ingénieur 3 : Linux</option>
                                <option value="Résistance des matériaux">Résistance des matériaux</option>
                                <option value="Transferts thermiques">Transferts thermiques</option>
                                <option value="Physique des Matériaux">Physique des Matériaux</option>
                                <option value="Techniques de Traitement d'images">Techniques de Traitement d'images</option>
                                <option value="fctelect">Fonctions de l’électronique</option>
                                <option value="Anglais3">Anglais 3</option>
                                <option value="GestProj">Gestion des projets</option>
                                <option value="mangement">Management des équipes</option>
                                <option value="langue">Langue :Allemand ou  Japonais</option>
                            </select>
                        </div>
                    )}
                    {specialite === "2EAN" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="conception">Conception des systèmes électroniques</option>
                                <option value="Technologies de fabrication et MEMS">Technologies de fabrication et MEMS</option>
                                <option value="hyper">Électronique hyperfréquence</option>
                                <option value="nanoComposites">Fabrication et techniques de caractérisation de nanomatériaux et nanocomposites</option>

                                <option value="Outils numériques pour l'ingénieur 4">Outils numériques pour l'ingénieur 4</option>
                                <option value="modelisation">Modélisation mathématique pour l'industrie</option>
                                <option value="nano">Matériaux avancés et nanocomposite</option>
                                <option value="capteur">Capteurs et instrumentation</option>
                                <option value="electrembar">Electronique pour les systèmes embarqués</option>
                                <option value="api">Automate programmable industriel</option>
                                <option value="Anglais4">Anglais</option>
                                <option value="culture">Culture entrepreneuriale</option>
                                <option value="langue2">Langue :Allemand ou  Japonais</option>

                            </select>
                        </div>

                    )}
                    {specialite === "2SETP" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="Conversion de l'énergie thermique">Conversion de l'énergie thermique </option>
                                <option value="Machines électriques et convertisseurs statiques">Machines électriques et convertisseurs statiques </option>
                                <option value="Mécanique des fluides et machines hydrauliques">Mécanique des fluides et machines hydrauliques </option>
                                <option value="Bilan et dimensionnement des systèmes énergétiques">Bilan et dimensionnement des systèmes énergétiques</option>
                                
                                <option value="Outils numériques pour l'ingénieur 4">Outils numériques pour l'ingénieur 4</option>
                                <option value="modelisation">Modélisation mathématique pour l'industrie</option>
                                <option value="nano">Matériaux avancés et nanocomposite</option>
                                <option value="capteur">Capteurs et instrumentation</option>
                                <option value="electrembar">Electronique pour les systèmes embarqués</option>
                                <option value="api">Automate programmable industriel</option>
                                <option value="Anglais4">Anglais</option>
                                <option value="culture">Culture entrepreneuriale</option>
                                <option value="langue2">Langue :Allemand ou  Japonais</option>
                            </select>
                        </div>
                    )}
                    {specialite === "2SIC" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="Manufacturing Execution System">Manufacturing Execution System</option>
                                <option value="RO2">RO2</option>
                                <option value="Management des opérations 1">Management des opérations</option>
                                <option value="Six Sigma">Six Sigma</option>
                                <option value="modelisation">Modélisation mathématique pour l'industrie</option>
                                
                                <option value="Outils numériques pour l'ingénieur 4">Outils numériques pour l'ingénieur 4</option>
                                <option value="nano">Matériaux avancés et nanocomposite</option>
                                <option value="capteur">Capteurs et instrumentation</option>
                                <option value="electrembar">Electronique pour les systèmes embarqués</option>
                                <option value="api">Automate programmable industriel</option>
                                <option value="Anglais4">Anglais</option>
                                <option value="culture">Culture entrepreneuriale</option>
                                <option value="langue2">Langue :Allemand ou  Japonais</option>
                            </select>
                        </div>
                    )}
                    {specialite === "3EAN" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="bigdata">Big data : General overview</option>
                                <option value="innovation">Management de l'innovation</option>
                                <option value="iot">IoT&Cloud Computing</option>
                                <option value="outils5">Outils numériques pour l'ingénieur 5</option>
                                <option value="anfin">Analyse Financière</option>
                                <option value="PPP">Projet Professionnel Personnalisé</option>
                                <option value="anglais5">Anglais des Affaires</option>
                                <option value="langue3">Langue Allemande ou Japonaise</option>
                                <option value="FPGA">Architecture des systèmes reconfigurables (FPGA et SOC)</option>
                                <option value="codec">Traitement de vidéo (Codec)</option>
                                <option value="Robotique">Robotique</option>
                                <option value="interfacage">Interfaçage et communication des systèmes embarqués temps réel</option>
                                <option value="conceptionembarque">Méthodologies de conception des circuits numériques embarqués</option>
                                <option value="graph">Programmation Graphique</option>
                                <option value="micro">Modélisation des microsystèmes</option>
                                <option value="nanocomp">Nanotechnolgie appliquée aux composants</option>
                            </select>
                        </div>
                    )}
                    {specialite === "3SIC" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                
                                <option value="bigdata">Big data : General overview</option>
                                <option value="innovation">Management de l'innovation</option>
                                <option value="iot">IoT&Cloud Computing</option>
                                <option value="anfin">Analyse Financière</option>
                                <option value="PPP">Projet Professionnel Personnalisé</option>
                                <option value="anglais5">Anglais des Affaires</option>
                                <option value="langue3">Langue Allemande ou Japonaise</option>
                                <option value="lean">Lean Management</option>
                                <option value="BGD">Big data : gestion et analyse des données massives (BGD)</option>
                                <option value="QSE">Management Qualité Sécurité Environnement (QSE)</option>
                                <option value="GEI">Gestion des effluents industriels</option>
                                <option value="GRI">Gestion des risques industriels</option>
                                <option value="SCM">Supply Chain Management (SCM)</option>
                                <option value="MO2">Management des opérations 2</option>
                                <option value="CPP">Conception de Produits et de Processus</option>
                                <option value="ERP3">ERP 3</option>
                            </select>
                        </div>
                    )}
                    {specialite === "3SETP" && (
                        <div>
                            <label htmlFor="matières"><strong>Choisir matière:</strong></label>
                            <select name="matières" id="matières" onChange={handleMatiereChange}>
                                <option value="bigdata">Big data : General overview</option>
                                <option value="innovation">Management de l'innovation</option>
                                <option value="iot">IoT&Cloud Computing</option>
                                <option value="outils5">Outils numériques pour l'ingénieur 5</option>
                                <option value="anfin">Analyse Financière</option>
                                <option value="PPP">Projet Professionnel Personnalisé</option>
                                <option value="anglais5">Anglais des Affaires</option>
                                <option value="langue3">Langue Allemande ou Japonaise</option>
                                <option value="SERE">Système élecrtique des énergies renouvelables</option>
                                <option value="REI">Réseaux électriques intelligents (smart grid)</option>
                                <option value="Audit">Audit énergétique et maitrise de l'énergie</option>
                                <option value="SME">SME</option>
                                <option value="HQE">Energétique Thermique des bâtiments et bâtiments HQE</option>
                                <option value="Csolaire">Centrales solaires</option>
                                <option value="éolienne">Energie éolienne</option>
                                <option value="Biocar">Biocarburants Avancés**</option>
                                <option value="biomasse**">Valorisation énergétique de la biomasse**</option>
                                <option value="nucleaires">Techniques nucléaires**</option>
                            </select>
                        </div>
                    )}




                    <label className='label' htmlFor="type"><strong>Type de fichier:</strong></label>
                    <select className='select' id="type" onChange={handleTypeChange}>
                        <option value="cours">Cours</option>
                        <option value="exam">Examen</option>
                    </select>
                    <br />
                    <button className='button' onClick={handleUpload}><strong>Upload</strong></button>
                </div>
            </main>
            <ToastContainer />
        </body>
    );
}

export default File;
