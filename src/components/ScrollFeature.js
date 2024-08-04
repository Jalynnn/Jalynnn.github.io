// src/components/ScrollFeature.js
import React, { useEffect } from 'react';

const ScrollFeature = () => {
  useEffect(() => {
    // Wait until the page is completely loaded
    const scrollToSection = (event) => {
      // Prevent the default action of the button
      event.preventDefault();

      // Which button was clicked
      const targetId = event.currentTarget.getAttribute('href');

      // Find target section with ID
      const targetElement = document.querySelector(targetId);

      // What is the distance between current position and target
      const offsetTop = targetElement.offsetTop - 60;

      window.scrollTo({
        // Scroll with calculated distance
        top: offsetTop,

        // Visually appealing!
        behavior: 'smooth',
      });
    };

    // Select all links that start with # - Recall CS253
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
      // For each link, add an event listener
      link.addEventListener('click', scrollToSection);
    }

    // Cleanup function
    return () => {
      for (const link of links) {
        link.removeEventListener('click', scrollToSection);
      }
    };
  }, []);

  return null;
};

export default ScrollFeature;
