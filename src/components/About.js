import '../CSS/about.css';
import '../CSS/AboutButtons.css';
import React from 'react';

function About() {
    const openLink = (url) => {
        window.open(url, '_blank'); 
    };

    const handleFilter = (filterName) => {
        // 1. Smooth scroll to projects
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }

        // 2. Broadcast the filter change
        const event = new CustomEvent('filterChange', { detail: filterName });
        window.dispatchEvent(event);
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
                            I am a <strong>Ph.D. Student</strong> at the University of Colorado Boulder, where I research how <strong>neurological signals</strong> can be used to enhance and adapt virtual and augmented reality environments.
                        </li>
                        <li>
                            I completed my undergraduate studies at <strong>Colorado State University</strong>, beginning with a background in <strong>Psychology</strong> before transitioning to <strong>Computer Science</strong> to better understand the intersection of human behavior and technology.
                        </li>
                        <li>
                            I currently am a <strong>Graduate Instructor</strong> for Introduction to Coding in C++ at the University of Colorado Boulder, where I have spent the last two semesters teaching students foundational programming.
                        </li>
                        <li>
                            I have developed <strong>six years of experience</strong> working across several research labs and industries, focusing on practical applications of human-computer interaction.
                        </li>
                    </ul>
                </div>
            </div>

            {/* <h3 className="keywords">
                Keywords:  
                <a href="?filter=Human-Computer Interaction" className="keyword-link"> Human-Computer Interaction</a>, 
                <a href="?filter=Brain-Computer Interfaces" className="keyword-link"> Brain-Computer Interfaces</a>,
                <a href="?filter=Neuroadaptive Systems" className="keyword-link"> Neuroadaptive Systems</a>, 
                {/* Use %26 for the ampersand and %20 for spaces to be ultra-safe */}
                {/* <a href="?filter=Virtual%20%26%20Augmented%20Reality" className="keyword-link"> Virtual & Augmented Reality</a> */}
            {/* </h3> */}

            <h3 className="keywords">
                Keywords:  
                <span className="keyword-link" onClick={() => handleFilter("Human-Computer Interaction")}> Human-Computer Interaction</span>, 
                <span className="keyword-link" onClick={() => handleFilter("Brain-Computer Interfaces")}> Brain-Computer Interfaces</span>,
                <span className="keyword-link" onClick={() => handleFilter("Neuroadaptive Systems")}> Neuroadaptive Systems</span>, 
                <span className="keyword-link" onClick={() => handleFilter("Virtual & Augmented Reality")}> Virtual & Augmented Reality</span>
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
                                <a href="https://www.colorado.edu/lab/shine/" className="about-link" target="_blank" rel="noopener noreferrer" aria-label="SHINELab. Opens in a new tab"><strong>SHINELab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>System-Human Interaction with NIRS and EEG Lab:</strong> My current research lab starting May 2024 preparing me for my Ph.D. alongside <a href="https://www.colorado.edu/ics/leanne-hirshfield/" className="about-link" rel="noopener noreferrer" target="_blank" aria-label="Leanne Hirshfield's page. Opens in a new tab"><u>Leanne Hirshfield</u></a>. This lab introduced me to the world of brain signal measuring devices, completing multiple phases of an Office of Naval Research project and developing an ongoing brain-computer interface.
                            </p>
                        </div>
                    </div>
                </li>

                {/* Google (Need Approval) In collaboration with Greg B and Eric Gomez, I have the unique opportunity as a Student Researcher to contribute to the success of Google Beam’s comparisons to traditional video conferencing. By integrating measures of neural signals to decipher neural synchrony across users, our team aims to demonstrate user’s increased presence in the Beam environment. */}

                {/* CognifiSense (Need Approval) My mentor, Marta Ceko, at the University of Colorado Boulder introduced me to her team led by Amanda Way, where I participated as a research assistant working directly with participants in a long-term study. This study focused on improving those with lower back pain through virtual reality exercises. */}

                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/NUILab.png`} alt="NUILab Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://nuilab.org/" className="about-link" target="_blank" rel="noopener noreferrer" aria-label="NUILab. Opens in a new tab"><strong>NUILab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Natural User Interaction Lab:</strong> My undergraduate lab led by <a href="https://compsci.colostate.edu/person/?id=22550A7530193FD205613DD09DD2EE6F&sq=t/" className="about-link" rel="noopener noreferrer" target="_blank" aria-label="Francisco Ortega's page. Opens in a new tab"><u>Francisco Ortega</u></a> setting me up for a successful career introducing me to virtual and augmented reality in various projects. Here, I was placed on over five research projects, graduating from my Bachelors as a first author with an ACM SAP 2024 paper. 
                            </p>
                        </div>
                    </div>
                </li>

                                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/AIRLab.png`} alt="AIRLab Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://liquetaylor.wixstudio.io/airlab/" className="about-link" target="_blank" rel="noopener noreferrer" aria-label="AIRLab. Opens in a new tab"><strong>AIRLab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Artificial Intelligence and Robotics Lab:</strong> Participating in Distribute Research Experience for Undergraduates (DREU) introduced me to <a href="https://www.angeliquemtaylor.com/" className="about-link" rel="noopener noreferrer" target="_blank" aria-label="Angelique Taylor's page. Opens in a new tab"><u>Angelique Taylor's</u></a> Cornell Tech lab. Here I developed an augmented reality application for healthcare workers, pursuing how to improve team dynamics within resuscitation procedures.
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className = 'lab'>
                        <img src={`${process.env.PUBLIC_URL}/images/Labs/CSULogo.png`} alt="Memory Logo" className="lab-imgs"/>
                        <div className='lab-info'>
                            <p>
                                <a href="https://sites.google.com/site/rhodesmemorylab/" className="about-link" target="_blank" rel="noopener noreferrer" aria-label="Memory Lab. Opens in a new tab"><strong>Memory Lab</strong></a>
                            </p>
                        </div>
                        <div className='lab-about'>
                            <p>
                                <strong>Memory and Metacognition Lab:</strong> Under the mentorship of <a href="https://psywebserv.psych.colostate.edu/psylist/facdetail.php?FirstName=Matthew&LastName=Rhodes/" className="about-link" rel="noopener noreferrer" target="_blank" aria-label="Matthew Rhodes's page. Opens in a new tab"><u>Matthew Rhodes</u></a>, I started as a research assistant as early as my second semester of university. This lab was held in the Psychology department of Colorado State University, where I was first exposed to running research studies and gained insight into what it would mean to be a graduate student.
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
