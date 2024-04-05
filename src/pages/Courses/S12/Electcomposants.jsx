import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Electcomposants() {
    const [courses, setCourses] = useState([]);
    const [exams, setExams] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
            const filteredCourses = response.data.filter(course => (
                course.matiere === "composants" && course.examen === 0

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
                course.matiere === "composants" && course.examen === 1
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
                    <h1 style={{ textAlign: 'center' }}><strong>Electronique des composants</strong></h1>
                </div>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong>Cours et TD</strong></h1>
                    <ul style={{ textAlign: 'left', fontSize: '20px' }} >
                        {removeDuplicateNames(courses).map((name, index) => (
                            <li key={index}>
                                <strong> {name.substring(0, name.length - 4)} </strong>{/* Extract file name without ".pdf" */}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='container'>
                    <h1 style={{ textAlign: 'center' }}><strong>Ds et Examens</strong></h1>
                    <ul style={{ textAlign: 'left', fontSize: '20px' }}>
                        {removeDuplicateNames(exams).map((name, index) => (
                            <li key={index}>
                                <strong> {name.substring(0, name.length - 4)} </strong>{/* Extract file name without ".pdf" */}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </body>
    );
};

