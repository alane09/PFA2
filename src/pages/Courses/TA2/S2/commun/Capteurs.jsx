import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import PDFView from '../../../../../components/PdfViewer';
//exception cours=1 examen=0
const Capteurs = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "capteur" && course.examen === 1

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
                course.matiere === "capteur" && course.examen === 0
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
                    <h1 style={{ textAlign: 'center' }}><strong> Capteurs et instrumentation</strong></h1>
                </div>
                <PDFView title="Cours et TD" items={courses} />
                <PDFView title="Ds et Examens" items={exams} />

            </main>
        </body>
    );
};

export default Capteurs;