import React, {useState, useEffect} from 'react';
import '../CSS/Header.css';

function Header({ isDarkMode, setIsDarkMode }) {

    const [isNavOpen, setNavOpen] = useState(false);
    // const [isDarkMode, setIsDarkMode] = useState(true);
    // relocated to app.js

    const toggleNav = () => setNavOpen(!isNavOpen);

    // Once an item is clicked on, it closes the nav
    const closeNav = () => setNavOpen(false);

    useEffect(() => {
        // console.log("Dark mode is:", isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <header className="header">
            <nav>
                <button 
                    className="nav-toggle" 
                    onClick={toggleNav}
                    aria-expanded={isNavOpen}
                    aria-controls="nav-menu"
                >
                    {/* If the Nav is open, it changes the hamburger to an X */}
                    {isNavOpen ? '✕' : '☰'}
                </button>
                <ul id="nav-menu" className={isNavOpen ? "open" : ""}>
                    <li><a href="#home" onClick={closeNav}>Home</a></li>
                    <li><a href="#about" onClick={closeNav}>About</a></li>
                    <li><a href="#publications" onClick={closeNav}>Publications</a></li>
                    <li><a href="#projects" onClick={closeNav}>Projects</a></li>
                    {/* <li><a href="#gallery" onClick={closeNav}>Gallery</a></li> */}
                    <li><a href="#contact" onClick={closeNav}>Contact</a></li>
                </ul>
            </nav>

            <div className={`theme-switch-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
                <button 
                    className="theme-switch-track" 
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    aria-label="Toggle theme"
                >
                    <div className="theme-switch-thumb"></div>
                </button>
            </div>

        </header>
    );
}

export default Header; 