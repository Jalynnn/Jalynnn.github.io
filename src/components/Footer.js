import React from 'react';
import '../CSS/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/Icons/linkedinIcon (2).png`} alt="LinkedIn"/></a>
                <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub"/></a>
                <a href="https://www.facebook.com/profile.php?id=100006282198928" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/facebookIcon.png`} alt="Facebook"/></a>
            </div>
            <div className="Extra">
                <p>All rights reserved, 2024 Jalynn B. Nicoly</p>
                <p>Last Updated: October 19th, 2024</p>
            </div>
        </div>
    );
}

export default Footer; 