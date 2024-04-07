import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PDFView  from '../../../components/PdfViewer';

const Algo = () => {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "Algo" && course.examen === 0
            ));
            const filteredExams = response.data.filter(course => (
                course.matiere === "Algo" && course.examen === 1
            ));
            setCourses(filteredCourses);
            setExams(filteredExams);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <main>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong>Algorithmique et Programmation</strong></h1>
                </div>
                <PDFView title="Cours et TD" items={courses} />
                <PDFView title="Ds et Examens" items={exams} />

            </main>
        </div>
    );
};

export default Algo;
