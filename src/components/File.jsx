import axios from 'axios';
import React, { useState } from 'react';
import './File.css';

function File() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [niveau, setNiveau] = useState(null);
    const [specialite, setSpecialite] = useState(null);
    const [matiere, setMatiere] = useState(null);
    const [type, setType] = useState('cours'); // Initialize with 'cours'
    const [semestre, setSemestre] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
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
            formData.append('exam', selectedFile);

            formData.append('file', selectedFile);
            formData.append('niveau', niveau);
            formData.append('specialite', specialite);
            formData.append('matiere', matiere);
            formData.append('semestre', semestre);
            formData.append('examen', type === 'cours' ? 0 : 1); // Set examen based on type selection
            formData.append('cours', type === 'cours' ? 1 : 0); // Set cours based on type selection

            const response = await axios.post('http://localhost:8080/api/exams', formData);

            console.log(response.data);
        } catch (error) {
            console.error('Error uploading file:', error.message);
        }
    };


    return (
        <div className='container'>
            <h1 className='header'>Ajouter un Cours/Td ou Ds/Examens</h1>
            <br />
            <br />
            <label className='label' htmlFor="file">Choisir le fichier:</label>
            <input className='input' type="file" id="file" onChange={handleFileChange} />
            <br />
            <label className='label' htmlFor="niveau">Niveau:</label>
            <input className='input' type="text" id="niveau" placeholder='Niveau' onChange={handleNiveauChange} />
            <br />
            <label className='label' htmlFor="semestre">Semestre:</label>
            <input className='input' type="text" id="semestre" placeholder='Semestre' onChange={handlesemestreChange} />
            <br />
            <label className='label' htmlFor="specialite">Choisir spécialité:</label>
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
                    <label htmlFor="matières">Choisir matière:</label>
                    <select name="matières" id="matières" onChange={handleMatiereChange}>
                        <option value="Analyse pour l’ingénieur">Analyse pour l’ingénieur</option>
                        <option value="Probabilités">Probabilités</option>
                        <option value="Outils numériques pour l'ingénieur 1 :Matlab">Outils numériques pour l'ingénieur 1 :Matlab</option>
                        <option value="Algorithmique et Programmation">Algorithmique et Programmation</option>
                        <option value="Physique pour l'ingénieur">Physique pour l'ingénieur</option>
                        <option value="Mécanique des fluides">Mécanique des fluides</option>
                        <option value="Circuits et systèmes électriques">Circuits et systèmes électriques</option>
                        <option value="Métrologie pour l'ingénieur">Métrologie pour l'ingénieur</option>
                        <option value="Semi-conducteurs">Semi-conducteurs</option>
                        <option value="Systèmes mécaniques pour la Robotique">Systèmes mécaniques pour la Robotique</option>
                        <option value="Anglais 1">Anglais 1</option>
                        <option value="Comptabilité et Gestion d’entreprise">Comptabilité et Gestion d’entreprise</option>
                        <option value="Techniques de communication">Techniques de communication</option>
                    </select>
                </div>
            )}
            {specialite === "1TA S2" && (
                <div>
                    <label htmlFor="matières">Choisir matière:</label>
                    <select name="matières" id="matières" onChange={handleMatiereChange}>
                        <option value="Analyse numérique">Analyse numérique</option>
                        <option value="Optimisation ">Optimisation </option>
                        <option value="Statistiques pour l'ingénieur">Statistiques pour l'ingénieur</option>
                        <option value="Introduction à l'ERP">Introduction à l'ERP</option>
                        <option value="Programmation orientée objet">Programmation orientée objet</option>
                        <option value="Outils numériques pour l'ingénieur 2 : CATIA ">Outils numériques pour l'ingénieur 2 : CATIA </option>
                        <option value="Thermodynamique">Thermodynamique pour l'ingénieur</option>
                        <option value="Electronique Des Composants ">Electronique Des Composants</option>
                        <option value="Asservissement et Régulation Industrielle">Asservissement et Régulation Industrielle</option>
                        <option value="Anglais 2">Anglais 2</option>
                        <option value="Droit">Droit </option>
                        <option value="Philo pour l'ingénieur">Philo pour l'ingénieur</option>
                        <option value="Economie et économie verte">Economie et économie verte</option>
                    </select>
                </div>
            )}
            {specialite === "2TA" && (
                <div>
                    <label htmlFor="matières">Choisir matière:</label>
                    <select name="matières" id="matières" onChange={handleMatiereChange}>
                        <option value="Recherche Opérationnelle 1">Recherche Opérationnelle 1</option>
                        <option value="Processus Stochastiques">Processus Stochastiques</option>
                        <option value="Calcul Scientifique">Calcul Scientifique</option>
                        <option value="Intelligence Artificielle">Intelligence Artificielle</option>
                        <option value="Outils numériques pour l'ingénieur 3 : Linux">Outils numériques pour l'ingénieur 3 : Linux</option>
                        <option value="Résistance des matériaux">Résistance des matériaux</option>
                        <option value="Transferts thermiques">Transferts thermiques</option>
                        <option value="Physique des Matériaux">Physique des Matériaux</option>
                        <option value="Techniques de Traitement d'images">Techniques de Traitement d'images</option>
                        <option value="Fonctions de l’électronique">Fonctions de l’électronique</option>
                        <option value="Anglais 3">Anglais 3</option>
                        <option value="GestProj">Gestion des projets</option>
                        <option value="Management des équipes">Management des équipes</option>
                        <option value="Langue :Allemand ou  Japonais">Langue :Allemand ou  Japonais</option>
                    </select>
                </div>
            )}
            <label className='label' htmlFor="type">Type de fichier:</label>
            <select className='select' id="type" onChange={handleTypeChange}>
                <option value="cours">Cours</option>
                <option value="exam">Examen</option>
            </select>
            <br />
            <button className='button' onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default File;
