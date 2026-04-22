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
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/Icons/whiteLinkedin.png`} alt="LinkedIn"/></a>
                <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png`} alt="GitHub"/></a>
                {/* <a href="https://www.facebook.com/profile.php?id=100006282198928" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/facebookIcon.png`} alt="Facebook"/></a> */}
                <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer"><img className="orcid-icon" src={`${process.env.PUBLIC_URL}/images/Icons/whiteorcid (1).png`} alt="ORCID"/></a>
            </div>
            
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