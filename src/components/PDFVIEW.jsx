import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PDF.css'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function PDFVIEW() {
    const [pdfFile, setPDFFILE] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);
    const fileType = ['application/pdf'];
    const newplugin = defaultLayoutPlugin();
    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFILE(e.target.result);
                }
                
                
            } else {
                setPDFFILE(null);
            }
            
        } else {
            console.log('Select your file');
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if (pdfFile !== null) {
                setViewPdf(pdfFile);
            } else {
                setViewPdf(null)
                console.log('Select your file');
            }

           
        }

        return (
            <body>
                <main>
                    <div className='container '>
                        <form onChange={handleSubmit}>
                            <input type="file" className='form-control' onChange={handleChange} />
                            <button type='submit ' className='btn btn-success'>View PDF</button>

                        </form>
                        <h2>
                            View PDF
                        </h2>
                        <div className='pdf-container'>
                            <Worker workerUrl='http://localhost:8080/api/courses'>
                                {viewPdf && <>
                                    <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
                                </>}
                                {!viewPdf && <>NO PDF</>}

                            </Worker>

                        </div>




                    </div>

                </main>
            </body>
        
            
        )
    }
}


export default PDFVIEW;
