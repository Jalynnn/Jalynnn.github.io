import React, { useState } from 'react';
import '../CSS/header.css';

function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!isNavOpen);

    return (
        <header className="header">
            <nav>
                <button 
                    className="nav-toggle" 
                    onClick={toggleNav}
                    aria-expanded={isNavOpen}
                    aria-controls="nav-menu"
                >
                    ☰
                </button>
                <ul id="nav-menu" className={isNavOpen ? "open" : ""}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#publications">Publications</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 