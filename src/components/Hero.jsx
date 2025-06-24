import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css'; // We'll create this next
import profilePic from '../assets/profilePic.jpg'
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="typewriter-container">
            <h1>Hi ,I'm a</h1>
          <Typewriter
            options={{
              strings: [
                'frontend developer',
                'ai-ml developer'
              ],
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 30,
              cursorClassName: 'typewriter-cursor'
            }}
          />
          
        </div>
        <div className="heroSubHeading">
            <p>I'm a Frontend Developer and AI/ML enthusiast who loves building intuitive user interfaces and smart, data-driven applications using React, Python, and deep learning. </p>
        </div>
        <button className="cta-button">
         Contact
        </button>
      </div>
      <div className="heroImg">
        <img src={profilePic} alt="img" />
      </div>
    </section>
  );
};

export default Hero;