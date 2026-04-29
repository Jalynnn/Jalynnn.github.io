import '../CSS/Home.css'
import React, { useEffect, useRef } from 'react';

function Home({ isDarkMode }) {
  // const videoRef = useRef(null);

  const darkVideoRef = useRef(null);
  const lightVideoRef = useRef(null);

  useEffect(() => {
    // Apply slow-mo to both so they are ready
    if (darkVideoRef.current) darkVideoRef.current.playbackRate = 0.1;
    if (lightVideoRef.current) lightVideoRef.current.playbackRate = 0.2;
  }, []);

  return (
    <section id="home" className="section-home">


      {/* DARK VIDEO */}
      <video 
        ref={darkVideoRef}
        autoPlay muted loop 
        className={`bg-video dark-vid-style ${isDarkMode ? 'visible' : 'hidden'}`}
      >
        <source src={`${process.env.PUBLIC_URL}/videos/15179376-uhd_1920_1440_60fps.mp4`} type="video/mp4" />
      </video>

      {/* LIGHT VIDEO (Different Class for Different Position) */}
      <video 
        ref={lightVideoRef}
        autoPlay muted loop 
        className={`bg-video light-vid-style ${!isDarkMode ? 'visible' : 'hidden'}`}
      >
        {/* <source src={`${process.env.PUBLIC_URL}/videos/127204825-human-brain-rotating-animation.mp4`} type="video/mp4" /> */}
        <source src={`${process.env.PUBLIC_URL}/videos/vecteezy_black-and-white-illustration-of-a-human-brain-top-view_61737158.mp4`} type="video/mp4" />
      </video>

      {/* LIGHT GIF */}
      {/* <img 
        src={`${process.env.PUBLIC_URL}/videos/gif-dribbb.gif`} 
        alt="Brain Animation"
        className={`bg-video light-vid-style ${!isDarkMode ? 'visible' : 'hidden'}`}
      /> */}


      {/* <video 
        ref={videoRef} // Attached the ref here
        // key={isDarkMode ? "dark-video" : "light-video"}
        key={delayedDarkMode ? "dark-video" : "light-video"}
        autoPlay 
        muted 
        loop 
        id="bg-video"
      >
        <source 
          src={delayedDarkMode // isDarkMode 
            ? `${process.env.PUBLIC_URL}/videos/15179376-uhd_1920_1440_60fps.mp4` 
            : `${process.env.PUBLIC_URL}/videos/127204825-human-brain-rotating-animation.mp4` 
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}




    {/* <section id="home" className="section-home">
        <video autoPlay muted loop id="bg-video">
            {/* <source src={`${process.env.PUBLIC_URL}/videos/Untitled (3).mp4`} type="video/mp4" /> */}
            {/* <source src={`${process.env.PUBLIC_URL}/videos/061233651-eeg-patient-dementia-loopable.mp4`} type="video/mp4" /> */}
            {/* <source src={`${process.env.PUBLIC_URL}/videos/15179376-uhd_1920_1440_60fps.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        


        <div className="content">
            <h2>JALYNN BLU NICOLY</h2>
            <h4>Human-Computer Interaction Researcher</h4>
            {/* <h4>Ph.D. Student at University of Colorado Boulder</h4> */}
        </div>
    </section>
  );
}

export default Home;
