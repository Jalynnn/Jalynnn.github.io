import '../CSS/Home.css'
import React from 'react';

function Home() {
  return (
    <section id="home" className="section-home">
        <video autoPlay muted loop id="bg-video">
            <source src={`${process.env.PUBLIC_URL}/videos/Untitled (3).mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="content">
            <h2>JALYNN NICOLY</h2>
        </div>
    </section>
  );
}

export default Home;
