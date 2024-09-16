import './CSS/index.css'

import React from 'react';

import { Helmet } from "react-helmet";

import ScrollFeature from './components/ScrollFeature';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Publications from './components/Publications';
// import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Helmet>
        <title>Jalynn Nicoly's Website</title>
        <meta name="description" content="Explore Jalynn Nicoly's website featuring current publications, ongoing projects, and a contact form." />
        <meta name="keywords" content="Jalynn Nicoly, website, portfolio, web development, human-computer interaction, research assistant, projects, React" />
        <meta name="author" content="Jalynn Nicoly" />
      </Helmet>

      <ScrollFeature />

      <Header />
      <Home />
      <About />
      <Publications />
      <Project />
      {/* <Gallery /> */}
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
