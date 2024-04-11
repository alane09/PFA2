import React, { useEffect, useState } from 'react';
import PDFView from '../../../components/PdfViewer';
import axios from 'axios';

const Optimisation = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "optimisation" && course.examen === 0

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
                course.matiere === "optimisation" && course.examen === 1
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
                    <h1 style={{ textAlign: 'center' }}><strong> Optimisation</strong></h1>
                </div>
                <PDFView title="Cours et TD" items={courses} />
                <PDFView title="Ds et Examens" items={exams} />

            </main>
        </body>
    );
};


export default Optimisation;
