import React from 'react';
import '../CSS/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/Icons/linkedinIcon (2).png`} alt="LinkedIn"/></a>
                <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub"/></a>
                <a href="https://www.facebook.com/profile.php?id=100006282198928" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/facebookIcon.png`} alt="Facebook"/></a>
                <a href="https://orcid.org/0000-0002-2897-5833" target="_blank" rel="noopener noreferrer"><img className="orcid-icon" src={`${process.env.PUBLIC_URL}/images/Icons/ORCID_IDIcon.png`} alt="ORCID"/></a>
            </div>
            <div className="Extra">
                <p>All rights reserved, 2024 Jalynn B. Nicoly</p>
                <p>Last Updated: May 22nd, 2025</p>
            </div>
        </div>
    );
}

export default Footer; 