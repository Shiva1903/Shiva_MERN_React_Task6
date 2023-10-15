import React from 'react';
import './About.css'; 
import img1 from '../images/pic.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
      <h2>About Me</h2>
        <img
          src={img1} 
          alt="Shiva picture"
          className="about-photo"
        />
        <p>
        I am Shiva. I study Computer Science and Engineering at VIT Chennai. I am very much interested in learning new technologies.
      </p>  
      </div>
    </section>
  );
}

export default About;
