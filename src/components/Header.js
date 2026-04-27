import React, {useState, useEffect} from 'react';
import '../CSS/header.css';

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

//     return (
//         <header className="header">

//             {/* ================================== SOCIAL ICONS ================================== */}

//             <div className="social-icons">
//                 {/* LinkedIn Icon Toggle */}
//                 <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer">
//                     <img 
//                         className="linkedin-icon" 
//                         src={isDarkMode 
//                             ? `${process.env.PUBLIC_URL}/images/Icons/whiteLinkedin.png` 
//                             : `${process.env.PUBLIC_URL}/images/Icons/Linkedin_circle_black-512.png`
//                         } 
//                         alt="LinkedIn"
//                     />
//                 </a>

//                 {/* GitHub Icon Toggle */}
//                 <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer">
//                     <img 
//                         src={isDarkMode 
//                             ? `${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png` 
//                             : `${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`
//                         } 
//                         alt="GitHub"
//                     />
//                 </a>

//                 {/* ORCID Icon Toggle */}
//                 <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer">
//                     <img 
//                         className="orcid-icon" 
//                         src={isDarkMode 
//                             ? `${process.env.PUBLIC_URL}/images/Icons/whiteorcid (1).png` 
//                             : `${process.env.PUBLIC_URL}/images/Icons/BlackOrcid-icon-sm.png`
//                         } 
//                         alt="ORCID"
//                     />
//                 </a>
//             </div>
            
//             <nav>
//                 <button 
//                     className="nav-toggle" 
//                     onClick={toggleNav}
//                     aria-expanded={isNavOpen}
//                     aria-controls="nav-menu"
//                 >
//                     {/* If the Nav is open, it changes the hamburger to an X */}
//                     {isNavOpen ? '✕' : '☰'}
//                 </button>
//                 <ul id="nav-menu" className={isNavOpen ? "open" : ""}>
//                     <li><a href="#home" onClick={closeNav}>Home</a></li>
//                     <li><a href="#about" onClick={closeNav}>About</a></li>
//                     <li><a href="#publications" onClick={closeNav}>Publications</a></li>
//                     <li><a href="#projects" onClick={closeNav}>Projects</a></li>
//                     {/* <li><a href="#gallery" onClick={closeNav}>Gallery</a></li> */}
//                     <li><a href="#contact" onClick={closeNav}>Contact</a></li>
//                 </ul>
//             </nav>

//             <div className={`theme-switch-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
//                 <button 
//                     className="theme-switch-track" 
//                     onClick={() => setIsDarkMode(!isDarkMode)}
//                     aria-label="Toggle theme"
//                 >
//                     <div className="theme-switch-thumb"></div>
//                 </button>
//             </div>

//         </header>
//     );
// }

    return (
        <header className={`header ${isNavOpen ? 'nav-is-open' : ''}`}>
            
            {/* 1. SOCIAL ICONS (Desktop Left) */}
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-icon" src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteLinkedin.png` : `${process.env.PUBLIC_URL}/images/Icons/Linkedin_circle_black-512.png`} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer">
                    <img src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png` : `${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub" />
                </a>
                <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer">
                    <img className="orcid-icon" src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteorcid (1).png` : `${process.env.PUBLIC_URL}/images/Icons/BlackOrcid-icon-sm.png`} alt="ORCID" />
                </a>
            </div>

            {/* 2. HAMBURGER (Mobile Only) */}
            <button className="nav-toggle" onClick={toggleNav}>
                {isNavOpen ? '✕' : '☰'}
            </button>

            {/* 3. DESKTOP NAV (Right side) */}
            <nav className="desktop-nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#publications">Publications</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* 4. THEME TOGGLE (Far Right) */}
            <div className={`theme-switch-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
                <button className="theme-switch-track" onClick={() => setIsDarkMode(!isDarkMode)}>
                    <div className="theme-switch-thumb"></div>
                </button>
            </div>

            {/* 5. MOBILE OVERLAY (Hidden on PC) */}
            <nav className={`nav-overlay ${isNavOpen ? 'open' : ''}`}>
                
                <div className="nav-close-overlay" onClick={closeNav}></div>
                
                <ul className="nav-menu">
                    <li><a href="#home" onClick={closeNav}>Home</a></li>
                    <li><a href="#about" onClick={closeNav}>About</a></li>
                    <li><a href="#publications" onClick={closeNav}>Publications</a></li>
                    <li><a href="#projects" onClick={closeNav}>Projects</a></li>
                    <li><a href="#contact" onClick={closeNav}>Contact</a></li>
                </ul>

                <div className="social-icons-overlay">
                    <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteLinkedin.png` : `${process.env.PUBLIC_URL}/images/Icons/Linkedin_circle_black-512.png`} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png` : `${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub" />
                    </a>
                    <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer">
                        <img src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteorcid (1).png` : `${process.env.PUBLIC_URL}/images/Icons/BlackOrcid-icon-sm.png`} alt="ORCID" />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header; 