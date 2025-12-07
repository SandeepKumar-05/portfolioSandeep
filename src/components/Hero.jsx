import React from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Hero.css'; // We'll create this next
import profilePic from '../assets/profilePic.jpg'
const Hero = () => {
  return (
    <section className="heroSection" id='home'>
      <div className="heroContent">
            <div className="typewriterContainer">
                <h1>Hi ,I'm a</h1>
            <Typewriter
                options={{
                strings: [
                    'Frontend Developer',
                    'AI-ML Developer',
                    'Data Analytics'
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
                cursorClassName: 'typewriter-cursor'
                }}
            />
            
            </div>
             <div className="heroSubDiv">
            <div className="heroSubHeading">
                    <p>I'm a Frontend Developer and AI/ML enthusiast who loves building intuitive user interfaces and smart, data-driven applications using React, Python, and deep learning. </p>
            </div>
            <button className="cntButton">
                Contact
            </button>
        </div>
        </div>
       
        <div className="heroImg">
            <img src={profilePic} alt="img" />
        </div>
    </section>
  );
};

export default Hero;