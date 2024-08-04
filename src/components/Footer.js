import React from 'react';
import '../CSS/footer.css';

function Footer() {
    return (
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/jalynn-nicoly-8012a7210/" target="_blank" rel="noopener noreferrer"><img class="linkedin-icon" src={`${process.env.PUBLIC_URL}/images/Icons/linkedinIcon (2).png`} alt="LinkedIn"/></a>
            <a href="https://github.com/Jalynnn" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/githubIcon (1).png`} alt="GitHub"/></a>
            <a href="https://www.facebook.com/profile.php?id=100006282198928" target="_blank" rel="noopener noreferrer"><img src={`${process.env.PUBLIC_URL}/images/Icons/facebookIcon.png`} alt="Facebook"/></a>
        </div>
    );
}

export default Footer; 