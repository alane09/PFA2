import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PDFView from '../../../../components/PdfViewer';
export default function Linux() {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "linux" && course.examen === 0 && course.id !== 254

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
                course.matiere === "linux" && course.examen === 1
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
                    <h1 style={{ textAlign: 'center' }}><strong> Outils numériques pour l'ingénieur 3 : Linux </strong></h1>
                </div>
                <br />
                <PDFView title="Cours et TD" items={courses} />
                <br />
                <PDFView title="Ds et Examens" items={exams} />
            </main>
        </body>
    );
};
