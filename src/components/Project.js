import React, { useState, useEffect } from 'react';
import '../CSS/Project.css';

const categories = ["All", "Human-Computer Interaction", "Brain-Computer Interfaces", "Neuroadaptive Systems", "Virtual & Augmented Reality", "Published"];

const ProjectCard = ({ title, image, date, description, isSelected, handleClick }) => {
  const descriptionWithLink = description.replace(
    "Learn more here!",
    '<a href="https://source.colostate.edu/virtual-reality-challenge-winners-announced/" target="_blank" rel="noopener noreferrer">Learn more here!</a>'
  );

  /* Improve assistive technologies */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }
  
  return (
    // HERE IS ONE OF TWO CHANGES FOR PROJECT DIM
    // <div className="project-card">
    <div className={`project-card ${isSelected ? 'selected' : ''}`}>

      <div 
        className="project-image-container" 
        onClick={handleClick}
        role="button"
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <img src={image} alt={title} className="project-image" />
        <h3 className="project-title">{title}</h3>
      </div>

      {isSelected && (
        <div className="project-details" onClick={(e) => e.stopPropagation()}> {/* Prevents background click */}
          <div className="project-details-content">
            <img src={image} alt={title} className="project-details-image" />
            <div className="project-details-text">
              <h3>{title}</h3>
              <p className="project-date">{date}</p>
              <p dangerouslySetInnerHTML={{ __html: descriptionWithLink }} /> {/* Render HTML */}
              {/* <p>{description}</p> */}
            </div>
            <button className="close-button" onClick={handleClick}>x</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  /* LISTENER FOR KEYWORDS IN ABOUT SECTION */

  useEffect(() => {
    const handleUrlChange = () => {
      // 1. Look at the standard search (?filter=...)
      const params = new URLSearchParams(window.location.search);
      const filterParam = params.get('filter');
      
      if (filterParam && categories.includes(filterParam)) {
        setActiveFilter(filterParam);
        
        // 2. We handle the scroll locally here! 
        // This bypasses your problematic scrollToSection function.
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleUrlChange();

    // Listen for the back/forward buttons or link clicks
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const projects = [
    {
      title: "Website Revamp",
      categories: ["Human-Computer Interaction"],
      image: `${process.env.PUBLIC_URL}/images/backgrounds/Screenshot 2026-04-22 223142.png`,
      date: "April 2023 to Current",
      description: `Collaborators include Colorado State University (CSU), University of Colorado Boulder (CU), University of Northern Colorado, and University of Montana. 
      In this project, we are examining how users are affected by the manipulation of three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      I started working on this project as a CSU student, attending meetings during the design phase and later running experiments with participants. 
      After graduating with my bachelor's degree and transitioning to CU Boulder, I became more involved in the design of the virtual environment and its connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to integrate the Lab Streaming Layer (LSL). 
      LSL allows event markers to be sent and received by both the functional near-infrared spectroscopy (fNIRS) Aurora system and the electroencephalography (EEG) BrainVision application, enhancing data analysis.`  
    },
    {
      title: "Seamless Interactions BCI IRB Title",
      categories: ["Brain-Computer Interfaces", "Neuroadaptive Systems"],
      image: `${process.env.PUBLIC_URL}/images/Projects/fNIRSCap.jpg`,
      date: "April 2023 to Current",
      description: `Collaborators include Colorado State University (CSU), University of Colorado Boulder (CU), University of Northern Colorado, and University of Montana. 
      In this project, we are examining how users are affected by the manipulation of three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      I started working on this project as a CSU student, attending meetings during the design phase and later running experiments with participants. 
      After graduating with my bachelor's degree and transitioning to CU Boulder, I became more involved in the design of the virtual environment and its connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to integrate the Lab Streaming Layer (LSL). 
      LSL allows event markers to be sent and received by both the functional near-infrared spectroscopy (fNIRS) Aurora system and the electroencephalography (EEG) BrainVision application, enhancing data analysis.`  
    },
    {
      title: "Doctoral Consortium: Seamless Interactions BCI",
      categories: ["Brain-Computer Interfaces", "Neuroadaptive Systems", "Published"],
      image: `${process.env.PUBLIC_URL}/images/Projects/fNIRSCap.jpg`,
      date: "April 2023 to Current",
      description: `Collaborators include Colorado State University (CSU), University of Colorado Boulder (CU), University of Northern Colorado, and University of Montana. 
      In this project, we are examining how users are affected by the manipulation of three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      I started working on this project as a CSU student, attending meetings during the design phase and later running experiments with participants. 
      After graduating with my bachelor's degree and transitioning to CU Boulder, I became more involved in the design of the virtual environment and its connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to integrate the Lab Streaming Layer (LSL). 
      LSL allows event markers to be sent and received by both the functional near-infrared spectroscopy (fNIRS) Aurora system and the electroencephalography (EEG) BrainVision application, enhancing data analysis.`  
    },
    {
      title: "Manipulating Germane Cognitive Load in VR",
      categories: ["Virtual & Augmented Reality", "Human-Computer Interaction"],
      image: `${process.env.PUBLIC_URL}/images/Projects/fNIRSCap.jpg`,
      date: "April 2023 to Current",
      description: `Collaborators include Colorado State University (CSU), University of Colorado Boulder (CU), University of Northern Colorado, and University of Montana. 
      In this project, we are examining how users are affected by the manipulation of three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      I started working on this project as a CSU student, attending meetings during the design phase and later running experiments with participants. 
      After graduating with my bachelor's degree and transitioning to CU Boulder, I became more involved in the design of the virtual environment and its connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to integrate the Lab Streaming Layer (LSL). 
      LSL allows event markers to be sent and received by both the functional near-infrared spectroscopy (fNIRS) Aurora system and the electroencephalography (EEG) BrainVision application, enhancing data analysis.`  
    },
    {
      title: "Manipulating Intrinsic & Extraneous Cognitive Workload",
      categories: ["Virtual & Augmented Reality", "Human-Computer Interaction"],
      image: `${process.env.PUBLIC_URL}/images/Projects/fNIRSCap.jpg`,
      date: "April 2023 to Current",
      description: `Collaborators include Colorado State University (CSU), University of Colorado Boulder (CU), University of Northern Colorado, and University of Montana. 
      In this project, we are examining how users are affected by the manipulation of three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      I started working on this project as a CSU student, attending meetings during the design phase and later running experiments with participants. 
      After graduating with my bachelor's degree and transitioning to CU Boulder, I became more involved in the design of the virtual environment and its connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to integrate the Lab Streaming Layer (LSL). 
      LSL allows event markers to be sent and received by both the functional near-infrared spectroscopy (fNIRS) Aurora system and the electroencephalography (EEG) BrainVision application, enhancing data analysis.`  
    },    
    {
      title: "Interaction Cues Review",
      categories: ["Virtual & Augmented Reality", "Human-Computer Interaction"],
      image: `${process.env.PUBLIC_URL}/images/Projects/CodingSheetVertical.PNG`,
      date: "August 2023 to Current",
      description: `For this project, another member and I are reviewing and analyzing over a hundred papers. 
      In virtual settings, various types of cues help guide users to the necessary tasks. 
      These cues come in different forms and appearances. Are they visual or auditory? Are they attached to the user or part of the environment? 
      What information do they provide? What triggers the cue to appear? 
      These are some of the questions we aim to answer in our meta-review, which seeks to determine the most effective cues based on the context.`,
    },    
    {
      title: "Forest Bathing: Beauty and Movement",
      categories: ["Virtual & Augmented Reality", "Human-Computer Interaction", "Published"],
      image: `${process.env.PUBLIC_URL}/images/Projects/BeautyVertical.PNG`,
      date: "November 2022 to September 2024",
      description: `This was my primary project during the last two years of my undergraduate degree.
      It is essentially the third phase of a project exploring the characteristics of virtual environments.
      By observing and modifying select characteristics, we examined how each one influences user restorativeness.
      In this phase, we focused on beauty and movement in forest environments, as real forests have already shown stress-reducing effects.
      We found that the virtual 3D environment was not significantly different from the 2D virtual image, but it was significantly different when compared to the 2D virtual art and the control condition.
      I had the opportunity to present this research as a twenty-minute presentation at the Association for Computing Machinery's Symposium on Applied Perception in August 2024 in Dublin, Ireland.`,
    },    
    {
      title: "Augmented Reality for Healthcare Workers",
      categories: ["Virtual & Augmented Reality", "Published"],
      image: `${process.env.PUBLIC_URL}/images/Projects/BaseCamp.jpg`,
      date: "May 2023 to December 2023",
      description: `Innovative tools like augmented reality, when used by healthcare workers, have the potential to improve collaboration and task management in resuscitation cases. 
      We conducted a field study where medical students performed resuscitation scenarios, with one healthcare worker using a HoloLens 2 device to determine whether our virtual environment improved time management. 
      We also focused on understanding how individuals interacted with the user interface of the augmented reality device and the virtual environment. 
      Despite challenges in data collection, our findings provide valuable user feedback and critical insights into experimental design, which are essential for the successful implementation of AR technology in future studies.`,
    },    
    {
      title: "Forest Bathing: Realism",
      categories: ["Virtual & Augmented Reality", "Human-Computer Interaction", "Published"],
      image: `${process.env.PUBLIC_URL}/images/Projects/RealismVertical.PNG`,
      date: "May 2022 to May 2024",
      description: `This is phase two of an ongoing project that I worked on with Rachel Masters during my undergraduate degree.
      Phase one focused on biomass, where I had the opportunity to participate, while phase two took it further by exploring realism.
      Realism is a characteristic of virtual environments that can influence user restorativeness.
      This project marks my first published paper, in which I am featured as the second author!`,
    },    
    {
      title: "Virtual Reality Hackathon",
      categories: ["Virtual & Augmented Reality"],
      image: `${process.env.PUBLIC_URL}/images/Projects/VRHackathon.jpg`,
      date: "November 2022",
      description: `One of the first events I participated in with members of the Natural User Interaction Lab was Colorado State University's Virtual Reality Hackathon. 
      My group placed second with our complex virtual environment, which focused on creating a mindfulness program to improve overall well-being and emotion regulation.
      Each participant in my group designed their own environment, mine being focused on controlled breathing. All the environments were connected in a home screen where users could select the mindfulness task they wanted to participate in.
      During this project, I spent several hours over a weekend getting to know my group and developing the skills to work together in a unique environment. Learn more here!`,
    },
    {
      title: "Judgments of Learning",
      categories: ["Brain-Computer Interfaces"],
      image: `${process.env.PUBLIC_URL}/images/Projects/BehavioralSciencesBuilding.jpg`,
      date: "January 2021 to December 2021",
      description: `While the first six months of this project involved getting acclimated to my role as a research assistant, during the second half, I had the opportunity to help run experiments.
      This lab is where I first became Collaborative Institutional Training Initiative (CITI) certified and learned the details of conducting a research experiment.
      The study I ran was largely automated, and my main role was to guide participants through the consent form and instructions, lead them to the computer room to complete the task, and be available to assist with any issues that arose.`,
    }    
  ];

  const filteredProjects = activeFilter === "All"
    ? projects: projects.filter(p => p.categories.includes(activeFilter));

  const handleProjectClick = (index) => {
    // Open the clicked project, or close if it's already selected
    setSelectedProject((prevSelected) => (prevSelected === index ? null : index));
  };

  const handleBackgroundClick = () => {
    // Close any open project when clicking the background
    if (selectedProject !== null) {
      setSelectedProject(null);
    }
  };

  // return (
  //   <section id="projects" className="section-projects" onClick={handleBackgroundClick}>

  //     <h2 className="projects-heading">Projects</h2>

  //     {/* Filter Projects Logic */}
  //     <div className = "filter-bar">
  //       {categories.map(cat=> (
  //         <button
  //           key = {cat}
  //           className = {`filter-btn ${activeFilter === cat ? 'active' : ''}`}
  //           onClick={() => setActiveFilter(cat)}
  //         >
  //           {cat}
  //         </button>
  //       ))}
  //     </div>

  //     <div className="projects-container" onClick={(e) => e.stopPropagation()}> {/* Prevents background click when clicking inside the container */}
  //       {/* PURPOSE: Filter projects */}
  //       {/* {projects.map((project, index) => ( */}

  //       {filteredProjects.map((project, index) => (
  //         <ProjectCard
  //           key={index}
  //           title={project.title}
  //           image={project.image}
  //           date={project.date}
  //           description={project.description}
  //           isSelected={selectedProject === index} // Check if the current project is selected
  //           handleClick={() => handleProjectClick(index)} // Open/close project with one click
  //         />
  //       ))}
  //     </div>
  //   </section>
  // );

  return (
    // HERE IS ONE OF TWO CHANGES FOR PROJECT DIM
    <section id="projects" className={`section-projects ${selectedProject !== null ? 'modal-open' : ''}`}>
    {/* <section id="projects" className="section-projects" onClick={handleBackgroundClick}> */}
      <h2 className="projects-heading">Projects</h2>

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* START WRAPPER: This must be OUTSIDE the container */}
      <div className={`projects-wrapper ${isExpanded ? 'expanded' : 'collapsed'}`}>
        
        <div className="projects-container" onClick={(e) => e.stopPropagation()}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isSelected={selectedProject === index}
              handleClick={() => handleProjectClick(index)}
            />
          ))}
        </div>

        {/* FADE OVERLAY: Inside the wrapper, but after the container */}
        {/* {!isExpanded && <div className="projects-fade-overlay"></div>} */}
      
      </div> {/* END WRAPPER */}

      {/* SHOW MORE BUTTON: Outside the wrapper so it doesn't get cut off */}
      <div className="show-more-container">
        <button 
          className="filter-btn active" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More Projects"}
        </button>
      </div>

    </section>
  );
};

export default Projects;
