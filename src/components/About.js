import '../CSS/about.css';
import '../CSS/aboutButtons.css';
import React from 'react';

function About() {
    const openLink = (url) => {
        window.open(url, '_blank'); 
    };

    return (
        <section id="about" className="section-about">
            {/* <h2 className="about-heading">Jalynn Nicoly</h2> */}
            <div className="about-content">
                <img 
                    src={`${process.env.PUBLIC_URL}/images/1724083881047 (1).jpg`} 
                    alt="Jalynn Nicoly" 
                    className="profile-photo"
                />
                <div className="about-text">
                    {/* <div className="about-text-header">
                        <h2>
                            Welcome!
                        </h2>
                    </div> */}
                    {/* <p>
                        I am an aspiring researcher pursuing my Ph.D. at the <strong>University of Colorado Boulder</strong> and a recent graduate with my Bachelor's degree from <strong>Colorado State University</strong>, both of which are in the <strong>Computer Science</strong> field. 
                        I am on a mission to explore how physiological and neurological signals can improve our virtual surroundings, whether that is in virtual or augmented reality. 
                        I was born in Madison, Wisconsin, but raised in Durango, Colorado, where I had the opportunity to grow my career interest in Psychology by asking why people do what they do!
                        When starting my undergraduate with this question in mind, I was determined to work in a research lab early on. 
                        My determination has led me down a path of gaining <strong>four years of experience</strong> at the following research labs:
                    </p> */}
                    <ul className="about-list">
                        <li>
                            <strong>Ph.D. Student</strong> at the University of Colorado Boulder researching how <strong>neurological signals</strong> enhance virtual and augmented reality environments.
                        </li>
                        <li>
                            Completed undergraduate studies at <strong>Colorado State University</strong> originating with a background in <strong>Psychology</strong> and human behavior, and later transferred to <strong>Computer Science</strong>.
                        </li>
                        <li>
                            <strong>Graduate Instructor</strong> ongoing for two semesters teaching Introduction to Coding in C++ at the University of Colorado Boulder.
                        </li>
                        <li>
                            Developed <strong>six years of experience</strong> across multiple specialized research labs seen below.
                        </li>
                    </ul>
                </div>
            </div>

            <h3 className="keywords">
                Keywords:  
                <a href="?filter=Human-Computer Interaction" className="keyword-link"> Human-Computer Interaction</a>, 
                <a href="?filter=Brain-Computer Interfaces" className="keyword-link"> Brain-Computer Interfaces</a>,
                <a href="?filter=Neuroadaptive Systems" className="keyword-link"> Neuroadaptive Systems</a>, 
                {/* Use %26 for the ampersand and %20 for spaces to be ultra-safe */}
                <a href="?filter=Virtual%20%26%20Augmented%20Reality" className="keyword-link"> Virtual & Augmented Reality</a>
            </h3>

            {/* <div className="button-container">
                <button onClick={() => openLink('pdfs/Jalynn_Nicoly_CV_042026.pdf')}>CV</button>
                <button onClick={() => openLink('pdfs/Jalynn_Nicoly_Resume_042026.pdf')}>Resume</button>
            </div> */}

            <div className="filter-bar" style={{ background: 'transparent', marginTop: '20px' }}>
                <button 
                    className="filter-btn active" 
                    onClick={() => openLink('pdfs/Jalynn_Nicoly_CV_042026.pdf')}
                >
                    View CV
                </button>
                <button 
                    className="filter-btn active" 
                    onClick={() => openLink('pdfs/Jalynn_Nicoly_Resume_042026.pdf')}
                >
                    View Resume
                </button>
            </div>

            <ul className="research-labs">
                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/imageedit_6_5869690173.PNG`} alt="SHINELab Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://www.colorado.edu/lab/shine/" target="_blank" rel="noopener noreferrer" aria-label="SHINELab. Opens in a new tab"style={{ color: 'var(--about-lab-hypertext)' }}><strong>SHINELab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>System-Human Interaction with NIRS and EEG Lab:</strong> My newest research lab, which has adopted me over the summer of 2024 in preparation for beginning my Ph.D. with them in the fall of 2024. <a href="https://www.colorado.edu/ics/leanne-hirshfield/" rel="noopener noreferrer" target="_blank" aria-label="Leanne Hirshfield's page. Opens in a new tab" style={{ color: 'var(--about-lab-hypertext)' }}><u>Leanne Hirshfields'</u></a> lab has already brought me in as one of their own, starting strong with a project funded by the Office of Naval Research, introducing me to the world of brain signal measuring devices!
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/NUILab.png`} alt="NUILab Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://nuilab.org/" target="_blank" rel="noopener noreferrer" aria-label="NUILab. Opens in a new tab"style={{ color: 'var(--about-lab-hypertext)' }}><strong>NUILab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Natural User Interaction Lab:</strong> The most influential research experience I have gained is in <a href="https://compsci.colostate.edu/person/?id=22550A7530193FD205613DD09DD2EE6F&sq=t/" rel="noopener noreferrer" target="_blank" aria-label="Francisco Ortega's page. Opens in a new tab" style={{ color: 'var(--about-lab-hypertext)' }}><u>Francisco Ortega's</u></a> research lab. I was in this lab until I graduated, and still am at heart. Here, I was placed on over five research projects, graduating with a co-authorship with ACM TAP 2024 and a first-authorship with ACM SAP 2024.
                            </p>
                        </div>
                    </div>
                </li>

                                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/AIRLab.png`} alt="AIRLab Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://liquetaylor.wixstudio.io/airlab/" target="_blank" rel="noopener noreferrer" aria-label="AIRLab. Opens in a new tab"style={{ color: 'var(--about-lab-hypertext)' }}><strong>AIRLab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Artificial Intelligence and Robotics Lab:</strong> The summer of 2023 brought me to New York City's Cornell Tech with  <a href="https://www.angeliquemtaylor.com/" rel="noopener noreferrer" target="_blank" aria-label="Angelique Taylor's page. Opens in a new tab" style={{ color: 'var(--about-lab-hypertext)'}}><u>Angelique Taylor</u></a>, where I developed an augmented reality application for healthcare settings. My participation in Distributed Research Experience for Undergraduates brought us together as we pursued the idea of improving resuscitation cases by starting with team dynamics.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/CSULogo.png`} alt="Memory Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://sites.google.com/site/rhodesmemorylab/" target="_blank" rel="noopener noreferrer" aria-label="Memory Lab. Opens in a new tab"style={{ color: 'var(--about-lab-hypertext)' }}><strong>Memory Lab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Memory and Metacognition Lab:</strong> Under the mentorship of <a href="https://psywebserv.psych.colostate.edu/psylist/facdetail.php?FirstName=Matthew&LastName=Rhodes/" rel="noopener noreferrer" target="_blank" aria-label="Matthew Rhodes's page. Opens in a new tab" style={{ color: 'var(--about-lab-hypertext)' }}><u>Matthew Rhodes</u></a>, I started as a research assistant as early as my second semester of university. This lab was held in the Psychology department of Colorado State University, where I first got to help run research studies and gain insight into what it would mean to be a graduate student.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            
            {/* <div className="button-container">
                <button onClick={() => openLink('https://github.com/Jalynnn/Jalynnn.github.io')}> 
                P.S. I coded this website! Check out the code here in GitHub.
                </button>
            </div> */}
        </section>
  );
}

export default About;
