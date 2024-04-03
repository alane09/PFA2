import axios from 'axios';
import React, { useState } from 'react';

function UploadFile() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            // Create a FormData object to send the file
            const formData = new FormData();
            formData.append('exam', selectedFile);

            // Make the POST request to your Spring Boot endpoint
            const response = await axios.post('http://localhost:8080/api/courses', formData);

            // Handle the response as needed
            console.log("File ", response.data);
            alert("File added successfully!");
        } catch (error) {
            // Handle errors
            console.error('Error uploading exam:', error.message);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />


            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadFile;
