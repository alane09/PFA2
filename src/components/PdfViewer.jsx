import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const PDFView = ({ title, items }) => {
    return (
        <div className='container'>
            <h1 style={{ textAlign: 'center' }}><strong>{title}</strong></h1>
            {items.length === 0 ? (
                <div style={{ textAlign: 'center', fontSize: '18px', style: 'strong' }}>
                    <br />
                    <p><strong>Pas de fichiers disponibles pour le moment. Veuillez vérifier à nouveau ultérieurement.</strong></p>
                    <br />
                    <p><strong>Si vous avez des fichiers à ajouter, veuillez utiliser la fonction de  <a href="/file">téléchargement</a>.</strong></p>
                </div>
            ) : (
                <ul style={{ textAlign: 'left', fontSize: '20px' }}>
                    {items
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort items alphabetically by name
                        .map((item, index) => (
                            <li key={index}>
                                <a href={`http://localhost:8080/api/exams/${item.identifier}`} target="_blank" rel="noopener noreferrer">
                                    <FaFilePdf style={{ marginRight: '5px', color: 'black' }} />
                                    <strong>{item.name.substring(0, item.name.length - 4)}</strong>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};

export default PDFView;

