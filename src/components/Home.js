import '../CSS/Home.css'
// import React from 'react';
import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef, useState } from 'react';

function Home({ isDarkMode }) {
  // const videoRef = useRef(null);

  const darkVideoRef = useRef(null);
  const lightVideoRef = useRef(null);

  // const [delayedDarkMode, setDelayedDarkMode] = useState(isDarkMode);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     // 1.0 is normal, 0.5 is half speed, 0.25 is quarter speed
  //     videoRef.current.playbackRate = 0.2; 
  //   }
  // }, [isDarkMode]);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     // Delay for Dark Mode: allows the background to start turning black first
  //     const timer = setTimeout(() => {
  //       setDelayedDarkMode(true);
  //     }, 200); 
  //     return () => clearTimeout(timer);
  //   } else {
  //     // Instant for Light Mode: snaps back immediately
  //     setDelayedDarkMode(false);
  //   }
  // }, [isDarkMode]);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.2; 
  //   }
  // }, [delayedDarkMode]); // Run speed fix when the delayed video actually swaps

  useEffect(() => {
    // Apply slow-mo to both so they are ready
    if (darkVideoRef.current) darkVideoRef.current.playbackRate = 0.2;
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
        <source src={`${process.env.PUBLIC_URL}/videos/127204825-human-brain-rotating-animation.mp4`} type="video/mp4" />
      </video>


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
