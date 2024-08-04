import React from 'react';
import '../CSS/home.css';
import '../CSS/about.css';
import '../CSS/aboutButtons.css';
import '../CSS/projects.css';
import '../CSS/publications.css';
import '../CSS/gallery.css';
import '../CSS/contact.css';

function Main() {
    // ?

    const openLink = (url) => {
        window.open(url, '_blank'); 
    };

    // Gallery

    const openGallery = (galleryId) => {
        // Your gallery opening logic here
        console.log(`Opening gallery: ${galleryId}`);
    };

    return (
    <main className="main">

        {/* Home */}

        <section id="home" className="section-home">
            <video autoPlay muted loop id="bg-video">
                <source src={`${process.env.PUBLIC_URL}/videos/Untitled (3).mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h2>JALYNN NICOLY</h2>
            </div>
        </section>

        {/* About */}

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
                            <a href="https://www.colorado.edu/lab/shine/" target="_blank" rel="noopener noreferrer"><strong>SHINELab</strong></a>
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
                            <a href="https://airlab.cis.cornell.edu/" target="_blank" rel="noopener noreferrer"><strong>AIRLab</strong></a>
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
                            <a href="https://nuilab.org/" target="_blank" rel="noopener noreferrer"><strong>NUILab</strong></a>
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
                            <a href="https://sites.google.com/site/rhodesmemorylab/" target="_blank" rel="noopener noreferrer"><strong>Memory Lab</strong></a>
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

        {/* Projects */}

        <section id="projects" className="section-projects">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-container">
                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/fNIRSCap.jpg`} alt="A few optodes in the prefrontal region of an fNIRS cap."/>
                    <p className="name" style={{ color: 'gray' }}>NAVY Cognitive Load within Virtual Reality</p>
                    <p className="date" style={{ color: 'lightgray' }}>April 2023 to Current</p>
                    <p className="description">
                        This project is huge! 
                        Collaborators include CSU, CU Boulder, University of Northern Colorado, and University of Montana. 
                        Here, we are observing how users are influence by a manipulation of the three types of cognitive load: Germane, Extraneous, and Intrinsic.
                        Starting on this project as a CSU student included attending meetings as the design was crafted, and later running experiments with participants. 
                        Once I graduated and began my transition to CU Boulder, I became very hands on the design of the virtual environment and the connection to brain signal measures.
                        I have made modifications to the virtual environment in Unity to allow for Lab Streaming Layer (LSL). 
                        LSL enables event markers to be sent and received by both the fNIRS Aurora and EEG BrainVision applications to improve data analysis.
                    </p>
                </div>

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/CodingSheetVertical.PNG`} alt="A screenshot of our coding sheet while analyzing articles."/>
                    <p className="name" style={{ color: 'gray' }}>Interaction Cues Review</p>
                    <p className="date" style={{ color: 'lightgray' }}>August 2023 to Current</p>
                    <p className="description">
                        For this project, another member and I are reading and decoding over 100 papers.
                        When you are in a virtual settings, there are several types of cues around you that help direct you to the necessary tasks. 
                        There are a variety of cues and their appearence.
                        Are they visual or audio? 
                        Are they attached to the user or some part of the environment? 
                        What information do they provide you? 
                        What triggers the cue to appear?
                        These are all questions we want to address to help our meta-review of determining the most successful cues dependent on the context.
                    </p>
                </div>

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/BeautyVertical.PNG`} alt="Three virtual environments utilized in our study."/>
                    <p className="name" style={{ color: 'gray' }}>Forest Bathing: Beauty</p>
                    <p className="date" style={{color: 'lightgray' }}>2023 to Current</p>
                    <p className="description">
                        This was my primary project during the last two years of my undergraduate degree.
                        This is essentially phase three of a project observing the characteristics of a virtual environment.
                        By observing select characteristics and modifying each, we became familiar with how that characteristic influences user restorativeness.
                        For this phase, we looked at beauty and movement in forest environments, as real forests have already demonstrated stress reducing effects.
                        We found that the virtual 3D environment was not significantly different from the 2D virtual image, but was compared to the 2D virtual art and control condition.
                        I have the opportunity to present this research experiment at ACM SAP August 2024 in Dublin Ireland.
                    </p>
                </div>  

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/BaseCamp.jpg`} alt="Healthcare workers performing a resusucitation simulation."/>
                    <p className="name" style={{ color: 'gray' }}>Augmented Reality for Healthcare</p>
                    <p className="date" style={{ color: 'lightgray' }}>May 2023 to December 2023</p>
                    <p className="description">
                        Innovative tools such as augmented reality used by healthcare workers could improve collaboration and task management in resuscitation cases. 
                        We conducted a field study with medical students performing resuscitation scenarios with one HCW using a HoloLens device to observe whether our virtual environment improves time management. 
                        We also focused on understanding how individuals interacted with the user interface of the AR device and virtual environment. 
                        Despite challenges in data collection, our findings highlight influential user feedback and critical experiment designs for successful implementations of AR technology in future investigations. 
                    </p>
                </div>

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/RealismVertical.PNG`} alt="Two virtual environments utilized in this experiment."/>
                    <p className="name" style={{ color: 'gray' }}>Forest Bathing: Realism</p>
                    <p className="date" style={{ color: 'lightgray' }}>2022 to 2023</p>
                    <p className="description">
                        This is phase two of an ongoing project that I worked on with Rachel Masters during my undergrad.
                        Phase one observed biomass where I got to be a participant, whereas, phase two took it a step further by observing realism.
                        Realism is a characteristic of virtual enviornments that can influence user restorativeness.
                        This project is my first published paper where I am featured as second author!
                    </p>
                </div>

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/VRHackathon.jpg`} alt="All members of my group and I holding our prize for second place."/>
                    <p className="name" style={{ color: 'gray' }}>CSU's VR Hackathon</p>
                    <p className="date" style={{ color: 'lightgray' }}>November 2022</p>
                    <p className="description">
                        One of the first events I participated in with members from the NUILab was CSU's VR Hackathon. 
                        My group placed 2nd with our complex virtual enviornment focused on creating a mindfulness program to improve overall well-being and emotion regulation.
                        Each participant in my group designed their own environment, mine being focused on controlled breathing, which were all connected in a home screen environment where users can pick which mindfulness task they wanted to partake in.
                        During this project I spent several hours of a weekend getting to know my group and learning skills to work together in a unique environment.
                        <a href="https://source.colostate.edu/virtual-reality-challenge-winners-announced/" target="_blank" rel="noopener noreferrer">Learn more here!</a>
                    </p>
                </div>

                <div className="project">
                    <img src={`${process.env.PUBLIC_URL}/images/Projects/BehavioralSciencesBuilding.jpg`} alt="The outside of the Behavioral Science Building at CSU"/>
                    <p className="name" style={{ color: 'gray' }}>Math Study With Matthew Rhodes</p>
                    <p className="date" style={{ color: 'lightgray' }}>January 2021 to December 2021</p>
                    <p className="description">
                        While my first 6 months on this project was essentially getting adjusted to being a research assistant, the second half I got to help run experiments.
                        This lab is where I first became CITI certified and learned the ins and outs of performing a research experiment.
                        The study I ran participants on was pretty automated where I specifically around to get users started and to help with any problems that arose.
                        I did work with the participants to collect consent and demongraphic forms, and to later direct them to the computer where the math task would take place.
                    </p>
                </div>
            </div>
        </section>

        {/* Publications */}

        <section id="publications" className="section-publications">
        {/* <section id="publications" className="section-publications" style="background-image: url('images/backgrounds/AdobeStock_132147953.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"> */}
            <h2 className="publications-heading">Publications</h2>
            <ul className="publication-list">
                {/* <li className="publication-item">Author1, Author2, Author3. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li>
                <li className="publication-item">Author1, Author2. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li> */}
                <li className="publication-item">Masters, R., Nicoly, J., Gaddy, V., Interrante, V., & Ortega, F. (2024). The impact of nature realism on the restorative quality of virtual reality forest bathing. <em>ACM Transactions on Applied Perception</em>, <em>17</em>(2). <a href="https://doi.org/10.1145/3670406" rel="noopener noreferrer" target="_blank" style={{ color: 'white' }}>https://doi.org/10.1145/3670406</a></li>
            </ul>
        </section>

        {/* Gallery */}

        <section id="gallery" className="section-gallery">
            <h2 className="gallery-heading">Gallery</h2>
            <div className="gallery-container">

                <div className="gallery-item" onClick={() => openGallery('gallery11')}>
                    <h3>The Prepared Warfighter Portfolio Review 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0852 (1).jpg`} alt="Conference 11 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery10')}>
                    <h3>FNIRS Data Analysis Workshop 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_130607751.MP (1).jpg`} alt="Conference 10 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery9')}>
                    <h3>IEEE VR 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/IEEEVR/StandingByPoster (1).jpeg`} alt="Conference 9 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery8')}>
                    <h3>CES 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/CES/PXL_20240111_215446570 (1).jpg`} alt="Conference 8 Thumbnail"/>
                </div> 

                <div className="gallery-item" onClick={() => openGallery('gallery7')}>
                    <h3>Grace Hopper Conference 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/GHC/PXL_20230927_171157989 (1).jpg`} alt="Conference 7 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery6')}>
                    <h3>TAPIA / STAR Celebration 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2023/Presenting.jpg`} alt="Conference 6 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery5')}>
                    <h3>Quantico Virginia 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/Virginia/IMG_3783 (1).jpg`} alt="Conference 5 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery4')}>
                    <h3>XR Access 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/XRAccess/20230615_174907.jpg`} alt="Conference 4 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery3')}>
                    <h3>Multicultural Undergraduate Research Art and Leadership Symposium 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/MURALS/20230331_082633.jpg`} alt="Conference 3 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery2')}>
                    <h3>Rocky Mountain Celebration for Women 2022</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/RockyMountainCelebration/20220929_200412 (1).jpg`} alt="Conference 2 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery1')}>
                    <h3>TAPIA 2022</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2022/ConventionCenter (1).jpg`} alt="Conference 1 Thumbnail"/>
                </div>
            </div>
        </section>

        {/* Contact */}

        <section id="contact" class="section-contact">
            <video autoplay muted loop id="contact-video">
                <source src={`${process.env.PUBLIC_URL}/videos/Untitled (4).mp4`} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div class="contact-content">
                <h2 class="contact-heading">Contact</h2>
                <p>I think contact me boxes are tacky. Maybe just list my general contact information.</p>
            </div>
        </section>

    </main>
  );
}

export default Main;
