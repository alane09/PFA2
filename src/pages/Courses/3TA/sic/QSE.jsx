import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import PDFView from '../../../../components/PdfViewer';
const QSE = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "QSE" && course.examen === 0

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
                course.matiere === "QSE" && course.examen === 1
            ));
            setExams(filteredExams);
        } catch (error) {
            console.error('Error getting exams:', error.message);
        }
    };

    const removeDuplicateNames = (arr) => {
        const uniqueNames = [];
        const seen = {};
        arr.forEach(course => {
            const name = course.name.toUpperCase(); // Convert name to uppercase
            if (!seen[name]) {
                seen[name] = true;
                uniqueNames.push(name);
            }
        });
        return uniqueNames.sort(); // Sort unique names alphabetically
    };

    useEffect(() => {
        getCourses();
        getExams();
    }, []);

    return (
        <body>
            <main>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong> Management Qualité Sécurité Environnement (QSE)</strong></h1>
                </div>
                <PDFView title="Cours et TD" items={courses} />
                <PDFView title="Ds et Examens" items={exams} />

            </main>
        </body>
    );
};

export default QSE;