import React, { useState } from 'react';
import '../CSS/Project.css';

const ProjectCard = ({ title, image, date, description, isSelected, handleClick }) => {
  const descriptionWithLink = description.replace(
    "Learn more here!",
    '<a href="https://source.colostate.edu/virtual-reality-challenge-winners-announced/" target="_blank" rel="noopener noreferrer">Learn more here!</a>'
  );
  
  return (
    <div className="project-card">
      <div className="project-image-container" onClick={handleClick}>
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

  const projects = [
    {
      title: "Cognitive Workload within Virtual Reality",
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
      image: `${process.env.PUBLIC_URL}/images/Projects/BaseCamp.jpg`,
      date: "May 2023 to December 2023",
      description: `Innovative tools like augmented reality, when used by healthcare workers, have the potential to improve collaboration and task management in resuscitation cases. 
      We conducted a field study where medical students performed resuscitation scenarios, with one healthcare worker using a HoloLens 2 device to determine whether our virtual environment improved time management. 
      We also focused on understanding how individuals interacted with the user interface of the augmented reality device and the virtual environment. 
      Despite challenges in data collection, our findings provide valuable user feedback and critical insights into experimental design, which are essential for the successful implementation of AR technology in future studies.`,
    },    
    {
      title: "Forest Bathing: Realism",
      image: `${process.env.PUBLIC_URL}/images/Projects/RealismVertical.PNG`,
      date: "May 2022 to May 2024",
      description: `This is phase two of an ongoing project that I worked on with Rachel Masters during my undergraduate degree.
      Phase one focused on biomass, where I had the opportunity to participate, while phase two took it further by exploring realism.
      Realism is a characteristic of virtual environments that can influence user restorativeness.
      This project marks my first published paper, in which I am featured as the second author!`,
    },    
    {
      title: "Virtual Reality Hackathon",
      image: `${process.env.PUBLIC_URL}/images/Projects/VRHackathon.jpg`,
      date: "November 2022",
      description: `One of the first events I participated in with members of the Natural User Interaction Lab was Colorado State University's Virtual Reality Hackathon. 
      My group placed second with our complex virtual environment, which focused on creating a mindfulness program to improve overall well-being and emotion regulation.
      Each participant in my group designed their own environment, mine being focused on controlled breathing. All the environments were connected in a home screen where users could select the mindfulness task they wanted to participate in.
      During this project, I spent several hours over a weekend getting to know my group and developing the skills to work together in a unique environment. Learn more here!`,
    },
    {
      title: "Judgments of Learning",
      image: `${process.env.PUBLIC_URL}/images/Projects/BehavioralSciencesBuilding.jpg`,
      date: "January 2021 to December 2021",
      description: `While the first six months of this project involved getting acclimated to my role as a research assistant, during the second half, I had the opportunity to help run experiments.
      This lab is where I first became Collaborative Institutional Training Initiative (CITI) certified and learned the details of conducting a research experiment.
      The study I ran was largely automated, and my main role was to guide participants through the consent form and instructions, lead them to the computer room to complete the task, and be available to assist with any issues that arose.`,
    }    
  ];

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

  return (
    <section id="projects" className="section-projects" onClick={handleBackgroundClick}>
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container" onClick={(e) => e.stopPropagation()}> {/* Prevents background click when clicking inside the container */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            date={project.date}
            description={project.description}
            isSelected={selectedProject === index} // Check if the current project is selected
            handleClick={() => handleProjectClick(index)} // Open/close project with one click
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
