import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import PDFView from '../../../../components/PdfViewer';
const Outils5 = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "outils5" && course.examen === 0

            ));
            setCourses(filteredCourses);
        } catch (error) {
            console.error('Error getting courses:', error.message);
        }
    };

    const getExams = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredExams = response.data.filter(course => (
                course.matiere === "outils5" && course.examen === 1
            ));
            setExams(filteredExams);
        } catch (error) {
            console.error('Error getting exams:', error.message);
        }
    };

 

    useEffect(() => {
        getCourses();
        getExams();
    }, []);

    return (
        <body>
            <main>
               
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong>Outils numériques pour l'ingénieur 5 :</strong></h1>
                    <h2 style={{ textAlign: 'left' }}><strong>Pour 3 EAN : JAVA Embarqué</strong></h2>

                    <h2 style={{ textAlign: 'left' }}><strong>Pour 3 SETP : RETScreen</strong></h2>



                </div>
                <PDFView title="Cours et TD" items={courses} />
                <PDFView title="Ds et Examens" items={exams} />

            </main>
        </body>
    );
};

export default Outils5;