import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const PDFView = ({ title, items }) => {
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}><strong>{title}</strong></h1>
            <ul style={{ textAlign: 'left', fontSize: '20px' }}>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={`http://localhost:8080/api/exams/${item.identifier}`} target="_blank" rel="noopener noreferrer">
                            <FaFilePdf style={{ marginRight: '5px', color: 'black' }} /> {/* Change the color to black */}
                            <strong>{item.name.substring(0, item.name.length - 4)}</strong>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PDFView;
