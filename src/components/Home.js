import '../CSS/Home.css'
// import React from 'react';
import React, { useEffect, useRef } from 'react';

function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // 1.0 is normal, 0.5 is half speed, 0.25 is quarter speed
      videoRef.current.playbackRate = 0.2; 
    }
  }, []);

  return (
    <section id="home" className="section-home">
      <video 
        ref={videoRef} // Attached the ref here
        autoPlay 
        muted 
        loop 
        id="bg-video"
      >
        <source src={`${process.env.PUBLIC_URL}/videos/15179376-uhd_1920_1440_60fps.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    {/* <section id="home" className="section-home">
        <video autoPlay muted loop id="bg-video">
            {/* <source src={`${process.env.PUBLIC_URL}/videos/Untitled (3).mp4`} type="video/mp4" /> */}
            {/* <source src={`${process.env.PUBLIC_URL}/videos/061233651-eeg-patient-dementia-loopable.mp4`} type="video/mp4" /> */}
            {/* <source src={`${process.env.PUBLIC_URL}/videos/15179376-uhd_1920_1440_60fps.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video> */}
        
        <div className="content">
            <h2>JALYNN NICOLY</h2>
            <h4>Human-Computer Interaction Researcher</h4>
        </div>
    </section>
  );
}

export default Home;
