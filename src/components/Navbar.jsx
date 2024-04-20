import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import PDFViewer from './PdfViewer'; // Import the PDFViewer component
import SearchBox from 'react-search-box'; // Import the SearchBox component
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // const [showDropdown, setShowDropdown] = useState(false); // Remove this line
    const [pdfUrl] = useState(null); // State to store PDF URL for viewing

    const handleSearchInputChange = (value) => {
        setSearchQuery(value);
        search(value);
    };

    const fetchData = async (query) => {
        try {
            const response = await fetch(`http://localhost:8080/api/exams/search?query=${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSearchResults(data);
            // setShowDropdown(true); // Remove this line
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const search = (query) => {
        if (query.trim() === '') {
            setSearchResults([]);
            // setShowDropdown(false); // Remove this line
            return;
        }
        fetchData(query);
    };

    // Function to handle click on a search result
    // const handleSearchResultClick = (url) => { // Remove this function
    //     setPdfUrl(url);
    // };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                <div className="imageBox">
                    <a href="index.html">
                        <img src="logo.png" alt="" className="logo" style={{ marginLeft: '1rem', width: '300px', height: '100' }} />
                    </a>
                </div>
                <div className="search-container">
                    <SearchBox
                        placeholder="Rechercher ..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link"><strong>ACCEUIL</strong></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomDropdownToggle} id="dropdown-basic">
                                    <li className="item"><Link to='/coursesexams' className="link"><strong>COURS & EXAMENS</strong></Link> </li>

                                </Dropdown.Toggle>
                                <Dropdown.Menu as={CustomDropdownMenu}>
                                    <Dropdown.Item href="/S11">1TA S1 </Dropdown.Item>
                                    <Dropdown.Item href="/S12">1TA S2 </Dropdown.Item>
                                    <Dropdown.Item href="/Sem1">2TA</Dropdown.Item>
                                    <Dropdown.Item href="/SETP2">2 SETP</Dropdown.Item>
                                    <Dropdown.Item href="/SIC2">2 SIC </Dropdown.Item>
                                    <Dropdown.Item href="/EAN2">2 EAN </Dropdown.Item>
                                    <Dropdown.Item href="SETP3">3 SETP</Dropdown.Item>
                                    <Dropdown.Item href="/SIC3">3 SIC </Dropdown.Item>
                                    <Dropdown.Item href="/EAN3">3 EAN  </Dropdown.Item>
                                    {/* Add more Dropdown.Item components for other levels */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <Link to='/file' className="nav-link"><strong>UPLOAD</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/file' className="nav-link"><strong>UPLOAD</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link"><strong>A PROPOS</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link"><strong>CONTACT</strong></Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Render PDFView component only if search results are available */}
            {searchResults.length > 0 && (
                <PDFViewer title="Search Results" items={searchResults} />
            )}

            {/* Render PDFViewer component if pdfUrl is set */}
            {pdfUrl && <PDFViewer url={pdfUrl} />}
        </div>
    );
}
// Custom DropdownToggle to open dropdown on hover
const CustomDropdownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        onMouseEnter={(e) => onClick(e)}
        className="nav-link"
    >
        {children}
    </button>
));

// Custom DropdownMenu to handle the hover behavior
const CustomDropdownMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [show, setShow] = React.useState(false);

    return (
        <div
            ref={ref}
            style={style}
            className={`${className} ${show ? 'show' : ''}`}
            aria-labelledby={labeledBy}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
        </div>
    );
});

export default Navbar;
