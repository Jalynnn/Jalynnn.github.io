import React from 'react';
import '../CSS/home.css';
import '../CSS/about.css';
import '../CSS/aboutButtons.css';

function Main() {
    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
    <main className="main">

        <section id="home" className="section-home">
            <video autoPlay muted loop id="bg-video">
                <source src={`${process.env.PUBLIC_URL}/videos/Untitled (3).mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h2>JALYNN NICOLY</h2>
            </div>
        </section>

        <section id="about" className="section-about">
            <h2 className="about-heading">About Me</h2>
            <div className="about-content">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/croppedAboutMe.jpg`} 
                  alt="Jalynn Nicoly" 
                  className="profile-photo"
                />
                <div className="about-text">
                    <div className="about-text-header">
                        <p>
                            Welcome!
                        </p>
                    </div>
                    <p>
                        I am an aspiring researcher transitioning from my Bachelor's degree from <u>Colorado State University</u> to puruse my Ph.D. at the <u>University of Colorado Boulder</u>, both of which are in the <u>Computer Science</u> field. 
                        I am on a mission to explore how physiological signals can improve our virtual surroundings, whether that is in virtual or augmented reality. 
                        I was born in Madison, Wisconsin, but raised in Durango, Colorado, where I had the opportunity to grow my career interest in Psychology by asking why people do what they do!
                        When starting my undergraduate with this question in mind, I was determined to work in a research lab early on. 
                        My determination has led me down a path of gaining <u>four years of experience</u> at the following research labs:
                    </p>
                </div>
            </div>

            <ul className="research-labs">
                <div className = 'lab'>
                    <img src={`${process.env.PUBLIC_URL}/images/Labs/SHINELab.png`} alt="SHINELab Logo" className="lab-imgs"/>
                    <div className='lab-info'>
                        <p>
                            <a href="https://www.colorado.edu/lab/shine/" target="_blank"><strong>SHINELab</strong></a>
                        </p>
                    </div>
                    <li>
                        <strong>System-Human Interaction with NIRS and EEG Lab:</strong> My newest research lab, which has adopted me over the summer of 2024 in preparation for beginning my Ph.D. with them in the fall. Leanne Hirshfields' lab has already brought me in as one of their own, starting strong with a project funded by the NAVY, introducing me to the world of brain signal measuring devices!
                    </li>
                </div>

                <div className = 'lab'>
                    <img src={`${process.env.PUBLIC_URL}/images/Labs/AIRLab.png`} alt="AIRLab Logo" className="lab-imgs"/>
                    <div className='lab-info'>
                        <p>
                            <a href="https://airlab.cis.cornell.edu/" target="_blank"><strong>AIRLab</strong></a>
                        </p>
                    </div>
                    <li>
                        <strong>Artificial Intelligence and Robotics Lab:</strong> The summer of 2023 brought me to New York City's Cornell Tech with Angelique Taylor, where I developed an augmented reality application for healthcare settings. My participation in Distributed Research Experience for Undergraduates brought us together as we pursued the idea of improving resuscitation cases by starting with team dynamics.
                    </li>
                </div>

                <div className = 'lab'>
                    <img src={`${process.env.PUBLIC_URL}/images/Labs/NUILab.png`} alt="NUILab Logo" className="lab-imgs"/>
                    <div className='lab-info'>
                        <p>
                            <a href="https://nuilab.org/" target="_blank"><strong>NUILab</strong></a>
                        </p>
                    </div>
                    <li>
                        <strong>Natural User Interaction Lab:</strong> The most influential research experience I have gained is in Francisco Ortega's research lab. I was in this lab until I graduated, and still am at heart. Here, I was placed on over five research projects, graduating with a co-authorship with ACM TAP and an in-progress first-authorship with ACM SAP.
                    </li>
                </div>

                <div className = 'lab'>
                    <img src={`${process.env.PUBLIC_URL}/images/Labs/CSULogo.png`} alt="Memory Logo" className="lab-imgs"/>
                    <div className='lab-info'>
                        <p>
                            <a href="https://sites.google.com/site/rhodesmemorylab/" target="_blank"><strong>Memory Lab</strong></a>
                        </p>
                    </div>
                    <li>
                        <strong>Memory and Metacognition Lab:</strong> Under the mentorship of Matthew Rhodes, I started as a research assistant as early as my second semester of university. This lab was held in the Psychology department of Colorado State University, where I first got to help run research studies and gain insight into what it would mean to be a graduate student.
                    </li>
                </div>
            </ul>

            <div className="button-container">
                <button onClick={() => openLink('pdfs/Resume.pdf')}>Preview CV</button>
                <button onClick={() => openLink('pdfs/Resume.pdf')}>Preview Resume</button>
            </div>
            
            <div className="button-container">
                <button onClick={() => openLink('https://github.com/Jalynnn/Jalynnn.github.io')}> 
                P.S. I coded this website! Check out the code here in GitHub.
                </button>
            </div>
        </section>

    </main>
  );
}

export default Main;
