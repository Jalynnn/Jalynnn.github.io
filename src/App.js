import './CSS/index.css'

import React from 'react';

import ScrollFeature from './components/ScrollFeature';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Publications from './components/Publications';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <ScrollFeature />

      <Header />
      <Home />
      <About />
      <Project />
      <Publications />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
