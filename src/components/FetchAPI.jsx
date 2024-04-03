import React from 'react'
import { useState, useEffect } from 'react';

function FetchAPI() {
    const [exams, setExams] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/courses")
        .then((response) => response.json())    
            .then((data) => setExams(data)) 
            .catch((error) => console.error('Error fetching data:', error));
    },[])
    return (

      
        <div>
            <table>
                <ul>
                    {exams.map((list,index) => (
                        <li key={index}>{list.id}|{list.name}
                            
                        </li>
                    ))}
                </ul>
            </table>
    </div>
  )
}

export default FetchAPI;




