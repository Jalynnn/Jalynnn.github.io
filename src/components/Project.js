import React, { useState } from 'react';
import '../CSS/Project.css';

const ProjectCard = ({ title, image, date, description, isSelected, handleClick }) => {
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
              <p>{description}</p>
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
      description: `This project is huge! Collaborators include CSU, CU Boulder, University of Northern Colorado, and University of Montana. 
      Here, we are observing how users are influence by a manipulation of the three types of cognitive load: Germane, Extraneous, and Intrinsic. 
      Starting on this project as a CSU student included attending meetings as the design was crafted, and later running experiments with participants. 
      Once I graduated and began my transition to CU Boulder, I became very hands on the design of the virtual environment and the connection to brain signal measures. 
      I have made modifications to the virtual environment in Unity to allow for Lab Streaming Layer (LSL). 
      LSL enables event markers to be sent and received by both the fNIRS Aurora and EEG BrainVision applications to improve data analysis.`,
    },
    {
      title: "Interaction Cues Review",
      image: `${process.env.PUBLIC_URL}/images/Projects/CodingSheetVertical.PNG`,
      date: "August 2023 to Current",
      description: `For this project, another member and I are reading and decoding over 100 papers. 
      When you are in a virtual settings, there are several types of cues around you that help direct you to the necessary tasks. 
      There are a variety of cues and their appearence. Are they visual or audio? Are they attached to the user or some part of the environment? 
      What information do they provide you? What triggers the cue to appear? 
      These are all questions we want to address to help our meta-review of determining the most successful cues dependent on the context.`,
    },
    {
      title: "Forest Bathing: Beauty and Movement",
      image: `${process.env.PUBLIC_URL}/images/Projects/BeautyVertical.PNG`,
      date: "2023 to Current",
      description: `This was my primary project during the last two years of my undergraduate degree.
      This is essentially phase three of a project observing the characteristics of a virtual environment.
      By observing select characteristics and modifying each, we became familiar with how that characteristic influences user restorativeness.
      For this phase, we looked at beauty and movement in forest environments, as real forests have already demonstrated stress reducing effects.
      We found that the virtual 3D environment was not significantly different from the 2D virtual image, but was compared to the 2D virtual art and control condition.
      I have the opportunity to present this research experiment at ACM SAP August 2024 in Dublin Ireland.`,
    },
    {
      title: "Augmented Reality for Healthcare Workers",
      image: `${process.env.PUBLIC_URL}/images/Projects/BaseCamp.jpg`,
      date: "May 2023 to December 2023",
      description: `Innovative tools such as augmented reality used by healthcare workers could improve collaboration and task management in resuscitation cases. 
      We conducted a field study with medical students performing resuscitation scenarios with one HCW using a HoloLens device to observe whether our virtual environment improves time management. 
      We also focused on understanding how individuals interacted with the user interface of the AR device and virtual environment. 
      Despite challenges in data collection, our findings highlight influential user feedback and critical experiment designs for successful implementations of AR technology in future investigations.`,
    },
    {
      title: "Forest Bathing: Realism",
      image: `${process.env.PUBLIC_URL}/images/Projects/RealismVertical.PNG`,
      date: "2022 to 2023",
      description: `This is phase two of an ongoing project that I worked on with Rachel Masters during my undergrad.
      Phase one observed biomass where I got to be a participant, whereas, phase two took it a step further by observing realism.
      Realism is a characteristic of virtual enviornments that can influence user restorativeness.
      This project is my first published paper where I am featured as second author!`,
    },
    {
      title: "Virtual Reality Hackathon",
      image: `${process.env.PUBLIC_URL}/images/Projects/VRHackathon.jpg`,
      date: "November 2022",
      description: `One of the first events I participated in with members from the NUILab was CSU's VR Hackathon. 
      My group placed 2nd with our complex virtual enviornment focused on creating a mindfulness program to improve overall well-being and emotion regulation.
      Each participant in my group designed their own environment, mine being focused on controlled breathing, which were all connected in a home screen environment where users can pick which mindfulness task they wanted to partake in.
      During this project I spent several hours of a weekend getting to know my group and learning skills to work together in a unique environment.
      <a href="https://source.colostate.edu/virtual-reality-challenge-winners-announced/" target="_blank" rel="noopener noreferrer" = >Learn more here!</a>',`,
    },
    {
      title: "Judgment of Learning (Math Recall) Study",
      image: `${process.env.PUBLIC_URL}/images/Projects/BehavioralSciencesBuilding.jpg`,
      date: "January 2021 to December 2021",
      description: `While my first 6 months on this project was essentially getting adjusted to being a research assistant, the second half I got to help run experiments.
      This lab is where I first became CITI certified and learned the ins and outs of performing a research experiment.
      The study I ran participants on was pretty automated where I specifically around to get users started and to help with any problems that arose.
      I did work with the participants to collect consent and demongraphic forms, and to later direct them to the computer where the math task would take place.`,
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
