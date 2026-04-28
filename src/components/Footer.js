import React from 'react';
import '../CSS/footer.css';

function Footer({isDarkMode}) {
    
    return (
        <div className="footer">
            <div className="footer-social-icons">
                {/* <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/Icons/linkedinIcon (2).png`} alt="LinkedIn"/></a> */}
                {/* <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png`} alt="GitHub"/></a> */}
                {/* <a href="https://www.facebook.com/profile.php?id=100006282198928" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/facebookIcon.png`} alt="Facebook"/></a> */}
                {/* <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer"><img className="orcid-icon" src={`${process.env.PUBLIC_URL}/images/Icons/ORCID_IDIcon.png`} alt="ORCID"/></a> */}
            
                <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-icon" src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteLinkedin.png` : `${process.env.PUBLIC_URL}/images/Icons/Linkedin_circle_black-512.png`} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer">
                    <img className="github-icon" src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/Github_logo_svg.svg.png` : `${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub" />
                </a>
                <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer">
                    <img className="orcid-icon" src={isDarkMode ? `${process.env.PUBLIC_URL}/images/Icons/whiteorcid (1).png` : `${process.env.PUBLIC_URL}/images/Icons/BlackOrcid-icon-sm.png`} alt="ORCID" />
                </a>
            
            </div>
            <div className="Extra">
                <p>Established 2024, Intuitively Designed</p>
                <p>Last Updated: April 28th, 2026</p>
            </div>
        </div>
    );
}

export default Footer; 