import React from 'react';
import '../CSS/home.css';
import '../CSS/about.css';
import '../CSS/aboutButtons.css';

function Main() {
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

        <section id="about" class="section-about">
            <h2 class="about-heading">About Me</h2>
            <div class="about-content">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/croppedAboutMe.jpg`} 
                  alt="Jalynn Nicoly" 
                  className="profile-photo"
                />
                <div class="about-text">
                    <div class="about-text-wrapper">
                        <p>
                            Welcome!
                        </p>
                        <p>
                            I am an aspiring researcher transitioning from my Bachelor's degree from Colorado State University to puruse my Ph.D. at the University of Colorado Boulder, both of which are in the Computer Science field. 
                            I am on a mission to explore how physiological signals can improve our virtual surroundings, whether that is in virtual or augmented reality. 
                            I was born in Madison, Wisconsin, but raised in Durango, Colorado, where I had the opportunity to grow my career interest in Psychology by asking why people do what they do!
                            When starting my undergraduate with this question in mind, I was determined to work in a research lab early on. 
                            My determination has led me down a path of gaining four years of experience at the following research labs:
                        </p>
                    </div>
                </div>
            </div>

            <ul class="research-labs">
                <li>
                    <strong>System-Human Interaction with NIRS and EEG Lab:</strong> My newest research lab, which has adopted me over the summer of 2024 in preparation for beginning my Ph.D. with them in the fall. Leanne Hirshfields' lab has already brought me in as one of their own, starting strong with a project funded by the NAVY, introducing me to the world of brain signal measuring devices!
                </li>
                <li>
                    <strong>Artificial Intelligence and Robotics Lab:</strong> The summer of 2023 brought me to New York City's Cornell Tech with Angelique Taylor, where I developed an augmented reality application for healthcare settings. My participation in Distributed Research Experience for Undergraduates brought us together as we pursued the idea of improving resuscitation cases by starting with team dynamics.
                </li>
                <li>
                    <strong>Natural User Interaction Lab:</strong> The most influential research experience I have gained is in Francisco Ortega's research lab. I was in this lab until I graduated, and still am at heart. Here, I was placed on over five research projects, graduating with a co-authorship with ACM TAP and an in-progress first-authorship with ACM SAP.
                </li>
                <li>
                    <strong>Memory and Metacognitive Lab:</strong> Under the mentorship of Matthew Rhodes, I started as a research assistant as early as my second semester of university. This lab was held in the Psychology department of Colorado State University, where I first got to help run research studies and gain insight into what it would mean to be a graduate student.
                </li>
            </ul>

            <div class="button-container">
                <button onclick="window.open('pdfs/Resume.pdf', '_blank')">Preview CV</button>
                <button onclick="window.open('pdfs/Resume.pdf', '_blank')">Preview Resume</button>
            </div>

            <div class="button-container">
                <button onclick="window.open('https://github.com/Jalynnn/Website', '_blank')">P.S. I coded this website! Check out the code here in GitHub.</button>
            </div>
        </section>

    </main>
  );
}

export default Main;
